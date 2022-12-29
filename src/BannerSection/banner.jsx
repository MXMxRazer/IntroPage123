import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ConnectingAirportsOutlined, Google } from '@mui/icons-material';
import { Container, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { styledData } from '../dynamicStyles/styles';
import { useTheme } from '@mui/material/styles';

export default function Banner() {

    useEffect(() => {
        window.addEventListener('load', () => {
            const rollers = document.querySelectorAll('.rollingNumbers');
            const interval = 0;

            const exp = rollers[0];
            let s = false;
            const observe = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !s) {
                    s = true;
                    rollers.forEach(prev => {
                        let startValue = 0;
                        let endValue = 2000;

                        let duration = Math.floor(interval / endValue);
                        let counter = setInterval(() => {
                            startValue += 1;
                            prev.textContent = startValue;
                            if (startValue === endValue) {
                                clearInterval(counter);
                            }
                        }, duration);
                    });
                }
            })

            observe.observe(exp);
        });

    }, []);

    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyles = {
        Container: {
            ...matchSm && { ...styledData.breakpoints.sm.banner.Container }
        },
        dataContainer: {
            ...matchSm && { ...styledData.breakpoints.sm.banner.dataContainer }
        },
        Typography: {
            ...matchSm && { ...styledData.breakpoints.sm.Typography.variant }
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                ...dynamicStyles.Container
            }}
        >
            <Box
                sx={{
                    mt: '14%',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: 'auto',
                    bgcolor: 'transparent',
                    borderRadius: '1rem',
                    boxShadow: '0px 4px 24px 10px rgba(98, 98, 98, 0.6)',
                    ...dynamicStyles.dataContainer
                }}
            >
                {
                    Array(['2000', 'Active'], ['2000', 'Registered'], ['2000', 'Used'])
                        .map(item => {
                            return (
                                <div
                                    key={item.id}
                                >
                                    <Box
                                        key={item.id}
                                        className={'middleBox'}
                                        sx={{
                                            padding: '1rem 6rem !important'
                                        }}
                                    >
                                        <Typography
                                            className={'rollingNumbers'}
                                            variant={'h2'}
                                            fontWeight={'500'}
                                            mb={'0.6rem'}
                                            color={'primary.contrastText'}
                                            sx={{
                                                ...dynamicStyles.Typography.h2
                                            }}
                                        >
                                            {item[0]}
                                        </Typography>
                                        <Typography
                                            variant={'h5'}
                                            fontWeight={'500'}
                                            color={'primary.contrastText'}
                                            sx={{
                                                ...dynamicStyles.Typography.h5
                                            }}
                                        >
                                            {item[1]}
                                        </Typography>
                                    </Box>
                                    {(item[1] !== 'Used') ? <Divider orientation='vertical' flexItem /> : null}
                                </div>
                            );
                        })
                }
            </Box>
        </Container>
    );
}