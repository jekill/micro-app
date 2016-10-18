import {NgModule, Inject, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgRedux, NgReduxModule} from "ng2-redux";

import {App} from "./app";
import {AppStore} from "./redux/store";
import {AppState} from "./redux/state";
import {UploadForm} from "./components/upload-form/upload-form";
import {PreviewFileInput} from "./components/preview-file-input/preview-file-input";
import {LastUploadsComponent} from "./components/last-uploads/last-uploads.compotent";
import {createNewHosts, createInputTransfer, removeNgStyles} from "@angularclass/hmr";

@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule,
        FormsModule
    ],
    declarations: [
        App,
        UploadForm,
        PreviewFileInput,
        LastUploadsComponent
    ],
    bootstrap: [App],
    providers: []
})

export class AppModule {
    constructor(@Inject(NgRedux) store: NgRedux<AppState>,
                @Inject(ApplicationRef) public appRef: ApplicationRef) {
        store.provideStore(AppStore);
    }



    hmrOnInit(store) {
        if (!store || !store.state) return;
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data)
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }
    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation)

        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        // store.state = {data: 'yolo'};
        // store.state = Object.assign({}, appState)
        // save input values

        store.restoreInputValues  = createInputTransfer();
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts()
        delete store.disposeOldHosts;
        // anything you need done the component is removed
    }
}