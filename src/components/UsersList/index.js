import React from 'react';
import ItemUser from '../../components/ItemUser';
export default (props) => {
  const  {
    data,
  } = props;
  return (
    <div className='usersList'>
      <div className="usersList__head">
        <div className='avatar'>
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
      </div>
      {
        data && data.length > 0 &&
        data.map((item, index) =>
        <ItemUser
          key={index}
          updateApp={props.updateApp}
          {...item}
        />)
      }
    </div>
  );
}