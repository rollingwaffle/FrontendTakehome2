import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const TextBox = ({ inputMessage, handleClick, handleChange }) => {
  return (
    <div className="inputBox">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type Message"
          inputProps={{ "aria-label": "search google maps" }}
        /> */}

        <input
          placeholder="Type Message"
          type="text"
          value={inputMessage}
          onChange={handleChange}
          style={{ width: "100%", border: "none" }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={handleClick}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default TextBox;
