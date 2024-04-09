import React from "react";
import { useSelector } from "react-redux";
const KetQua = () => {
  const { soBanThang, soBanChoi, banChon } = useSelector(
    (reducer) => reducer.xiNgau
  );
  // console.log(data);
  return (
    <div className="text-4xl space-y-3">
      {/* Bạn chọn  */}
      <p>
        Bạn chọn:
        <span className="text-red-500">{banChon ? "Tài" : "Xỉu"}</span>
      </p>
      {/* số bàn thắng  */}
      <p>
        Số bàn thắng: <span className="text-green-500">{soBanThang}</span>
      </p>
      {/* số bàn chơi  */}
      <p>
        Số bàn chơi <span className="text-blue-500">{soBanChoi}</span>
      </p>
    </div>
  );
};

export default KetQua;
