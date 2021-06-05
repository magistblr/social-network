
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = `/messages/${props.id}`;

  return (
    <div>
      <div className="dialogs__item">
        <div className="dialogs__item-mark"></div>
        <div className="dialogs__item-name">
          <NavLink to={path}>{props.name}</NavLink>
        </div>
      </div>
    </div>
  )
}


export default DialogItem;
