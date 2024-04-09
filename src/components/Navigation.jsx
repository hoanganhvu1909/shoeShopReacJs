import React from "react";
// import css vào component
// import "./navigation.css";
// import module css vào component
// style là tên tự đặt cho các giá trị bên trong module css
import style from "./navigation.module.css";
const Navigation = () => {
  return <div className={style.navigation}>Navigation</div>;
};

export default Navigation;
