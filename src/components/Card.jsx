import React, { useState } from 'react';

const Card = ({ id, description, task, deleteTask }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className='card-wrapper mr-5'>
      <div
        className='card-top'
        style={{ backgroundColor: colors[id % 5].primaryColor }}
      ></div>
      <div className='task-holder'>
        <span
          className='card-header'
          style={{
            backgroundColor: colors[id % 5].secondaryColor,
            borderRadius: '10px',
          }}
        >
          {task}
        </span>
        <p className='mt-3'>{description}</p>

        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <i
            className='fas fa-trash-alt'
            style={{ color: colors[id % 5].primaryColor, cursor: 'pointer' }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
