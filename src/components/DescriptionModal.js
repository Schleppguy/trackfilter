import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

class DescriptionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { track } = this.props;
    return (
      <div style={{ marginTop: '0.5em' }}>
        <Link active icon='add' label='Show Description' onClick={this.openModal} style={{ marginLeft: '3em', marginBottom: '0.5em' }} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <Card>
            <CardTitle
              avatar={track.user.avatar_url}
              title={track.user.username}
            />
            <CardTitle
              title={track.title}
            />
            <CardText>{track.description ? track.description.split('\n').map((line, i) => <p key={i}>{line}</p>) : ''}</CardText>
            <CardActions>
              <Button icon='remove' label='Hide Description' onClick={this.closeModal} />
            </CardActions>
          </Card>
        </Modal>
      </div>
    );
  }
};

export default DescriptionModal;
