"use client";

import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = async () => {
    console.log("Processing order...");

    // Simulate delay (e.g., API call)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Order placed");
      }, 2000);
    });

    console.log("Order placed successfully");

    // Redirect to home page after order
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default OrderProduct;
