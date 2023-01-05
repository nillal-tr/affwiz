export interface IMenuItem {
  name: string;
  index: number;
  route: string;
  component: string;
  tabs: Tab[];
}

export interface Tab {
  name: string;
  index: number;
  route: string;
  component: string;
}


  const menu: IMenuItem[] = [
    {
      name: 'Affiliate Types/Rates',
      index: 0,
      route: '/aff-types',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Affiliate Types',
          index: 0,
          route: 'view',
          component: 'ViewAffTypeComponent'
        },
        {
          name: 'Add Affiliate Types',
          index: 1,
          route: 'edit',
          component: 'AddEditAffTypeComponent'
        },
      ],
    },
    {
      name: 'News & Promotions',
      index: 1,
      route: '/news-and-promotions',
      component: '',
      tabs: [
        {
          name: 'View Announcements',
          index: 0,
          route: '/view-announcements',
          component: '',
        },
        {
          name: 'Add New/Edit Annoucement',
          index: 1,
          route: '/add-edit-annoucement',
          component: '',
        },
      ],
    },
    {
      name: 'Affiliates',
      index: 2,
      route: '/affiliates',
      component: '',
      tabs: [
        {
          name: 'View Affiliates',
          index: 0,
          route: '/view-affiliates',
          component: '',
        },
        {
          name: 'Add/Edit Affiliate',
          index: 1,
          route: '/add-edit-affiliate',
          component: '',
        },
        {
          name: 'View Tiers',
          index: 2,
          route: '/view-tiers',
          component: '',
        },
        {
          name: 'Pay Affiliates',
          index: 3,
          route: '/pay-affiliates',
          component: '',
        },
      ],
    },
    {
      name: 'Affiliates Groups',
      index: 3,
      route: '/affiliates-groups',
      component: '',
      tabs: [
        {
          name: 'View Affiliate Groups',
          index: 0,
          route: '/View-affiliate-groups',
          component: '',
        },
        {
          name: 'Add/Edit Affiliate Group',
          index: 1,
          route: '/add-edit-affiliate-group',
          component: '',
        },
        {
          name: 'Move Affiliates',
          index: 2,
          route: '/move-affiliates',
          component: '',
        },
      ],
    },
    {
      name: 'Categories',
      index: 4,
      route: '/categories',
      component: '',
      tabs: [
        {
          name: 'View Affiliate Categories',
          component: '',
          index: 0,
          route: '/View-affiliate-categories',
        },
        {
          name: 'Add/Edit Categories',
          index: 1,
          route: '/add-edit-categories',
          component: '',
        },
      ],
    },
    {
      name: 'Countries',
      index: 5,
      route: '/countries',
      component: '',
      tabs: [
        {
          name: 'View Countries',
          index: 0,
          route: '/View-countries',
          component: '',
        },
        {
          name: 'Add/Edit Countries',
          index: 1,
          route: '/add-edit-countries',
          component: '',
        },
      ],
    },
    {
      name: 'Brands',
      index: 6,
      route: '/brands',
      component: '',
      tabs: [
        {
          name: 'View Brands',
          index: 0,
          route: '/View-brands',
          component: '',
        },
        {
          name: 'Add/Edit Brands',
          index: 1,
          route: '/add-edit-brands',
          component: '',
        },
      ],
    },
    {
      name: 'Languages',
      index: 7,
      route: '/languages',
      component: '',
      tabs: [
        {
          name: 'View Languages',
          index: 0,
          route: '/View-languages',
          component: '',
        },
        {
          name: 'Add/Edit Languages',
          index: 1,
          route: '/add-edit-languages',
          component: '',
        },
      ],
    },
    {
      name: 'Promo Tools',
      index: 8,
      route: '/promo-tools',
      component: '',
      tabs: [
        {
          name: 'View All Promo Tools',
          index: 0,
          route: '/View-all-promo-tools',
          component: '',
        },
        {
          name: 'Add/Edit GIF Banner',
          index: 1,
          route: '/add-edit-gif-banner',
          component: '',
        },
        {
          name: 'Add Flash Banner',
          index: 2,
          route: '/add-flash-banner',
          component: '',
        },
        {
          name: 'Add/Edit Mailer/White Label',
          index: 3,
          route: '/add-edit-mailer-white-label',
          component: '',
        },
        {
          name: 'Add/Edit Other Promo Tools',
          index: 4,
          route: '/add-edit-other-promo-tools',
          component: '',
        },
        {
          name: 'Add gif Banners from zip',
          index: 5,
          route: '/add-gif-banners-from-zip',
          component: '',
        },
      ],
    },
    {
      name: 'Instrument Type',
      index: 9,
      route: '/instrument-type',
      component: '',
      tabs: [
        {
          name: 'View Instrument Type',
          index: 0,
          route: '/View-instrument-type',
          component: '',
        },
        {
          name: 'Add/Edit Instrument Type',
          index: 1,
          route: '/add-edit-instrument-type',
          component: '',
        },
      ],
    },
    {
      name: 'Pixels',
      index: 10,
      route: '/pixels',
      component: '',
      tabs: [
        {
          name: 'View Pixels',
          index: 0,
          route: '/View-pixels',
          component: '',
        },
        {
          name: 'Add/Edit Pixels',
          index: 1,
          route: '/add-edit-pixels',
          component: '',
        },
      ],
    },
    {
      name: 'Rotating Banners',
      index: 11,
      route: '/rotating-banners',
      component: '',
      tabs: [
        {
          name: 'View Banner Groups',
          index: 0,
          route: '/View-banner-groups',
          component: '',
        },
        {
          name: 'Add/Edit Banner Groups',
          index: 1,
          route: '/add-edit-banner-groups',
          component: '',
        },
      ],
    },
    {
      name: 'Links & Landing Pages',
      index: 12,
      route: '/links-landing-pages',
      component: '',
      tabs: [
        {
          name: 'View Text Links',
          index: 0,
          route: '/View-text-links',
          component: '',
        },
        {
          name: 'Add/Edit Text Links',
          index: 1,
          route: '/add-edit-text-links',
          component: '',
        },
      ],
    },
    {
      name: 'Reports',
      index: 13,
      route: '/reports',
      component: '',
      tabs: [],
    },
    {
      name: 'Tools',
      index: 14,
      route: '/tools',
      component: '',
      tabs: [],
    },
    {
      name: 'Users',
      index: 15,
      route: '/users',
      component: '',
      tabs: [
        {
          name: 'View Users',
          index: 0,
          route: '/View-users',
          component: '',
        },
        {
          name: 'Add/Edit Users',
          index: 1,
          route: '/add-edit-users',
          component: '',
        },
      ],
    },
    {
      name: 'Email Notifications',
      index: 16,
      route: '/email-notifications',
      component: '',
      tabs: [
        {
          name: 'View Messages',
          index: 0,
          route: '/View-messages',
          component: '',
        },
        {
          name: 'Add/Edit Messages',
          index: 1,
          route: '/add-edit-messages',
          component: '',
        },
      ],
    },
    {
      name: 'Audit Logs',
      index: 17,
      route: '/audit-logs',
      component: '',
      tabs: [],
    },
    {
      name: 'Preferences/Setup',
      index: 18,
      route: '/preferences-setup',
      component: '',
      tabs: [
        {
          name: 'Setup Defaults',
          index: 0,
          route: '/setup-defaults',
          component: '',
        },
        {
          name: 'Email Messages',
          index: 1,
          route: '/email-messages',
          component: '',
        },
        {
          name: 'Affiliate Console',
          index: 2,
          route: '/affiliate-console',
          component: '',
        },
        {
          name: 'Spider IPs',
          index: 3,
          route: '/spider-IPs',
          component: '',
        },
        {
          name: 'Spider Headers',
          index: 4,
          route: '/spider-headers',
          component: '',
        },
        {
          name: 'IP Blocking',
          index: 5,
          route: '/IP-blocking',
          component: '',
        },
      ],
    },
    {
      name: 'Logut',
      index: 19,
      route: '/login',
      component: '',
      tabs: [],
    },
    {
      name: 'Help',
      index: 20,
      route: '/help',
      component: '',
      tabs: [],
    },
    {
      name: 'Updates',
      index: 21,
      route: '/updates',
      component: '',
      tabs: [],
    },
    {
      name: 'Support',
      index: 22,
      route: '/support',
      component: '',
      tabs: [],
    },
  ]

export { menu };
