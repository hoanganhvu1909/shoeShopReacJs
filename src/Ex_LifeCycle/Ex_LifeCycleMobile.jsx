import React, { useEffect } from 'react';

const Ex_LifeCycleMobile = () => {
  useEffect(() => {
    // Lệnh return trả về một hàm giúp chạy component will unmount trong react
    return () => {
      console.log('Tôi đã biến mất');
      // alert('off web');
    };
  }, []);
  return <div>Ex_LifeCycleMobile</div>;
};

export default Ex_LifeCycleMobile;
