import React from 'react';

import { withRouter } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

class MainMenu extends React.Component {

  state = {
    open: false,
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  handleOnClick = (path) => {
    this.props.history.push(`/${path}`)
  }

  render() {
    const MenuItems = ['about', 'company', 'kim', 'jung']
    return (
        <MuiThemeProvider>
          <List>
            {MenuItems.map((item, index)=>{
              return(
                <ListItem primaryText={item} leftIcon={<ContentSend />} onClick={()=>this.handleOnClick(item)} key={index}/>
              )
            })}
            <ListItem
              primaryText="Inbox Sample"
              leftIcon={<ContentInbox />}
              // initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
          </List>

        </MuiThemeProvider>
    );
  }
}

export default withRouter(MainMenu)