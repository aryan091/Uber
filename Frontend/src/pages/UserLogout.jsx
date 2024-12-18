import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.removeItem("token");
            navigate("/userLogin");
          }
        })
        .catch((err) => console.log(err));
    } else {
      
      navigate("/userLogin");
    }
  }, [token, navigate]);

  return <></>;
};

export default UserLogout;
