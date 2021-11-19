import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Alert } from "@mui/material/";

import Context from "../store/Context";
import config from "../config.json";

const ListPage = () => {
  const context = useContext(Context);

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const listDataApiCall = async () => {
      try {
        const response = await fetch(config.API_URL);
        const data = await response.json();

        if (!response.ok) {
          context.setErrorListPage("Error from server");
          return;
        }
        setListData(data);
      } catch (error) {
        context.setErrorListPage(error);
      }
    };

    listDataApiCall();
    // eslint-disable-next-line
  }, []);

  const clicked = (event) => {
    context.setClickedID(event.id);
    context.setShowDetailsPage(true);
    context.setShowListPage(false);
    context.setShowNewRecordForm(false);
  };

  const rows = listData.map((elm) => ({
    id: elm.id,
    col1: elm.userId,
    col2: elm.title,
  }));

  const columns = [
    { field: "col1", headerName: "User ID", width: 100 },
    { field: "col2", headerName: "Title", width: 900 },
  ];

  return (
    <Container sx={{ paddingBottom: "2rem" }}>
      {context.formSent === true && (
        <Alert severity="success">Form is sent!</Alert>
      )}
      {context.errorListPage && (
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {context.errorListPage}
        </Container>
      )}

      <div style={{ height: "75vh", width: "90%", overflow: "hidden" }}>
        {listData.length > 0 && !context.errorListPage && (
          <DataGrid onCellClick={clicked} rows={rows} columns={columns} />
        )}
      </div>
    </Container>
  );
};

export default ListPage;
