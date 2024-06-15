import { Box } from "@mui/material";
import TextBox from "./TextBox";
import Container from "@mui/material/Container";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: "25px",
      height: "25px",
      mx: 0.5,
      padding: "1px",
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const Body = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleClick = () => {
    if (inputMessage.trim() == " ") return;

    const newMessage = {
      id: messages.length,
      userName: user_list[Math.floor(Math.random() * user_list.length)],
      text: inputMessage,
      likes: 0,
    };

    setMessages([...messages, newMessage]);

    setInputMessage("");
    console.log(messages);
  };

  const handleLike = (id) => {
    const updatedMessages = messages.map((message) => {
      if (message.id == id) {
        return { ...message, likes: message.likes + 1 };
      }

      return message;
    });
    console.log("updatedMessages", updatedMessages);
    setMessages(updatedMessages);
  };

  return (
    <Container
      minWidth="sm"
      sx={{
        margin: "20px",
        display: "flex",
        alignItems: "flex-end",
        height: "75vh",
        // width: "100vw",
        backgroundColor: "#efeded",
        marginLeft: "78px",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <div className="chat-container">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <Avatar
                {...stringAvatar(message.userName)}
                // sx={{ width: "25px", height: "25px" }}
              />
              <strong style={{ marginRight: "10px" }}>
                {message.userName}:
              </strong>
              {message.text}
              <ThumbUpIcon
                onClick={() => handleLike(message.id)}
                sx={{ marginLeft: "25px", height: "15px" }}
              />
              <span
                style={{ height: "15px", width: "15px", marginBottom: "15px" }}
              >
                {message.likes > 0 ? message.likes : null}
              </span>
            </div>
          ))}
        </div>
        <TextBox
          sx={{ width: "100%" }}
          inputMessage={inputMessage}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      </Box>
    </Container>
  );
};

export default Body;
