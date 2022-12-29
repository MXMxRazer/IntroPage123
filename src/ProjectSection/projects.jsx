import { Button, Card, CardActions, CardContent, CardMedia, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import Preview from "./dialog";
import AlertDialog from "./dialog";


export default function ProjectSection({ itemTag, projectName, projectImage, projectDescription }) {

    const [open, setOpen] = useState(false);

    const setTrue = () => {
        setOpen(prev => true);
    }

    const setFalse = () => {
        setOpen(prev => false);
    }

    const projectCards = (
        <Card
            sx={{
                filter: (itemTag === 3) ? 'blur(0.2rem)' : 'none',
                opacity: (itemTag === 3) ? '0.8' : 'none',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                pb: '1.4rem !important',
                bgcolor: 'primary.main',
                borderRadius: '2rem',
                mr: '1rem',
                boxShadow: '8px 4px 0px 4px #333',

                '&:last-child': {
                    mr: '0 !important'
                }
            }}
        >
            <CardMedia
                component={"img"}
                image={projectImage}
                alt={"Could not load from the Server!"}
                sx={{
                    width: '100%',
                    height: '18rem',
                    objectFit: 'cover'
                }}
            />
            <CardContent
                sx={{
                    padding: '1rem 1.4rem !important',
                    mb: '0.8rem'
                }}
            >
                <Typography
                    gutterBottom
                    variant={'h6'}
                    sx={{
                        fontWeight: '400',
                        textAlign: 'start'
                    }}
                >
                    {projectName}
                </Typography>
                <Typography
                    variant={"body2"}
                    sx={{
                        fontWeight: '100',
                        color: 'secondary.auxillary',
                        textAlign: 'start',
                        lineHeight: '1.4rem'
                    }}
                >
                    <Typography
                        variant={"body1"}
                        sx={{
                            color: '#666',
                            display: 'inline',
                            mr: '0.6rem'
                        }}
                    >
                        Used Technologies:
                    </Typography>
                    {projectDescription}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    width: '100%',
                    display: 'inherit',
                    justifyContent: 'center'
                }}
            >
                <Button
                    variant={"contained"}
                    onClick={e => {
                        console.log(`Item ID: ${itemTag}`)
                        setTrue();
                    }}
                    sx={{
                        padding: '0.6rem !important',
                        width: '80%',
                        bgcolor: 'secondary.main',
                        color: 'secondary.auxillary'
                    }}
                >
                    Pre-view
                </Button>
                <Preview
                    open={open}
                    setOpen={setOpen}
                    projectName={projectName}
                    projectImage={projectImage}
                />
            </CardActions>
        </Card>
    );

    return (
        projectCards
    )
}