import React, { useState, useEffect } from "react";
import { Container, Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DetailsPage = (props) => {
  const {
    clickedID,
    setShowDetailsPage,
    setShowListPage,
    setShowNewRecordForm,
  } = props;
  const [moreInfo, setMoreInfo] = useState();

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
              paddingTop: "2rem",
              paddingBottom: "3rem",
            }}
          >
            <h3>User id {moreInfo.userId}</h3>

            <h3>{moreInfo.title}</h3>

            <h3>{moreInfo.body}</h3>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default DetailsPage;
