import * as React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const Search = styled("div")({
    position: "relative",
    borderRadius: 4,
    backgroundColor: "#f0f0f0",

    marginRight: 2,
    marginLeft: 0,
    color: "#6e6e6e",
    width: !matches ? "100%" : "80%",
  });

  const SearchIconWrapper = styled("div")({
    padding: 8,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const StyledInputBase = styled(InputBase)({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: "8px 8px 8px 40px", // Adjust padding according to your needs
      width: "100%",
    },
  });

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
