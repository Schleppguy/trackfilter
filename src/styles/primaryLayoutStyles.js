const drawerWidth = 240;
const primaryLayoutStyles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works,
    [theme.breakpoints.up('md')]: {
      marginLeft: `${drawerWidth}px`
    },
    marginTop: '3.5em',
    paddingBottom: '6em'
  },
  toolbar: theme.mixins.toolbar
});

export default primaryLayoutStyles;
