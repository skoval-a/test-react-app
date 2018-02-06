import React from 'react';

export default  (props) => {
  const user = props.activeUser ? props.activeUser : '';
  console.log(props.activeUser);
  return (
    <div className="activeUser">
      <div className='activeUser__image'>
        <img src={user.image} alt=""/>
      </div>
      {
        user.name &&
        <p className='activeUser__text'>
          {user.name}
        </p>
      }
      <p className='activeUser__text'>
        {user.age}
      </p>
      <p className='activeUser__text'>
        {user.phone}
      </p>
      <p className='activeUser__text'>
        {user.name}
      </p>
    </div>
  );
}