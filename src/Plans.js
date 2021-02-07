import React from "react";
import "./Plans.css";
function Plans({ title, res, currentPlan }) {
  return (
    <div className="plans">
      <p className="plans__title">
        {title} <p>{res}</p>
      </p>
      <button
        className={`plans__subscribe ${currentPlan && "gray__planButton"}`}
      >
        {!currentPlan ? "Subscribe" : "Current Plan"}
      </button>
    </div>
  );
}

export default Plans;
