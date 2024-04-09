import React from "react";
import Rating from "@mui/material/Rating";

const RatingComponent = ({ value }) => {
  return (
    <Rating
      name="half-rating-read"
      value={value}
      precision={0.5}
      readOnly
      sx={{
        color: "#ca1515",
        "& .MuiSvgIcon-root": {
          fontSize: "1rem",
        },
      }}
    />
  );
};

export default RatingComponent;
