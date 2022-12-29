import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const ContentHeaders = styled('div')({
    color: 'darkslategray',
    padding: 8,
    borderRadius: 4,
    position: 'relative',
    display: 'inline',

    ':before': {
        content: '""',
        display: 'inline',
        position: 'absolute',
        right: '0',
        left: '0',
        height: '10px',
        background: '#ccc',
        borderRadius: '40%',
        transform: 'translateX(-100%)',
        bottom: '14%',
        transition: 'all 0.2s ease-out'
    },
    ':after': {
        content: '""',
        position: 'absoulte',
        width: '100%',
        height: '100%',
        bgcolor: 'red'
    }
});

export default function IntroHeaders({ header }) {
    return (
        <div
            className={header.toLowerCase()}
            onClick={e => {
                e.preventDefault();
            }}
            style={{
                cursor: 'text',
                userSelect: 'text'
            }}
        >
            <ContentHeaders>
                <Typography
                    component={'p'}
                    variant={'h3'}
                    textTransform={'capitalize'}
                    sx={{
                        mt: '1rem !important',
                        p: '1rem 2rem !important',
                        textAlign: 'start',
                        fontFamily: 'monospace',
                        color: '#ccc'
                    }}
                >
                    {header}
                </Typography>
            </ContentHeaders>
        </div>
    );
}