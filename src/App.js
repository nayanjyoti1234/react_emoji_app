import React, { Component } from 'react';
import Buttons from './components/Buttons.js';
import Emoji   from './components/Emoji.js'
class App extends Component {
state = {
        img:undefined
    }
getimagesad=()=>{
      this.setState({img:'sad'});
}
getimagehappy=()=>{
      this.setState({img:'happy'});
}
getimagesmile=()=>{
      this.setState({img:'smile'});
}
getimageangry=()=>{
      this.setState({img:'angry'});
}
render() {
    return (
      <div>
          <Buttons 
              getimagesad={this.getimagesad}
              getimageangry={this.getimageangry}
              getimagehappy={this.getimagehappy}
              getimagesmile={this.getimagesmile}
          />
          <Emoji img={this.state.img}/>
      </div>
    );
  }
}

export default App;
