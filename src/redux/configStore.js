import { configureStore } from "@reduxjs/toolkit";
import xiNgau from "./slice/xiNgau";

export const store = configureStore({
  reducer: {
    // nguoiDung: () => {
    //   return "Kim Bình Lâm";
    // },
    xiNgau,
  },
});
