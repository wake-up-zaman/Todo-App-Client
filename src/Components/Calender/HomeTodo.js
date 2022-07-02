import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
const HomeTodo = () => {
    const { data: items, isLoading, refetch } = useQuery('items', () => fetch('https://apologetic-crown-36911.herokuapp.com/items', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete=id=>{
        const url=`https://apologetic-crown-36911.herokuapp.com/items/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
        })
    
}

    return (
        <div>
            <h2 className='remainingTask'>Remaining Task</h2>
{
                        items.map((todo) =>
                            <Todo
                                key={todo.key}
                                todo={todo}
                                handleDelete={handleDelete}
                                refetch={refetch}
                                items={items}
                            >
                            </Todo>
                        )
                    }
        </div>
    );
};

export default HomeTodo;