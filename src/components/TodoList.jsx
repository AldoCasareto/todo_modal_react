import React, { useState } from 'react';
import CreateTask from '../modals/CreateTask';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const newEntry = (task) => {
    setList(list.concat(task));
    setModal(false);
  };

  return (
    <>
      <div className='header text-center'>
        <h3>Todo List</h3>
        <button className='btn btn-primary' onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className='task-container'>
        {list.map((l) => (
          <div>
            <p>{l.name}</p>
          </div>
        ))}
      </div>
      <CreateTask
        toggle={toggle}
        modal={modal}
        setModal={setModal}
        newEntry={newEntry}
      />
      {list.map((l) => (
        <div key={l.id}>
          <p>{l.task}</p>
          <p>{l.description}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
