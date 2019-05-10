import { STORY_ARCHIVE } from "../constants/actionTypes";

const initialState = [];

const applyArchiveStory = (state, action) => [...state, action.id];

function archiveReducer(state = initialState, action) {
  switch (action.type) {
    case STORY_ARCHIVE:
      return applyArchiveStory(state, action);
    default:
      return state;
  }
}

export { archiveReducer };
