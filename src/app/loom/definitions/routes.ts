import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Definitions'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards',
                pathMatch: 'full'
            },
            {
                path: 'material-type-definitions',
                loadComponent: () => import('./material-type-definitions/material-type-definitions.component').then(m => m.MaterialTypeDefinitionsComponent),
                data: {
                    title: 'material-type-definitions'
                }
            },
            {
                path: 'material-class-definitions',
                loadComponent: () => import('./material-class-definitions/material-class-definitions.component').then(m => m.MaterialClassDefinitionsComponent),
                data: {
                    title: 'material-class-definitions'
                }
            },
            {
                path: 'material-group-definitions',
                loadComponent: () => import('./material-group-definitions/material-group-definitions.component').then(m => m.MaterialGroupDefinitionsComponent),
                data: {
                    title: 'material-group-definitions'
                }
            },
            {
                path: 'material-variables',
                loadComponent: () => import('./material-variables/material-variables.component').then(m => m.MaterialVariablesComponent),
                data: {
                    title: 'material-variables'
                }
            },
            {
                path: 'material-descriptions',
                loadComponent: () => import('./material-descriptions/material-descriptions.component').then(m => m.MaterialDescriptionsComponent),
                data: {
                    title: 'material-descriptions'
                }
            },
            {
                path: 'customer-definitions',
                loadComponent: () => import('./customer-definitions/customer-definitions.component').then(m => m.CustomerDefinitionsComponent),
                data: {
                    title: 'customer-definitions'
                }
            },
            {
                path: 'warehouse-definitions',
                loadComponent: () => import('./warehouse-definitions/warehouse-definitions.component').then(m => m.WarehouseDefinitionsComponent),
                data: {
                    title: 'Navs & Tabs'
                }
            },
            {
                path: 'consumable-center-definitions',
                loadComponent: () => import('./consumable-center-definitions/consumable-center-definitions.component').then(m => m.ConsumableCenterDefinitionsComponent),
                data: {
                    title: 'consumable-center-definitions'
                }
            },
            {
                path: 'unit-definitions',
                loadComponent: () => import('./unit-definitions/unit-definitions.component').then(m => m.UnitDefinitionsComponent),
                data: {
                    title: 'unit-definitions'
                }
            },
            {
                path: 'location-definitions',
                loadComponent: () => import('./location-definitions/location-definitions.component').then(m => m.LocationDefinitionsComponent),
                data: {
                    title: 'location-definitions'
                }
            }
        ]
    }
];


