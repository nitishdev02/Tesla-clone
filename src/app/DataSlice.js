import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  teslaData: [
    {
      imgUrl: "https://bit.ly/3xTBXZm",
      Title: "Model S",
      Description: "Order Online for Touchless Delivery",
      ButtonLeftText: "Custom Order",
      ButtonRightText: "Existing Inventory",
      showNav: true,
      firstChev: true,
    },
    {
      imgUrl: "https://bit.ly/3DjK3LJ",
      Title: "Model Y",
      Description: "Order Online for Touchless Delivery",
      ButtonLeftText: "Custom Order",
      ButtonRightText: "Existing Inventory",
    },
    {
      imgUrl: "https://bit.ly/31iE7WA",
      Title: "Model 3",
      Description: "Order Online for Touchless Delivery",
      ButtonLeftText: "Custom Order",
      ButtonRightText: "Existing Inventory",
    },
    {
      imgUrl: "https://bit.ly/3pour4P",
      Title: "Model X",
      Description: "Order Online for Touchless Delivery",
      ButtonLeftText: "Custom Order",
      ButtonRightText: "Existing Inventory",
    },
    {
      imgUrl: "https://bit.ly/3Ikys2y",
      Title: "Solar Panels",
      Description: "Lowest Cost Solar Panels in America",
      ButtonLeftText: "Order Now",
      ButtonRightText: "Learn More",
    },
    {
      imgUrl: "https://bit.ly/3ruEoQN",
      Title: "Solar Roofs",
      Description: "Produce Clean Energy From Your Roof",
      ButtonLeftText: "Order Now",
      ButtonRightText: "Learn More",
    },
    {
      imgUrl: "https://bit.ly/3xTCHh6",
      Title: "Accessories",
      ButtonLeftText: "Shop Now",
      OneBtn: true,
      lastScreen: true,
    },
  ],
  SideMenuData: [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ],
};
const TeslaDataSlice = createSlice({
  name: "CarData",
  initialState,
  reducers: {},
});
export const carInfo = (state) => state.CarData;
export default TeslaDataSlice.reducer;
