import React from "react";
import Button from "./Button";

function TodoItem(props) {
  return (
    <li>
      <span style={{lineHeight:"2rem",paddingRight:"20px"}}>{props.text}</span>
      <Button>Complete</Button>
      <Button>Delet</Button>   
      <Button>test</Button>      
   
    </li>
  );
  // return React.createElement('li',{},'watch 123')
}

export default TodoItem;
