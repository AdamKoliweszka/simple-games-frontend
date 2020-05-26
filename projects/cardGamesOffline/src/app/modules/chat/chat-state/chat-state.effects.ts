import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ChatState } from "./chat-state.reducers";
import { Store } from "@ngrx/store";
import { initChatMessages, addChatMessages } from "./chat-state.actions";
import { ChatApiService } from "../services/chat-api.service";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class ChatEffect {
  constructor(
    private action: Actions,
    private chatStore: Store<ChatState>,
    private chatApiService: ChatApiService
  ) {}

  @Effect()
  loadOldMessages$ = this.action.pipe(
    ofType(initChatMessages),
    mergeMap((action) => {
      return this.chatApiService.getOldMessages(50).pipe(
        map((value) => {
          return addChatMessages({ messages: value });
        })
      );
    })
  );
}
