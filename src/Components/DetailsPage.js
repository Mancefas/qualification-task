import React, { useState, useEffect, useContext } from "react";
import { Container, Box, Paper, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./DetailsPage.module.css";

import Context from "../store/Context";

const DetailsPage = () => {
  const context = useContext(Context);

  const [moreInfo, setMoreInfo] = useState();

  //useEffect and fetch data from API, not from 1st API call data, but new API call,  because task shows 3 API endpoints to use
  useEffect(() => {
    const dataWithID = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${context.clickedID}`
        );
        if (!response.ok) {
          context.setError("Something went wrong!!!");
        }
        const data = await response.json();
        setMoreInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataWithID();
    // eslint-disable-next-line
  }, [context.clickedID]);

  return (
    <Container sx={{ paddingBottom: "2rem" }}>
      {context.error1 && (
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {context.error1}
        </Container>
      )}
      {moreInfo && !context.error && (
        <Paper elevation={8} sx={{ height: "fit-content" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <CloseIcon onClick={context.closeHandler} />
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
