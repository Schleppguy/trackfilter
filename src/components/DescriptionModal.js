import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';

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
    return (
      <div style={{ marginTop: '0.5em' }}>
        <Link active icon='add' label='Show Description' onClick={this.openModal} style={{ marginLeft: '3em', marginBottom: '0.5em' }} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{this.props.track.title}</div>
            <div>{this.props.track.description}</div>
            <Button style={{ marginTop: '1em' }} icon='remove' label='Hide Description' raised primary onClick={this.closeModal} />
          </div>
        </Modal>
      </div>
    );
  }
};

export default DescriptionModal;
