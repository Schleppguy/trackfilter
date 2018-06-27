const homeStyles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    minHeight: 800
  },
  heroBox: {
    height: '12em',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '8em'
    },
    backgroundColor: theme.palette.primary.main
  },
  heroImg: {
    width: 400,
    marginTop: '3em',
    overflow: 'hidden',
    opacity: 1,
    [theme.breakpoints.down('xs')]: {
      width: 250,
      marginTop: '2em'
    }
  },
  button: {
    marginTop: '2em'
  },
  headline: {
    color: theme.palette.primary.dark,
    margin: '1em'
  }
});

export default homeStyles;
