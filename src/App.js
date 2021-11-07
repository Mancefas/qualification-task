import React, { lazy, Suspense, useState } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

import NewRecordForm from "./Components/NewRecordForm";
import DetailsPage from "./Components/DetailsPage";

function App() {
  const ListPage = lazy(() => import("./Components/ListPage"));

  const [clickedID, setClickedID] = useState();
  const [showListPage, setShowListPage] = useState(true);
  const [showNewRecordForm, setShowNewRecordForm] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  return (
    <div>
      <header>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="div">
            {showListPage === true
              ? "Task 1"
              : showDetailsPage === true
              ? "Task 2"
              : "Task 3"}
          </Typography>
        </Container>
      </header>
      <section>
        {showNewRecordForm && (
          <NewRecordForm
            setShowListPage={setShowListPage}
            showListPage={showListPage}
          />
        )}

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
          {showListPage && (
            <ListPage
              setClickedID={setClickedID}
              setShowDetailsPage={setShowDetailsPage}
              setShowListPage={setShowListPage}
              setShowNewRecordForm={setShowNewRecordForm}
            />
          )}
        </Suspense>

        {showDetailsPage && (
          <DetailsPage
            clickedID={clickedID}
            setShowDetailsPage={setShowDetailsPage}
            setShowListPage={setShowListPage}
            setShowNewRecordForm={setShowNewRecordForm}
          />
        )}
      </section>
    </div>
  );
}

export default App;
