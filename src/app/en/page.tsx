"use server";

import Hero from "@/components/main/hero";
import Contact from "@/components/main/contact";
import Portfolio from "@/components/main/portfolio";
import Showcase from "@/components/main/showcase";

export default async function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Portfolio />
      <Contact />
    </>
  );
}
