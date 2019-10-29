import React from 'react';

export default class TodoItem extends React.Component {

    render(){
        return(
            <li >
            <div className="todo-icon">
    
            <span className="mx-2 text-sucess">
                <i className="fa fa-pen"></i>
            </span>
            <span className="mx-2 text-danger ">
            <i className="fa fa-trash"></i>
            </span>
           
            </div>
            </li>
        );
    }

}