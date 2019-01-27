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
      place: [
        [false, <Home move={this.Next} />],
        [false, <Garden move={this.Next} />],
        [false, <BedRoom move={this.Next} />],
        [false, <Kitchen move={this.Next} />],
      ]
    }
    this.NextPlace = this.NextPlace.bind(this)
    this.Next = this.Next.bind(this)

    //this.url = "http://streaming.tdiradio.com:8000/top40.mp3";
    //this.audio = new Audio(this.url);
    //this.audio.play();

  }

  NextPlace = () => {
    for(let i = 0 ; i < this.state.place.length ; i++)
      if(this.state.place[i][0] == false)
        return this.state.place[i][1]
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
