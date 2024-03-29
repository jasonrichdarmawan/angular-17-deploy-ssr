import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'experience',
    },
    {
        path: 'experience',
        loadChildren: () => import("./feat/experience/experience.module").then(m => m.ExperienceModule),
    },
];
