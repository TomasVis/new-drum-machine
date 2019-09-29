import React from 'react';
import logo from './logo.svg';
import './App.css';
//CAT https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Sound%20FX%20Zoo%20and%20Nature/1377[kb]crazy_cat_yowl.aif.mp3

class App extends React.Component {
constructor(props){
  super(props);

   this.myRef = React.createRef();
   this.myRef1 = React.createRef();
   this.play = this.play.bind(this)
   this.play1 = this.play1.bind(this)
}

play(){
this.myRef.play()

}
play1(){
this.myRef1.play()

}
 
render(){
  return (<div >    
        <audio           
          preload="auto"
          id="beep"
          ref={(myRef) => { this.myRef = myRef; }}            
          src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/17[kb]chhclap.aif.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <audio           
          preload="auto"
          id="beep"
          ref={(myRef1) => { this.myRef1 = myRef1; }}            
          src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/19[kb]chicca-hit.wav.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
    <h1 >Whatever</h1>
    <button onClick={this.play}>Play</button>
    <button onClick={this.play1}>Play</button>
  </div>);
}
}
export default App;
