export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Mvieplex",
	description: "A movie streaming platform",
	navItems: [
		{
			label: "Movies",
			href: "/movies",
		},
		{
			label: "Genres",
			href: "/genres",
		},
		{
		label: "About",
		href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Movies",
			href: "/movies",
		},
		{
			label: "Genres",
			href: "/genres",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Michaecyber/movieplex",
		twitter: "https://twitter.com/",
		docs: "https://662aa5df1095912b3ee85e57--strong-narwhal-9f5212.netlify.app/",
	},
};
