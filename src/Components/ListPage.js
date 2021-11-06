import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";

const ListPage = (props) => {
  const { setClickedID } = props;
  const [listData, setListData] = useState([]);

  // const apiRef = useGridApiRef();

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
    setClickedID(event.id);
  };

  const rows = listData.map((elm) => ({
    id: elm.id,
    col1: elm.userId,
    col2: elm.title,
  }));

  const columns = [
    { field: "col1", headerName: "User ID", width: 100 },
    { field: "col2", headerName: "Title", width: "100%" },
  ];

  return (
    <Container>
      <div style={{ height: "75vh", width: "80vw" }}>
        {listData.length > 0 && (
          <DataGrid onCellClick={clicked} rows={rows} columns={columns} />
        )}
      </div>
    </Container>
  );
};

export default ListPage;
