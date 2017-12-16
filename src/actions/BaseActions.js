import { ON_COLLAPSE_CLICKED } from './types';

export const onCollapseClickedAction = isCollapsed => {
  return {
    type: ON_COLLAPSE_CLICKED,
    payload: isCollapsed
  };
};
