import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import { SiHappycow } from "react-icons/si";
import { useCart } from '../../context/Cart';
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';
import SearchInput from '../form/Searchinput';

import useCategory from '../../hooks/usecategory';
import {Badge} from "antd"
const Header = () => {
  const[cart]=useCart()
  const [auth,setAuth]=useAuth()
  const categories=useCategory()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">  <SiHappycow style={{ marginRight: '10px', fontSize: '2.5em' }} />Online Dairy</Link>
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <SearchInput />
              <li className="nav-item">
                <NavLink className="nav-link"     to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {
                !auth.user ? (<> <li className="nav-item">
                  <NavLink className="nav-link"    to="/Register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"    to="/Login">Login</NavLink>
                </li></>):(<> <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>)
              }
           
              <li className="nav-item">
              <Badge count={cart?.lenght} showZero>
                <NavLink className="nav-link"    to="/Cart">Cart{cart?.lenght}</NavLink>
                </Badge>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
