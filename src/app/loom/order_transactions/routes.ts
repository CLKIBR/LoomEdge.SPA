import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Order_transactions'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards',
                pathMatch: 'full'
            },
            {
                path: 'purchase-orders',
                loadComponent: () => import('./purchase-orders/purchase-orders.component').then(m => m.PurchaseOrdersComponent),
                data: {
                    title: 'purchase-orders'
                }
            }
        ]
    }
];


