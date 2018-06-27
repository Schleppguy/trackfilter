const homeStyles = theme => ({
  heroBox: {
    height: '12em',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      // width: '8em !important', // Overrides inline-style
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
      // width: '8em !important', // Overrides inline-style
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
