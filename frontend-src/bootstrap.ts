import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";
import {bootloader} from "@angularclass/hmr";


declare var window:{__store?:any;};


function startApplication(){
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}


let isDev = true;

if (!isDev) {
    enableProdMode();
}

bootloader(startApplication);
