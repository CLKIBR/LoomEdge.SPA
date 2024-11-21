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
                path: 'warehouse-status-report',
                loadComponent: () => import('./warehouse-status-report/warehouse-status-report.component').then(m => m.WarehouseStatusReportComponent),
                data: {
                    title: 'warehouse-status-report'
                }
            },
            {
                path: 'warehouse-movement-report',
                loadComponent: () => import('./warehouse-movement-report/warehouse-movement-report.component').then(m => m.WarehouseMovementReportComponent),
                data: {
                    title: 'warehouse-movement-report'
                }
            },
            {
                path: 'order-reports-purchase',
                loadComponent: () => import('./order-reports-purchase/order-reports-purchase.component').then(m => m.OrderReportsPurchaseComponent),
                data: {
                    title: 'order-reports-purchase'
                }
            },
            {
                path: 'warehouse-aging-report',
                loadComponent: () => import('./warehouse-aging-report/warehouse-aging-report.component').then(m => m.WarehouseAgingReportComponent),
                data: {
                    title: 'warehouse-aging-report'
                }
            },
            {
                path: 'tag-query',
                loadComponent: () => import('./tag-query/tag-query.component').then(m => m.TagQueryComponent),
                data: {
                    title: 'tag-query'
                }
            },
            {
                path: 'stock-quantity-control',
                loadComponent: () => import('./stock-quantity-control/stock-quantity-control.component').then(m => m.StockQuantityControlComponent),
                data: {
                    title: 'stock-quantity-control'
                }
            },
        ]
    }
]


