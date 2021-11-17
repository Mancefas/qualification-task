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
  errorDetailsPage: null,
  setErrorDetailsPage: () => {},
  show: false,
  setShow: () => {},
  newPostHandler: () => {},
  closeHandler: () => {},
  errorListPage: null,
  setErrorListPage: () => {},
  newFormError: null,
  setNewFormError: () => {},
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

  const [errorDetailsPage, setErrorDetailsPage] = useState();
  const closeHandler = () => {
    setShowDetailsPage(false);
    setShowListPage(true);
    setShowNewRecordForm(true);
  };

  const [errorListPage, setErrorListPage] = useState();
  const [newFormError, setNewFormError] = useState();

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
        errorDetailsPage,
        setErrorDetailsPage,
        show,
        setShow,
        newPostHandler,
        closeHandler,
        errorListPage,
        setErrorListPage,
        newFormError,
        setNewFormError,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
