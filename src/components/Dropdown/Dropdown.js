import React from 'react';
import css from './Dropdown.module.css';

const Dropdown = ({ value, onChange }) => {
  return (
    <select className={css.dropdown} id="filter" value={value} onChange={onChange}>
      <option value="show all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </select>
  );
}

export default Dropdown;