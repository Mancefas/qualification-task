import React, { useContext } from "react";

import { Route } from "react-router-dom";

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
      <section>
        <Route path="/form-page">
          <NewRecordFormPage />
        </Route>
        <Route path="/">{context.showListPage && <ListPage />}</Route>
      </section>
      <section>{context.showDetailsPage && <DetailsPage />}</section>
      <Footer />
    </>
  );
}

export default App;
