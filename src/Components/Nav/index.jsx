import { Link } from "react-router-dom";

import "./style.css";

export const Nav = ({ endPoint, endPage }) => (
  <div className="header">
    <img
      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/187259676/original/61b22b4bd5990ab53e1ecaaaa2676b95d9d6e7ad/design-an-awesome-gaming-logo-for-you-in-24-h.jpg"
      alt="logo"
    ></img>
    <ul className="nav">
      <li>
        <Link to={endPoint}>{endPage} </Link>
      </li>
    </ul>
  </div>
);
