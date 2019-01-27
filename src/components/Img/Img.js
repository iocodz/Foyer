import React from 'react'

const Img = props =>(
	props.visible ? <img src={props.src} className={props.cl + "_position " + props.cl + "_width one " + props.cl2} /> : <img src={props.src} className={props.cl + "_position one hola" } /> 
)

export default Img