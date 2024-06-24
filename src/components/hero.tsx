import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center p-4 space-y-8 pb-[48px]">
      <Image
        //src="/placeholder.svg"
        src="/cordovia-2.jpeg"
        width={400}
        height={400}
        priority
        alt="Hero"
        className="mx-auto h-[300px] w-full overflow-hidden rounded-xl object-cover sm:w-full lg:order-last blur"
      />
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-2 ">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
            Elevate Your Brand with{" "}
            <span className="text-[#DA0785]">Cordavida</span>.
          </h1>
          <p className="text text-black/60 max-w-[600px] md:text-xl">
            Cordavida is a design and large format printing company dedicated to
            crafting exceptional visual experiences for our clients.
          </p>
        </section>

        <section className="flex flex-row gap-2 ">
          <button className="bg-black border border-black text-sm font-medium rounded-md  text-white p-2 text-center px-4 w-full tracking-tighter max-w-[200px]">
            Our Services
          </button>
          <button className="bg-white border border-gray-300 text-sm font-medium rounded-md text-black p-2 text-center px-4 w-full tracking-tighter max-w-[200px]">
            Contact Us
          </button>
        </section>
      </div>
    </section>
  );
}
