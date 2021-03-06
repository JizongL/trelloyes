import React, { Component } from 'react';
import List from './List'
import './App.css';


class App extends Component {
  static defaultProps ={
    store:{
      list:[],
      allCards:{}
    }
  }
  render() {
    const {store} = this.props
    return (
    <main class='App'>  
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
      {
         store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
          />
          ))
      }
      
      

    </div>
        
      
    </main>
   );
  }
}

export default App;
