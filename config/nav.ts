export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Search',
      href: '/search/',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Top',
      href: '/manga',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Seasonal',
      href: '/manga/seasonal',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
  ],
  sidebarNav: [
    {
      title: 'Anime',
      items: [
        {
          title: 'Search',
          href: '/search/',
          items: [],
        },
        {
          title: 'Top',
          href: '/search/anime',
          items: [],
        },
        {
          title: 'Seasonal',
          href: '/search/anime',
          items: [],
        },
      ],
    },
    {
      title: 'Manga',
      items: [
        {
          title: 'Search',
          href: '/',
          items: [],
        },
        {
          title: 'Top',
          href: '/manga',
          items: [],
        },
        {
          title: 'Seasonal',
          href: '/manga/season',
          items: [],
        },
      ],
    },
    {
      title: 'Socials',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: [],
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
          items: [],
        },
        {
          title: 'Alert Dialog',
          href: '/docs/components/alert-dialog',
          items: [],
        },
      ],
    },
  ],
};
