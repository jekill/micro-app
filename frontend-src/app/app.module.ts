import {NgModule, Inject} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgRedux, NgReduxModule} from "ng2-redux";

import {App} from "./app";
import {AppStore} from "./redux/store";
import {AppState} from "./redux/state";
import {UploadForm} from "./components/upload-form/upload-form";
import {PreviewFileInput} from "./components/preview-file-input/preview-file-input";

@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule,
        FormsModule
    ],
    declarations: [App, UploadForm, PreviewFileInput],
    bootstrap: [App],
    providers: [
    ]
})

export class AppModule {
    constructor(@Inject(NgRedux) store: NgRedux<AppState>) {
        store.provideStore(AppStore);
    }
}