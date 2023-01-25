import styled from "styled-components";
import { Link } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { display, flexbox, fontSize } from "@mui/system";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 0.7rem;
`;

function Nav() {
  return (
    <NavContainer>
      <Link to={"/"}>
        <SvgIcon
          component={HomeIcon}
          sx={{ color: "rgba(0,0,0,0.5)", fontSize: "1.6rem" }}
        />
      </Link>
      <Link to={"/search"}>
        <SvgIcon
          component={SearchIcon}
          sx={{ color: "rgba(0,0,0,0.5)", fontSize: "1.6rem" }}
        />
      </Link>
      <Link to={"/me"}>
        <SvgIcon
          component={PersonIcon}
          sx={{ color: "rgba(0,0,0,0.5)", fontSize: "1.6rem" }}
        />
      </Link>
    </NavContainer>
  );
}

export default Nav;
