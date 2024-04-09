import React from "react";
// import xiNgau1 from "./../assets/image/1.png";
import { useSelector, useDispatch } from "react-redux";
import { thayDoiKetQua } from "../redux/slice/xiNgau";
const XucXac = () => {
  const { xiNgau1, xiNgau2, xiNgau3 } = useSelector(
    (reducer) => reducer.xiNgau
  );
  // tạo các sự kiện dispatch cho redux lắng nghe
  const dispatch = useDispatch();

  // console.log(data);
  let classButton = "p-10 bg-purple-500 text-white rounded text-3xl";
  // let xiNgau = 5;
  return (
    <div className="flex justify-between">
      {/* button tài  */}
      <button
        onClick={() => {
          dispatch(thayDoiKetQua(true));
        }}
        className={classButton}
      >
        Tài
      </button>

      {/* xí ngầu  */}
      <div className="flex items-center space-x-5">
        <img className="w-16" src={`./image/${xiNgau1}.png`} alt="" />
        <img className="w-16" src={`./image/${xiNgau2}.png`} alt="" />
        <img className="w-16" src={`./image/${xiNgau3}.png`} alt="" />
      </div>

      {/* button xỉu  */}
      <button
        onClick={() => {
          dispatch(thayDoiKetQua(false));
        }}
        className={classButton}
      >
        Xỉu
      </button>
    </div>
  );
};

export default XucXac;
