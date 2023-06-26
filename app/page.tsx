import { Inter } from "next/font/google";

import type { Metadata } from "next";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Similirity API to practice TS",
};

export default function Home() {
  return (
    // relative positions it relative to other elements (absolute allows you to place it exactly where you want)
    // h-screen - the height of the screen (100vh)
    // items-center - across the cross axis (row here)
    // justify center - across the main axis (row here)
    // overflow-x-hidden - cut off all context in this element that overflows the across x axis
    // container sets the maxwidth to match the min width of the current breakpoint
    // mx-auto - centers a container
    <main className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity
          </LargeHeading>
          <Paragraph>
            Check two bits of text to check how similar they are with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-2/3 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
