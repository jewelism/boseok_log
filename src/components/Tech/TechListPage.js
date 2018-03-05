import React, { Component } from 'react'

class TechListPage extends Component {
  constructor(props) {
    super(props)

    const { pathname } = props.location
    const uri = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length)
    this.state = {
      uri
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>{this.state.uri}</h2>
      </div>
    )
  }
}

export default TechListPage