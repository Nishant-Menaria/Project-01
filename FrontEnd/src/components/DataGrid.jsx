import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },  
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'PhoneNumber',
    type: 'number',
    width: 110,
    editable: true,
  }
];


export default function DataGridDemo({allUsers}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allUsers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
