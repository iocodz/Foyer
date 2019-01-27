import React, { Component } from 'react'
import Img from '../../components/Img/Img.js'
import Nav from '../../components/Nav/Nav.js'

class Kitchen extends Component{
	constructor(...props) {
        super(...props)

        this.state = {
        	background: 'route',
        	cont: 7,
        	objects: [
        		[true, '/assets/objects/olla3.png', 'olla3', 'Olla Reina'],
        		[true, '/assets/objects/platos.png', 'platos', 'Platos Artesanales'],
        		[true, '/assets/objects/pantalones2png.png', 'pantalones2png', 'Pantalones'],
        		[true, '/assets/objects/almohada2.png', 'almohada2', 'Almohada'],
        		[true, '/assets/objects/3.png', 'a3', 'Copa'],
        		[true, '/assets/objects/papel-sanit.png', 'papel-sanit', 'Papel Higiénico'],
        		[true, '/assets/objects/fotofamiliar5.png', 'fotofamiliar5', 'Retrato'],
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
	    			<div class="Zona Kitchen"> 
    					<Img src="/assets/Kitchen/sister.png" visible="true" cl="sister" cl2="fadeIn" /> 
    					<div class="nav">
							<ul>
								<li>Hermana: Felicidades loca pasaste el nivel vete pal patio a buscar algo pierdete </li>
								<li><button onClick={this.props.move}> Next </button></li>
							</ul>
						</div>	
	    			</div>
	    		}
    			{this.state.cont &&
	    		<div class="Zona Kitchen">
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

export default Kitchen