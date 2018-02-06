import React from 'react';

export default  (props) => {
  const user = props.activeUser ? props.activeUser : '';
  console.log(props.activeUser);
  return (
    <div className="activeUser">
      <div>
        {user.name}
      </div>
      <div>

      </div>
    </div>
  );
}