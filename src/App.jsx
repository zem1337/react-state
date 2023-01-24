import React from 'react'
import Profile from './Components/Profile'

class App extends React.Component{
  state = {
    person : {
      name : "viego",
      bio : "lol champion",
      image : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
      profession : "Ruined King"
    },
    show : false
  }
  showHandler = () => this.setState({show : !this.state.show})
  render(){
    return (
      <div>
        <button onClick={this.showHandler}> {this.state.show ? 'Hide' : 'Show'} </button>
        {
          this.state.show && <Profile person={this.state.person}/>
        }
      </div>
    )
  }
}

export default App;
