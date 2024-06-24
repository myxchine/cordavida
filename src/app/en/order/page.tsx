import OrderForm from "@/server/order/form";

const ReservationPage: React.FC = () => {
  return (
    <div className="container pt-4 px-4 md:px-6 pb-[48px] lg:py-32 md:pb-32 flex flex-col items-center justify-center w-full mx-auto">
      <div className="  space-y-6 w-full max-w-2xl   bg-white text-left ">
        <div className="gap-2 flex flex-col w-full">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl  font-bold ">
            Create <span className="text-[#DA0785]  ">Your</span> Order
          </h1>
          <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let us know what you are looking for and we'll get back in touch as
            soon as possible.
          </p>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};

export default ReservationPage;
