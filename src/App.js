import React, { Component } from 'react'
import Form from './Components/Form'
import Movie from './Components/Movie'

class App extends Component {

  state = {
    title: '',
    movie: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchMovie = event => {
    event.preventDefault()
    console.log('ping')
  }

  render() {
    return (
      <Form
        title={this.state.title}
        handleInputChange={this.handleInputChange}
        handleSearchMovie={this.handleSearchMovie}
        />
    )
  }
}

