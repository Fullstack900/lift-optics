import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
const CustomIconButtons = ({ buttonText, buttonIcon }) => {
  const clickHandler = () => {
    console.log(`${buttonText} is Clicked`);
  };
  return (
    <Fragment>
      <Box>
        <Button
          onClick={clickHandler}
          sx={{
            color: "#1A73E8",
            borderRadius: "26px",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          variant="outlined"
        >
          <img style={{ marginRight: "5px" }} src={buttonIcon} />
          {buttonText}
        </Button>
      </Box>
    </Fragment>
  );
};
export default CustomIconButtons;
