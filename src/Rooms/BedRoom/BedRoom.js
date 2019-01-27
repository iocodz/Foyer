import React, { Component } from 'react'
import Img from '../../components/Img/Img.js'
import Nav from '../../components/Nav/Nav.js'

class BedRoom extends Component{
	constructor(...props) {
        super(...props)

        this.state = {
        	cont: 11,
        	objects: [
        		[true, '/assets/objects/bota1.png', 'bota1', 'Bota'],
        		[true, '/assets/objects/escoba1.png', 'escoba1', 'Escoba Voladora'],
				[true, '/assets/objects/escoba2.png', 'escoba2', 'Escoba y Recogedor'],
				[true, '/assets/objects/manguera2.png', 'manguera2', 'Manguera'],
				[true, '/assets/objects/pala1.png', 'pala1', 'Pala'],
				[true, '/assets/objects/fotofamiliar3.png', 'fotofamiliar3', 'Retrato'],
				[true, '/assets/objects/esponja.png', 'esponja', 'Bob'],
				[true, '/assets/objects/almohadas.png', 'almohadas', 'Toallas'],
				[true, '/assets/objects/pasta1.png', 'pasta1', 'Crema'],
				[true, '/assets/objects/tohalla.png', 'tohalla', 'Pañuelo'],
				[true, '/assets/objects/perro1.png', 'perro1', 'Perro'],

        	]
        }

        this.handleState = this.handleState.bind(this)
    }

    handleState = (event) => {
    	var objects = []

    	for(let i = 0 ; i < this.state.objects.length ; i++)    		
    		if(event !== this.state.objects[i][1])
    			objects.push(this.state.objects[i])
    		else objects.push([ false, this.state.objects[i][1], this.state.objects[i][2] ])

    	let cont = this.state.cont - 1
    	this.setState({ objects: objects })
    	this.setState({ cont: cont })
  	}

    render(){
    	return (
    		<div>
                {!this.state.cont && 
                    <div class="Zona Bedroom"> 
                        <Img src="/assets/dormitorio/sister.png" visible="true" cl="sister" cl2="fadeIn"  /> 
                        <div class="nav">
                            <ul>
                                <li>Abuelo: Hogar no es solo la casa donde vivimos, es un lugar donde nos sentimos seguros. Gracias por ordenar la casa!!</li>
                                <li><button onClick={this.props.move}> Next </button></li>
                            </ul>
                        </div>  
                    </div>
                }
    			{this.state.cont &&
	    		<div class="Zona Bedroom">
	    			{ this.state.objects.map( ([ visible, src, name ]) => (
	    					<a onClick={ (e) => this.handleState(src) }>
		    					<Img src={src} visible={visible} cl={name}  /> 
							</a>
	    				))
	    			}
    			<Nav items={this.state.objects} />
                </div>      
                }
                
	    		
    		</div>
		)
    }
}

export default BedRoom