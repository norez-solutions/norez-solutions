"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  // The year never changes without a page reload, so there's nothing to
  // subscribe to -- this only exists to satisfy useSyncExternalStore's API.
  return () => {};
}

function getClientYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return null;
}

// This page is statically generated, so a plain new Date().getFullYear() in
// a server component would freeze at whatever year the site was last
// deployed in. useSyncExternalStore reads the client's own clock after
// hydration instead, rendering null (matching the server) until then, so
// there's no server/client mismatch.
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <>{year}</>;
}
