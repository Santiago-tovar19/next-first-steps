import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO description",
  keywords: ["AboutPage", "Santiago", "informacion", "..."],
};

export default function AboutPage() {
  return <h2 className="text-7xl mt-4">AboutPage</h2>;
}
