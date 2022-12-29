import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export default function Preview({ open, setOpen, projectName, projectImage }) {

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <Box
                    sx={{
                        // padding: '1rem !important',
                        maxWidth: 'none',
                        width: '100%'
                    }}
                >
                    <DialogContent
                        sx={{
                            width: '100%'
                        }}
                    >
                        <Card
                            sx={{
                                width: '100%'
                                // padding: '1rem !important'
                            }}
                        >
                            <CardHeader
                                sx={{
                                    p: "1rem !important"
                                }}
                                action={
                                    <Button
                                        variant='contained'
                                        color={'buttonColor'}
                                        sx={{
                                            p: '0.6rem !important',
                                            translate: '0% 8%'
                                        }}
                                    >
                                        Vist Project
                                    </Button>
                                }
                                title={projectName}
                                subheader={'project'}
                            />
                            <CardMedia
                                component={'img'}
                                image={projectImage}
                                height={300}
                            />
                            <CardContent>
                                <Typography
                                    variant={'subtitle1'}
                                    color={'secondary.third'}
                                    p={'0.6rem 1rem !important'}
                                >
                                    This App allows the users to get the experience
                                    of real-time chating through the socket pathway.
                                </Typography>
                            </CardContent>
                        </Card>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}