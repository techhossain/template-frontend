import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import DashboardTogether from './DashboardTogether';

const MainContent = () => {
  let { path, url } = useRouteMatch();
  return (
    <>

      <Switch>
        <Route exact path={`${path}`}>
          <DashboardTogether />
        </Route>
        <Route path={`${path}/my-order`}>
          <MyOrder />
        </Route>
        <Route path={`${path}/pay`}>
          <Pay />
        </Route>
        <Route path={`${path}/manage-product`}>
          <ManageProduct />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/manage-orders`}>
          <ManageOrders />
        </Route>
        <Route path={`${path}/make-admin`}>
          <MakeAdmin />
        </Route>
        <Route path={`${path}/add-product`}>
          <AddProduct />
        </Route>
      </Switch>
    </>
  );
};

export default MainContent;