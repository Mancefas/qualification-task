import React, { useState, useEffect } from "react";
import { Container, Box, Paper } from "@mui/material";

const DetailsPage = (props) => {
  const { clickedID } = props;
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

  console.log(moreInfo);

  return (
    <Container>
      {moreInfo && (
        <Box sx={{ textAlign: "center" }}>
          <h2>{moreInfo.userId}</h2>

          <h3>{moreInfo.title}</h3>

          <h3>{moreInfo.body}</h3>
        </Box>
      )}
    </Container>
  );
};

export default DetailsPage;
