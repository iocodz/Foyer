import React, { Component } from 'react';
import './App.css';
import Garden from './Rooms/Garden/Garden.js'
import BedRoom from './Rooms/BedRoom/BedRoom.js'
import Home from './Rooms/Home/Home.js'
import Kitchen from './Rooms/Kitchen/Kitchen.js'

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      clicks: 0,
      place: [
        [false, <Home move={this.Next} />],
        [false, <Kitchen move={this.Next} />],
        [false, <Garden move={this.Next} />],
        [false, <BedRoom move={this.Next} />],
      ]
    }
    this.NextPlace = this.NextPlace.bind(this)
    this.Next = this.Next.bind(this)
    this.AddClick = this.AddClick.bind(this)
    this.SubClick = this.SubClick.bind(this)

    this.url = '/assets/03. Apocalyptica - Nothing Else Matters.mp3';
    this.audio = new Audio(this.url);
    this.audio.play();
  }

  NextPlace = () => {
    let ok = false
    for(let i = 0 ; i < this.state.place.length ; i++)
      if(this.state.place[i][0] == false){
        ok = true
        return this.state.place[i][1]
      }
    if(!ok){
      let place = []
      let found = false
      for(let i = 0 ; i < this.state.place.length ; i++){
        let add = this.state.place[i]
        add[0] = false
        place.push(add)
      }
      this.setState( { place: place } )
    }  
    return this.state.place[0]
  }

  AddClick = () => {
    this.setState({clicks: this.state.clicks + 2})
  }

  SubClick = () => {
    this.setState({clicks: this.state.clicks - 1})
  }

  Next = () => {
    let place = []
    let found = false
    for(let i = 0 ; i < this.state.place.length ; i++){
      let add = this.state.place[i]
      if(!found && add[0] == false){
        add[0] = true
        found = true
      }
      place.push(add)
    }

    this.setState( { place: place } )
  }

  render() {
    return (
      <div>
        {this.NextPlace()}
      </div>
    );
  }
}

export default App;
