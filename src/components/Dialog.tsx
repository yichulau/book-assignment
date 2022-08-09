import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { CardMedia, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Tooltip from '@mui/material/Tooltip';
import CardContent from '@mui/material/CardContent';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs( {books} ) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Read More">
          <IconButton size='medium' onClick={handleClickOpen}>
              <ReadMoreIcon />
          </IconButton>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle 
        sx={{
            fontWeight:"700",
        }} 
        id="customized-dialog-title" onClose={handleClose}>
        {books.volumeInfo.title}
        </BootstrapDialogTitle>
        <DialogContent dividers  >
            <Grid container spacing={2}>
                <Grid item lg={8}>
                    <CardMedia
                     component="img"
                     height="500"
                     image={books.volumeInfo.imageLinks.thumbnail}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12}>
                    <Box sx={{ display: 'flex', flexDirection:'column'}}>
                        <CardContent sx={{ 
                            flex: '1 0 auto',
                            paddingLeft: "0px" 
                            }}>
                            <Typography sx={{
                                fontWeight:"700"
                            }} component="div" variant="h5">
                            {books.volumeInfo.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                            {books.volumeInfo.authors}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                            {books.volumeInfo.publishedDate}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        display:'flex', flexDirection:'row'
                    }}>
                        <Tooltip title="Read More">
                            <IconButton size='medium' href={books.volumeInfo.previewLink}>
                                <ReadMoreIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
            <br />
            <Typography sx={{
                fontWeight:"700",
                paddingBottom:"10px"
            }} dividers>
                Description:
            </Typography>
            <Typography>
             {(typeof books.volumeInfo.description === 'undefined' || books.volumeInfo.description === '' || books.volumeInfo.description === null ? 'No Book Description Found' : books.volumeInfo.description)} 
                {/* {books.volumeInfo.description.slice(0,1000) + '......'} */}
            </Typography>
        </DialogContent>

      </BootstrapDialog>
    </>
  );
}

