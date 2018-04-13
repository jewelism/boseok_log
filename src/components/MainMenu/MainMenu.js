import React, { PureComponent } from 'react';

import { withRouter } from "react-router-dom";
import { List, ListItem } from 'material-ui/List';
import SmartPhoneIcon from 'material-ui/svg-icons/hardware/smartphone';

import { MENU_ITEMS } from '../../constants'

const BackGrayColor = { backgroundColor: 'rgba(39, 39, 39, 0.2)' }
const BackNoColor = { backgroundColor: 'transparent' }
class MainMenu extends PureComponent {

  constructor(props) {
    super(props)

    const path = props.location.pathname || '/'
    this.state = {
      path
    }
  }

  handleOnClick = (path) => {
    this.setState({ path })
    this.props.history.push(`${path}`)
  }

  menuItem = ({ index, item }) => {
    return (
      <ListItem
        style={item.uri === this.state.path ? BackGrayColor : BackNoColor}
        key={index}
        primaryText={item.name}
        leftIcon={item.icon}
        onClick={() => this.handleOnClick(item.uri)}
      />
    )
  }

  render() {
    return (
      <List>
        {MENU_ITEMS.map((item, index) => {
          if (item.nestedItems) {
            return (
              <ListItem
                style={item.uri === this.state.path ? BackGrayColor : BackNoColor}
                key={index}
                primaryText={item.name}
                leftIcon={item.icon}
                initiallyOpen={true}
                // primaryTogglesNestedList={true}
                nestedItems={
                  item.nestedItems.map((innerItem, i) => {
                    i += MENU_ITEMS.length
                    return this.menuItem({ index: i, item: innerItem })
                  })
                }
                onClick={() => this.handleOnClick(item.uri)}
              />
            )
          } else {
            return this.menuItem({ index, item })
          }
        })}
        <ListItem
          style={BackNoColor}
          primaryText={"Mobile화면으로 보기"}
          leftIcon={<SmartPhoneIcon/>}
          onClick={this.props.toggleView}
        />
      </List>
    );
  }
}

export default withRouter(MainMenu)