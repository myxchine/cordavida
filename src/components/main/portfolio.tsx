import Link from "next/link";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center justify-center p-4  pt-[48px] pb-[48px] md:py-32   max-w-[1200px] mx-auto ">
      <div className="pb-[48px] space-y-8 ">
        <section className="flex flex-col gap-3 text-center">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter">
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
