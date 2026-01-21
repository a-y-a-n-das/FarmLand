# FarmLand 🌾

A simple e-commerce webapp where you can buy fresh produce directly from farms. Made this for learning full-stack development with React and Express.

## What it does

- Browse different farm products with search and filters
- Add items to cart and place orders
- User authentication (signin/signup)
- Order history to track your purchases
- Clean UI with proper categories

## Tech Stack

**Frontend:**
- React with TypeScript
- Vite for faster builds
- Recoil for state management
- Tailwind CSS for styling

**Backend:**
- Express.js
- Prisma ORM
- PostgreSQL database

## How to run

1. Clone the repo
```bash
git clone <your-repo-url>
cd FarmLand
```

2. Install dependencies
```bash
npm install
cd backend && npm install
```

3. Setup database
```bash
cd backend
npx prisma migrate dev
```

4. Run the app
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

Frontend runs on `http://localhost:5173`
Backend runs on `http://localhost:3000`

## Features

- Shop page with all products
- Cart management (add, remove, update quantity)
- User authentication
- Order placement and history
- Responsive design

## Future Plans

- Payment integration
- Admin dashboard for farmers
- Rating and reviews
- Delivery tracking

---

Made with ❤️ as a learning project
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
