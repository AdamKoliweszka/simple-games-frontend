import { createAction, props } from "@ngrx/store";
import { ChatMessage } from "../models/chat-message";

export const addChatMessage = createAction(
  "[CHAT] Add chat message",
  props<{ message: ChatMessage }>()
);

export const addChatMessages = createAction(
  "[CHAT] Add chat messages",
  props<{ messages: ChatMessage[] }>()
);

export const removeLastChatMessages = createAction(
  "[CHAT] Remove last chat messages"
);

export const initChatMessages = createAction("[CHAT] Init chat messages");
