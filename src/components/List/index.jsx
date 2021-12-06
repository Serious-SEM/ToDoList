import React from "react";
import Badge from "../Badge/index"
import classNames from 'classnames';
import './List.scss';

import removeSvg from '../../assets/img/remove.svg';

const List = ({items, isRemoveble, onClick, onRemove}) => {

  const removeList = (list) =>{
    if(window.confirm('Вы действительно хотите удалить этот список ?')) {
      onRemove(list)
    }
  }

    return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => 
        <li key={index} className={classNames(item.className, {active: item.active})}>
          <i>
            {item.icon ? (item.icon) : (<Badge color={item.color} />)}
          </i>
          <span>{item.name}</span>
          {isRemoveble && <img className='list-remove-icon' src={removeSvg} onClick={() => removeList(item)} alt="Remove Icon" />}
        </li>
      )}
    
    </ul>
    );
}

export default List;