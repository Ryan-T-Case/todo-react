import React from 'react';

const Todos = (props) => {
        return (
            <div>
                <ul>
                    {/* READ Todos */}
                    {
                        props.todos.map((element, index) => {                            
                            return(
                                <div key={'list-item-' + index}>
                                    <li id={element} key={index}>{element}</li>
                                    <button id={element} onClick={props.updateTodo} key={"update-" + index}>Update</button>
                                    <button id={element} onClick={props.deleteTodo} key={"delete-button-" + index}>Delete</button>
                                </div>
                            );
                        })
                    }
                </ul>

            </div>
        );
}

export default Todos;
