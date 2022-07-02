import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Completed_Task = () => {
    const { data: completedTask, isLoading, refetch } = useQuery('completedTask', () => fetch('https://apologetic-crown-36911.herokuapp.com/completedTask', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete=id=>{
            const url=`https://apologetic-crown-36911.herokuapp.com/completedTask/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                refetch();
            })
        
    }
    return (
        <div className='todoMain'>
            <div >
                <h2 className='text-center font-bold mt-5 completedHeading'>Completed Task List</h2>
                {
                    completedTask.map((todo) =>
                    <div className='todoContainer'>
                        <div className=''>{todo.todo}</div>
                        <button onClick={()=>handleDelete(todo._id)} class=""><p className='icon'><RiDeleteBin6Fill /></p></button>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Completed_Task;