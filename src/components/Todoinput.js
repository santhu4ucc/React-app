import React from 'react';

export default class TodoInput extends React.Component {

    render(){
        return(
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepand">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add a todo item" />
           
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">Add item</button>
            
            </form>
            </div>
           
        );
    }

}