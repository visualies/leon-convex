# Leon Convex Todo

This is a very small Vite + React + Convex todo app for teaching beginners.

Frontend hosting: Cloudflare Workers Static Assets
Backend: Convex

## What it shows

- A single `useState` value for the input
- A Convex query to load todos
- A Convex mutation to add a todo
- A simple list rendered with `map`

## Files to look at

- [src/app.tsx](/Users/luca.privat/Projects/leon-convex/src/app.tsx)
- [convex/todos.ts](/Users/luca.privat/Projects/leon-convex/convex/todos.ts)
- [convex/schema.ts](/Users/luca.privat/Projects/leon-convex/convex/schema.ts)

## Run it

1. Start Convex:
   ```bash
   npm run convex:dev
   ```
2. In another terminal, start the app:
   ```bash
   npm run dev
   ```

## Deploy the frontend to Cloudflare

This project is set up so only the frontend is deployed to Cloudflare. The app still talks to your Convex backend using `VITE_CONVEX_URL`.

1. Make sure `.env.local` contains your Convex URL.
2. Log in to Cloudflare if needed:
   ```bash
   npx wrangler login
   ```
3. Deploy:
   ```bash
   npm run cf:deploy
   ```

## Notes

- `convex dev` creates `.env.local` with `VITE_CONVEX_URL`.
- `convex dev` also generates `convex/_generated/api`, which `src/app.tsx` imports.
- The todo app starts empty.
- This project keeps the code intentionally minimal.
# leon-convex
