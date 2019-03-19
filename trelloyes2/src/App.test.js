import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List'
import Card from './Card'
import STORE from './store'
import renderer from 'react-test-renderer'


describe('My Components',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('render List Component as expected',()=>{
    const tree = renderer
    .create(<List 
      header={STORE.lists[0].header} 
      
      cards = {STORE.lists[0].cardIds.map(id=>STORE.allCards[id])
      
      } 
      
      key={STORE.lists[0].id}>
      </List>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('render Card Component as expected',()=>{
    const tree = renderer
    .create(<Card
              
      key={'a'}
      title={STORE.allCards['a'].title}
      content={STORE.allCards['a'].content}
      
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  
})
