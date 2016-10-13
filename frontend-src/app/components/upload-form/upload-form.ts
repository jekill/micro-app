import {Component, Inject, ChangeDetectionStrategy, OnDestroy, EventEmitter, Output} from "@angular/core";
import {AppState} from "../../redux/state";
import {PreviewFileInput} from "../preview-file-input/preview-file-input";
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {createActionChangePreviewImage, ChangePreviewImageAction} from "./upload-form.redux";
import {NgRedux, select} from "ng2-redux";
import {Guest} from "../../models/Guest";

@Component({
    selector: 'UploadForm',
    styles: [require('./upload-form.less')],
    template: require('./upload-form.html'),
})
export class UploadForm {

    email: string = "";
    emailIsValid: boolean = false;

    @select(['form','previewImage'])
    previewImage;

    guest: Guest = new Guest();


    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {

    }

    ngOnInit() {

    }

    onSubmit() {
        alert("qwe");
    }

    handleImagePreview(loadingImageDataUrl: string) {
        // this.store.dispatch(<any>createActionChangePreviewImage(loadingImageDataUrl));
        this.store.dispatch(<any>createActionChangePreviewImage(loadingImageDataUrl));
        return true;
    }

}