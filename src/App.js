import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import InputChat from './components/InputChat';
import ContactList from './components/ContactList';


class App extends Component {

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
      <div className="App">
        <div className="chat-window">
          <ChatWindow chatList={this.state.chats}></ChatWindow>
          <InputChat onSubmit={this.addChat}></InputChat>
        </div>
        <ContactList contactList={this.state.contacts}></ContactList>
      </div>
    );
  }
}

export default App;