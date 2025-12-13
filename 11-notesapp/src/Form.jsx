import React, { useState, useEffect } from 'react';
import Card from './Card';

const LOCAL_STORAGE_KEY = 'todo-tasks-list';

const Form = () => {
    const [Task, setTask] = useState('');
    const [Details, setDetails] = useState('');

    const [tasksList, setTasksList] = useState(() => {
        const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksList));
            console.log("Tasks saved to localStorage.");
        } catch (error) {
            console.error("Could not save tasks to localStorage", error);
        }
    }, [tasksList]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        
        if (!Task.trim() || !Details.trim()) {
            alert("Please fill out both the Task Heading and Task Details.");
            return;
        }

        const newTask = {
            id: Date.now(), 
            title: Task,
            details: Details,
            color: tasksList.length % 3 === 0 ? 'blue' : (tasksList.length % 3 === 1 ? 'green' : 'yellow'), 
        };

        setTasksList([newTask, ...tasksList]);
        
        setTask('');
        setDetails('');
    }

    return (
        <div className="min-h-screen flex">
            
            <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8">
                
                <div className="bg-gray-800/70 backdrop-blur-2xl shadow-[0_0_100px_rgba(59,130,246,0.3)] rounded-3xl p-10 sm:p-14 w-full max-w-lg transition-all duration-500 border border-gray-700/50">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-blue-400 mb-2 tracking-wide uppercase">
                            New Project Task
                        </h2>
                        <p className="text-slate-400 text-md font-light">
                            Capture the necessary details below
                        </p>
                    </div>
                    
                    <form onSubmit={SubmitHandler} className="space-y-8">
                        
                        <div className="relative mx-4"> 
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Task Heading
                            </label>
                            <input 
                                value={Task}
                                type="text" 
                                placeholder="E.g., Design UI Mockups"
                                onChange={ (e) => {
                                    setTask(e.target.value)
                                }}
                                className="w-full px-6 py-4 bg-gray-700/70 border-b-2 border-gray-600 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 text-lg placeholder-gray-500 text-white shadow-inner"
                            />
                        </div>
                        
                        <div className="relative mx-4">
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Task Details
                            </label>
                            <textarea 
                                value={Details}
                                onChange={ (e) => {
                                    setDetails(e.target.value);
                                }}
                                rows={5}
                                placeholder="Provide a detailed description of the task requirements..."
                                className="w-full px-6 py-4 bg-gray-700/70 border-b-2 border-gray-600 focus:border-blue-500 rounded-xl resize-vertical focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 text-lg placeholder-gray-500 text-white shadow-inner"
                            />
                        </div>
                        
                        <div className="mx-4 mt-8">
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transform hover:scale-[1.01] transition-all duration-300 text-xl tracking-widest uppercase"
                            >
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden lg:block w-1/2 bg-gray-950 p-10 overflow-auto border-l border-gray-700">
                <h1 className='text-4xl font-bold text-white mb-6'>Recent Notes</h1>
                
                <div className='flex flex-wrap gap-6'>
                    
                    {tasksList.length > 0 ? (
                        tasksList.map(task => (
                            <Card 
                                key={task.id} 
                                title={task.title} 
                                details={task.details} 
                                color={task.color}
                            />
                        ))
                    ) : (
                        <div className="p-6 bg-gray-800/50 rounded-lg w-full text-center border border-gray-700">
                            <p className="text-xl text-slate-400 font-medium">
                                No tasks found. Start by creating a new task using the form!
                            </p>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Form