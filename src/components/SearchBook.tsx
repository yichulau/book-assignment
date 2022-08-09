import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';
import Box from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import NotFoundBooks from './NotFoundBooks';
import DataTable from './DataTable';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { CardMedia,  Typography } from '@mui/material';
import CustomizedDialogs from './Dialog';

const SearchBook = () => {
    const [books, booksLists] = useState([]);
    const [search, setSearch] = useState('');

    const SearchingBook = (e) =>{
        if(e.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyCFu1ICSea2ggd1XSE9KOOGpX1DBQfwEr8')
                .then(res=> booksLists(res.data.items))
                .catch(err=> console.log(err))
        }
    }

    // useEffect(()=>{
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCFu1ICSea2ggd1XSE9KOOGpX1DBQfwEr8')
    //     .then((res) => booksLists(res.data.items))
    //     .catch(err=> console.log(err,"some Error"))
   
    // },[]);

    const getTitle = (books) => {
        return books.row.volumeInfo.title;
    }
    const getAuthor = (books) => {
        return books.row.volumeInfo.authors;
    }
    const getDate = (books) => {
        return books.row.volumeInfo.publishedDate;
    }
    const getLanguage = (books) => {
        return books.row.volumeInfo.language;
    }

    const columns: GridColDef[] = [
        {field: 'preview', headerName: 'Preview' , width: 150 ,
        renderCell: (books)=> <CardMedia 
            component="img"
            height="200"
            width="500"
            image={books.row.volumeInfo.imageLinks!.smallThumbnail}
            />
        },
        {field: 'title', headerName: 'Title', width: 150, valueGetter: getTitle},
        {field: 'author', headerName: 'Author', width: 150, valueGetter: getAuthor},
        {field: 'date', headerName: 'Published Date', width: 150, valueGetter: getDate},
        {field: 'language', headerName: 'Language', width: 150, valueGetter: getLanguage},
        {field: 'more', headerName: 'More Info', width: 150,
            renderCell: (books) => <CustomizedDialogs books={books.row} />
        }
    ];

  return (
   
    <>
        <Container maxWidth="sm">
            <Grid container alignItems="center">
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                > 
                    <TextField fullWidth label="Search Bar" id="fullWidth" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={SearchingBook}
                    />
                <br/>
                </Box>
            </Grid>
        </Container>
        {
            books.length > 0  ? (
            <DataTable 
                rows={books} 
                columns={columns} 
                loading={!books.length}
                />
            // <ListBooks book={books}/> 
            ) : ( <NotFoundBooks /> ) 
        }   
    </>
  )
}

export default SearchBook