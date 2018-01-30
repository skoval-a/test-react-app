import React from 'react';
import ItemUser from '../../components/ItemUser';
export default () => {
  return (
    <div className='usersList'>
      <div className="usersList__head">
        <div>
          <p>Avatar:</p>
        </div>
        <div>
          <p>Name:</p>
        </div>
        <div>
          <p>Age:</p>
        </div>
        <div>
          <p>Phone:</p>
        </div>
        <div>
          <p>Description:</p>
        </div>
      </div>
      <ItemUser

      />
    </div>
  );
}