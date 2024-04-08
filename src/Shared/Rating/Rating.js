import React from "react";
import Rating from "@mui/material/Rating";

const RatingComponent = (props) => {
  const { value } = props;

  return (
    <Rating
      name="half-rating-read"
      defaultValue={value}
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
