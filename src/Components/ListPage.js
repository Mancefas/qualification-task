import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";

import Context from "../store/Context";

const ListPage = () => {
  const context = useContext(Context);

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const initDataApiCall = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setListData(data);
    };

    initDataApiCall();
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
      <div style={{ height: "75vh", width: "90%", overflow: "hidden" }}>
        {listData.length > 0 && (
          <DataGrid onCellClick={clicked} rows={rows} columns={columns} />
        )}
      </div>
    </Container>
  );
};

export default ListPage;
