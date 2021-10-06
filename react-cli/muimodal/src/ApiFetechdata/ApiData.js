import React from 'react'
import axios from 'axios'

class ApiData extends React.Component {
  state = {
      data:[],
    }

  componentDidMount(){
    axios.get('http://localhost:8080/Db.Php')
    .then(resp =>{ this.setState({data:resp.data});
    console.log(this.state);
  })
  }

  render() {
    return (
      <>
      <ul>
        {this.state.data.map(p => <li>{p}</li>)}
      </ul>
      </>
    )
  }

}

export default ApiData;