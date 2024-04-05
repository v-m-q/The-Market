import axiosInstance from "./Axios";

export const addProductToCart = (p_id) => {
  return axiosInstance.post("/cart/add/", 
      {
        "product_id": p_id
      },
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyMzU3MDU2LCJpYXQiOjE3MTIzNTM0NTYsImp0aSI6ImI1NDEzYTJlMjQwMzQ0ZDBhNjRhMjQxODZiMGUxOTBjIiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.el2flejNubTN3aI8828h6IGivjHw3UtlujbZoG8VlYQ'
          }
        }
      );
    };
    
    export const getCartData = () => {
      return axiosInstance.get("/cart/", 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyMzY0MzU5LCJpYXQiOjE3MTIzNjA3NTksImp0aSI6ImZhMWVmYjMxYTE0YzQxODFiNDFjNGM4NzRmMDhmZDY1IiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.bcwMR-myUpbo_KOXRxLb943W9NscfMUDAyBithj5auc'
        }
      }
    );
  };


  export const updateCartProductQuantity = (cart_item_id, quantity) => {
    return axiosInstance.put(`/cart/update/${cart_item_id}/`, 
    {
      
        "quantity": quantity
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyMzY0MzU5LCJpYXQiOjE3MTIzNjA3NTksImp0aSI6ImZhMWVmYjMxYTE0YzQxODFiNDFjNGM4NzRmMDhmZDY1IiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.bcwMR-myUpbo_KOXRxLb943W9NscfMUDAyBithj5auc'
      }
    }
  );
};