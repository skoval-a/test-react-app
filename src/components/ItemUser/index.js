import React from 'react';

export default (props) => {

  return (
    <div className='itemUser' onClick={() => props.updateApp({
      activeUser: props,
    })}>
      <div className="itemUser__image">
        <img src={props.image} alt=""/>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>{props.age}</p>
      </div>
      <div>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}