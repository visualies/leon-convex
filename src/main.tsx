import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./app.tsx";
import "./index.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
const root = createRoot(document.getElementById("root")!);

if (!convexUrl) {
  console.warn("VITE_CONVEX_URL is missing. Run `npm run convex:dev` first.");
} else {
  const client = new ConvexReactClient(convexUrl);

  root.render(
    <StrictMode>
      <ConvexProvider client={client}>
        <App />
      </ConvexProvider>
    </StrictMode>,
  );
}
