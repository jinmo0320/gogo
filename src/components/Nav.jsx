import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  border-bottom: 2px solid #c4c4c4;
  padding: 0.9rem 3rem 0.9rem 3rem;
  gap: 2rem;
`;

const sx = {
  color: "rgba(0,0,0,0.5)",
  fontSize: "1.2rem",
};

function Nav() {
  return (
    <NavContainer>
      <Link to={"/"}>
        <SvgIcon component={HomeRoundedIcon} sx={sx} />
      </Link>
      <Link to={"/search"}>
        <SvgIcon component={SearchIcon} sx={sx} />
      </Link>
      <Link to={"/me"}>
        <SvgIcon component={PersonIcon} sx={sx} />
      </Link>
    </NavContainer>
  );
}

export default Nav;
