import React from 'react';

const EditDelete = (props) => {
  return (
    <div>
      <i onClick={()=>props.handleEdit()} className="fa fa-pencil vote-pointer" aria-hidden="true">
        Edit
      </i>
      <i onClick={()=>props.handleDelete()} className="fa fa-trash vote-pointer" aria-hidden="true">
        Delete
      </i>
    </div>
  );
};

export default EditDelete;