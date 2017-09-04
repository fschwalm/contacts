import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

class App extends Component {
  state = {
    contacts: [],
    screen: 'list',
  };
  componentDidMount = () => {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
  };

  removeContact = (contact) => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id),
    }));
    ContactsAPI.remove(contact);
  };

  navigateToAddContact = () => {
    this.setState({ screen: 'create' });
  };

  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact}
            onNavigateToAddContact={this.navigateToAddContact}
            contacts={this.state.contacts}
          />
        )}
        {this.state.screen === 'create' && <CreateContact />}
      </div>
    );
  }
}

export default App;
