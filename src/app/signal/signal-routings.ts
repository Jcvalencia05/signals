import { Route } from "@angular/router";
import { SignalComponent } from "./signal.component";
import path from "path";

const ROUTES:Route[] = [
    {
        path:"",
        component:SignalComponent,
        children:[
            {
                path:"",
                pathMatch:"full",
                redirectTo:"signal-ejemplo1"
            },
            {
                path:"signal-ejemplo1",
                loadComponent:()=> import("./signal-ejemplo1/signal-ejemplo1.component")
            }
        ]
    }
]
export default ROUTES;