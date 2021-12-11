import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SideNav = () => {
  const { user, logOut, admin } = useAuth();



  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">

            <li className="nav-item">
              <Link className="nav-link float-start" to="dashboard/pay">
                Pay
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-start" to="dashboard/my-order">
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-start" to="dashboard/review">
                Review
              </Link>
            </li>
            <hr />

            {!admin ? '' : <span>
              <li className="nav-item">
                <Link className="nav-link float-start" to="dashboard/add-product">
                  Add A Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to="dashboard/manage-product">
                  Manage Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to="dashboard/manage-orders">
                  Manage All Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link float-start" to="dashboard/make-admin">
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