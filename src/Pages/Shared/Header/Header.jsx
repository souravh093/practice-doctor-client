import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
  };
  const navigation = (
    <>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      {
        user && <Link to="/dashboard">Dashboard</Link>
      }
    </>
  );
  return (
    <div className="py-10 bg-red-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto ">
        <div className="flex items-center gap-10">
          <div>
            <h2 className="text-4xl font-bold ">Healhive</h2>
          </div>
          <div className="flex items-center gap-10">{navigation}</div>
        </div>
        <div className="flex items-center justify-center gap-5">
          {user && (
            <div className="avatar">
              <div
                className="w-10 tooltip rounded-full"
                data-tip={user.displayName}
              >
                <img src={user.photoURL} />
              </div>
            </div>
          )}
          <div>
            {user ? (
              <Link>
                <button onClick={handleLogout}>Logout</button>
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
