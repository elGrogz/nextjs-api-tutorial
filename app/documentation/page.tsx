import { FC } from "react";

import type { Metadata } from "next";
import LargeHeading from "@/ui/LargeHeading";
import Layout from "./layout";

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Documentation",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto mt-12">
        <div className="flex flex-col items-center gap-6">
          <LargeHeading>Documentation</LargeHeading>
        </div>
      </div>
    </Layout>
  );
};

export default page;
