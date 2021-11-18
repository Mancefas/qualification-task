import React, { useContext } from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewRecordFormPage from "./Pages/NewRecordFormPage";
import ListPage from "./Components/ListPage";
import DetailsPage from "./Components/DetailsPage";

import Context from "./store/Context";

function App() {
  const context = useContext(Context);

  return (
    <>
      <Header />
      <Switch>
        <section>
          <Route path="/form-page" exact>
            <NewRecordFormPage />
          </Route>
          <Route path="/">{context.showListPage && <ListPage />}</Route>
        </section>
      </Switch>
      <section>{context.showDetailsPage && <DetailsPage />}</section>
      <Footer />
    </>
  );
}

export default App;
