import {
	IssueResponse,
	MyAssignedIssuesResponse,
	MyIssuesResponse,
	ReportIssueData,
	UpdateIssueData,
	UpdateIssueResponse,
} from "@/types";
import { baseApiSlice } from "../api/baseApiSlice";

export const issueApiSlice = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		reportIssue: builder.mutation<IssueResponse, ReportIssueData>({
			query: ({ apartmentId, ...issueData }) => ({
				url: `/issues/create/${apartmentId}/`,
				method: "POST",
				body: issueData,
			}),
			invalidatesTags: ["Issue"],
		}),
		getMyIssues: builder.query<MyIssuesResponse, void>({
			query: () => ({
				url: "/issue/me/",
				method: "GET",
			}),
			providesTags: ["Issue"],
		}),
		getMyAssignedIssues: builder.query<MyAssignedIssuesResponse, string>({
			query: () => ({
				url: "/issues/assigned/",
				method: "GET",
			}),
			providesTags: ["Issue"],
		}),
		getSingleIssue: builder.query<IssueResponse, string>({
			query: (issueId) => ({
				url: `/issues/${issueId}/`,
				method: "GET",
			}),
			providesTags: ["Issue"],
		}),
		updateIssue: builder.mutation<UpdateIssueResponse, UpdateIssueData>({
			query: ({ issueId, ...statusData }) => ({
				url: `/issues/update/${issueId}/`,
				method: "PATCH",
				body: statusData,
			}),
			invalidatesTags: ["Issue"],
		}),
		deleteIssue: builder.mutation<void, string>({
			query: (issueId) => ({
				url: `/issues/delete/${issueId}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["Issue"],
		}),
	}),
});

export const {
	useReportIssueMutation,
	useDeleteIssueMutation,
	useUpdateIssueMutation,
	useGetMyAssignedIssuesQuery,
	useGetMyIssuesQuery,
	useGetSingleIssueQuery,
} = issueApiSlice;
