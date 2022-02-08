import React from 'react';
import { GoThreeBars } from "react-icons/go";
import '../App.css'

function Nav() {
	return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
			<div className='navContainer'>
				<h1 className="navItem">Todo List</h1>
        <GoThreeBars size={40} className="navItem"/>

			</div>
      </div>
		</div>
	);
}

export default Nav;
