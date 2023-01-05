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
      route: 'news-and-promotions',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Announcements',
          index: 0,
          route: 'view-announcements',
          component: 'ContentComponent',
        },
        {
          name: 'Add New/Edit Annoucement',
          index: 1,
          route: 'add-edit-annoucement',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Affiliates',
      index: 2,
      route: 'affiliates',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Affiliates',
          index: 0,
          route: 'view-affiliates',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Affiliate',
          index: 1,
          route: 'add-edit-affiliate',
          component: 'ContentComponent',
        },
        {
          name: 'View Tiers',
          index: 2,
          route: 'view-tiers',
          component: 'ContentComponent',
        },
        {
          name: 'Pay Affiliates',
          index: 3,
          route: 'pay-affiliates',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Affiliates Groups',
      index: 3,
      route: 'affiliates-groups',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Affiliate Groups',
          index: 0,
          route: 'View-affiliate-groups',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Affiliate Group',
          index: 1,
          route: 'add-edit-affiliate-group',
          component: 'ContentComponent',
        },
        {
          name: 'Move Affiliates',
          index: 2,
          route: 'move-affiliates',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Categories',
      index: 4,
      route: 'categories',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Affiliate Categories',
          component: 'ContentComponent',
          index: 0,
          route: 'View-affiliate-categories',
        },
        {
          name: 'Add/Edit Categories',
          index: 1,
          route: 'add-edit-categories',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Countries',
      index: 5,
      route: 'countries',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Countries',
          index: 0,
          route: 'View-countries',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Countries',
          index: 1,
          route: 'add-edit-countries',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Brands',
      index: 6,
      route: 'brands',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Brands',
          index: 0,
          route: 'View-brands',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Brands',
          index: 1,
          route: 'add-edit-brands',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Languages',
      index: 7,
      route: 'languages',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Languages',
          index: 0,
          route: 'View-languages',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Languages',
          index: 1,
          route: 'add-edit-languages',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Promo Tools',
      index: 8,
      route: 'promo-tools',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View All Promo Tools',
          index: 0,
          route: 'View-all-promo-tools',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit GIF Banner',
          index: 1,
          route: 'add-edit-gif-banner',
          component: 'ContentComponent',
        },
        {
          name: 'Add Flash Banner',
          index: 2,
          route: 'add-flash-banner',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Mailer/White Label',
          index: 3,
          route: 'add-edit-mailer-white-label',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Other Promo Tools',
          index: 4,
          route: 'add-edit-other-promo-tools',
          component: 'ContentComponent',
        },
        {
          name: 'Add gif Banners from zip',
          index: 5,
          route: 'add-gif-banners-from-zip',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Instrument Type',
      index: 9,
      route: 'instrument-type',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Instrument Type',
          index: 0,
          route: 'View-instrument-type',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Instrument Type',
          index: 1,
          route: 'add-edit-instrument-type',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Pixels',
      index: 10,
      route: 'pixels',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Pixels',
          index: 0,
          route: 'View-pixels',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Pixels',
          index: 1,
          route: 'add-edit-pixels',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Rotating Banners',
      index: 11,
      route: 'rotating-banners',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Banner Groups',
          index: 0,
          route: 'View-banner-groups',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Banner Groups',
          index: 1,
          route: 'add-edit-banner-groups',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Links & Landing Pages',
      index: 12,
      route: 'links-landing-pages',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Text Links',
          index: 0,
          route: 'View-text-links',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Text Links',
          index: 1,
          route: 'add-edit-text-links',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Reports',
      index: 13,
      route: 'reports',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Tools',
      index: 14,
      route: 'tools',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Users',
      index: 15,
      route: 'users',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Users',
          index: 0,
          route: 'View-users',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Users',
          index: 1,
          route: 'add-edit-users',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Email Notifications',
      index: 16,
      route: 'email-notifications',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'View Messages',
          index: 0,
          route: 'View-messages',
          component: 'ContentComponent',
        },
        {
          name: 'Add/Edit Messages',
          index: 1,
          route: 'add-edit-messages',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Audit Logs',
      index: 17,
      route: 'audit-logs',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Preferences/Setup',
      index: 18,
      route: 'preferences-setup',
      component: 'ContentComponent',
      tabs: [
        {
          name: 'Setup Defaults',
          index: 0,
          route: 'setup-defaults',
          component: 'ContentComponent',
        },
        {
          name: 'Email Messages',
          index: 1,
          route: 'email-messages',
          component: 'ContentComponent',
        },
        {
          name: 'Affiliate Console',
          index: 2,
          route: 'affiliate-console',
          component: 'ContentComponent',
        },
        {
          name: 'Spider IPs',
          index: 3,
          route: 'spider-IPs',
          component: 'ContentComponent',
        },
        {
          name: 'Spider Headers',
          index: 4,
          route: 'spider-headers',
          component: 'ContentComponent',
        },
        {
          name: 'IP Blocking',
          index: 5,
          route: 'IP-blocking',
          component: 'ContentComponent',
        },
      ],
    },
    {
      name: 'Logut',
      index: 19,
      route: 'login',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Help',
      index: 20,
      route: 'help',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Updates',
      index: 21,
      route: 'updates',
      component: 'ContentComponent',
      tabs: [],
    },
    {
      name: 'Support',
      index: 22,
      route: 'support',
      component: 'ContentComponent',
      tabs: [],
    },
  ]

export { menu };
