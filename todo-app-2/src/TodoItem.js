import React from 'react';
import './TodoItem.css';

function TodoItem() {
  return (
    <div>
      <label className="TodoItem-check">ONE
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default TodoItem;