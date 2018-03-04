import React from 'react';

import { withRouter } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

class MainMenu extends React.Component {
  
  handleOnClick = (path) => {
    this.props.history.push(`/${path}`)
  }

  render() {
    const MenuItems = [
      { id: 'About', icon: <ContentSend /> },
      { id: 'company', icon: <ContentSend /> },
      { id: 'kim', icon: <ContentSend /> },
      { id: 'jung', icon: <ContentSend /> }
    ]
    const TechItems = [
      { id: 'React.js', icon: <ActionGrade /> },
      { id: 'Cloud Server', icon: <ContentDrafts /> }
    ]
    return (
      <MuiThemeProvider>
        <List>
          {MenuItems.map((item, index) => {
            return (
              <ListItem
                primaryText={item.id} leftIcon={item.icon}
                onClick={() => this.handleOnClick(item.id)} key={index} />
            )
          })}
          <ListItem
            primaryText="Tech Log"
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={
              TechItems.map((item, index) => {
                index = index + MenuItems.length
                return (
                  <ListItem
                    key={index}
                    primaryText={item.id}
                    leftIcon={item.icon}
                  />
                )
              })
            }
          />
        </List>

      </MuiThemeProvider>
    );
  }
}

export default withRouter(MainMenu)