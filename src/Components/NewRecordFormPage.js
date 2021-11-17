import React, { useContext, useState } from "react";
import { Button, Container, TextField, Alert } from "@mui/material";

import Context from "../store/Context";

const NewRecordFormPage = () => {
  const context = useContext(Context);

  //User id validation
  const [userID, setUserID] = useState("");
  const [userIDTouched, setUserIDTouched] = useState(false);
  const validUserID = userID.trim() !== "";
  const userIDIsNotValid = !validUserID && userIDTouched;

  const userIdInputHandler = (event) => {
    setUserID(event.target.value);
  };
  const userIDTouchedHandler = () => {
    setUserIDTouched(true);
  };

  //Title validation
  const [userTitle, setUserTitle] = useState("");
  const [userTitleTouched, setUserTitleTouched] = useState(false);
  const validTitle = userTitle.trim() !== "";
  const userTitleIsNotValid = !validTitle && userTitleTouched;

  const userTitleInputHandler = (event) => {
    setUserTitle(event.target.value);
  };
  const userTitleTouchedHandler = () => {
    setUserTitleTouched(true);
  };

  //Text validation
  const [userText, setUserText] = useState("");
  const [userTextTouched, setUserTextTouched] = useState(false);
  const validText = userText.trim() !== "";
  const userTextIsNotValid = !validText && userTextTouched;

  const userTextInputHandler = (event) => {
    setUserText(event.target.value);
  };
  const userTextTouchedHandler = () => {
    setUserTextTouched(true);
  };

  let formInputsValid = false;
  if (validUserID && validTitle && validText) {
    formInputsValid = true;
  }

  const postHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: userTitle,
            body: userText,
            userId: userID,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        context.setNewFormError("Error from serveer");
        return;
      }
      const data = await response.json();
      console.log(data);
      context.setFromSent(true);
      setTimeout(() => {
        context.setFromSent(false);
      }, 2000);
    } catch (error) {
      console.log(error.value);
      context.setNewFormError(error);
    }

    setUserID("");
    setUserTitle("");
    setUserText("");

    context.setShow(false);
    context.setShowListPage(true);

    //console.log to show object made from form, because it doesn't show up anywhere
  };

  return (
    <Container>
      {context.formSent === true && (
        <Alert severity="success">Form is sent!</Alert>
      )}
      <Button
        variant={"contained"}
        sx={{ margin: "1rem" }}
        onClick={context.newPostHandler}
      >
        {!context.show ? "Press me for new post" : "Press me to get back"}
      </Button>
      {context.newFormError && (
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {context.newFormError}
        </Container>
      )}
      {context.show && !context.newFormError && (
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
            error={userIDIsNotValid}
            type={"text"}
            onChange={userIdInputHandler}
            value={userID}
            onBlur={userIDTouchedHandler}
            label="User id"
            id="user-id"
            fullWidth
          />
          <TextField
            error={userTitleIsNotValid}
            type={"text"}
            onChange={userTitleInputHandler}
            onBlur={userTitleTouchedHandler}
            value={userTitle}
            label="Title"
            id="title"
            fullWidth
          />
          <TextField
            error={userTextIsNotValid}
            type={"text"}
            onBlur={userTextTouchedHandler}
            onChange={userTextInputHandler}
            value={userText}
            label="Text"
            id="body"
            fullWidth
          />
          <Button
            variant="outlined"
            disabled={!formInputsValid}
            onClick={postHandler}
          >
            Post it{" "}
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default NewRecordFormPage;
