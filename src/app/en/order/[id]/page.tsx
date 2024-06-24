"use server";
import { getOrder } from "@/server/db/queries";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await getOrder(params.id);
  console.log(order);

  if (!order) {
    return <div>Rservation not found</div>;
  }

  return (
    <main className="flex flex-col items-center w-full justify-center fixed full-screen p-12 ">
      <div className=" rounded-lg p-8 shadow-md space-y-6 w-full max-w-lg   bg-white bg-opacity-30">
        <div className="w-full space-y-2">
          <h1 className="text-2xl font-bold uppercase">{order.name}'s order</h1>
        </div>
        <div className="w-full space-y-2">
          <h2 className="text-xl font-bold">Details</h2>
          <p>{order.message}</p>
        </div>
      </div>
    </main>
  );
}
