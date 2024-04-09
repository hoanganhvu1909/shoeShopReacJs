import React from 'react';
import './ex_redux.css';
import XucXac from './XucXac';
import KetQua from './KetQua';
import { useSelector, useDispatch } from 'react-redux';
import { kiemTraKetQua } from '../redux/slice/xiNgau';
import Header from '../layout/Header/Header';
// import bgGame from "./../assets/image/bgGame.png";
const Ex_Redux = () => {
  // Yêu cầu: thực hiện nhìn trên giao diện, viết báo cáo về các dữ liệu sẽ thay đổi, một số phương thức sẽ chạy khi người dùng thao tác với các thẻ đang có trên giao diện
  // dữ liệu thay đổi: 3 con xí ngầu, dữ liệu bạn chọn, số bàn thắng và số bàn chơi

  // const dataRedux = useSelector(function (reducer) {
  //   return reducer.xiNgau;
  // });
  // const dataRedux = useSelector((reducer) => reducer.xiNgau);
  // console.log(dataRedux);
  const dispatch = useDispatch();

  return (
    <div
      className="h-screen redux_ex py-10 text-center"
      // style={{ backgroundImage: `url(${bgGame})` }}
      style={{ backgroundImage: `url(./image/bgGame.png)` }}
    >
      {/* <Header /> */}
      <div className="container">
        <h1 className="text-7xl">Game đổ xúc xắc</h1>
        {/* nút chức năng  */}
        <XucXac />
        {/* bảng hiển thị điểm  */}
        <KetQua />
        {/* nút bắt đầu  */}
        <button
          onClick={() => {
            dispatch(kiemTraKetQua());
          }}
          className="py-2 px-5 text-white bg-green-600 rounded mt-5"
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

export default Ex_Redux;
