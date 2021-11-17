import React, { lazy, Suspense, useContext } from "react";
import { Box, CircularProgress } from "@mui/material";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Context from "./store/Context";

function App() {
  const ListPage = lazy(() => import("./Components/ListPage"));
  const DetailsPage = lazy(() => import("./Components/DetailsPage"));
  const NewRecordForm = lazy(() => import("./Components/NewRecordFormPage"));
  const context = useContext(Context);

  return (
    <>
      <Header />
      <section>
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
          {context.showNewRecordForm && <NewRecordForm />}
          {context.showListPage && <ListPage />}
          {context.showDetailsPage && <DetailsPage />}
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default App;
