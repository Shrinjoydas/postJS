import React from 'react';

function Row({ title, body }) {
  return (
    <div className="row">
      <h2 className='title'>{title}</h2>
      <p className='body'>{body}</p>
    </div>
  );
}

export default Row;
