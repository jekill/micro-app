import {Action} from "redux/index";

const UPLOAD_FORM_ACTION_VALIDATE_EMAIL = "UPLOAD_FORM_ACTION_VALIDATE_EMAIL";
const UPLOAD_FORM_ACTION_CHANGE_EMAIL = "UPLOAD_FORM_ACTION_CHANGE_EMAIL";
const UPLOAD_FORM_ACTION_CHANGE_PREVIEW_IMAGE = "UPLOAD_FORM_ACTION_CHANGE_PREVIEW_IMAGE";

export interface UploadFormState {
    email:string,
    emailIsValid:boolean,
    formView:{},
    previewImage:string
}

const InitialState:UploadFormState = {
    email: 'myEmail@jeka.ru',
    emailIsValid: false,
    formView: {},
    previewImage: ''
};

export interface ChangeEmailAction extends Action {
    newEmail:string;
}

export interface ChangePreviewImageAction extends Action {
    image:string;
}


export function formReducer(formState:UploadFormState = InitialState, action) {
    switch (action.type) {
        case UPLOAD_FORM_ACTION_VALIDATE_EMAIL:
            let isValid = formState.email != "" ? true : false;
            return Object.assign({}, formState, {'emailIsValid': isValid});
        case UPLOAD_FORM_ACTION_CHANGE_EMAIL:
            return Object.assign({}, formState, {'email': action.newEmail});
        case UPLOAD_FORM_ACTION_CHANGE_PREVIEW_IMAGE:
            return Object.assign({}, formState, {'previewImage': action.image});
    }

    return formState;
}


export function createActionChangeEmail(email:string):ChangeEmailAction {
    return {
        type: UPLOAD_FORM_ACTION_CHANGE_EMAIL,
        newEmail: email
    }
}

export function createActionChangePreviewImage(image:string):ChangePreviewImageAction {
    return {
        type: UPLOAD_FORM_ACTION_CHANGE_PREVIEW_IMAGE,
        image: image
    }
}