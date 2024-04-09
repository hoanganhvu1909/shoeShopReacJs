import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const nguoiDung = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    thayDoiKetQua: (state, action) => {},
  },
});

export const {} = nguoiDung.actions;

export default nguoiDung.reducer;
