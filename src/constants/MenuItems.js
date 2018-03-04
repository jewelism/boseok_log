import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

const TechItems = [
  { uri: 'tech/js', name: 'Javascript', icon: <ActionGrade /> },
  { uri: 'tech/react', name: 'React.js', icon: <ActionGrade /> },
  { uri: 'tech/cloud', name: 'Cloud Server', icon: <ContentDrafts /> },
  { uri: 'tech/macos', name: 'Mac OS', icon: <ContentDrafts /> },
]

export const MenuItems = [
  { uri: 'about', name: 'About', icon: <ContentSend /> },
  { uri: 'company', name: 'Company', icon: <ContentSend /> },
  { uri: 'tech', name: 'Tech Log', icon: <ContentSend />, nestedItems: TechItems },
  { uri: 'useless', name: '별로 필요없는 지식들', icon: <ContentSend /> },
]



