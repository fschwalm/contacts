import React from 'react';

class CreateContact extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor=''>Nome</label>
        <input type='text'/>
        <label htmlFor=''>Email</label>
        <input type='text'/>
      </form>
    );
  }
}

export default CreateContact;
