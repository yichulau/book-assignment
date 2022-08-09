import React from 'react'
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';
import Box from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const NotFoundBooks = () => {
  const theme = useTheme();
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
                 <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          "Do not Fall Into the Rabbithole"
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Start Searching For a book!
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      image="./images/fallguys.png"
                    />
                  </Card>
            <br/>
            </Box>
        </Grid>
    </Container>
    </>
  )
}

export default NotFoundBooks