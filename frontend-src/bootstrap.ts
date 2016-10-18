import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";
import {bootloader} from "@angularclass/hmr";



function startApplication(){
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}


const isDev = !__IS_PROD_MODE__;

if (!isDev) {
    enableProdMode();
}

bootloader(startApplication);
