import React, { Component } from 'react'

class Home extends Component{
	constructor(...props) {
        super(...props)

        this.state = {
        	objects: [
        		
        	]
        }

    }

    render(){
    	return (
    		<div class="home white">
                <h1 class="fuentelinda">
                    Hola Mundo!!
                </h1>
                <p class="textolindo">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div class="button" onClick={this.props.move}>
                    <a href="#" >
                        Play&nbsp;
                        <span class="shift">›</span>
                    </a>
                    <div class="mask"></div>
                </div>
            </div>
		)
    }
}

export default Home