import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SideNav = () => {
  let { url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();



  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">

            <li className="nav-item">
              <Link className="nav-link float-start" to={`${url}/pay`}>
                Pay
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-start" to={`${url}/my-order`}>
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-start" to={`${url}/review`}>
                Review
              </Link>
            </li>
            <hr />

            {!admin ? '' : <span>
              <li className="nav-item">
                <Link className="nav-link float-start" to={`${url}/add-product`}>
                  Add A Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to={`${url}/manage-product`}>
                  Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to={`${url}/manage-orders`}>
                  Manage All Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to={`${url}/make-admin`}>
                  Make Admin
                </Link>
              </li>
            </span>}

            <li className="nav-item">
              <Link className="nav-link float-start" to="/">
                Back to Home
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={logOut}>
                Logout
              </button>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default SideNav;