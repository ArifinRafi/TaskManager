import React, { useState } from 'react';
import { MdOutlineDoneAll } from "react-icons/md";
import { MdCancel } from "react-icons/md";
const Home = () => {
         const [activeButton, setActiveButton] = useState('');
         const [taskname, settaskname] = useState('');
         const [deadline, setdeadline] = useState('');

         const handleActiveButton =(buttonName)=> {
                setActiveButton(buttonName);
         }

         const handleSubmit =(event)=>{
            event.preventDefault();
            const form = event.target;
            const taskname = form.taskname.value;
            const deadline = form.deadline.value;
            settaskname(taskname);
            setdeadline(deadline);
        }

    

    return (
        <div className='flex flex-col  items-center justify-center h-screen bg-slate-900'>
            <div className='bg-slate-800  shadow-xl'>

            <form onSubmit={handleSubmit} className='flex lg:flex-row flex-col  p-12 rounded-xl items-center justify-center gap-4' action="">
           <div className='flex flex-col justify-start'>
           <label className='text-white' htmlFor="">Task Name:</label>
            <input type="text" name='taskname' placeholder="Task Name" className="input input-bordered w-full max-w-xs" />
           </div>
           <div className='flex flex-col justify-start'>
           <label className='text-white' htmlFor="">Deadline:</label>
            <input type="text" name='deadline' placeholder="Deadline" className="input input-bordered w-full max-w-xs" />
           </div>
                <button className='btn btn-primary mt-6'>Add Task</button>
                
            </form >


            <div className='p-4 ml-8 flex items-center lg:justify-start justify-center'>
            <button className={`btn ${activeButton==='todo'? 'btn-primary' : 'bg-slate-900 text-white'} rounded-none border-none`} onClick={()=>handleActiveButton('todo')} >To Do</button>
            <button className={`btn ${activeButton === 'completed'? 'btn-primary': 'bg-slate-900 text-white'} rounded-none border-none`} onClick={()=> handleActiveButton('completed')} >Completed</button>
            </div>

             {/* To do task list  */}
            <div className='flex pb-4 items-center jsutify-center'>
                {activeButton === 'todo' && <div className='bg-slate-700 flex flex-col justify-center w-[85%] rounded-md h-32 text-white ml-12 shadow-2xl'><h2 className='text-3xl px-4 text-blue-800 font-bold'>{taskname}</h2>
                <div className='flex justify-between'>
                <p className='text-white px-4 text-sm'>{deadline}</p>
               <div className='flex items-center gap-4 justify-center'>
               <MdOutlineDoneAll className='w-12 hover:text-blue-800 h-12' />
               <MdCancel className='w-12 hover:text-red-700 h-12' />
               </div>
                </div></div> }


                {/* Completed task list  */}
                {activeButton === 'completed' && 
                <div className='bg-slate-700 flex flex-col justify-center w-[85%] rounded-md h-32 text-white ml-12 shadow-2xl'><h2 className='text-3xl px-4 text-blue-800 font-bold'>Swimming</h2>
                <div className='flex justify-between'>
                <p className='text-white px-4 text-sm'>Deadline: 9 AM</p>
               <div className='flex items-center gap-4 justify-center'>
               <MdOutlineDoneAll className='w-12 hover:text-blue-800 h-12' />
               <MdCancel className='w-12 hover:text-red-700 h-12' />
               </div>
                </div></div> }
                
            </div>

            </div>
            
           
           

            
        </div> 
    );
};

export default Home;
