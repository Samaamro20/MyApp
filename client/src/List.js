import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        {props.lists.map((item, i) => {
          return (
            <li
              onClick={() => {
                props.handleDelete(i);
              }}
              key={i}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
