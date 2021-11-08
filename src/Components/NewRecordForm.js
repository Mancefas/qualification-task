import React, { useState, useRef, useContext } from "react";
import { Button, Container } from "@mui/material";
import TextField from "@mui/material/TextField";

import Context from "../store/Context";

const NewRecordForm = () => {
  const context = useContext(Context);

  const userIdRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

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

    context.setShow(false);
    context.setShowListPage(true);

    //console.log to show object made from form, because it doesn't show up anywhere
    console.log(data);
  };

  return (
    <Container>
      <Button
        variant={"contained"}
        sx={{ margin: "1rem" }}
        onClick={context.newPostHandler}
      >
        Press me for new post
      </Button>
      {context.show && (
        <Container
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            height: "fit-content",
            minHeight: "80vh",
          }}
        >
          <TextField
            type={"text"}
            inputRef={userIdRef}
            label="User id"
            id="user-id"
            fullWidth
          />
          <TextField
            type={"text"}
            inputRef={titleRef}
            label="Title"
            id="title"
            fullWidth
          />
          <TextField
            type={"text"}
            inputRef={textRef}
            label="Text"
            id="body"
            fullWidth
          />
          <Button onClick={postHandler}>Post it </Button>
        </Container>
      )}
    </Container>
  );
};

export default NewRecordForm;
