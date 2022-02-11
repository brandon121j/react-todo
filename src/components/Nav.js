import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import '../App.css';

function Nav() {
	return (
		<div className="navbar navbar-expand-lg navbar-light bg-light">
    <div id='navContainer'>
					<h1>Todo List</h1>
					<GoThreeBars size={40} id='hamburgerMenu'/>
		</div>
    </div>
	);
}

export default Nav;
