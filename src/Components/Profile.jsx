import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
    super()
    this.state={
      count : 0
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({count : this.state.count +1})
    }, 1000);
  }
  render() {
    return (
        <div>
          <h1>{this.state.count}</h1>
            <h1>{this.props.person.name}</h1>
            <h3>{this.props.person.bio}</h3>
            <img src={this.props.person.image} alt="" />
            <center>
              <h2> {this.props.person.profession}</h2>
            </center>
        </div>
    )
  }
}
