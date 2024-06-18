import React from "react";
import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <div>
      <Link to="/">
        <h1>Digically</h1>
      </Link>
      <h3>Thanks for placing order </h3>
    </div>
  );
}

export default OrderCompleted;
