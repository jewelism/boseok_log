import React from 'react';

import WatchLater from 'material-ui/svg-icons/action/watch-later';
import PersonPin from 'material-ui/svg-icons/maps/person-pin';
import GetApp from 'material-ui/svg-icons/action/get-app';
import Book from 'material-ui/svg-icons/action/book';
import JsIcon from 'material-ui/svg-icons/action/open-in-browser';
import Code from 'material-ui/svg-icons/action/code';
import Cloud from 'material-ui/svg-icons/file/cloud';
// import Mac from 'material-ui/svg-icons/hardware/desktop-mac';
import Coop from 'material-ui/svg-icons/social/people';
import BuildIcon from 'material-ui/svg-icons/action/build';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import SpeakerNotes from 'material-ui/svg-icons/action/speaker-notes';

export const TECH = 'tech';
export const TECH_TITLE = 'See All Techs';
export const LASTEST = 'Latest';

export const KNOWLEDGE = 'knowledge';
export const TALK = 'talk';

export const JS = 'js';
export const REACT = 'react';
export const CLOUD = 'cloud';
export const COOP = 'coop';
export const DP = 'dp';
// export const MAC = 'mac';

export const TECH_CONSTANTS = [JS, REACT, CLOUD, COOP];

export const TECH_PREFIX = `/${TECH}`;
export const JS_URI = `${TECH_PREFIX}/${JS}`;
export const REACT_URI = `${TECH_PREFIX}/${REACT}`;
export const CLOUD_URI = `${TECH_PREFIX}/${CLOUD}`;
export const COOP_URI = `${TECH_PREFIX}/${COOP}`;
export const DP_URI = `${TECH_PREFIX}/${DP}`;
// export const MAC_URI = `${TECH_PREFIX}/${MAC}`;

export const NAMES = {
  [JS]: 'Javascript',
  [REACT]: 'React.js',
  [CLOUD]: 'Cloud Server',
  [COOP]: '협업 가이드',
  [DP]: 'Design Pattern',
  // [MAC]: 'Mac OS',
  [KNOWLEDGE]: 'Knowledge',
  [TALK]: 'Talk'
};

export const TECH_ITEMS = [
  { id: JS, uri: JS_URI, name: NAMES[JS], icon: <JsIcon /> },
  { id: REACT, uri: REACT_URI, name: NAMES[REACT], icon: <Code /> },
  { id: CLOUD, uri: CLOUD_URI, name: NAMES[CLOUD], icon: <Cloud /> },
  { id: COOP, uri: COOP_URI, name: NAMES[COOP], icon: <Coop /> },
  { id: DP, uri: DP_URI, name: NAMES[DP], icon: <BuildIcon /> }
  // { id: MAC, uri: MAC_URI, name: NAMES[MAC], icon: <Mac /> },
];

export const LATEST_URI = '/';
export const ABOUT_URI = '/about';
export const MYAPPS_URI = '/myapps';
export const HIGHLIGHT_URI = `${TECH_PREFIX}/highlight`;
export const KNOWLEDGE_URI = '/knowledge';
export const TALK_URI = '/talk';
export const MENU_ITEMS = [
  { uri: LATEST_URI, name: LASTEST, icon: <WatchLater /> },
  { uri: ABOUT_URI, name: 'About Boseok', icon: <PersonPin /> },
  { uri: MYAPPS_URI, name: 'Boseok Apps', icon: <GetApp /> },
  { uri: HIGHLIGHT_URI, name: 'Tech Log', icon: <Book />, nestedItems: TECH_ITEMS },
  { uri: KNOWLEDGE_URI, name: NAMES[KNOWLEDGE], icon: <LibraryBooks /> },
  { uri: TALK_URI, name: NAMES[TALK], icon: <SpeakerNotes /> }
];



