"use server";

import Hero from "@/components/hero";
import Contact from "@/components/contact";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Contact />
    </div>
  );
}
