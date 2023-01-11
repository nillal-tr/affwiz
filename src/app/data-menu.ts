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
      route: 'aff-types',
      component: 'MainViewComponent',
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
      route: 'news-and-promotions',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Announcements',
          index: 0,
          route: 'view-announcements',
          component: 'MainViewComponent',
        },
        {
          name: 'Add New/Edit Annoucement',
          index: 1,
          route: 'add-edit-annoucement',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Affiliates',
      index: 2,
      route: 'affiliates',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Affiliates',
          index: 0,
          route: 'view-affiliates',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Affiliate',
          index: 1,
          route: 'add-edit-affiliate',
          component: 'MainViewComponent',
        },
        {
          name: 'View Tiers',
          index: 2,
          route: 'view-tiers',
          component: 'MainViewComponent',
        },
        {
          name: 'Pay Affiliates',
          index: 3,
          route: 'pay-affiliates',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Affiliates Groups',
      index: 3,
      route: 'affiliates-groups',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Affiliate Groups',
          index: 0,
          route: 'view-affiliate-groups',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Affiliate Group',
          index: 1,
          route: 'add-edit-affiliate-group',
          component: 'MainViewComponent',
        },
        {
          name: 'Move Affiliates',
          index: 2,
          route: 'move-affiliates',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Categories',
      index: 4,
      route: 'categories',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Affiliate Categories',
          component: 'MainViewComponent',
          index: 0,
          route: 'View-affiliate-categories',
        },
        {
          name: 'Add/Edit Categories',
          index: 1,
          route: 'add-edit-categories',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Countries',
      index: 5,
      route: 'countries',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Countries',
          index: 0,
          route: 'View-countries',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Countries',
          index: 1,
          route: 'add-edit-countries',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Brands',
      index: 6,
      route: 'brands',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Brands',
          index: 0,
          route: 'View-brands',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Brands',
          index: 1,
          route: 'add-edit-brands',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Languages',
      index: 7,
      route: 'languages',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Languages',
          index: 0,
          route: 'View-languages',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Languages',
          index: 1,
          route: 'add-edit-languages',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Promo Tools',
      index: 8,
      route: 'promo-tools',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View All Promo Tools',
          index: 0,
          route: 'View-all-promo-tools',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit GIF Banner',
          index: 1,
          route: 'add-edit-gif-banner',
          component: 'MainViewComponent',
        },
        {
          name: 'Add Flash Banner',
          index: 2,
          route: 'add-flash-banner',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Mailer/White Label',
          index: 3,
          route: 'add-edit-mailer-white-label',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Other Promo Tools',
          index: 4,
          route: 'add-edit-other-promo-tools',
          component: 'MainViewComponent',
        },
        {
          name: 'Add gif Banners from zip',
          index: 5,
          route: 'add-gif-banners-from-zip',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Instrument Type',
      index: 9,
      route: 'instrument-type',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Instrument Type',
          index: 0,
          route: 'View-instrument-type',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Instrument Type',
          index: 1,
          route: 'add-edit-instrument-type',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Pixels',
      index: 10,
      route: 'pixels',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Pixels',
          index: 0,
          route: 'View-pixels',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Pixels',
          index: 1,
          route: 'add-edit-pixels',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Rotating Banners',
      index: 11,
      route: 'rotating-banners',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Banner Groups',
          index: 0,
          route: 'View-banner-groups',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Banner Groups',
          index: 1,
          route: 'add-edit-banner-groups',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Links & Landing Pages',
      index: 12,
      route: 'links-landing-pages',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Text Links',
          index: 0,
          route: 'View-text-links',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Text Links',
          index: 1,
          route: 'add-edit-text-links',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Reports',
      index: 13,
      route: 'reports',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Tools',
      index: 14,
      route: 'tools',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Users',
      index: 15,
      route: 'users',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Users',
          index: 0,
          route: 'View-users',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Users',
          index: 1,
          route: 'add-edit-users',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Email Notifications',
      index: 16,
      route: 'email-notifications',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'View Messages',
          index: 0,
          route: 'View-messages',
          component: 'MainViewComponent',
        },
        {
          name: 'Add/Edit Messages',
          index: 1,
          route: 'add-edit-messages',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Audit Logs',
      index: 17,
      route: 'audit-logs',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Preferences/Setup',
      index: 18,
      route: 'preferences-setup',
      component: 'MainViewComponent',
      tabs: [
        {
          name: 'Setup Defaults',
          index: 0,
          route: 'setup-defaults',
          component: 'MainViewComponent',
        },
        {
          name: 'Email Messages',
          index: 1,
          route: 'email-messages',
          component: 'MainViewComponent',
        },
        {
          name: 'Affiliate Console',
          index: 2,
          route: 'affiliate-console',
          component: 'MainViewComponent',
        },
        {
          name: 'Spider IPs',
          index: 3,
          route: 'spider-IPs',
          component: 'MainViewComponent',
        },
        {
          name: 'Spider Headers',
          index: 4,
          route: 'spider-headers',
          component: 'MainViewComponent',
        },
        {
          name: 'IP Blocking',
          index: 5,
          route: 'IP-blocking',
          component: 'MainViewComponent',
        },
      ],
    },
    {
      name: 'Logut',
      index: 19,
      route: 'login',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Help',
      index: 20,
      route: 'help',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Updates',
      index: 21,
      route: 'updates',
      component: 'MainViewComponent',
      tabs: [],
    },
    {
      name: 'Support',
      index: 22,
      route: 'support',
      component: 'MainViewComponent',
      tabs: [],
    },
  ]

export { menu };
