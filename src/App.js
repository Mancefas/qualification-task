import React, { lazy, Suspense, useContext } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

import NewRecordForm from "./Components/NewRecordForm";
// import DetailsPage from "./Components/DetailsPage";
import Footer from "./Footer";

import Context from "./store/Context";

function App() {
  const ListPage = lazy(() => import("./Components/ListPage"));
  const DetailsPage = lazy(() => import("./Components/DetailsPage"));
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
      <section>
        {context.showNewRecordForm && <NewRecordForm />}
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "3rem",
              }}
            >
              <CircularProgress size={"3.5rem"} />
            </Box>
          }
        >
          {context.showListPage && <ListPage />}
          {context.showDetailsPage && <DetailsPage />}
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default App;
