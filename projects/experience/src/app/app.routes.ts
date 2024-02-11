import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'experience',
        loadChildren: () => import("./feat/experience/experience.module").then(m => m.ExperienceModule),
    },
];
