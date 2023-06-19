"use client"; // providing content to components from a provider requires client components, not server ones

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

// the providers takes in one prop which is children with a type of ReactNode
// or const Providers: FC<ProvidersProps> = ({ children }) => { (and then declare the props)
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    // It first wraps the content in a theme provider
    // It will use class names coming from tailwind
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* This makes the app able to use auth functions to give or deny access to users */}
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
