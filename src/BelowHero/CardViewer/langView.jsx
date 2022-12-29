import { CardActionArea, Grow, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { FaPython } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import CardView from './cardView';
import HTML5 from '../../html5.svg';
import CSS3 from '../../css.svg';
import Java from '../../java-icon.svg';
import Javascript from '../../javascript.svg';
import CPP from '../../c++.svg';
import XML from '../../xml.svg';
import Python from '../../python-icon.svg';

export default function LangView({ key, items }) {

    const iconsForCardsScripting = [
        [HTML5, 'HTML'],
        [CSS3, 'CSS'],
        [Javascript, 'Javascript'],
        [XML, 'XML'],
        [Python, 'Python']
    ]

    const iconsForCardsProgramming = [
        [CPP, 'CPP']
    ]

    const [click, setClick] = useState({
        script: false,
        prog: false
    });

    const icon = (
        <Paper
            elevation={8}
            sx={{
                bgcolor: 'secondary.main',
                mr: '1rem',
                width: '100%',
                overflow: 'auto',
                position: 'relative',
                userSelect: 'none',

                '&:nth-child(2)': {
                    mr: '0 !important'
                }
            }}
        >
            <CardActionArea
                onClick={e => {
                    if (items == 'Scripting Language') {
                        setClick(prev => {
                            return {
                                ...prev,
                                script: true
                            }
                        });
                    }

                    setClick(prev => {
                        return {
                            ...prev,
                            prog: true
                        }
                    })
                }}
                sx={{
                    p: '0.8rem 0.4rem !important',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >
                {
                    (items === 'Scripting Language')
                        ?
                        (<BsCodeSlash
                            size={80}
                        />)
                        :
                        (<FaPython
                            size={80}
                        />)
                }
                <Typography
                    variant={'h6'}
                    textAlign={'center'}
                    sx={{
                        position: 'relative',
                        fontWeight: '400'
                    }}
                >
                    {items}
                </Typography>
            </CardActionArea>
        </Paper>
    );

    return (
        <Grow
            key={key}
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={1500}
        >
            {
                (click.script || click.prog) ?
                    ((click.script) ?
                        (<>
                            {
                                iconsForCardsScripting.map(item => {
                                    return (
                                        <CardView
                                            key={item.id}
                                            icons={item[0]}
                                            desc={item[1]}
                                        />
                                    )
                                })
                            }
                        </>)
                        :
                        (
                            <>
                                {
                                    iconsForCardsProgramming.map(item => {
                                        return (
                                            <CardView
                                                key={item.id}
                                                icons={item[0]}
                                                desc={item[1]}
                                            />
                                        )
                                    })
                                }
                            </>)
                    )
                    :
                    (icon)
            }
        </Grow>
    );
}