import * as ChatActions from "./chat-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { ChatMessage } from "../models/chat-message";

export interface ChatState {
  chatMessages: ChatMessage[];
}

const initialState: ChatState = {
  chatMessages: [
    // {
    //   username: "test",
    //   message: "testowa wiadomość",
    //   date: new Date(),
    // } as ChatMessage,
  ],
};

const chatReducer = createReducer(
  initialState,
  on(ChatActions.addChatMessage, (state, { message }) => ({
    ...state,
    chatMessages: [...state.chatMessages, message],
  })),
  on(ChatActions.addChatMessages, (state, { messages }) => ({
    ...state,
    chatMessages: state.chatMessages.concat(messages),
  })),
  on(ChatActions.removeLastChatMessages, (state) => ({
    ...state,
    chatMessages: state.chatMessages.splice(0, 1),
  }))
);

export function reducer(state: ChatState | undefined, action: Action) {
  return chatReducer(state, action);
}
