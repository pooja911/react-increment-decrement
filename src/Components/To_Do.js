import React from "react";

class ToDo extends React.Component {
    render(){
    return(
        <div className="ui main">
            <h2>Add Items To List</h2>
            <div className="field">
            <label>Items</label>
            <input type="text"
                
            placeholder="Enter Items"></input>
            <button >+</button>

            </div>
        </div>
    );
    }
}

export default ToDo;