import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <label htmlFor="todo">Todo Item</label>
                <input placeholder="What do you need to do?" id="todo" onChange={props.handleInputChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;