import React, { useContext } from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import Context from "../store/Context";

const Header = () => {
  const context = useContext(Context);
  const clickedLogoHandler = () => {
    context.setShowListPage(true);
  };

  return (
    <>
      <header>
        <Container
          sx={{
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "green" }}
            onClick={clickedLogoHandler}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontFamily: "Mochiy Pop One, sans-serif;" }}
            >
              Task 1
            </Typography>
          </Link>
          <Link
            to="/form-page"
            onClick={context.closeHandler}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
            }}
          >
            <Button variant="contained">Press me for new post</Button>
          </Link>
        </Container>
      </header>
    </>
  );
};

export default Header;
