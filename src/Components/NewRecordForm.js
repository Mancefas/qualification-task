import React, { useState, useRef } from "react";
import { Button, Container } from "@mui/material";
import TextField from "@mui/material/TextField";

const NewRecordForm = () => {
  const [show, setShow] = useState(false);
  const userIdRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  const newPostHandler = () => {
    setShow(!show);
  };

  const postHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        body: textRef.current.value,
        userId: userIdRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    //A bit not REACTish...
    userIdRef.current.value = "";
    titleRef.current.value = "";
    textRef.current.value = "";
    console.log(data);
  };

  return (
    <Container>
      <Button onClick={newPostHandler} variant={"contained"} sx={{}}>
        Press me for new post
      </Button>

      {show && (
        <Container
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            height: "90vh",
          }}
        >
          <TextField
            type={"text"}
            inputRef={userIdRef}
            label="User id"
            id="user-id"
            fullWidth
            label="User id"
          />
          <TextField
            type={"text"}
            inputRef={titleRef}
            label="Title"
            id="title"
            fullWidth
            label="Title"
          />
          <TextField
            type={"text"}
            inputRef={textRef}
            label="Text"
            id="body"
            fullWidth
            label="Text"
          />
          <Button onClick={postHandler}>Post it </Button>
        </Container>
      )}
    </Container>
  );
};

export default NewRecordForm;
