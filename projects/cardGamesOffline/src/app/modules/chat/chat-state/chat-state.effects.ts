import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { ChatState } from "./chat-state.reducers";
import { Store } from "@ngrx/store";

@Injectable()
export class ChatEffect {
  constructor(private action: Actions, private chatStore: Store<ChatState>) {}
}
