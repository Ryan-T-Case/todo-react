import React from 'react';

const Todos = (props) => {
        return (
            <div>
                <ul>
                    {/* READ Todos */}
                    {
                        props.todos.map((element, index) => {                            
                            return(
                                <li onClick={props.deleteTodo} id={element} key={index}>{element}</li>
                            );
                        })
                    }
                </ul>

            </div>
        );
}

export default Todos;
