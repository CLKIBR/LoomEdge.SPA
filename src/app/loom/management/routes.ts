import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Management'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards',
                pathMatch: 'full'
            },
            {
                path: 'user-definitions',
                loadComponent: () => import('./user-definitions/user-definitions.component').then(m => m.UserDefinitionsComponent),
                data: {
                    title: 'user-definitions'
                }
            },
            {
                path: 'user-actions',
                loadComponent: () => import('./user-actions/user-actions.component').then(m => m.UserActionsComponent),
                data: {
                    title: 'user-actions'
                }
            },
            {
                path: 'label-design',
                loadComponent: () => import('./label-design/label-design.component').then(m => m.LabelDesignComponent),
                data: {
                    title: 'label-design'
                }
            },
            {
                path: 'label-parameters',
                loadComponent: () => import('./label-parameters/label-parameters.component').then(m => m.LabelParametersComponent),
                data: {
                    title: 'label-parameters'
                }
            },

        ]
    }
];


