import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { Box } from "@mui/material";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "30px",
      }}
    >
      <div>
        <h3>Introductions</h3>
        <h6>The Channel is fro company wide chatter</h6>
      </div>

      <div>
        3 | 100
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100vh",
            paddingTop: "1px",
          }}
        >
          <PeopleIcon />
        </Box>
      </div>
    </div>
  );
}

export default Header;
