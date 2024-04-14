import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addProductsToWishlist,
  removeProductsFromWishlist,
} from "../../APIs/wishlist";

const LikedProduct = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate();

  const checkAuth = (product) => {
    if (!localStorage.getItem("Token")) {
      navigate("/login");
    } else {
      toggleWishlist(product);
    }
  };

  const toggleWishlist = (productId) => {
    if (isInWishlist) {
      removeProductsFromWishlist(productId);
    } else {
      addProductsToWishlist(productId);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <FontAwesomeIcon
      icon={farHeart}
      onClick={(e) => {
        e.preventDefault();
        checkAuth(product);
      }}
    />
  );
};

export default LikedProduct;
