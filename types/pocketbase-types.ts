/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Appointments = "appointments",
	DocumentRequests = "document_requests",
	News = "news",
	TicketReplies = "ticket_replies",
	Tickets = "tickets",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AppointmentsAppointTypeOptions {
	"barangay_captain" = "barangay_captain",
	"barangay_secretatary" = "barangay_secretatary",
	"barangay_treasurer" = "barangay_treasurer",
	"barangay_councilor" = "barangay_councilor",
	"sk_chairman" = "sk_chairman",
}
export type AppointmentsRecord = {
	user: RecordIdString
	appoint_type?: AppointmentsAppointTypeOptions
	appointment_date?: IsoDateString
	active?: boolean
}

export enum DocumentRequestsDocumentTypeOptions {
  "postal_id" = "postal_id",
  "barangay_id" = "barangay_id",
  "birth_certificate" = "birth_certificate",
  "voters_id" = "voters_id",
  "barangay_clearance" = "barangay_clearance",
  "business_clearance" = "business_clearance",
}
export type DocumentRequestsRecord = {
  document_type: DocumentRequestsDocumentTypeOptions;
  user: RecordIdString;
  email: string;
  active?: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  address: string;
  birth_date?: IsoDateString;
  contact_number: number;
  purpose: string;
};

export type NewsRecord = {
  title?: string;
  content?: string;
  author?: RecordIdString;
  image?: string;
};

export enum TicketRepliesRoleOptions {
  "user" = "user",
  "admin" = "admin",
}
export type TicketRepliesRecord = {
  ticket: RecordIdString;
  message?: string;
  role: TicketRepliesRoleOptions;
};

export enum TicketsPurposeOptions {
  "general_question" = "general_question",
  "feature_request" = "feature_request",
  "bug_report" = "bug_report",
  "my_account" = "my_account",
  "other" = "other",
}
export type TicketsRecord = {
  user: RecordIdString;
  email: string;
  firstName: string;
  lastName?: string;
  body: string;
  active?: boolean;
  purpose?: TicketsPurposeOptions;
};

export enum UsersGenderOptions {
  "male" = "male",
  "female" = "female",
  "other" = "other",
}
export type UsersRecord = {
  name?: string;
  birth_date?: IsoDateString;
  gender?: UsersGenderOptions;
  phone?: number;
  street?: string;
  city?: string;
  province?: string;
  work?: string;
  work_phone?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type AppointmentsResponse<Texpand = unknown> =
  Required<AppointmentsRecord> & BaseSystemFields<Texpand>;
export type DocumentRequestsResponse<Texpand = unknown> =
  Required<DocumentRequestsRecord> & BaseSystemFields<Texpand>;
export type NewsResponse<Texpand = unknown> = Required<NewsRecord> &
  BaseSystemFields<Texpand>;
export type TicketRepliesResponse<Texpand = unknown> =
  Required<TicketRepliesRecord> & BaseSystemFields<Texpand>;
export type TicketsResponse<Texpand = unknown> = Required<TicketsRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse = Required<UsersRecord> & AuthSystemFields;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  appointments: AppointmentsRecord;
  document_requests: DocumentRequestsRecord;
  news: NewsRecord;
  ticket_replies: TicketRepliesRecord;
  tickets: TicketsRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  appointments: AppointmentsResponse;
  document_requests: DocumentRequestsResponse;
  news: NewsResponse;
  ticket_replies: TicketRepliesResponse;
  tickets: TicketsResponse;
  users: UsersResponse;
};