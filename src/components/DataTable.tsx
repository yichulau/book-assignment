import React, {useState} from 'react';
import {
    DataGrid,
  } from '@mui/x-data-grid';
import Box from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const DataTable = ({
    rows,
    columns,
    loading

}) => {
    const [pageSize, setPageSize] = useState(5)
    
  return (
    <>
        <Box
        sx={{
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
        }}
        > 
           <div style={{ height: 500, width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid 
          
                        rowHeight={200}
                        rows={rows} 
                        columns={columns} 
                        pageSize={pageSize}
                        rowsPerPageOptions={[5,10,15]}
                        pagination
                        onPageSizeChange={((newPageSize)=> setPageSize(newPageSize))}
                        loading={loading}
                        />
                    </div>
                </div>
            </div>
        </Box>
    </>
  )
}

export default DataTable