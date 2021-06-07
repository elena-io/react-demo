//The goal is to get Webpack to turn this into code that we can ru in the browser 
//Webpack gives the ability to traspile the code 
//JSX being tranpiled to Javascript via Babel
//created webpack.config.js - when we run webpack i will pick upm this file 
//cat dist/main.js - contains all create elements
//when making a change we need to let webpack know

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

//Presentational components - "how things look"
//props - properties, used for passing data from one component to another 

//const Item = (props)=> { destructuring
const Item = ({ item, removeItem, idx })=> {
    //console.log(props); - object
    return (
        <li> 
            { item }
            <button onClick={ ()=> removeItem(idx) }>x</button>
        </li>
    );
}

class App extends React.Component{
    constructor(){
        super();
        // state is always an object with keys and values 
        this.state = {
            //items: items, same as 
            items,
            message: ''
        };
        //bind is a method, this binding is nessasry to make 'this' work in the calllback 
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(){
        this.setState({ items: [...this.state.items, Math.random()] });
    }
    removeItem(idx){
        const items = this.state.items.filter((_, _idx)=> _idx !== idx)
        this.setState({ items })
        console.log(this, idx);
    }
    render(){
        const { items, message } = this.state;
        const { addItem, removeItem } = this;
        return (
            <div>
                <h2> Count is { items.length }</h2>
                <h3> { message } </h3>
                <button onClick={ addItem }> Add an Item </button>
                <ul>
                    {
                        items.map(( item, idx )=> <Item idx={ idx } removeItem={ removeItem } key={ idx } item={ item }/>)
                    }
                </ul>    
            </div>    
        )

        /*
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                `Count is ${ items.length }`
            ),
            React.createElement(
                'h3',
                null,
                message
            ),
            React.createElement(
                'ul',
                null,
                //giving a collection, key 
                items.map((item, idx) => React.createElement('li', { key: idx }, item))
            )
            
             
        );*/
    }
}

const items = [1,2]

ReactDOM.render(<App />, app)