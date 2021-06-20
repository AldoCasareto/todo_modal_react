import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle }) => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      description,
      task,
    };
    setList(list.concat(newTask));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'task') {
      setTask(value);
    } else {
      setDescription(value);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Task</label>
            <input
              name='task'
              value={task}
              type='text'
              className='form-control'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              name='description'
              value={description}
              onChange={handleChange}
              rows='5'
              className='form-control'
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button type='submit' color='primary' onClick={toggle}>
          Create
        </Button>{' '}
        <Button color='secondary' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
