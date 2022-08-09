import React, { useState } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { CardMedia, Grid, Typography } from '@mui/material';
import CustomizedDialogs from './Dialog';

const ListBooks = ( {book} ) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const booksList = book.map(books => {
        console.log(books)
        return (
            <TableRow
            key={books.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell width="200" component="th" scope="row">
                    <CardMedia 
                    component="img"
                    height="200"
                    width="500"
                    image={books.volumeInfo.imageLinks.smallThumbnail}
                    />
                </TableCell>
                <TableCell align="left">  {books.volumeInfo.title} </TableCell>
                <TableCell align="left">  {books.volumeInfo.authors}</TableCell>
                <TableCell align="left">  {books.volumeInfo.publishedDate}</TableCell>
                <TableCell align="left">  {books.volumeInfo.language}</TableCell>
                <TableCell align="left">
                    <CustomizedDialogs books={books} />
                </TableCell>
            </TableRow>
        )
    });

  
  return (
    <>
        <Container maxWidth="md">
                <Grid container alignItems="center">
                 <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Preview</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Author</TableCell>
                                <TableCell align="left">Published Date</TableCell>
                                <TableCell align="left">Language</TableCell>
                                <TableCell align="left">More Info</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {booksList} 
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={book.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                </Grid>
            </Container>

    </>
  )
}

export default ListBooks