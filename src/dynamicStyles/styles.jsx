const styledData = {
    breakpoints: {
        'sm': {
            Position: {
                relative: {
                    position: 'relative'
                }
            },
            Typography: {
                variant: {
                    h1: {
                        fontSize: '4rem'
                    },
                    h2: {
                        fontSize: '2.7rem',
                        fontWeight: 400
                    },
                    h3: {
                        fontSize: '2.2rem',
                        fontWeight: 400,
                        maxWidth: '100%'
                    },
                    h4: {
                        fontSize: '1.8rem',
                        fontWeight: 400,
                        maxWidth: '100%'
                    },
                    h5: {
                        fontSize: '1.4rem'
                    },
                    subtitle1: {
                        fontSize: '1.1rem'
                    },
                    subtitle2: {
                        fontSize: '0.9rem'
                    }
                }
            },
            appBar: {
                Container: {
                    display: 'flex',
                    p: '0rem 0.4rem 0rem 0.8rem !important',
                    m: '0rem !important'
                },
                middleBox: {
                    display: 'none'
                },
                iconButton: {
                    display: 'flex',
                    width: 'fit-content',

                    '.topButton': {
                        display: 'none'
                    },
                    '.topIcon': {
                        display: 'flex'
                    }
                }
            },
            heroSection: {
                Container: {
                    // border: '2px solid red',
                    padding: '0rem 0.6rem !important',
                    height: 'auto'
                }
            },
            banner: {
                Container: {
                    padding: '1rem !important',

                    '&:hover': {
                        bgcolor: 'red'
                    }
                },
                dataContainer: {
                    flexDirection: 'column',
                    margin: '0rem 1rem !important',
                    width: '80%'
                }
            },
            introductionSection: {
                Container: {
                    marginTop: '0.4rem',
                    flexDirection: 'column',

                    '#imagePortion': {
                        width: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    },

                    '#infoPortion': {
                        width: '100%'
                    }
                },
                CardContents: {

                }
            },
            fullprojectSection: {
                Container: {
                    flexDirection: 'column-reverse',
                    justifyContent: 'center',

                    '#imagePortion': {
                        width: '60%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    },

                    '.carousel': {
                        height: '100%',
                        width: '100%',
                        padding: '1rem 2rem !important'
                    }
                }
            },
            contactSection: {
                Container: {
                    flexDirection: 'column',
                    p: '1rem !important'
                },
                InnerContainer: {
                    width: '100%',
                    padding: '0rem 0.4rem !important',

                    '.email': {
                        marginTop: '0.8rem !important',
                        marginBottom: '0.4rem !important'
                    }
                }
            }
        },
        'md': {
            appBar: {

            },
            banner: {
                display: 'none'
            }
        },
        'lg': {
            appBar: {

            },
            banner: {
                display: 'none'
            }
        },
        'xl': {
            appBar: {

            },
            banner: {
                display: 'none'
            }
        }
    }
};

export { styledData };  