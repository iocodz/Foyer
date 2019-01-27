import React, { Component } from 'react'
import Img from '../../components/Img/Img.js'
import Nav from '../../components/Nav/Nav.js'

class Garden extends Component{
	constructor(...props) {
        super(...props)

        this.state = {
        	background: 'route',
        	cont: 11,
        	objects: [
        		[true, '/assets/objects/bota5.png', 'bota5', 'Bota'],
        		[true, '/assets/objects/huevos.png', 'huevos', 'Huevos'],
        		[true, '/assets/objects/cucharas1.png', 'cucharas1', 'Cucharas'],
        		[true, '/assets/objects/a1.png', 'a1', 'Televisor'],
        		[true, '/assets/objects/estropajo2.png', 'estropajo2', 'Esponja'],
        		[true, '/assets/objects/asdasd.png', 'asdasd', 'Yin Yang'],
        		[true, '/assets/objects/olla-2.png', 'olla-2', 'Olla Reina'],
        		[true, '/assets/objects/1.png', 'b1', 'Flor'],
        		[true, '/assets/objects/estropajo-5.png', 'estropajo-5', 'Estropajo'],
        		[true, '/assets/objects/paleta-d-madera.png', 'paleta-d-madera', 'Cucharón de Madera'],
        		[true, '/assets/objects/medias-5.png', 'medias-5', 'Medias'],
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
	    			<div class="Zona Garden"> 
    					<Img src="/assets/Garden/sister.png" visible="true" cl="sister" cl2="fadeIn" /> 
    					<div class="nav">
							<ul>
								<li>Hermana: Felicidades loca pasaste el nivel vete pal patio a buscar algo pierdete </li>
								<li><button onClick={this.props.move}> Next </button></li>
							</ul>
						</div>	
	    			</div>
	    		}
    			{this.state.cont &&
	    		<div class="Zona Garden">
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

export default Garden