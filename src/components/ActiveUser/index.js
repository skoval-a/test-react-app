import React from 'react';

export default  (props) => {
  const user = props.activeUser;
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