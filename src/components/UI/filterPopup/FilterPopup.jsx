import React from "react";

import './FilterPopUp.scss'

const FilterPopUp = ({setOpen, open}) => {
    return (
        <div className="search_popup">
          <h3 className="title_search_popup" onClick={() => setOpen(!open)}>
            Сортировать по
          </h3>
          {open && (
            <ul className="lists_wrapper">
              <li>Алфавиту</li>
              <li>ID</li>
            </ul>
          )}
        </div>
    )
}

export default FilterPopUp