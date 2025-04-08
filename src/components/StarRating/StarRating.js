import React from "react";
import Star from "../Star";

const cointainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 24,
  rating = 4,
}) {
  return (
    <div style={cointainerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={maxRating && rating > i}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
