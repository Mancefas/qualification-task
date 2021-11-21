import React, { useContext, Suspense } from "react";

import { CircularProgress, Box } from "@mui/material";

import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import ListPage from "./Components/ListPage";
import DetailsPage from "./Components/DetailsPage";

import Context from "./store/Context";

const NewRecordFormPage = React.lazy(() => import("./Pages/NewRecordFormPage"));

function App() {
  const context = useContext(Context);

  return (
    <>
      <Header />
      <Switch>
        <section>
          <Suspense
            fallback={
              <Box sx={{ textAlign: "center", minHeight: "70vh" }}>
                <CircularProgress />
              </Box>
            }
          >
            <Route path="/form-page" exact>
              <NewRecordFormPage />
            </Route>
          </Suspense>
          <Route path="/">{context.showListPage && <ListPage />}</Route>
        </section>
      </Switch>
      <section>{context.showDetailsPage && <DetailsPage />}</section>
      <Footer />
    </>
  );
}

export default App;
