import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tableRows, tableColumns } from "../../data/tableData";
import { Box, Typography } from "@mui/material";
import { buttonsData } from "../../data/menu";
import CustomIconButtons from "../CustomIconButtons";

export default function CustomerTable() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {buttonsData.map((value, index) => (
            <Box key={index}>
              <CustomIconButtons
                buttonText={value.buttonText}
                buttonIcon={value.buttonIcon}
              />
            </Box>
          ))}
        </Box>
        {/* <Typography>10 out of 42</Typography> */}
      </Box>

      <div style={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={tableRows}
          columns={tableColumns}
          rowHeight={35}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "Mui-even" : "Mui-odd"
          }
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[10, 20, 50]}
          checkboxSelection
        />
      </div>
    </>
  );
}
