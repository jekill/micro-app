import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgRedux, NgReduxModule} from "ng2-redux";

import {App} from "./app";
import {AppStore} from "./redux/store";
import {AppState} from "./redux/state";
import {UploadForm} from "./components/upload-form/upload-form";
import {PreviewFileInput} from "./components/preview-file-input/preview-file-input";

@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule
    ],
    declarations: [App, UploadForm, PreviewFileInput],
    bootstrap: [App],
    providers: [
    ]
})

export class AppModule {
    constructor(store: NgRedux<AppState>) {
        store.provideStore(AppStore);
    }
}