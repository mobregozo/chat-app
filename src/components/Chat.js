import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import InputChat from './InputChat';
import ContactList from './ContactList';

class Chat extends Component {

  constructor(props) {    
    super(props);

    this.state = {contacts: [], chats:[]};
    this.addChat = this.addChat.bind(this);
  }

  addChat(chat) {
    this.setState({
      chats: this.state.chats.concat([ chat ])
    });
  }

  render() {
  
    return (
      <div className="main-window">
        <div>
          <ChatWindow chatList={this.state.chats}></ChatWindow>
          <InputChat onSubmit={this.addChat}></InputChat>
        </div>
        <ContactList contactList={this.state.contacts}></ContactList>
      </div>
    );
  }
}

export default Chat;