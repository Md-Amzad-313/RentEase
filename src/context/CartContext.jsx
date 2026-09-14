import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

/**
 * CartProvider
 * Provides frontend-only cart state to the entire app.
 * No backend, no localStorage — pure React state.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  /**
   * Add item or increment quantity if same product + duration already exists.
   * @param {Object} item - { productId, name, image, category, monthlyRent, securityDeposit, duration }
   */
  const addItem = useCallback((item) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === item.productId && i.duration === item.duration
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId && i.duration === item.duration
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  /** Remove a specific line (product + duration combo). */
  const removeItem = useCallback((productId, duration) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.duration === duration))
    );
  }, []);

  /** Update quantity for a specific line. Minimum is 1. */
  const updateQuantity = useCallback((productId, duration, qty) => {
    const safeQty = Math.max(1, qty);
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.duration === duration
          ? { ...i, quantity: safeQty }
          : i
      )
    );
  }, []);

  /** Remove all items after confirmation. */
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Derived values memoised for performance
  const totalItemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const monthlySubtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.monthlyRent * i.quantity, 0),
    [items]
  );

  const depositTotal = useMemo(
    () => items.reduce((sum, i) => sum + i.securityDeposit * i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItemCount,
        monthlySubtotal,
        depositTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/** Convenience hook — throws if used outside provider. */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
