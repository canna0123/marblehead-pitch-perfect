import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-navy-deep text-chalk flex items-center justify-center px-6">
      <div className="max-w-lg">
        <p className="mono text-xs tracking-[0.3em] text-kit uppercase">Error 404 · Offside</p>
        <h1 className="display text-[clamp(4rem,14vw,10rem)] mt-4">Out of Play</h1>
        <p className="text-sand/70 mt-4 text-lg">
          That page has left the pitch. Head back to the match centre.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-kit text-chalk px-6 py-3 mono uppercase tracking-widest text-sm hover:bg-kit-hot transition-colors"
        >
          ← Return to Clubhouse
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-navy-deep text-chalk flex items-center justify-center px-6">
      <div className="max-w-lg">
        <p className="mono text-xs tracking-[0.3em] text-kit uppercase">Match Suspended</p>
        <h1 className="display text-6xl mt-4">Something went sideways.</h1>
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-kit text-chalk px-6 py-3 mono uppercase tracking-widest text-sm hover:bg-kit-hot transition-colors"
          >
            Restart the Half
          </button>
          <a href="/" className="border border-sand/30 px-6 py-3 mono uppercase tracking-widest text-sm hover:bg-sand/10 transition-colors">
            Clubhouse
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marblehead Football Club · MHD FC" },
      { name: "description", content: "Marblehead Football Club (MHD FC) — a nonprofit soccer club serving the North Shore of Massachusetts. Partnering with Lynn Youth Soccer to expand access to the game." },
      { property: "og:title", content: "Marblehead Football Club" },
      { property: "og:description", content: "Nonprofit soccer club. North Shore heritage. Community mission." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MHD FC" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
