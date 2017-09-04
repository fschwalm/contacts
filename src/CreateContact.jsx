import React from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';
import ImageInput from './ImageInput';

const propTypes = {
  onCreateContact: PropTypes.func.isRequired,
};

class CreateContact extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    this.props.onCreateContact(values);
  };

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput className="create-contact-avatar-input" name="avatarURL" maxHeight={64} />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

CreateContact.propTypes = propTypes;

export default CreateContact;
