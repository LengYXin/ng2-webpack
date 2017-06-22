import { NgModule } from '@angular/core';
import * as MD from '@angular/material';
import '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
let ports = [];
for (var key in MD) {
    if (MD.hasOwnProperty(key) && /Md.*Module/.test(key)) {
        var element = (<any>MD)[key];
        ports.push(element);
    }
}

@NgModule({
    imports: ports,
    exports: ports,
})
export class MyOwnCustomMaterialModule { }