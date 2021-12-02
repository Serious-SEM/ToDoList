import React from "react";
import Badge from "../Badge/index"
import classNames from 'classnames';
import './List.scss'

// import listSvg from '../assets/img/list.svg'

const List = ({items, isRemoveble, onClick}) => {
    return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => 
        <li key={index} className={classNames(item.className, {active: item.active})}>
          <i>
            {item.icon ? (item.icon) : (<Badge color={item.color} />)}
          </i>
          <span>{item.name}</span>
        </li>
      )}
    
    </ul>
    );
}

export default List;