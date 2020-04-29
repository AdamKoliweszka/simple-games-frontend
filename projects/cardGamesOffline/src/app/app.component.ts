import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "./modules/user-of-service/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cardGamesOffline";
  constructor(
    private translate: TranslateService,
    private authService: AuthService
  ) {
    this.authService.initTokens();
    translate.setDefaultLang("pl");
  }
}
