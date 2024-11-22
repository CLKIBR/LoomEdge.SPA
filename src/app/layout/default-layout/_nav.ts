import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: 'views/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: 'views/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Stok İşlemleri',
    url: '/stock_transactions',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Giriş',
        url: '/stock_transactions/login-operations',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Çıkış',
        url: '/stock_transactions/exit-operations',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Transfer',
        url: '/stock_transactions/transfer-operations',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Sipariş İşlemleri',
    url: '/order_transactions',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Siparişler',
        url: '/order_transactions/purchase-orders',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Raporlar',
    url: '/reports',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Depo Durumu',
        url: '/reports/warehouse-status-report',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Depo Hareketleri',
        url: '/reports/warehouse-movement-report',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Sipariş Raporu',
        url: '/reports/order-reports-purchase',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Depo Yaşlandıma',
        url: '/reports/warehouse-aging-report',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Etiket Sorgulama',
        url: '/reports/tag-query',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Stok Miktar Kontrol',
        url: '/reports/stock-quantity-control',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Yönetim',
    url: '/management',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Kullanıcı Tanımla',
        url: '/management/user-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kullanıcı Hateketleri',
        url: '/management/user-actions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Etiket Tasarımı',
        url: '/management/label-design',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Etiket Paremetreleri',
        url: '/management/label-parameters',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Tanımlamalar',
    iconComponent: { name: 'cil-star' },
    url: '/definitions',
    children: [
      {
        name: 'Malzeme Tipi',
        url: '/definitions/material-type-definitions',
        icon: 'nav-icon-bullet',
        //badge: {color: 'success', text: 'FREE'}
      },
      {
        name: 'Malzeme Sınıfı',
        url: '/definitions/material-class-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Malzeme Grubu',
        url: '/definitions/material-group-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Malzeme Değişkenleri',
        url: '/definitions/material-descriptions',
        icon: 'nav-icon-bullet',
        //badge: {color: 'success', text: 'FREE'}
      },
      {
        name: 'Malzeme Tanımı',
        url: '/definitions/material-variables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Müşteri Tanımı',
        url: '/definitions/customer-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Depo Tanımı',
        url: '/definitions/warehouse-definitions',
        icon: 'nav-icon-bullet',
        //badge: {color: 'success', text: 'FREE'}
      },
      {
        name: 'Sarf Merkezi',
        url: '/definitions/consumable-center-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Birim Tanımı',
        url: '/definitions/unit-definitions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lokasyon Tanımı',
        url: '/definitions/location-definitions',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  { 
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
