import React from 'react';
import TodoItem from './Todoitem';

export default class TodoList extends React.Component {

    render(){
        return(
            <ul className="list-group my-5">
            <h3 className="text-capitalize text-center"> </h3>
                <TodoItem />
                <button type="button" className="btn btn-block btn-danger mt-3">clear list</button>
            
            </ul>
        )
    }

}