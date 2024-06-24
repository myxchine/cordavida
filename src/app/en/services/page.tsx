export default function Services() {
  return (
    <div className="container pt-4 px-4 md:px-6 pb-[48px] lg:py-32 md:pb-32 flex flex-col items-center justify-center w-full mx-auto">
      <div className="flex flex-col items-center justify-start space-y-16 max-w-2xl   w-full">
        <div className="space-y-4 text-left w-full">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl  font-bold ">
            Our <span className="text-[#DA0785]  ">Services</span>
          </h2>
          <p className=" text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cordavida is a design and large format printing company dedicated to
            crafting exceptional visual experiences for our clients.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl  space-y-12 text-center">
          <div className="flex flex-col gap-8 md:gap-12 ">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold tracking-tighter">Design</h3>
              <p className="text-black/60 max-w-[500px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating visually stunning designs for
                businesses and individuals. Our team of skilled designers brings
                a unique perspective to every project, ensuring that your vision
                is brought to life.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="text-xl font-bold tracking-tighter">Printing</h3>
              <p className="text-black/60 max-w-[500px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Cordavida, we take pride in our printing services. We use the
                latest technology to create high-quality prints that meet your
                exact specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
