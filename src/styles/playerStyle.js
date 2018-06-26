export default {
  player: {
    display: 'flex',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    background: '#fafafa',
    borderTop: '1px solid #e0e0e0',
    color: '#424242',
    zIndex: 2000
  },
  artwork: { height: '2.5em', width: '2.5em' },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5em'
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '1em'
  },
  volume: {
    display: 'flex',
    flexGrow: 1,
    marginRight: '1em'
  }
};
