import React from 'react';

export default props => {
  return (
      <div className="input-group">
        <input
          className={`form-control ${props.isError ? 'is-invalid' : ''}`}
          placeholder='Search users'
          onChange={props.searchValue}
        />
      {
        props.isError &&
        <div className="alert alert-danger">
          Not users
        </div>
      }
    </div>
  );
}