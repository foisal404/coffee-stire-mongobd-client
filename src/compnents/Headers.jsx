import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <div className="navbar bg-[#372727] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Coffee stire</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/coffees">Coffees</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
