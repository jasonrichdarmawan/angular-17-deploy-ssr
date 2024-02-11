import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'space',
    },
    {
        path: 'space',
        loadChildren: () => import("./feat/space/space.module").then(m => m.SpaceModule),
    }
];
