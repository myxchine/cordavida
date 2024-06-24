"use server";

import { db } from ".";
import { Order } from "@/server/types";
import { count, sql } from "drizzle-orm";
import { orders } from "./schema";

export async function getOrders(limit: number): Promise<Order[]> {
  console.log("Fetching orders...");
  try {
    const result = await db.query.orders.findMany({
      limit: limit,
    });

    console.log("Orders fetched!");

    // Map the database result to match the Order interface
    const ordersList: Order[] = result.map((order) => ({
      id: order.id,
      name: order.name,
      email: order.email,
      message: order.message,
      createdAt: order.created,
      updatedAt: order.updated,
    }));

    return ordersList;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}

export async function getOrder(id: string): Promise<Order> {
  const result = await db.query.orders.findFirst({
    where: (orders, { eq }) => eq(orders.id, id),
  });

  if (!result) {
    throw new Error(`Order with id ${id} not found`);
  }

  // Map the database result to match the Order interface
  const order: Order = {
    id: result.id,
    name: result.name,
    email: result.email,
    message: result.message,
    createdAt: result.created,
    updatedAt: result.updated,
  };

  return order;
}

type Result = {
  count: number;
}[];

export async function countOrders(): Promise<Result> {
  const result = await db.select({ count: count() }).from(orders);

  return result as Result;
}
