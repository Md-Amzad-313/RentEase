# RentEase – Furniture & Appliance Rental Platform

> **Live better. Own less.**

RentEase is a modern monthly rental platform where users can rent premium furniture and home appliances on flexible monthly terms rather than purchasing them.

---

## 📌 Project Status: Part 1 Complete (Frontend Foundation)

This repository currently contains the **Frontend Project Foundation** (Part 1). In accordance with the development roadmap:
- ✅ **React + Vite** setup with pure JavaScript (no TypeScript).
- ✅ **Tailwind CSS** design system configured with deep indigo/blue-violet brand tones, clean neutrals, and semantic state colors.
- ✅ **Lucide React** integration for iconography.
- ✅ **React Router DOM** centralized routing setup.
- ✅ **Reusable UI Component Library**: `Button`, `Card`, `Badge`, `Input`, `SectionHeading`.
- ✅ **Responsive Layout Structure**: `Navbar` (with desktop links & mobile drawer), `Footer` (brand values, category links, legal support), and `PublicLayout`.
- ✅ **Route Placeholders**: Centralized `AppRoutes.jsx` covering 11 routes with the reusable `PlaceholderPage` component.
- ⏳ **Backend Services & Business Logic**: Not included in this phase. Database, APIs, authentication, payments, cart storage, and admin dashboards will be introduced in subsequent parts.

---

## 🛠️ Technology Stack

- **Library**: React 18
- **Bundler / Dev Server**: Vite 6
- **Styling**: Tailwind CSS 3 with PostCSS and Autoprefixer
- **Navigation**: React Router DOM 6
- **Icons**: Lucide React
- **Language**: JavaScript (ES Modules, JSX)

---

## 📁 Project Structure

```text
rentease/
│
├── public/
│   └── favicon.svg          # RentEase brand favicon
│
├── src/
│   ├── assets/              # Static assets and graphics
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── PlaceholderPage.jsx   # Generic placeholder page for upcoming features
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            # Responsive header with mobile drawer
│   │   │   └── Footer.jsx            # Multi-column responsive footer
│   │   └── ui/
│   │       ├── Button.jsx            # Primary, secondary, outline, ghost variants
│   │       ├── Card.jsx              # Elevated container with subcomponents
│   │       ├── Badge.jsx             # Category & status tags
│   │       ├── Input.jsx             # Accessible form input foundation
│   │       └── SectionHeading.jsx    # Section header typography
│   │
│   ├── context/             # Global state & contexts (future parts)
│   ├── data/
│   │   └── index.js         # Minimal platform metadata
│   ├── hooks/               # Custom reusable hooks (future parts)
│   ├── layouts/
│   │   └── PublicLayout.jsx # Public wrapper (Navbar + Outlet + Footer)
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Clean hero introduction & CTAs
│   │   ├── Products.jsx     # Product catalog placeholder
│   │   ├── Categories.jsx   # Rental categories placeholder
│   │   ├── About.jsx        # Company mission placeholder
│   │   ├── Contact.jsx      # Contact & support placeholder
│   │   ├── Login.jsx        # Sign-in placeholder
│   │   ├── Register.jsx     # Registration placeholder
│   │   ├── Cart.jsx         # Rental cart placeholder
│   │   ├── Checkout.jsx     # Checkout flow placeholder
│   │   ├── Dashboard.jsx    # User portal placeholder
│   │   ├── Admin.jsx        # Admin portal placeholder
│   │   └── NotFound.jsx     # 404 error page
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx    # Centralized routing definitions
│   │
│   ├── services/            # API integration layer (future parts)
│   ├── utils/
│   │   └── index.js         # Formatting and styling helpers
│   │
│   ├── App.jsx              # Main App entry mounting AppRoutes
│   ├── index.css            # Tailwind directives and base typography
│   └── main.jsx             # DOM mounting entry
│
├── index.html               # HTML5 template with Inter font
├── package.json             # Project dependencies & scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Custom design tokens & theme
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; verified on v22.17.0)
- npm (v9 or higher recommended; verified on 11.7.0)

### Installation
From within the `rentease` directory:

```bash
npm install
```

### Running the Development Server
Start the local Vite development server:

```bash
npm run dev
```

The application will be available at:
```
http://localhost:5173
```

### Building for Production
Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧭 Configured Routes

| Route | Page | Description |
|---|---|---|
| `/` | `Home` | Brand hero screen with tagline, description, and CTAs |
| `/products` | `Products` | Catalog placeholder for furniture & appliances |
| `/categories` | `Categories` | Room & category browser placeholder |
| `/about` | `About` | Brand story and rental value propositions placeholder |
| `/contact` | `Contact` | Customer support & inquiry placeholder |
| `/login` | `Login` | User authentication placeholder |
| `/register` | `Register` | User account creation placeholder |
| `/cart` | `Cart` | Rental cart and tenure selection placeholder |
| `/checkout` | `Checkout` | Order review and address entry placeholder |
| `/dashboard` | `Dashboard` | Customer subscription management placeholder |
| `/admin` | `Admin` | Platform inventory & order management placeholder |
| `*` | `NotFound` | Friendly 404 fallback page |

---

## 🔮 Upcoming in Part 2

- Complete landing page with interactive hero, testimonials, and category showcases
- Interactive product catalog with filtering, sorting, and tenure pricing calculators
- Product detail pages with image galleries and specification matrices
- Cart state management with refundable security deposit calculations
