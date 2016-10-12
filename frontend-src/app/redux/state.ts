import {Image} from "../models/Image";
import {UploadFormState} from "../components/upload-form/upload-form.redux";

export interface AppState {
    gallery:{
        images:Image[],
        searchQuery:string
    },
    form:UploadFormState
}
