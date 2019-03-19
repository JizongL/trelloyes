import React,{Component} from 'react'
import Card from './Card'
import './List.css'
import renderer from 'react-test-renderer'

const List = function(props){
  console.log(props.cards);
  return(
    <section className="List">
      <header>
      <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card,i) =>
          <Card
            
            key={i}
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </section>
  )
}


export default List;
