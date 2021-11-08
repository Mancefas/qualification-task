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
  show: false,
  setShow: () => {},
  newPostHandler: () => {},
  closeHandler: () => {},
});

export const ContextProvider = (props) => {
  const [clickedID, setClickedID] = useState();
  const [showListPage, setShowListPage] = useState(true);
  const [showNewRecordForm, setShowNewRecordForm] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  const [show, setShow] = useState(false);
  const newPostHandler = () => {
    setShow(!show);
    setShowListPage(!showListPage);
  };

  const [error, setError] = useState();
  const closeHandler = () => {
    setShowDetailsPage(false);
    setShowListPage(true);
    setShowNewRecordForm(true);
  };

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
        show,
        setShow,
        newPostHandler,
        closeHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
