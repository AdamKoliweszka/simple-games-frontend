import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ChatState } from "../chat-state.reducers";
import * as ChatSelectors from "../chat-state.selectors";
import * as ChatActions from "../chat-state.actions";
import { ChatMessage } from "../../models/chat-message";

@Injectable({
  providedIn: "root",
})
export class ChatDataContainerService {
  constructor(private store: Store<ChatState>) {}

  addChatMessage(message: ChatMessage) {
    this.store.dispatch(ChatActions.addChatMessage({ message }));
  }

  initMessages() {
    this.store.dispatch(ChatActions.initChatMessages());
  }
  get chatMessages() {
    return this.store.select(ChatSelectors.selectChatMessages);
  }
}
