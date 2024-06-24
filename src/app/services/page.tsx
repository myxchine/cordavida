export default function Services() {
  return (
    <div className="container pt-4 px-4 md:px-6 pb-[48px] md:pb-32 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center space-y-8 text-center w-full">
        <div className="space-y-2 text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Services
          </h2>
          <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cordavida is a design and large format printing company dedicated to
            crafting exceptional visual experiences for our clients.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 border border-black/10 shadow rounded-lg p-4">
              <h3 className="text-xl font-bold tracking-tighter">Design</h3>
              <p className="text-black/60 max-w-[500px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating visually stunning designs for
                businesses and individuals. Our team of skilled designers brings
                a unique perspective to every project, ensuring that your vision
                is brought to life.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-black/10 shadow rounded-lg p-4">
              <h3 className="text-xl font-bold tracking-tighter">Printing</h3>
              <p className="text-black/60 max-w-[500px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
