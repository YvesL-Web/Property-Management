import {
	MyReportsResponse,
	ReportTenantData,
	ReportTenantResponse,
} from "@/types";
import { baseApiSlice } from "../api/baseApiSlice";

export const reportApiSlice = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		reportTenant: builder.mutation<ReportTenantResponse, ReportTenantData>({
			query: (reportData) => ({
				url: "/reports/create/",
				method: "POST",
				body: reportData,
			}),
			invalidatesTags: ["Report"],
		}),
		getMyReport: builder.query<MyReportsResponse, void>({
			query: () => ({
				url: "/reports/me",
				method: "GET",
			}),
			providesTags: ["Report"],
		}),
	}),
});

export const { useGetMyReportQuery, useReportTenantMutation } = reportApiSlice;
