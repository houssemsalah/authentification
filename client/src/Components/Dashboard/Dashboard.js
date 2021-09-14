
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../JS/actions/user";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
       <h1>Dashboard</h1>
       <br></br>
       <br></br>
      <button 
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Logout
      </button>
     
    </div>
  );
};

export default Dashboard;