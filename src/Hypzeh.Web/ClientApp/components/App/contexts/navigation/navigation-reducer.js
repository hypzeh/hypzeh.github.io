import {
  ADD_SECTION,
  SET_ACTIVE_SECTION,
  SET_ACTIVE_SECTION_BY_PATH,
} from './navigation-types';

const fetchSectionByPath = (sections, path) => {
  const section = sections.find(item => item.defaultPath === path);
  if (!section) return sections[0];

  return section;
};

const reducer = (state, action) => {
  switch (action.type) {
  case ADD_SECTION:
    return { ...state, sections: [...state.sections, action.payload] };

  case SET_ACTIVE_SECTION:
    return { ...state, active: action.payload };

  case SET_ACTIVE_SECTION_BY_PATH:
    return { ...state, active: fetchSectionByPath(state.sections, action.payload) };

  default:
    return { ...state };
  }
};

export default reducer;
