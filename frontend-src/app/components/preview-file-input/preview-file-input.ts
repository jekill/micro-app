import {Component, Input, ViewChild, Output, EventEmitter, Inject, NgZone} from "@angular/core";

@Component({
    selector: 'PreviewFileInput',
    template: require("./preview-file-input.html")
})
export class PreviewFileInput {
    @Input() name;
    @Input() disabled;
    @Input() buttonClasses='';
    @ViewChild('fileInput') fileInput;
    @Output() preview: EventEmitter<string> = new EventEmitter<string>();
    @Output() error: EventEmitter<string> = new EventEmitter<string>();

    constructor(@Inject(NgZone) private _zone: NgZone) {

    }

    fileChanged(input: HTMLInputElement) {
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = (e: any) => {
            this._zone.run(() => {
                this.preview.emit(e.target.result);
            });
        };
        reader.readAsDataURL(file);
    }
}