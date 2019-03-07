import React from 'react';

const Todos = (props) => {
        return (
            <div>
                <ul>
                    {/* READ Todos */}
                    {
                        props.todos.map((element, index) => {                            
                            return(
                                <div>
                                    <li onClick={props.deleteTodo} id={element} key={index}>{element}</li>
                                    <button id={element} onClick={props.updateTodo} key={index}>Update</button>
                                </div>
                            );
                        })
                    }
                </ul>

            </div>
        );
}

export default Todos;
