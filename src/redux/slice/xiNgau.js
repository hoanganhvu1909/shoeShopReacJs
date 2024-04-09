// câu lệnh tạo một slice redux nhanh: rxslice
import { createSlice } from "@reduxjs/toolkit";
import { getRandomInteger } from "../../util/util";

const initialState = {
  xiNgau1: 3,
  xiNgau2: 1,
  xiNgau3: 5,
  soBanThang: 0,
  soBanChoi: 0,
  banChon: true, // tài true xỉu false
};

const xiNgau = createSlice({
  name: "xiNgau",
  // dữ liệu mặc định
  initialState,
  // tạo các phương thức xử lí dữ liệu
  reducers: {
    thayDoiKetQua: (state, action) => {
      console.log(action);
      state.banChon = action.payload;
    },
    kiemTraKetQua: (state, action) => {
      // random tạo ra 3 xí ngầu mới
      state.xiNgau1 = getRandomInteger();
      state.xiNgau2 = getRandomInteger();
      state.xiNgau3 = getRandomInteger();

      let tongDiem = state.xiNgau1 + state.xiNgau2 + state.xiNgau3;
      let check = tongDiem >= 11 ? true : false;
      if (check == state.banChon) {
        state.soBanThang += 1;
      }
      state.soBanChoi += 1;
    },
  },
});

export const { thayDoiKetQua, kiemTraKetQua } = xiNgau.actions;

export default xiNgau.reducer;
