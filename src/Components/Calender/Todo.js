import React from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Todo = ({ items,todo,handleDelete,refetch }) => {
    const handleComplete = (event) => {

        event.preventDefault();
        const completedTask = {
            todo: todo.todo,
        }
        fetch('https://apologetic-crown-36911.herokuapp.com/completedTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completedTask)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                    refetch();
                }
                else {
                    
                }
            });

    }
    return (
        <div className='todoMain'>
            <div className='todoContainer'>
                <h3>{todo.todo}</h3>
                <div className='icons'>
                <button onClick={handleComplete} class=""><p className='icon'><FaCheck /></p></button>
                    <p className='icon'><BsPencilFill /></p>
                    <button onClick={()=>handleDelete(todo._id)}><p className='iconDelete'><RiDeleteBin6Fill /></p></button>
                </div>
            </div>


        </div>
    );
};

export default Todo;