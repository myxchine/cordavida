export default function Showcase() {
  return (
    <section className="flex flex-col items-center justify-start p-4  pt-[48px] pb-[48px] md:py-32   max-w-[1200px] mx-auto bg-black/5">
      <div className="flex p-2 mb-2">
        <p className="p-1 px-2  bg-black/5 rounded-md text-sm text-black/70">
          Our Services
        </p>
      </div>
      <div className="pb-[48px] space-y-12 ">
        <section className="flex flex-col gap-3 text-center max-w-[600px] ">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
            Comprehensive Printing Solutions
          </h1>
          <p className="text hidden text-black/60 max-w-[600px] md:text-xl">
            From large format printing to custom design, we offer a wide range
            of services to meet all your business needs.
          </p>
        </section>
        <section className="flex  w-full justify-center items-center ">
          <div className="flex flex-col gap-3 text-left">
            <h3 className="text-lg font-bold">Large Format Printing</h3>
            <p className=" text text-black/60 max-w-[600px] md:text-xl">
              Banners, posters, vehicle wraps, and more. We use high-quality
              materials and state-of-the-art equipment to deliver stunning
              results.
            </p>
          </div>
        </section>
        <section className="flex  w-full justify-center items-center ">
          <div className="flex flex-col gap-3 text-left">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className=" text text-black/60 max-w-[600px] md:text-xl">
              Our team of talented designers can create custom graphics, logos,
              and marketing materials to elevate your brand.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
