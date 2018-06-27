const mediaButtonStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '6em',
    width: '6em'
  },
  image: {
    position: 'relative',
    height: '8em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      width: '8em !important', // Overrides inline-style
      height: '8em'
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageIcon': {
        border: '1px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    height: '8em',
    width: '8em'
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
    height: '8em',
    width: '8em'
  },
  imageIcon: {
    position: 'relative'
  }
});

export default mediaButtonStyles;
