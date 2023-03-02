import SvgIcon from "@mui/material/SvgIcon";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  z-index: 1;

  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 100px;
  padding: 1rem;
  margin: 1rem;
`;
const Btn = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

function Nav() {
  return (
    <Container>
      <Link to={"/create"}>
        <Btn>
          <SvgIcon component={AddCircleIcon} />
        </Btn>
      </Link>
      <Link to={"/location"}>
        <Btn>
          <SvgIcon component={PinDropRoundedIcon} />
        </Btn>
      </Link>
      <Link to={"/search"}>
        <Btn>
          <SvgIcon component={SearchRoundedIcon} />
        </Btn>
      </Link>
      <Link to={"/my"}>
        <Btn>
          <SvgIcon component={PersonRoundedIcon} />
        </Btn>
      </Link>
    </Container>
  );
}

export default Nav;
