import React from 'react';
import logo from './logo.svg';
import './App.css';
//CAT https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Sound%20FX%20Zoo%20and%20Nature/1377[kb]crazy_cat_yowl.aif.mp3


/*
User Story #1: I should be able to see an outer container with a corresponding id="drum-machine"that contains all other elements.
User Story #2: Within #drum-machineI can see an element with a corresponding id="display".
User Story #3: Within #drum-machineI can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
User Story #4: Within each .drum-pad, there should be an HTML5 audioelement which has a srcattribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad(e.g. id="Q", id="W", id="E"etc.).
User Story #5: When I click on a .drum-padelement, the audio clip contained in its child audioelement should be triggered.
User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audioelement should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
User Story #7: When a .drum-padis triggered, a string describing the associated audio clip is displayed as the inner text of the #displayelement (each string must be unique).
*/
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      urls:[
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/326[kb]HUGE-CHEEZY-bright-stab.wav.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/87[kb]housepunch.aif.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/31[kb]kickcrash.aif.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/36[kb]lowkickcrash.aif.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/42[kb]mr-brown-punch.aif.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/60[kb]rubabend.aif.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/37[kb]thick-punch.wav.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/87[kb]bass-rhodes-punch.wav.mp3",
        "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/17[kb]chhclap.aif.mp3"

      ],
      keys:["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      description:["bright-stab","housepunch","kickcrash","lowkickcrash","mr-brown-punch","rubabend","thick-punch","bass-rhodes-punch","chhclap"],
      displayElement: "Nothing"
    }

  }


    handleKeyPress = (event) => {
      console.log(this)
      if(/[QWEASDZXC]/.test(event.key.toUpperCase()) ){
        let sound = document.getElementById(event.key.toUpperCase());
        sound.currentTime = 0;
        sound.play();
        console.log(sound.className)
        this.setState({
          displayElement:sound.className
        })
      }
      
}
componentDidUpdate(){
  console.log(this.state.displayelement)
}
handleClickevent =(name,id) =>{
  console.log(id)
  let sound = document.getElementById(name);
    sound.currentTime = 0;
    sound.play();
    this.setState({
          displayElement:id
        })
}
 
  render(){
    return (<div tabIndex="1" id="drum-machine" onKeyPress={this.handleKeyPress} > 
      <h1 id="display">{this.state.displayElement}</h1>
      {this.state.keys.map((val,index) =>
              <Button click= {this.handleClickevent} key={val}  id={this.state.description[index]} source={this.state.urls[index]} name={val}/> 
            )}
      
      
    </div>);
  }
}





class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  handleClick(name,id){
    console.log("clickity from child "+this.props.name)
    
    this.props.click(this.props.name,this.props.id)
  }

 
render(){
  //console.log(this.props)
  return (<div> 
    
    
    <button  className="drum-pad" onClick={this.handleClick} id ={this.props.id}>{this.props.name}
      <audio className="clip" preload="auto" id ={this.props.name} src={this.props.source}> </audio> 
    </button>


  </div>);
}
}

export default App;
