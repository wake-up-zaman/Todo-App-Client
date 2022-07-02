import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import '../../App.css';
import Loading from '../Loading/Loading';
import Todo from './Todo';
import 'react-calendar/dist/Calendar.css';


const Calender = () => {
    const [date,setDate]=useState(new Date());
    const onChange=date=>{
        setDate(date)
    }
    const { data: items, isLoading, refetch } = useQuery('items', () => fetch('http://localhost:5000/items', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleBooking = event => {
        // if(event.keycode===15){
            event.preventDefault();
            const todo = {
                todo: event.target.todo.value,
            }
            fetch('http://localhost:5000/items', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
    
                        event.target.todo.value = '';
                        refetch();
                    }
                    else {
                        toast.error("Updating does not Successful !");
                    }
                });
        // }


    }
    const handleDelete=id=>{
        const url=`http://localhost:5000/items/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
        })
    
}

    return (
        <div className='calenderContainer'>
            <div className='mt-6'>
               <Calendar className='calender' onChange={onChange} value={date} />
            </div>
            <div>
                <form onSubmit={handleBooking} className='mt-3 Form'>
                    <input className='mb-3 border-2 rounded-lg input-quantity h-12 todo-input' type='text' name='todo' placeholder='Write Your Task' required />
                    <input type="submit" value="Add" className="btn btn-info" />
                </form>

                <div className='taskCalender'>
                    <h2 className='ml-24 font-serif font-bold mb-5 '>Your Task List</h2>
                    {
                        items.map((todo) =>
                            <div className='todoContainer'>
                            <p className='todoCalender'>{todo.todo}</p>
                            <button onClick={()=>handleDelete(todo._id)} class=""><p className='icon'><RiDeleteBin6Fill /></p></button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Calender;