import React, { PureComponent } from 'react'

import { withRouter } from "react-router-dom";

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import { MENU_ITEMS } from '../../constants'

import './MainMenu4m.css'

class MainMenu4m extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen })

  handleClose = () => this.setState({ isOpen: false })

  handleRouter = (path) => {
    this.handleClose()
    this.props.history.push(`${path}`)
  }

  renderMenuItem = (item) => <MenuItem className="mm4m-menu-item" onClick={() => this.handleRouter(item.uri)} key={item.uri}>{item.name}</MenuItem>

  render() {
    return (
      <div className="mm4m-container">
        <IconButton onClick={this.handleToggle} iconStyle={{ width: '150px', height: '150px' }} style={{ width: '150px', height: '150px' }}>
          <ListIcon />
        </IconButton>
        <Drawer
          openSecondary
          docked={false}
          width={500}
          swipeAreaWidth={200}
          open={this.state.isOpen}
          onRequestChange={(isOpen) => this.setState({ isOpen })}
        >
          <FlatButton className="mm4m-menu-label" label="Boseok.me" primary={true} fullWidth={true} labelStyle={{ fontSize: '50px' }} onClick={() => { window.location.href = '/' }} />
          {MENU_ITEMS.map(item => {
            if (item.nestedItems) {
              return (
                <div key={`nestedItemsWrapper_${item.uri}`}>
                  <Divider inset={true} />
                  {this.renderMenuItem(item)}
                  {item.nestedItems.map((nestedItem) => this.renderMenuItem(nestedItem))}
                  <Divider inset={true} />
                </div>
              )
            }
            return this.renderMenuItem(item)
          })}
          <Divider inset={true} />
          <MenuItem className="mm4m-menu-item" onClick={this.props.toggleView}>{"PC버전으로 보기"}</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default withRouter(MainMenu4m)