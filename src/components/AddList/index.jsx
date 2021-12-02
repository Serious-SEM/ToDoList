import React from "react";
import List from "../List/index";
import Badge from './../Badge/index';
import CloseSvg from "../../assets/img/close.svg"
import "./AddList.scss"

const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [selectedColor, selectColor] = React.useState(colors[0].id)
    const [inputValue, setInputValue] = React.useState('');

    const addClass = () => {
      if(!inputValue){
        alert('Введите название списка')
        return;
      } 

      const color = colors.filter(c => c.id === selectedColor)[0].name
      onAdd({id: Math.random(), name: inputValue, colorId: selectedColor, color})
    }

    return (
      <div className="add-list">
        <List 
          onClick = {() => (setVisiblePopup(!visiblePopup), selectColor(colors[0].id))}
          items = {[
            {
              className: 'list_add-button',
              icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>,
              name: 'Добавить список'
            }
          ]}
        />

        {visiblePopup &&         
        (<div className="add-list-popup">
          <img src={CloseSvg} className="add-list-popup-close-btn" onClick={() => setVisiblePopup(false)} />
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && (addClass(), setInputValue(''), setVisiblePopup(false))} className="field" type="text" placeholder="Название папки" />
          <div className="add-list-popup-colors">
            {
              colors.map(color => 
                <Badge 
                  onClick={() => selectColor(color.id)} 
                  key={color.id} 
                  color={color.name}
                  className={selectedColor === color.id && 'active'} 
                />)
            }
            
          </div>
          <button className="button" onClick={() => (addClass(), setInputValue(''), setVisiblePopup(false))}>Добавить</button>
        </div>)}
      </div>
    )
}

export default AddList