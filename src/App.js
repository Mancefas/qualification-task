import React, { lazy, Suspense, useContext } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

import NewRecordForm from "./Components/NewRecordForm";
import DetailsPage from "./Components/DetailsPage";

import Context from "./store/Context";

function App() {
  const ListPage = lazy(() => import("./Components/ListPage"));
  const context = useContext(Context);

  return (
    <div>
      <header>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="div">
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
        </Suspense>

        {context.showDetailsPage && <DetailsPage />}
      </section>
    </div>
  );
}

export default App;
