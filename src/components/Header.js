import React from 'react';
import { BsClock, BsCheck2Circle } from 'react-icons/bs';
import { FiArrowDownLeft, FiCloud } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import rabbit from '../images/rabbit.png';

const Header = () => (
  <div className="header-container flex">
    <div className="first-icons flex">
      <span className="p-head">P</span>
      <span className="time flex">
        <BsClock />
        {' '}
        0min
      </span>
      <img className="img" src={rabbit} alt="rabbit" />
      <span className="arrow flex">
        <FiArrowDownLeft />
        {' '}
        0
      </span>
    </div>
    <div className="second-set-icons flex">
      <BsCheck2Circle className="check" />
      <FiCloud className="cloud" />
      <FaEllipsisV />
    </div>
  </div>
);

export default Header;
