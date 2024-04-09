import { Route, Routes, useRoutes } from 'react-router-dom';
import Ex_ShoeShop from './Ex_ShoeShop/Ex_ShoeShop';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import NotFound from './layout/NotFound/NotFound';
import Ex_LifeCycle from './Ex_LifeCycle/Ex_LifeCycle';

function App() {
  const route = useRoutes([
    // Router chứa component: Hometemplate
    {
      path: '/',
      element: <HomeTemplate />,
      children: [
        {
          element: <Ex_LifeCycle />,
          index: true,
        },
        {
          path: '/shoe-shop',
          element: <Ex_ShoeShop />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
    // {
    //   path: '/',
    //   element: <Ex_LifeCycle />,
    // },
  ]);
  return route;
  // return (
  //   <>
  //     {/* <Header />
  //     <div style={{ display: "flex", height: "50vh" }}>
  //       <Navigation />
  //       <Content />
  //     </div>
  //     <Footer /> */}
  //     {/* <DemoBootstrap /> */}
  //     {/* <h1 className="demoText">Tôi tên tailwind css</h1> */}
  //     {/* <Ex_Binding /> */}
  //     {/* <Ex_Event /> */}
  //     {/* <Ex_DemoState /> */}
  //     {/* <Ex_ShoeShop /> */}
  //     {/* <Ex_Redux /> */}
  //     <Routes>
  //       {/* <Route path="/redux" element={<Ex_Redux />} />
  //       <Route path="/" element={<Ex_ReactRouter />} />
  //       <Route path="/shoe-detail/:id" element={<Ex_ShoeShop />} /> */}
  //       <Route path="/" element={<HomeTemplate />}>
  //         <Route element={<Ex_Redux />} index></Route>
  //         <Route element={<Ex_ShoeShop />} path="/shoe-shop"></Route>
  //       </Route>
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
