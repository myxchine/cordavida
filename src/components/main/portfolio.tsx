import Link from "next/link";
import Image from "next/image";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row p-4 space-y-12  pt-[48px] pb-[48px] md:py-32 md:px-12 md:gap-16 max-w-[1200px] mx-auto ">
      <Image
        src="/images/cordavida-1.png"
        width={100}
        height={100}
        priority={true}
        alt="Hero"
        className="mx-auto aspect-square w-full overflow-hidden rounded-xl object-cover  blur-sm md:order-last"
      />
      <div className="pb-[48px] space-y-8 ">
        <section className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
            Showcasing <span className="text-[#DA0785]  ">Our</span> Work
          </h1>
          <p className="text text-black/60 max-w-[600px] md:text-xl">
            Explore a selection of our recent large format printing and design
            projects, showcasing our expertise and commitment to quality.
          </p>
        </section>
        <section className="flex f w-full justify-center items-center ">
          <Link href="/en/portfolio" className="flex w-full max-w-[500px]">
            <button className="bg-black text-white border border-black text-sm font-medium rounded-md text-black p-2 text-center px-4 w-full ">
              Our Portfolio
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
}
