import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

// async because it's a server side component
const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getServerSession();

  // fixed so it stays relative to the viewport
  // z - sets the zindex to 5- so it's further forward than other elements
  // top, left and right 0 - no gaps between it and the edge of the viewport (or parent component?)
  // fixed height of 20
  // border on the bottom only
  // small amount of shadow on the underside
  // align items - across the main axis, in this case row
  // justify betwee - across the main axis ensuring equal spacing between each component
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variants: "link" })}>
          Text Similarity
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variants: ["ghost"] })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                className={buttonVariants({ variants: "ghost" })}
                href="/dashboard"
              ></Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
