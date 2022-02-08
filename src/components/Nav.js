import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import '../App.css';

function Nav() {
	return (
		<div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='navContainer'>
			<div className="navLeft">
					<h1>Todo List</h1>
			</div>
      <div className='navRight'>
					<GoThreeBars size={40}/>
        </div>
		</div>
    </div>
	);
}

export default Nav;
