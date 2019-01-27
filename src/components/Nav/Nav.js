import React from 'react'

const Nav = props =>{
	return (
		<div class="nav">
			<ul>
				{ props.items.map( ([ visible, src, name, descr ]) => (
					 visible === true && (<li><a href="#"> {descr} </a></li>) 
					))
				}
			</ul>
		</div>
		)
	//: (<li><a href="#"><strike> {descr} </strike> </a></li>) 
}

export default Nav