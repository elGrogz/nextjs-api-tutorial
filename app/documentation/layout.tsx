import { ReactNode } from "react";

// automatically renders thanks for next paths

export default function Layout({ children }: { children: ReactNode }) {
  return <section className="pt-20">{children}</section>;
}
