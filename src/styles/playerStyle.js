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
    zIndex: 300
  },
  artwork: { height: '2.5em', width: '2.5em' },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5em'
  },
  controls: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
    // paddingBottom: '0.5em'
  },
  volume: {
    display: 'flex',
    width: '25%',
    alignItems: 'baseline'
  }
};
