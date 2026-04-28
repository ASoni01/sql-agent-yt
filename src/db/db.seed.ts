import { db } from "./db";
import { productsTable, salesTable } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // साफ करने के लिए (optional but useful)
  await db.delete(salesTable);
  await db.delete(productsTable);

  // ---- PRODUCTS (6) ----
  const products = await db
    .insert(productsTable)
    .values([
      { name: "iPhone 15", category: "Electronics", price: 800, stock: 50 },
      { name: "Samsung TV", category: "Electronics", price: 1200, stock: 30 },
      { name: "Nike Shoes", category: "Fashion", price: 120, stock: 100 },
      { name: "T-Shirt", category: "Fashion", price: 25, stock: 200 },
      { name: "Coffee Mug", category: "Home", price: 10, stock: 150 },
      { name: "Office Chair", category: "Furniture", price: 150, stock: 40 },
    ])
    .returning();

  console.log("✅ Products inserted");

  // shortcut
  const [p1, p2, p3, p4, p5, p6] = products;

  // ---- SALES (30 fixed records) ----
  const sales = [
    { product_id: p1.id, quantity: 1, total_amount: 800, customer_name: "Amit", region: "North" },
    { product_id: p2.id, quantity: 1, total_amount: 1200, customer_name: "Rahul", region: "South" },
    { product_id: p3.id, quantity: 2, total_amount: 240, customer_name: "Priya", region: "East" },
    { product_id: p4.id, quantity: 3, total_amount: 75, customer_name: "Sneha", region: "West" },
    { product_id: p5.id, quantity: 5, total_amount: 50, customer_name: "Arjun", region: "North" },
    { product_id: p6.id, quantity: 1, total_amount: 150, customer_name: "Neha", region: "South" },

    { product_id: p1.id, quantity: 2, total_amount: 1600, customer_name: "Amit", region: "East" },
    { product_id: p2.id, quantity: 1, total_amount: 1200, customer_name: "Rahul", region: "West" },
    { product_id: p3.id, quantity: 1, total_amount: 120, customer_name: "Priya", region: "North" },
    { product_id: p4.id, quantity: 4, total_amount: 100, customer_name: "Sneha", region: "South" },
    { product_id: p5.id, quantity: 2, total_amount: 20, customer_name: "Arjun", region: "East" },
    { product_id: p6.id, quantity: 2, total_amount: 300, customer_name: "Neha", region: "West" },

    { product_id: p1.id, quantity: 1, total_amount: 800, customer_name: "Amit", region: "South" },
    { product_id: p2.id, quantity: 2, total_amount: 2400, customer_name: "Rahul", region: "North" },
    { product_id: p3.id, quantity: 3, total_amount: 360, customer_name: "Priya", region: "West" },
    { product_id: p4.id, quantity: 2, total_amount: 50, customer_name: "Sneha", region: "East" },
    { product_id: p5.id, quantity: 6, total_amount: 60, customer_name: "Arjun", region: "South" },
    { product_id: p6.id, quantity: 1, total_amount: 150, customer_name: "Neha", region: "North" },

    { product_id: p1.id, quantity: 3, total_amount: 2400, customer_name: "Amit", region: "West" },
    { product_id: p2.id, quantity: 1, total_amount: 1200, customer_name: "Rahul", region: "East" },
    { product_id: p3.id, quantity: 2, total_amount: 240, customer_name: "Priya", region: "South" },
    { product_id: p4.id, quantity: 5, total_amount: 125, customer_name: "Sneha", region: "North" },
    { product_id: p5.id, quantity: 3, total_amount: 30, customer_name: "Arjun", region: "West" },
    { product_id: p6.id, quantity: 2, total_amount: 300, customer_name: "Neha", region: "East" },

    { product_id: p1.id, quantity: 1, total_amount: 800, customer_name: "Amit", region: "North" },
    { product_id: p2.id, quantity: 3, total_amount: 3600, customer_name: "Rahul", region: "South" },
    { product_id: p3.id, quantity: 1, total_amount: 120, customer_name: "Priya", region: "East" },
    { product_id: p4.id, quantity: 2, total_amount: 50, customer_name: "Sneha", region: "West" },
    { product_id: p5.id, quantity: 4, total_amount: 40, customer_name: "Arjun", region: "North" },
    { product_id: p6.id, quantity: 1, total_amount: 150, customer_name: "Neha", region: "South" },
  ];

  await db.insert(salesTable).values(sales);

  console.log("✅ Inserted 30 sales records");
  console.log("🎉 Seeding done!");
}

seed().catch(console.error);