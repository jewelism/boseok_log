import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

export const JS = 'js'
export const REACT = 'react'
export const CLOUD = 'cloud'
export const MAC = 'mac'
export const TECH_PREFIX = '/tech'
export const JS_URI = `${TECH_PREFIX}/${JS}`
export const REACT_URI = `${TECH_PREFIX}/${REACT}`
export const CLOUD_URI = `${TECH_PREFIX}/${CLOUD}`
export const MAC_URI = `${TECH_PREFIX}/${MAC}`
export const TECH_ITEMS = [
  { id: JS, uri: JS_URI, name: 'Javascript', icon: <ActionGrade /> },
  { id: REACT, uri: REACT_URI, name: 'React.js', icon: <ActionGrade /> },
  { id: CLOUD, uri: CLOUD_URI, name: 'Cloud Server', icon: <ContentDrafts /> },
  { id: MAC, uri: MAC_URI, name: 'Mac OS', icon: <ContentDrafts /> },
]

export const LATEST_URI = '/'
export const ABOUT_URI = '/about'
export const MYAPPS_URI = '/myapps'
export const HIGHLIGHT_URI = `${TECH_PREFIX}/highlight`
export const KNOWLEDGE_URI = '/knowledge'
export const MENU_ITEMS = [
  { uri: LATEST_URI, name: 'Latest', icon: <ContentSend /> },
  { uri: ABOUT_URI, name: 'About', icon: <ContentSend /> },
  { uri: MYAPPS_URI, name: 'My Applications', icon: <ContentSend /> },
  { uri: HIGHLIGHT_URI, name: 'Tech Log', icon: <ContentSend />, nestedItems: TECH_ITEMS },
  { uri: KNOWLEDGE_URI, name: 'Knowledge', icon: <ContentSend /> },
]



