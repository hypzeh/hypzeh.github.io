import {
  SET_ACTIVE_SECTION,
  SET_ACTIVE_SECTION_BY_PATH,
} from './navigation-types';

const setActiveSection = section => ({ type: SET_ACTIVE_SECTION, payload: section });

const setActiveSectionByPath = path => ({ type: SET_ACTIVE_SECTION_BY_PATH, payload: path });

export default {
  setActiveSection,
  setActiveSectionByPath,
};
