import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";

import Context from "../store/Context";

const Header = () => {
  const context = useContext(Context);
  return (
    <>
      <header>
        <Container
          sx={{
            height: "fit-content",
            display: "flex",
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ fontFamily: "Mochiy Pop One, sans-serif;" }}
          >
            {context.showListPage === true
              ? "Task 1"
              : context.showDetailsPage === true
              ? "Task 2"
              : "Task 3"}
          </Typography>
        </Container>
      </header>
    </>
  );
};

export default Header;
