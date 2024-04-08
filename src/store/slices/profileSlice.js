import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
};
export const profileSlice = createSlice({
  name: "profile",
  initialState: INTIAL_STATE,
  reducers: {
    setUserProfileData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { setUserProfileData } = profileSlice.actions; 
export default profileSlice.reducer;
