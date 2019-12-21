import { SET_ACTIVE_PROJECT } from './navigation-types';
import state from './navigation-state';

const setActiveProject = (project) => ({ type: SET_ACTIVE_PROJECT, payload: { ...project } });

const setActiveProjectByPath = (path) => {
  const project = state.projects.find((item) => item.path === path);
  if (!project) return null;

  return ({ type: SET_ACTIVE_PROJECT, payload: { ...project } });
};

export default {
  setActiveProject,
  setActiveProjectByPath,
};
