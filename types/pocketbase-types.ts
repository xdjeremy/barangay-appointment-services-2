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
	"barangay_clearance" = "barangay_clearance",
	"police_clearance" = "police_clearance",
	"barangay_id" = "barangay_id",
	"potsal_id" = "potsal_id",
}
export type DocumentRequestsRecord = {
	document_type: DocumentRequestsDocumentTypeOptions
	user: RecordIdString
	email: string
	active?: boolean
}

export type NewsRecord = {
	title?: string
	content?: string
	author?: RecordIdString
	image?: string
}

export enum TicketRepliesRoleOptions {
	"user" = "user",
	"admin" = "admin",
}
export type TicketRepliesRecord = {
	ticket: RecordIdString
	message?: string
	role: TicketRepliesRoleOptions
}

export type TicketsRecord = {
	user: RecordIdString
	email: string
	subject: string
	body: string
	active?: boolean
}

export type UsersRecord = {
	name: string
}

// Response types include system fields and match responses from the PocketBase API
export type AppointmentsResponse<Texpand = unknown> = AppointmentsRecord & BaseSystemFields<Texpand>
export type DocumentRequestsResponse<Texpand = unknown> = DocumentRequestsRecord & BaseSystemFields<Texpand>
export type NewsResponse<Texpand = unknown> = NewsRecord & BaseSystemFields<Texpand>
export type TicketRepliesResponse<Texpand = unknown> = TicketRepliesRecord & BaseSystemFields<Texpand>
export type TicketsResponse<Texpand = unknown> = TicketsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	appointments: AppointmentsRecord
	document_requests: DocumentRequestsRecord
	news: NewsRecord
	ticket_replies: TicketRepliesRecord
	tickets: TicketsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	appointments: AppointmentsResponse
	document_requests: DocumentRequestsResponse
	news: NewsResponse
	ticket_replies: TicketRepliesResponse
	tickets: TicketsResponse
	users: UsersResponse
}