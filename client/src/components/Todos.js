import React from 'react';

const Todos = (props) => {
        return (
            <div>
                <ul>
                    {
                        props.todos.map((element, index) => {
                            console.log(element);
                            
                            return(
                                <li onClick={props.deleteTodo} key={index}>{element}</li>
                            );
                        })
                    }
                </ul>

            </div>
        );
}

export default Todos;
