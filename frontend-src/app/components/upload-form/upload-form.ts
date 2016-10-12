import {Component, Inject, ChangeDetectionStrategy, OnDestroy, EventEmitter, Output} from "@angular/core";
import {Store} from "redux/index";
import {AppState} from "../../redux/state";
import {PreviewFileInput} from "../preview-file-input/preview-file-input";
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {createActionChangePreviewImage, ChangePreviewImageAction} from "./upload-form.redux";

@Component({
    selector: 'UploadForm',
    styles: [require('./upload-form.less')],
    template: require('./upload-form.html'),
})
export class UploadForm implements OnDestroy {

    private unscribe:Function;

    email:string = "";
    emailIsValid:boolean = false;
    // previewImage:BehaviorSubject<string> = new BehaviorSubject<string>('');
    previewImage:BehaviorSubject<string> = new BehaviorSubject<string>('');
    previewImageResolve:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>) {
        Object.assign(this, store.getState().form);
        this.unscribe = store.subscribe(()=> {
            const formState = store.getState().form;
            Object.assign(this, formState);
        });
    }

    ngOnDestroy():any {
        this.unscribe();
    }

    onSubmit() {
        alert("qwe");
    }

    handleImagePreview(loadingImageDataUrl:string) {
        this.store.dispatch(<any>createActionChangePreviewImage(loadingImageDataUrl));
        return true;
    }

}