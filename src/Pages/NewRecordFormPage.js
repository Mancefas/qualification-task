import React, { useContext, useState, useEffect } from "react";
import { Button, Container, TextField, Alert, Paper, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useHistory } from "react-router-dom";

import Context from "../store/Context";
import config from "../config.json";

const NewRecordFormPage = () => {
  const context = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    context.setShowListPage(false);
    // eslint-disable-next-line
  }, [context.showListPage]);

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
      const response = await fetch(config.API_URL, {
        method: "POST",
        body: JSON.stringify({
          title: userTitle,
          body: userText,
          userId: userID,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        context.setNewFormError("Error from serveer");
        return;
      }
      const data = await response.json();
      context.setNewFormData(data);
      context.setFromSent(true);
      history.replace("/");
      setTimeout(() => {
        context.setFromSent(false);
      }, 2000);
    } catch (error) {
      context.setNewFormError(error);
    }

    setUserID("");
    setUserTitle("");
    setUserText("");

    context.setShowListPage(true);
  };

  return (
    <Container>
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
      {!context.newFormError && (
        <Paper
          elevation={8}
          sx={{ height: "fit-content", marginBottom: "1rem" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <Link to="/">
              <CloseIcon onClick={context.closeHandler} />
            </Link>
          </Box>
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
              variant="contained"
              disabled={!formInputsValid}
              onClick={postHandler}
            >
              Post it{" "}
            </Button>
          </Container>
        </Paper>
      )}
    </Container>
  );
};

export default NewRecordFormPage;
