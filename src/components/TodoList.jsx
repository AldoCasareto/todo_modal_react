import React, { useState, useEffect } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const newEntry = (task) => {
    setList(list.concat(task));
    // localStorage.setItem('list', JSON.stringify(task));
    setModal(false);
    console.log(task);
  };

  const deleteTask = (id) => {
    console.log(id);
    const filterList = () => {
      list.filter((l) => l.id !== id);
    };

    setList(filterList);
  };

  // useEffect(() => {
  //   let arr = localStorage.getItem('list');

  //   if (arr) {
  //     let obj = JSON.parse(arr);
  //     console.log(obj);
  //     setList(obj);
  //   }
  // }, []);

  return (
    <>
      <div className='header text-center'>
        <h3>Todo List</h3>
        <button className='btn btn-primary' onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className='task-container'>
        {list &&
          list.map((item) => (
            <Card
              id={item.id}
              task={item.task}
              description={item.description}
              deleteTask={deleteTask}
            />
          ))}
      </div>
      <CreateTask
        toggle={toggle}
        modal={modal}
        setModal={setModal}
        newEntry={newEntry}
      />
    </>
  );
};

export default TodoList;
