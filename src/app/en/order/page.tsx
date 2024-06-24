import OrderForm from "@/server/order/form";

const ReservationPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full p-8">
      <div className=" rounded-lg p-8 shadow-md space-y-6 w-full max-w-lg   bg-white bg-opacity-30">
        <h1 className="text-xl font-bold uppercase">Make your order</h1>
        <OrderForm />
      </div>
    </main>
  );
};

export default ReservationPage;
