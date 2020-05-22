import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MessagesStartPageComponent } from "./messages-start-page/messages-start-page.component";

const routes: Routes = [
  { path: "", redirectTo: "chat" },
  {
    path: "",
    component: MessagesStartPageComponent,
    children: [
      {
        path: "chat",
        loadChildren: () =>
          import("../chat/chat.module").then((m) => m.ChatModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
