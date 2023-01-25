import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  text-align: center;
`;

function Nav() {
  return (
    <NavContainer>
      <Link to={"/"}>home</Link>
      <Link to={"/search"}>search</Link>
      <Link to={"/me"}>me</Link>
    </NavContainer>
  );
}

export default Nav;
