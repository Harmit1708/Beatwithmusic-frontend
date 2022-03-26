import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
function Header() {
    let navigate = useNavigate();

  let token = sessionStorage.getItem("token");

  let Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <span>
        <h3
          className="ml-3 font-link float-left"
          style={{ textShadow: "0px 0px 5px crimson" }}
        >
          Beat With Music
        </h3>
        {token ? (
          <>
            <button
              className="float-right mr-3 btn btn-secondary"
              onClick={() => Logout()}
            >
              <LogoutIcon />
              Logout
            </button>
          </>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

export default Header;
