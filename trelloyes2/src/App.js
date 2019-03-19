import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const{store} = this.props;
    
    
    
    return (
      
      <div className="App">
        {store.lists.map(
          list=> <List 
          header={list.header} 
          
          cards = {list.cardIds.map(id=>store.allCards[id])
          
          } 
          
          key={list.id}>
          </List>
        )}
      </div>
    );
  }
}

export default App;
