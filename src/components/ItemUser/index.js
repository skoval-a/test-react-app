import React from 'react';

export default (props) => {

  return (
    <div className='itemUser' onClick={() => props.updateApp({
      activeUser: props.id,
    })}>
      
    </div>
  );
}