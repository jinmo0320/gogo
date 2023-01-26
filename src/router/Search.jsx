import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
const SearchBar = styled.input`
  border: none;
  border-radius: 0.7rem;
  background-color: #e3e3e3;
  width: 14rem;
  padding: 0.4rem;
  padding-left: 2rem;
  font-size: 0.8rem;
`;

const sx = {
  color: "rgba(0,0,0,0.5)",
  fontSize: "1rem",
  margin: "0.5rem",
  position: "absolute",
};

function Search() {
  return (
    <div style={{ display: "grid", gridTemplateRows: "3rem 1fr" }}>
      <SearchContainer>
        <SvgIcon component={SearchIcon} sx={sx} />
        <SearchBar placeholder="검색" />
      </SearchContainer>
    </div>
  );
}
export default Search;
