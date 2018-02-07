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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => props.handlePagination(-1)}
            >
              Prev
            </a>
          </li>
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => props.handlePagination(1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}