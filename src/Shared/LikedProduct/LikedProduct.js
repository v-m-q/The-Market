import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { incrementCounter, decrementCounter } from "../../store/slices/counter";
import {
  getProductsByWishlist,
  addProductsToWishlist,
  removeProductsFromWishlist,
} from "../../APIs/wishlist";

const LikedProduct = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    /*
    const checkIfInWishlist = () => {
      try {
        const res = getProductsByWishlist();
        console.log("Wishlist response:", res);
        const wishlistProducts = res.data;

        const isInWishlist = wishlistProducts.some(
          (wishlistProduct) => wishlistProduct.productId === product.productId
        );

        setIsInWishlist(isInWishlist);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    checkIfInWishlist();
    */
  }, [product]);

  const checkAuth = (product) => {
    if (!localStorage.getItem("Token")) {
      navigate("/login");
    } else {
      toggleWishlist(product);
    }
  };

  const toggleWishlist = async (productId) => {
    try {
      if (isInWishlist) {
        await removeProductsFromWishlist(productId);
        dispatch(decrementCounter());
        setIsInWishlist(false);
      } else {
        await addProductsToWishlist(productId);
        dispatch(incrementCounter());
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  return (
    <FontAwesomeIcon
      icon={isInWishlist ? fasHeart : farHeart}
      onClick={(e) => {
        e.preventDefault();
        checkAuth(product);
      }}
    />
  );
};

export default LikedProduct;
