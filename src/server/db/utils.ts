"use server";

import { db } from ".";
import { orders } from "./schema";
import { eq } from "drizzle-orm";

export const newOrder = async (data: any) => {
  const result = await db.insert(orders).values(data);
  return result;
};

export const deleteOrder = async (id: string) => {
  const result = await db.delete(orders).where(eq(orders.id, id));
  return result;
};

export const updateOrder = async (id: string, data: any) => {
  const result = await db.update(orders).set(data).where(eq(orders.id, id));
  return result;
};
