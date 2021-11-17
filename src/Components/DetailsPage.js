import React, { useState, useEffect, useContext } from "react";
import { Container, Box, Paper, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./DetailsPage.module.css";

import Context from "../store/Context";
import config from "../config.json";

const DetailsPage = () => {
  const context = useContext(Context);

  const [moreInfo, setMoreInfo] = useState();

  //useEffect and fetch data from API, not from 1st API call data, but new API call,  because task shows 3 API endpoints to use
  useEffect(() => {
    const dataWithID = async () => {
      try {
        const response = await fetch(`${config.API_URL}${context.clickedID}`);
        if (!response.ok) {
          context.setErrorDetailsPage("Something went wrong!!!!");
        }
        const data = await response.json();
        setMoreInfo(data);
      } catch (error) {
        context.setErrorDetailsPage(error);
      }
    };
    dataWithID();
    // eslint-disable-next-line
  }, [context.clickedID]);

  return (
    <Container
      sx={{ paddingBottom: "2rem", paddingTop: "12vh", minHeight: "90vh" }}
    >
      {context.errorDetailsPage && (
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {context.errorDetailsPage}
        </Container>
      )}
      {moreInfo && !context.errorDetailsPage && (
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
