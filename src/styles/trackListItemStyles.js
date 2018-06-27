const trackListItemStyles = theme => ({
  card: {
    maxWidth: 800,
    marginTop: '1em'
  },
  actions: {
    display: 'flex'
  },
  actionButton: {
    height: 20,
    width: 20
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    height: 30,
    width: 30
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1em',
    marginRight: '1em'
  },
  titleLink: { textDecoration: 'none', color: 'black' }
});

export default trackListItemStyles;
