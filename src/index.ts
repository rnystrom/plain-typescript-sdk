/* eslint-disable simple-import-sort/exports */

export { PlainClient } from './client';

export {
  // Enums
  AttachmentType,
  ComponentBadgeColor,
  ComponentDividerSpacingSize,
  ComponentPlainTextColor,
  ComponentPlainTextSize,
  ComponentSpacerSize,
  ComponentTextColor,
  ComponentTextSize,
  CustomersSortField,
  CustomerStatus,
  IssueStatus,
  MutationErrorType,
  MutationFieldErrorType,
  UpsertResult,
  UserStatus,
} from './graphql/types';

export type {
  // Query arguments
  CustomersFilter,
  CustomersSort,

  // Input types
  AddCustomerToCustomerGroupsInput,
  CreateIssueInput,
  RemoveCustomerFromCustomerGroupsInput,
  ReplyToEmailInput,
  SendNewEmailInput,
  UpsertCustomerInput,
  UpsertCustomTimelineEntryInput,
  CommunicationChannelInput,
  CreateCustomerCardConfigInput,
  UpdateCustomerCardConfigInput,

  // Fragment types
  ActorPartsFragment,
  AttachmentPartsFragment,
  CustomerActorPartsFragment,
  CustomerPartsFragment,
  CustomerGroupPartsFragment,
  CustomerGroupMembershipPartsFragment,
  DateTimePartsFragment,
  DeletedCustomerActorPartsFragment,
  EmailActorPartsFragment,
  EmailParticipantPartsFragment,
  EmailPartsFragment,
  FileSizePartsFragment,
  InternalActorPartsFragment,
  IssuePartsFragment,
  IssuePriorityPartsFragment,
  IssueTypePartsFragment,
  MachineUserActorPartsFragment,
  MutationErrorPartsFragment,
  PageInfoPartsFragment,
  SystemActorPartsFragment,
  TimelineEntryPartsFragment,
  UserActorPartsFragment,
  WorkspacePartsFragment,
} from './graphql/types';

export type {
  PlainSDKError,
  ForbiddenError,
  BadRequestError,
  InternalServerError,
  MutationError,
  UnknownError,
} from './error';
