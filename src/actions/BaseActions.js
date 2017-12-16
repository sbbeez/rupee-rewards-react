import { ON_COLLAPSE_CLICKED, ON_CHANGE_CONTENT } from "./types";

export const onCollapseClickedAction = isCollapsed => {
  return {
    type: ON_COLLAPSE_CLICKED,
    payload: isCollapsed
  };
};

export const onChangeContentAction = content => {
  console.log(content);
  return {
    type: ON_CHANGE_CONTENT,
    payload: content
  };
};
