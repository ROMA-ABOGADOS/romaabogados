"use client";

import { useEffect } from "react";

/**
 * useScrollSlug — watches all <section id="..."> elements and updates
 * the browser URL (via history.replaceState) as the user scrolls,
 * so the URL bar shows the current section slug without a full page reload.
 *
 * Usage (add once per page, inside a client component):
 *   import { useScrollSlug } from "@/hooks/use-scroll-slug";
 *   useScrollSlug();   // that's it — zero arguments
 */

export function useScrollSlug() {
  // Disabled: Calling window.history.replaceState during scroll wipes out Next.js 16
  // internal navigation state (__NA / __PRIVATE_NEXTJS_INTERNALS_TREE), causing Link navigation
  // to freeze or fail to transition between routes.
}
