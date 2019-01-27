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
                    Foyer
                </h1>
                <p class="textolindo">
                    Juego tipo Detective que nos describe lo que significa verdaderamente el hogar. Mientras vas encontrando objetos en las habitaciones de la casa vas interactuando con los miembros de la familia.
                </p>
                <div class="button" onClick={this.props.move}>
                    <a href="#" >
                        Jugar&nbsp;
                        <span class="shift">›</span>
                    </a>
                    <div class="mask"></div>
                </div>
            </div>
		)
    }
}

export default Home