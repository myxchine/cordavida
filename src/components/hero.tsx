"use server";

import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  return (
    <section className="flex flex-col items-center justify-center p-4 space-y-12 pb-[48px] md:py-32  md:flex-row md:space-x-16 md:space-y-0 max-w-[1200px] mx-auto">
      <Image
        //src="/placeholder.svg"
        //src="/cordovia-2.jpeg"
        //src="/cordavida-3.webp"
        src="/cordavida-4.jpeg"
        width={100}
        height={100}
        priority={true}
        alt="Hero"
        className="mx-auto h-[260px] md:h-[400px] w-full overflow-hidden rounded-xl object-cover   blur"
      />
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4 ">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
            Elevate Your Brand with{" "}
            <span className="text-[#DA0785] text-4xl sm:text-5xl xl:text-6xl ">
              Cordavida
            </span>
            .
          </h1>
          <p className="text text-black/60 max-w-[600px] md:text-xl">
            Cordavida is a design and large format printing company dedicated to
            crafting exceptional visual experiences for our clients.
          </p>
        </section>

        <section className="flex flex-row gap-2 w-full">
          <Link href="/services" className="flex w-full max-w-[200px]">
            <button className="bg-black border border-black text-sm font-medium rounded-md  text-white p-2 text-center px-4 w-full tracking-tighter ">
              Our Services
            </button>
          </Link>
          <Link href="/contact" className="flex w-full max-w-[200px]">
            <button className="bg-white border border-gray-300 text-sm font-medium rounded-md text-black p-2 text-center px-4 w-full tracking-tighter ">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
}
