import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="my-5 flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-3 items-center">
        <div className="">
          {user && user?.email ? <div className="flex items-center gap-3">
            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            <p>{user.displayName}</p>
          </div> : <img src={userIcon} alt="" />}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
