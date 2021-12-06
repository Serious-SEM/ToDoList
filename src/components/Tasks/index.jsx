import React from 'react'
import edit from '../../assets/img/edit.svg'

import './Tasks.scss'

export default function Tasks() {
    return (
        <div className="tasks">
          <h2 className="tasks_title">
              Фронтенд
              <img src={edit} alt="Edit Icon" />
          </h2>
          <div className="tasks_items">
              <div className="tasks_items-row">
                <div className="checkbox">
                    <input id="id" type="checkbox"/>
                    <label htmlFor="id">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </label>
                </div>
                <input type="text" value="Изучить паттерны проектирования" />
              </div>
          </div>
        </div>

    )
}
