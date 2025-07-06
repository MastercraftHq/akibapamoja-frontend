### 📁 Project Structure Overview (`project-structure.md`)

```markdown
# 🗂️ Project Structure - Akiba Pamoja

This document explains the structure of the Akiba Pamoja React project. It is designed for clarity, scalability, and team collaboration.

```

src/
├── App.jsx                # Root component for the app
├── main.jsx               # Entry point rendered by Vite
├── App.css, index.css     # Global and base styles
│
├── assets/                # Images, icons, and static assets
│
├── components/            # Reusable UI components (e.g., Button, Card)
│
├── pages/                 # Top-level route pages (e.g., Dashboard, Login)
│
├── layouts/               # Layouts like MainLayout, AuthLayout
│
├── routes/                # Centralized route configuration
│
├── context/               # React Context providers (e.g., AuthProvider)
│
├── features/              # Feature-specific logic (e.g., auth, contributions)
│
├── services/              # API calls and integration (e.g., axios wrappers)
│
├── hooks/                 # Custom React hooks (e.g., useAuth, useFetch)
│
└── .env                   # Environment variables (not committed to Git)

````

---

### Notes

- Keep files modular and meaningful — each feature (like authentication or savings) should live in its own folder under `features/`.
- Use `services/` for external requests like REST APIs or Supabase functions.
- Stick to consistent naming conventions (e.g., camelCase).
- Avoid storing logic in `App.jsx` — keep it lean and delegate to `routes/`.

---

