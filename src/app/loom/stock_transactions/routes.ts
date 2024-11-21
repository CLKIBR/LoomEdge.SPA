import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Stock_transactions'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards',
                pathMatch: 'full'
            },
            {
                path: 'login-operations',
                loadComponent: () => import('./login-operations/login-operations.component').then(m => m.LoginOperationsComponent),
                data: {
                    title: 'login-operations'
                }
            },
            {
                path: 'exit-operations',
                loadComponent: () => import('./exit-operations/exit-operations.component').then(m => m.ExitOperationsComponent),
                data: {
                    title: 'exit-operations'
                }
            },
            {
                path: 'transfer-operations',
                loadComponent: () => import('./transfer-operations/transfer-operations.component').then(m => m.TransferOperationsComponent),
                data: {
                    title: 'transfer-operations'
                }
            }
        ]
    }
]


