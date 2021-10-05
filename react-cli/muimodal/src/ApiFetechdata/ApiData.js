import React from 'react'
import axios from 'axios'

class ApiData extends React.Component {
  state = {
      data:[],
    }

  componentDidMount(){
    axios.get('http://localhost:8080/Db.Php',this.state.headers)
    .then(resp =>{ this.setState({data:resp.data});
    console.log(this.state.data);
  })
  }

  // state = {
  //   getting: []
  // }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
  //     this.setState({ getting: res.data });
  //     console.log(this.state)
  //   })
  // }


  render() {
    return (
      <>
      </>
    )
  }

}

export default ApiData;