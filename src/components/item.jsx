import React from 'react';

const Item = ({ item, handleClick, children }) => (
  <div className="border-2 rounded-md my-2 p-1">
    <h3 className="font-semibold cursor-pointer" onClick={handleClick}>
      {item.id}) {item.user.name} said ...
    </h3>
    <p>{item.body}</p>
    <div className="border-t-2 px-3">{children}</div>
  </div>
);
export default Item;
