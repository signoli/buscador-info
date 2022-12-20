import AdbSharpIcon from '@mui/icons-material/AdbSharp';
import React from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <React.Fragment>
        <nav className="nav-container">
                  <div className="custom-navbar"> 
                        
                        <a href={'/'}>
                                  <AdbSharpIcon sx={{ fontSize: 32 }} />
                        </a>

                        <a href={'busqueda'}>
                                  <SearchIcon sx={{ fontSize: 32 }} />
                        </a>
                        
                  </div>
        </nav>

    </React.Fragment>
  );
}

export default Header;
