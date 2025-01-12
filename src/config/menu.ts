

interface NavItem {
    title: string
    to?: string
    href?: string
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: "Home",
        to: "/"
    },
    {
        title: "About us",
        to: "/about"
    },
    {
        title: "Contact",
        to: "/contact"
    },
    {
        title: "Jobs",
        to: "/jobs"
    }
]