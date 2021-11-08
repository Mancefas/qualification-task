import React, { useState } from "react";

const Context = React.createContext({
  clickedID: null,
  setClickedID: () => {},
  showListPage: true,
  setShowListPage: () => {},
  showNewRecordForm: true,
  setShowNewRecordForm: () => {},
  showDetailsPage: false,
  setShowDetailsPage: () => {},
  error: null,
  setError: () => {},
});

export const ContextProvider = (props) => {
  const [clickedID, setClickedID] = useState();
  const [showListPage, setShowListPage] = useState(true);
  const [showNewRecordForm, setShowNewRecordForm] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  const [error, setError] = useState();

  return (
    <Context.Provider
      value={{
        clickedID,
        setClickedID,
        showListPage,
        setShowListPage,
        showNewRecordForm,
        setShowNewRecordForm,
        showDetailsPage,
        setShowDetailsPage,
        error,
        setError,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
