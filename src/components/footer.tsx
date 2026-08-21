export function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)] px-6 py-10 text-center text-sm text-foreground-muted">
      © {new Date().getFullYear()} Norez Solutions
    </footer>
  );
}
