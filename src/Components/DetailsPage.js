import React, { useState, useEffect } from "react";
import { Container, Box, Paper, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./DetailsPage.module.css";

const DetailsPage = (props) => {
  const {
    clickedID,
    setShowDetailsPage,
    setShowListPage,
    setShowNewRecordForm,
  } = props;
  const [moreInfo, setMoreInfo] = useState();

  //useEffect and fetch data from API, not from 1st API call data, but new API call,  because task shows 3 API endpoints to use
  useEffect(() => {
    const dataWithID = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${clickedID}`
      );
      const data = await response.json();
      setMoreInfo(data);
    };
    dataWithID();
  }, [clickedID]);

  const closeHandler = () => {
    setShowDetailsPage(false);
    setShowListPage(true);
    setShowNewRecordForm(true);
  };

  return (
    <Container>
      {moreInfo && (
        <Paper elevation={8} sx={{ height: "fit-content" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <CloseIcon onClick={closeHandler} />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",

              paddingBottom: "3rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <p>User id </p>
              <Avatar sx={{ backgroundColor: "#1976D2" }}>
                {moreInfo.userId}
              </Avatar>
            </Box>

            <p>Title </p>
            <h3 className={classes.text}>{moreInfo.title}</h3>

            <p>Text body</p>
            <h3 className={classes.text}>{moreInfo.body}</h3>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default DetailsPage;
