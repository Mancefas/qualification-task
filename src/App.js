import React, { lazy, Suspense, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";

import NewRecordForm from "./Components/NewRecordForm";
import DetailsPage from "./Components/DetailsPage";

function App() {
  const ListPage = lazy(() => import("./Components/ListPage"));

  const [clickedID, setClickedID] = useState();

  return (
    <div>
      <header>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <h1>Task 1</h1>
        </Container>
      </header>
      <section>
        <NewRecordForm />

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
          <ListPage setClickedID={setClickedID} />
        </Suspense>

        <DetailsPage clickedID={clickedID} />
      </section>
    </div>
  );
}

export default App;
