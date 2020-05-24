import { ChatState } from "./chat-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { chatStateKey } from "./chat-state.key";

export const selectChatState = createFeatureSelector<ChatState>(chatStateKey);

export const selectChatMessages = createSelector(
  selectChatState,
  (state) => state.chatMessages
);
