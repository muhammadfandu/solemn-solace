declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const SIDEBAR_MENU: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/dashboard/disaster-management', title: 'Disaster Management', icon: 'ni-pin-3 text-orange', class: '' },
    // { path: '/dashboard/camp-management', title: 'Camp Management', icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/dashboard/logistics-management', title: 'Logistics Management', icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/dashboard/users-management', title: 'Team Management', icon: 'ni-single-02 text-primary', class: '' },

    // { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' }
];