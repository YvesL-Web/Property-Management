import { LeftNavLink } from "@/types";

import 	Home from "../assets/icons/home.svg"
import Profile from "../assets/icons/user-profile.svg"
import Tenant from "../assets/icons/tenants.svg"
import Technicians from "../assets/icons/technician.svg"
import ReportIssue from "../assets/icons/report.svg"
import ReportTenant from "../assets/icons/speak.svg"
import Bookmarks from "../assets/icons/bookmark.svg"
import AddPost from "../assets/icons/question-file.svg"


// Import your IssueData interface if it's defined in another file
// import { IssueData } from '@/types';

type OptionType = {
	value: "reported" | "resolved" | "in_progress" | "low" | "medium" | "high";
	label: string;
};

export const statusOptions: OptionType[] = [
	{ value: "reported", label: "Reported" },
	{ value: "resolved", label: "Resolved" },
	{ value: "in_progress", label: "In Progress" },
];

export const priorityOptions: OptionType[] = [
	{ value: "low", label: "Low" },
	{ value: "medium", label: "Medium" },
	{ value: "high", label: "High" },
];

export const occupationOptions = [
	{ value: "mason", label: "Mason" },
	{ value: "carpenter", label: "Carpenter" },
	{ value: "plumber", label: "Plumber" },
	{ value: "roofer", label: "Roofer" },
	{ value: "painter", label: "Painter" },
	{ value: "electrician", label: "Electrician" },
	{ value: "hvac", label: "HVAC" },
	{ value: "tenant", label: "Tenant" },
];

export const leftNavLinks: LeftNavLink[] = [
	{
		path: "/welcome",
		label: "Home",
		imgLocation: Home,
	},
	{
		path: "/profile",
		label: "Profile",
		imgLocation: Profile,
	},
	{
		path: "/tenants",
		label: "Tenants",
		imgLocation: Tenant,
	},

	{
		path: "/technicians",
		label: "Technicians",
		imgLocation: Technicians,
	},
	{
		path: "/report-issue",
		label: "Report an Issue",
		imgLocation: ReportIssue,
	},

	{
		path: "/report-tenant",
		label: "Report a Tenant",
		imgLocation: ReportTenant,
	},
	{
		path: "/bookmark",
		label: "Bookmarked Posts",
		imgLocation: Bookmarks,
	},
	{
		path: "/add-post",
		label: "Create a Post....",
		imgLocation: AddPost,
	},
];
