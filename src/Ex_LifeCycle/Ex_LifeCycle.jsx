import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ex_LifeCycleMobile from './Ex_LifeCycleMobile';
const Ex_LifeCycle = () => {
  const [number, setNumber] = useState(1);
  const [arrShoe, setArrShoe] = useState([]);
  const [detail, setDetail] = useState({});
  const [checkDevice, setCheckDevice] = useState('');
  // useEffect chạy quá trình mounting khi component bắt đầu hiển thị lên giao diện
  useEffect(() => {
    console.log('Tôi là didmount của component');
    // gọi tới phần tử và dom
    // document.querySelector(".demo").innerHTML = "abc";
    getAllShoe();
  }, []);

  // useEffect chạy quá trình didupdate khi component rerender giao diện
  useEffect(() => {
    getShoeById();
  }, [number]);

  // useEffect chạy quá trình didupdate và didmount khi có trạng thái rerender từ component
  useEffect(() => {
    // Tạo state quản lí chiều dài thiết bị đang sử dụng
    // sử dụng sự kiện resize để check trạng thái xem khi nào thì người dùng sử dụng mobile khi nào sử dụng laptop
    // cập nhật lại trạng thái cho state và sau đó thực hiện kiểm tra để hiển thị component tương ứng với từng thiết bị
    const handleResizeDevice = (event) => {
      let widthDevive = window.innerWidth;
      // console.log(widthDevive);
      if (widthDevive < 576) {
        setCheckDevice('mobile');
      } else {
        setCheckDevice('laptop');
      }
    };
    window.addEventListener('resize', handleResizeDevice);
  });

  console.log(checkDevice);

  const handleRender = () => {
    console.log('Tôi là render giao diện');
    return 'abc';
  };

  const getAllShoe = async () => {
    const res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET',
    });
    console.log(res);

    // setState cập nhật dữ liệu để state chạy hàm map đưa lên giao diện
    setArrShoe(res.data.content);

    // let content = "";
    // for (let item of res.data.content) {
    //   content += `
    //        <div>
    //          <h2>${item.name}</h2>
    //          <p>${item.quantity}</p>
    //        </div>
    //   `;
    // }
    // document.querySelector(".demo").innerHTML = content;
    // const content = res.data.content.map((item, index) => {
    //   return (
    //     <div>
    //       <h2>{item.name}</h2>
    //       <p>{item.quantity}</p>
    //     </div>
    //   );
    // });
    // return content;
  };

  // lấy chi tiết giày
  const getShoeById = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${number}`,
    });
    console.log(res);
    setDetail(res.data.content);
  };

  // getAllShoe();
  // getShoeById();
  return (
    <div>
      {/* {handleRender()} */}
      {/* <p>Giá trị state: {number}</p>
      <button
        onClick={() => {
          setNumber(8);
        }}
        className="py-2 px-5 bg-orange-500 text-white">
        Tăng giá trị state
      </button> */}

      {/* {getShoeById()} */}

      <div className="flex">
        {/* image  */}
        <div className="image_detail">
          <img src={detail.image} alt="" />
        </div>
        {/* content  */}
        <div className="content_detail">
          <h2>{detail.name}</h2>
          <p>{detail.quantity}</p>
        </div>
      </div>
      {checkDevice == 'mobile' ? (
        <Ex_LifeCycleMobile />
      ) : (
        <div className="demo grid grid-cols-3 container mx-auto text-center">
          {arrShoe?.map((item, index) => {
            return (
              <div className="px-14 py-2">
                <div className="border rounded-lg">
                  <img src={item.image} alt="" />
                  <h2 className="text-xl"> {item.name}</h2>
                  <p className="text-xl">Giá tiền:{item.price}$</p>
                  <button
                    onClick={() => {
                      setNumber(item.id);
                    }}
                    className="bg-black text-white py-2 px-5 rounded mb-5">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Ex_LifeCycle;
