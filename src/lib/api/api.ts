/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PccServer23BooksAddBookTranslationDto {
  language: string;
  name: string;
}

export interface PccServer23BooksBookCreateDto {
  name: string;
}

export interface PccServer23BooksBookDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  name?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23BooksBookUpdateDto {
  name: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23BooksCustomBookCreate {
  name: string;
}

export interface PccServer23BooksCustomMultiLingualBookCreateDto {
  english: PccServer23BooksCustomBookCreate;
  french: PccServer23BooksCustomBookCreate;
}

export interface PccServer23DynamicPermissionsDynamicPermissionCreateDto {
  name: string;
  displayName?: string | null;
  active?: boolean;
}

export interface PccServer23DynamicPermissionsDynamicPermissionDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  displayName?: string | null;
  active?: boolean;
  isEnabled?: boolean;
}

export interface PccServer23DynamicPermissionsDynamicPermissionUpdateDto {
  name: string;
  displayName?: string | null;
  active?: boolean;
  concurrencyStamp?: string | null;
}

export interface PccServer23GroupUsersGroupUserCreateDto {
  description?: string | null;
  accepted?: boolean;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  userId?: string | null;
}

export interface PccServer23GroupUsersGroupUserDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  description?: string | null;
  accepted?: boolean;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  userId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23GroupUsersGroupUserUpdateDto {
  description?: string | null;
  accepted?: boolean;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  userId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23GroupUsersGroupUserWithNavigationPropertiesDto {
  groupUser?: PccServer23GroupUsersGroupUserDto;
  group?: PccServer23GroupsGroupDto;
  identityUser?: VoloAbpIdentityIdentityUserDto;
}

export interface PccServer23GroupsGroupAcceptDto {
  /** @format uuid */
  groupUserId?: string;
}

export interface PccServer23GroupsGroupCreateDto {
  name: string;
  description?: string | null;
  /** @format uuid */
  ownerId?: string | null;
}

export interface PccServer23GroupsGroupCreateSelfDto {
  name: string;
  description?: string | null;
}

export interface PccServer23GroupsGroupDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  ownerId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23GroupsGroupJoinDto {
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  userId?: string | null;
}

export interface PccServer23GroupsGroupRejectDto {
  /** @format uuid */
  groupUserId?: string;
}

export interface PccServer23GroupsGroupUpdateDto {
  name: string;
  description?: string | null;
  /** @format uuid */
  ownerId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23GroupsGroupWithNavigationPropertiesDto {
  group?: PccServer23GroupsGroupDto;
  owner?: PccServer23IdentityPublicIdentityUserDto;
  role?: string | null;
}

export interface PccServer23IdentityPublicIdentityUserDto {
  name?: string | null;
  surname?: string | null;
  username?: string | null;
}

export interface PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput {
  firstSecurityQuestions?: PccServer23SecurityQuestionChoicesSecurityQuestionDto[] | null;
  secondSecurityQuestions?: PccServer23SecurityQuestionChoicesSecurityQuestionDto[] | null;
  thirdSecurityQuestions?: PccServer23SecurityQuestionChoicesSecurityQuestionDto[] | null;
}

export interface PccServer23SecurityQuestionChoicesSecurityQuestionChoiceCreateDto {
  question: string;
  type?: PccServer23SecurityQuestionChoicesSecurityQuestionChoiceType;
}

export interface PccServer23SecurityQuestionChoicesSecurityQuestionChoiceDto {
  /** @format uuid */
  id?: string;
  question?: string | null;
  type?: PccServer23SecurityQuestionChoicesSecurityQuestionChoiceType;
  concurrencyStamp?: string | null;
}

/** @format int32 */
export enum PccServer23SecurityQuestionChoicesSecurityQuestionChoiceType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface PccServer23SecurityQuestionChoicesSecurityQuestionChoiceUpdateDto {
  question: string;
  type?: PccServer23SecurityQuestionChoicesSecurityQuestionChoiceType;
  concurrencyStamp?: string | null;
}

export interface PccServer23SecurityQuestionChoicesSecurityQuestionDto {
  /** @format uuid */
  id?: string;
  question?: string | null;
}

export interface PccServer23SharedDownloadTokenResultDto {
  token?: string | null;
}

export interface PccServer23SharedLookupDto1SystemGuidSystemPrivateCoreLibVersion7000CultureNeutralPublicKeyToken7Cec85D7Bea7798E {
  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface PccServer23UsernameChoicesCheckUsernameAvailabilityInput {
  username?: string | null;
}

export interface PccServer23UsernameChoicesCheckUsernameAvailabilityOutput {
  available?: boolean;
}

export interface PccServer23UsernameChoicesGetUsernameChoicesOutput {
  firstNames?: string[] | null;
  secondNames?: string[] | null;
}

export interface PccServer23UsernameChoicesUsernameChoiceCreateDto {
  name: string;
  type?: PccServer23UsernameChoicesUsernameChoiceType;
}

export interface PccServer23UsernameChoicesUsernameChoiceDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  type?: PccServer23UsernameChoicesUsernameChoiceType;
  concurrencyStamp?: string | null;
}

/** @format int32 */
export enum PccServer23UsernameChoicesUsernameChoiceType {
  Value1 = 1,
  Value2 = 2,
}

export interface PccServer23UsernameChoicesUsernameChoiceUpdateDto {
  name: string;
  type?: PccServer23UsernameChoicesUsernameChoiceType;
  concurrencyStamp?: string | null;
}

export interface PccServer23UsersCreateProfessionalUserInput {
  /** @format int32 */
  birthYear?: number;
  province?: string | null;
  username?: string | null;
  password?: string | null;
  email?: string | null;
  name?: string | null;
  title?: string | null;
  schoolIdCode?: string | null;
  school?: string | null;
  /** @format uuid */
  firstSecurityQuestionId?: string;
  firstSecurityQuestionAnswer?: string | null;
  /** @format uuid */
  secondSecurityQuestionId?: string;
  secondSecurityQuestionAnswer?: string | null;
  /** @format uuid */
  thirdSecurityQuestionId?: string;
  thirdSecurityQuestionAnswer?: string | null;
}

export interface PccServer23UsersCreateUserInput {
  /** @format int32 */
  birthYear?: number;
  province?: string | null;
  username?: string | null;
  password?: string | null;
  /** @format uuid */
  firstSecurityQuestionId?: string;
  firstSecurityQuestionAnswer?: string | null;
  /** @format uuid */
  secondSecurityQuestionId?: string;
  secondSecurityQuestionAnswer?: string | null;
  /** @format uuid */
  thirdSecurityQuestionId?: string;
  thirdSecurityQuestionAnswer?: string | null;
}

export interface PccServer23UsersGetQuestionIdsOutput {
  /** @format uuid */
  firstQuestionId?: string;
  /** @format uuid */
  secondQuestionId?: string;
  /** @format uuid */
  thirdQuestionId?: string;
}

export interface PccServer23UsersGetUserProfileDto {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  birthYear?: number;
  province?: string | null;
  username?: string | null;
  email?: string | null;
  name?: string | null;
  title?: string | null;
  schoolIdCode?: string | null;
  school?: string | null;
  /** @format date-time */
  created?: string;
  role?: string | null;
  groups?: PccServer23UsersUserInGroupDto[] | null;
}

export interface PccServer23UsersGetUsersDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  role?: string | null;
}

export interface PccServer23UsersResetPasswordInput {
  username?: string | null;
  newPassword?: string | null;
  firstQuestionAnswer?: string | null;
  secondQuestionAnswer?: string | null;
  thirdQuestionAnswer?: string | null;
}

export interface PccServer23UsersResetPasswordOutput {
  success?: boolean;
}

export interface PccServer23UsersUserInGroupDto {
  groupName?: string | null;
  /** @format int32 */
  memberCount?: number;
}

/** @format int32 */
export enum SystemNetHttpStatusCode {
  Value100 = 100,
  Value101 = 101,
  Value102 = 102,
  Value103 = 103,
  Value200 = 200,
  Value201 = 201,
  Value202 = 202,
  Value203 = 203,
  Value204 = 204,
  Value205 = 205,
  Value206 = 206,
  Value207 = 207,
  Value208 = 208,
  Value226 = 226,
  Value300 = 300,
  Value301 = 301,
  Value302 = 302,
  Value303 = 303,
  Value304 = 304,
  Value305 = 305,
  Value306 = 306,
  Value307 = 307,
  Value308 = 308,
  Value400 = 400,
  Value401 = 401,
  Value402 = 402,
  Value403 = 403,
  Value404 = 404,
  Value405 = 405,
  Value406 = 406,
  Value407 = 407,
  Value408 = 408,
  Value409 = 409,
  Value410 = 410,
  Value411 = 411,
  Value412 = 412,
  Value413 = 413,
  Value414 = 414,
  Value415 = 415,
  Value416 = 416,
  Value417 = 417,
  Value421 = 421,
  Value422 = 422,
  Value423 = 423,
  Value424 = 424,
  Value426 = 426,
  Value428 = 428,
  Value429 = 429,
  Value431 = 431,
  Value451 = 451,
  Value500 = 500,
  Value501 = 501,
  Value502 = 502,
  Value503 = 503,
  Value504 = 504,
  Value505 = 505,
  Value506 = 506,
  Value507 = 507,
  Value508 = 508,
  Value510 = 510,
  Value511 = 511,
}

export interface VoloAbpAccountAccountExternalProviderSettingsDto {
  settings?: VoloAbpAccountExternalProvidersExternalProviderSettings[] | null;
}

export interface VoloAbpAccountAccountRecaptchaSettingsDto {
  useCaptchaOnLogin?: boolean;
  useCaptchaOnRegistration?: boolean;
  verifyBaseUrl?: string | null;
  siteKey?: string | null;
  siteSecret?: string | null;
  /**
   * @format int32
   * @min 2
   * @max 3
   */
  version?: number;
  /**
   * @format double
   * @min 0.1
   * @max 1
   */
  score?: number;
}

export interface VoloAbpAccountAccountSettingsDto {
  isSelfRegistrationEnabled?: boolean;
  enableLocalLogin?: boolean;
}

export interface VoloAbpAccountAccountTwoFactorSettingsDto {
  twoFactorBehaviour?: VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour;
  isRememberBrowserEnabled?: boolean;
  usersCanChange?: boolean;
}

export interface VoloAbpAccountChangePasswordInput {
  /**
   * @minLength 0
   * @maxLength 128
   */
  currentPassword?: string | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  newPassword: string;
}

export interface VoloAbpAccountConfirmEmailInput {
  /** @format uuid */
  userId: string;
  token: string;
}

export interface VoloAbpAccountConfirmPhoneNumberInput {
  /** @format uuid */
  userId: string;
  token: string;
}

export interface VoloAbpAccountExternalProvidersExternalProviderDto {
  providers?: VoloAbpAccountExternalProvidersExternalProviderItemDto[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemDto {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto {
  success?: boolean;
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettings {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettingsProperty {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpAccountIdentityUserConfirmationStateDto {
  emailConfirmed?: boolean;
  phoneNumberConfirmed?: boolean;
}

export interface VoloAbpAccountIsLinkedInput {
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAccountLinkUserDto {
  /** @format uuid */
  targetUserId?: string;
  targetUserName?: string | null;
  /** @format uuid */
  targetTenantId?: string | null;
  targetTenantName?: string | null;
  directlyLinked?: boolean;
}

export interface VoloAbpAccountLinkUserInput {
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpAccountProfileDto {
  extraProperties?: Record<string, any>;
  userName?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  name?: string | null;
  surname?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  isExternal?: boolean;
  hasPassword?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpAccountProfilePictureSourceDto {
  type?: VoloAbpAccountProfilePictureType;
  source?: string | null;
  /** @format byte */
  fileContent?: string | null;
}

/** @format int32 */
export enum VoloAbpAccountProfilePictureType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult {
  result?: VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType;
  description?: string | null;
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo {
  /** @format uuid */
  linkUserId: string;
  /** @format uuid */
  linkTenantId?: string | null;
}

/** @format int32 */
export enum VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo {
  /**
   * @minLength 0
   * @maxLength 255
   */
  userNameOrEmailAddress: string;
  /**
   * @format password
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  rememberMe?: boolean;
  /** @format uuid */
  tenanId?: string | null;
}

export interface VoloAbpAccountRegisterDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  emailAddress: string;
  /**
   * @format password
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
  captchaResponse?: string | null;
}

export interface VoloAbpAccountResetPasswordDto {
  /** @format uuid */
  userId?: string;
  resetToken: string;
  password: string;
}

export interface VoloAbpAccountSendEmailConfirmationTokenDto {
  appName: string;
  /** @format uuid */
  userId: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
}

export interface VoloAbpAccountSendPasswordResetCodeDto {
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
}

export interface VoloAbpAccountSendPhoneNumberConfirmationTokenDto {
  /** @format uuid */
  userId: string;
  phoneNumber?: string | null;
}

export interface VoloAbpAccountSendTwoFactorCodeInput {
  /** @format uuid */
  userId: string;
  provider: string;
  token: string;
}

export interface VoloAbpAccountUnLinkUserInput {
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAccountUpdateExternalProviderDto {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountUpdateProfileDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  email?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpAccountVerifyEmailConfirmationTokenInput {
  /** @format uuid */
  userId: string;
  token: string;
}

export interface VoloAbpAccountVerifyLinkLoginTokenInput {
  /** @format uuid */
  userId: string;
  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpAccountVerifyLinkTokenInput {
  /** @format uuid */
  userId: string;
  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpAccountVerifyPasswordResetTokenInput {
  /** @format uuid */
  userId?: string;
  resetToken: string;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAccountLinkUserDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpUsersUserData[] | null;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23BooksBookDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23BooksBookDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23DynamicPermissionsDynamicPermissionDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23DynamicPermissionsDynamicPermissionDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23GroupUsersGroupUserWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23GroupUsersGroupUserWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsGroupWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23GroupsGroupWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23SecurityQuestionChoicesSecurityQuestionChoiceDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23SecurityQuestionChoicesSecurityQuestionChoiceDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23SharedLookupDto1SystemGuidSystemPrivateCoreLibVersion7000CultureNeutralPublicKeyToken7Cec85D7Bea7798EPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?:
    | PccServer23SharedLookupDto1SystemGuidSystemPrivateCoreLibVersion7000CultureNeutralPublicKeyToken7Cec85D7Bea7798E[]
    | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23UsernameChoicesUsernameChoiceDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23UsernameChoicesUsernameChoiceDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23UsersGetUsersDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23UsersGetUsersDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingAuditLogDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingEntityChangeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpGdprGdprRequestDtoVoloAbpGdprApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpGdprGdprRequestDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityClaimTypeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentitySecurityLogDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityUserDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageTextDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpOpenIddictApplicationsDtosApplicationDtoVoloAbpOpenIddictProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpOpenIddictApplicationsDtosApplicationDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpOpenIddictScopesDtosScopeDtoVoloAbpOpenIddictProApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpOpenIddictScopesDtosScopeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosEditionDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion7100CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosSaasTenantDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto {
  grantedPolicies?: Record<string, boolean | null>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto {
  localization?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto;
  auth?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto;
  setting?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  currentUser?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto;
  features?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto;
  globalFeatures?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto;
  multiTenancy?: VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto;
  currentTenant?: VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto;
  timing?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto;
  clock?: VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto;
  objectExtensions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto;
  extraProperties?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto {
  values?: Record<string, string | null>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto {
  /** @uniqueItems true */
  enabledFeatures?: string[] | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto {
  values?: Record<string, Record<string, string>>;
  resources?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto>;
  languages?: VoloAbpLocalizationLanguageInfo[] | null;
  currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
  defaultResourceName?: string | null;
  languagesMap?: Record<string, VoloAbpNameValue[] | null>;
  languageFilesMap?: Record<string, VoloAbpNameValue[] | null>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto {
  resources?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto {
  texts?: Record<string, string | null>;
  baseResources?: string[] | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto {
  values?: Record<string, string | null>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto {
  kind?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto {
  displayName?: string | null;
  englishName?: string | null;
  threeLetterIsoLanguageName?: string | null;
  twoLetterIsoLanguageName?: string | null;
  isRightToLeft?: boolean;
  cultureName?: string | null;
  name?: string | null;
  nativeName?: string | null;
  dateTimeFormat?: VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto {
  isAuthenticated?: boolean;
  /** @format uuid */
  id?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  /** @format uuid */
  impersonatorUserId?: string | null;
  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorUserName?: string | null;
  impersonatorTenantName?: string | null;
  userName?: string | null;
  name?: string | null;
  surName?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  phoneNumberVerified?: boolean;
  roles?: string[] | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto {
  calendarAlgorithmType?: string | null;
  dateTimeFormatLong?: string | null;
  shortDatePattern?: string | null;
  fullDateTimePattern?: string | null;
  dateSeparator?: string | null;
  shortTimePattern?: string | null;
  longTimePattern?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone {
  timeZoneName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto {
  properties?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto>;
  configuration?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto {
  fields?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto[] | null;
  localizationResource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto {
  name?: string | null;
  value?: any;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto {
  onGet?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto;
  onCreate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto;
  onUpdate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto {
  typeSimple?: string | null;
  config?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto {
  type?: string | null;
  typeSimple?: string | null;
  displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
  api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
  ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
  attributes?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[] | null;
  configuration?: Record<string, any>;
  defaultValue?: any;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto {
  onTable?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto;
  onCreateForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  onEditForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  lookup?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto {
  url?: string | null;
  resultListPropertyName?: string | null;
  displayPropertyName?: string | null;
  valuePropertyName?: string | null;
  filterParamName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto {
  name?: string | null;
  resource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto {
  entities?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto>;
  configuration?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto {
  modules?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto>;
  enums?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone {
  iana?: VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone;
  windows?: VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto {
  timeZone?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone {
  timeZoneId?: string | null;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto {
  /** @format uuid */
  id?: string | null;
  name?: string | null;
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto {
  success?: boolean;
  /** @format uuid */
  tenantId?: string | null;
  name?: string | null;
  isActive?: boolean;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto {
  isEnabled?: boolean;
}

export interface VoloAbpAuditLoggingAuditLogActionDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  tenantId?: string | null;
  /** @format uuid */
  auditLogId?: string;
  serviceName?: string | null;
  methodName?: string | null;
  parameters?: string | null;
  /** @format date-time */
  executionTime?: string;
  /** @format int32 */
  executionDuration?: number;
}

export interface VoloAbpAuditLoggingAuditLogDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string | null;
  userName?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  tenantName?: string | null;
  /** @format uuid */
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;
  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorTenantName?: string | null;
  /** @format date-time */
  executionTime?: string;
  /** @format int32 */
  executionDuration?: number;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  httpMethod?: string | null;
  url?: string | null;
  exceptions?: string | null;
  comments?: string | null;
  /** @format int32 */
  httpStatusCode?: number | null;
  applicationName?: string | null;
  correlationId?: string | null;
  entityChanges?: VoloAbpAuditLoggingEntityChangeDto[] | null;
  actions?: VoloAbpAuditLoggingAuditLogActionDto[] | null;
}

export interface VoloAbpAuditLoggingEntityChangeDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  auditLogId?: string;
  /** @format uuid */
  tenantId?: string | null;
  /** @format date-time */
  changeTime?: string;
  changeType?: VoloAbpAuditingEntityChangeType;
  entityId?: string | null;
  entityTypeFullName?: string | null;
  propertyChanges?: VoloAbpAuditLoggingEntityPropertyChangeDto[] | null;
}

export interface VoloAbpAuditLoggingEntityChangeWithUsernameDto {
  entityChange?: VoloAbpAuditLoggingEntityChangeDto;
  userName?: string | null;
}

export interface VoloAbpAuditLoggingEntityPropertyChangeDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  tenantId?: string | null;
  /** @format uuid */
  entityChangeId?: string;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;
}

export interface VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput {
  data?: Record<string, number | null>;
}

export interface VoloAbpAuditLoggingGetErrorRateOutput {
  data?: Record<string, number | null>;
}

/** @format int32 */
export enum VoloAbpAuditingEntityChangeType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface VoloAbpFeatureManagementFeatureDto {
  name?: string | null;
  displayName?: string | null;
  value?: string | null;
  provider?: VoloAbpFeatureManagementFeatureProviderDto;
  description?: string | null;
  valueType?: VoloAbpValidationStringValuesIStringValueType;
  /** @format int32 */
  depth?: number;
  parentName?: string | null;
}

export interface VoloAbpFeatureManagementFeatureGroupDto {
  name?: string | null;
  displayName?: string | null;
  features?: VoloAbpFeatureManagementFeatureDto[] | null;
}

export interface VoloAbpFeatureManagementFeatureProviderDto {
  name?: string | null;
  key?: string | null;
}

export interface VoloAbpFeatureManagementGetFeatureListResultDto {
  groups?: VoloAbpFeatureManagementFeatureGroupDto[] | null;
}

export interface VoloAbpFeatureManagementUpdateFeatureDto {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpFeatureManagementUpdateFeaturesDto {
  features?: VoloAbpFeatureManagementUpdateFeatureDto[] | null;
}

export interface VoloAbpGdprDownloadTokenResultDto {
  token?: string | null;
}

export interface VoloAbpGdprGdprRequestDto {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  readyTime?: string;
}

export interface VoloAbpHttpModelingActionApiDescriptionModel {
  uniqueName?: string | null;
  name?: string | null;
  httpMethod?: string | null;
  url?: string | null;
  supportedVersions?: string[] | null;
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  parameters?: VoloAbpHttpModelingParameterApiDescriptionModel[] | null;
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
  allowAnonymous?: boolean | null;
  implementFrom?: string | null;
}

export interface VoloAbpHttpModelingApplicationApiDescriptionModel {
  modules?: Record<string, VoloAbpHttpModelingModuleApiDescriptionModel>;
  types?: Record<string, VoloAbpHttpModelingTypeApiDescriptionModel>;
}

export interface VoloAbpHttpModelingControllerApiDescriptionModel {
  controllerName?: string | null;
  controllerGroupName?: string | null;
  isRemoteService?: boolean;
  isIntegrationService?: boolean;
  apiVersion?: string | null;
  type?: string | null;
  interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
  actions?: Record<string, VoloAbpHttpModelingActionApiDescriptionModel>;
}

export interface VoloAbpHttpModelingControllerInterfaceApiDescriptionModel {
  type?: string | null;
  name?: string | null;
  methods?: VoloAbpHttpModelingInterfaceMethodApiDescriptionModel[] | null;
}

export interface VoloAbpHttpModelingInterfaceMethodApiDescriptionModel {
  name?: string | null;
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
}

export interface VoloAbpHttpModelingMethodParameterApiDescriptionModel {
  name?: string | null;
  typeAsString?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isOptional?: boolean;
  defaultValue?: any;
}

export interface VoloAbpHttpModelingModuleApiDescriptionModel {
  rootPath?: string | null;
  remoteServiceName?: string | null;
  controllers?: Record<string, VoloAbpHttpModelingControllerApiDescriptionModel>;
}

export interface VoloAbpHttpModelingParameterApiDescriptionModel {
  nameOnMethod?: string | null;
  name?: string | null;
  jsonName?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isOptional?: boolean;
  defaultValue?: any;
  constraintTypes?: string[] | null;
  bindingSourceId?: string | null;
  descriptorName?: string | null;
}

export interface VoloAbpHttpModelingPropertyApiDescriptionModel {
  name?: string | null;
  jsonName?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isRequired?: boolean;
  /** @format int32 */
  minLength?: number | null;
  /** @format int32 */
  maxLength?: number | null;
  minimum?: string | null;
  maximum?: string | null;
  regex?: string | null;
}

export interface VoloAbpHttpModelingReturnValueApiDescriptionModel {
  type?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingTypeApiDescriptionModel {
  baseType?: string | null;
  isEnum?: boolean;
  enumNames?: string[] | null;
  enumValues?: any[] | null;
  genericArguments?: string[] | null;
  properties?: VoloAbpHttpModelingPropertyApiDescriptionModel[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorInfo {
  code?: string | null;
  message?: string | null;
  details?: string | null;
  data?: Record<string, any>;
  validationErrors?: VoloAbpHttpRemoteServiceValidationErrorInfo[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorResponse {
  error?: VoloAbpHttpRemoteServiceErrorInfo;
}

export interface VoloAbpHttpRemoteServiceValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface VoloAbpIdentityClaimTypeDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  required?: boolean;
  isStatic?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  valueTypeAsString?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityCreateClaimTypeDto {
  extraProperties?: Record<string, any>;
  name: string;
  required?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
}

export interface VoloAbpIdentityExternalLoginProviderDto {
  name?: string | null;
  canObtainUserInfoWithoutPassword?: boolean;
}

/** @format int32 */
export enum VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum VoloAbpIdentityIdentityClaimValueType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface VoloAbpIdentityIdentityLdapSettingsDto {
  enableLdapLogin?: boolean;
  ldapServerHost?: string | null;
  ldapServerPort?: string | null;
  ldapBaseDc?: string | null;
  ldapDomain?: string | null;
  ldapUserName?: string | null;
  ldapPassword?: string | null;
}

export interface VoloAbpIdentityIdentityLockoutSettingsDto {
  allowedForNewUsers?: boolean;
  /** @format int32 */
  lockoutDuration?: number;
  /** @format int32 */
  maxFailedAccessAttempts?: number;
}

export interface VoloAbpIdentityIdentityOAuthSettingsDto {
  enableOAuthLogin?: boolean;
  clientId: string;
  clientSecret?: string | null;
  authority: string;
  scope?: string | null;
  requireHttpsMetadata?: boolean;
  validateEndpoints?: boolean;
  validateIssuerName?: boolean;
}

export interface VoloAbpIdentityIdentityPasswordSettingsDto {
  /**
   * @format int32
   * @min 2
   * @max 128
   */
  requiredLength?: number;
  /**
   * @format int32
   * @min 1
   * @max 128
   */
  requiredUniqueChars?: number;
  requireNonAlphanumeric?: boolean;
  requireLowercase?: boolean;
  requireUppercase?: boolean;
  requireDigit?: boolean;
}

export interface VoloAbpIdentityIdentityRoleClaimDto {
  /** @format uuid */
  roleId?: string;
  claimType?: string | null;
  claimValue?: string | null;
}

export interface VoloAbpIdentityIdentityRoleCreateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
}

export interface VoloAbpIdentityIdentityRoleDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  isDefault?: boolean;
  isStatic?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentityRoleLookupDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloAbpIdentityIdentityRoleUpdateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentitySecurityLogDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  tenantId?: string | null;
  applicationName?: string | null;
  identity?: string | null;
  action?: string | null;
  /** @format uuid */
  userId?: string | null;
  userName?: string | null;
  tenantName?: string | null;
  clientId?: string | null;
  correlationId?: string | null;
  clientIpAddress?: string | null;
  browserInfo?: string | null;
  /** @format date-time */
  creationTime?: string;
  extraProperties?: Record<string, any>;
}

export interface VoloAbpIdentityIdentitySettingsDto {
  password?: VoloAbpIdentityIdentityPasswordSettingsDto;
  lockout?: VoloAbpIdentityIdentityLockoutSettingsDto;
  signIn?: VoloAbpIdentityIdentitySignInSettingsDto;
  user?: VoloAbpIdentityIdentityUserSettingsDto;
}

export interface VoloAbpIdentityIdentitySignInSettingsDto {
  requireConfirmedEmail?: boolean;
  enablePhoneNumberConfirmation?: boolean;
  requireConfirmedPhoneNumber?: boolean;
}

export interface VoloAbpIdentityIdentityUserClaimDto {
  /** @format uuid */
  userId?: string;
  claimType?: string | null;
  claimValue?: string | null;
}

export interface VoloAbpIdentityIdentityUserCreateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[] | null;
  organizationUnitIds?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  sendConfirmationEmail?: boolean;
}

export interface VoloAbpIdentityIdentityUserDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
  email?: string | null;
  name?: string | null;
  surname?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  supportTwoFactor?: boolean;
  twoFactorEnabled?: boolean;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  isLockedOut?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  concurrencyStamp?: string | null;
  roleNames?: string[] | null;
  /** @format int32 */
  accessFailedCount?: number;
}

export interface VoloAbpIdentityIdentityUserSettingsDto {
  isUserNameUpdateEnabled?: boolean;
  isEmailUpdateEnabled?: boolean;
}

export interface VoloAbpIdentityIdentityUserUpdateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[] | null;
  organizationUnitIds?: string[] | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentityUserUpdatePasswordInput {
  newPassword: string;
}

export interface VoloAbpIdentityIdentityUserUpdateRolesDto {
  roleNames: string[];
}

export interface VoloAbpIdentityImportExternalUserInput {
  provider: string;
  userNameOrEmailAddress: string;
  password?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitCreateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 128
   */
  displayName: string;
  /** @format uuid */
  parentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  /** @format uuid */
  parentId?: string | null;
  code?: string | null;
  displayName?: string | null;
  roles?: VoloAbpIdentityOrganizationUnitRoleDto[] | null;
}

export interface VoloAbpIdentityOrganizationUnitLookupDto {
  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitMoveInput {
  /** @format uuid */
  newParentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitRoleDto {
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format uuid */
  organizationUnitId?: string;
  /** @format uuid */
  roleId?: string;
}

export interface VoloAbpIdentityOrganizationUnitRoleInput {
  roleIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitUpdateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 128
   */
  displayName: string;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitUserInput {
  userIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitWithDetailsDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  /** @format uuid */
  parentId?: string | null;
  code?: string | null;
  displayName?: string | null;
  roles?: VoloAbpIdentityIdentityRoleDto[] | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityUpdateClaimTypeDto {
  extraProperties?: Record<string, any>;
  name: string;
  required?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  concurrencyStamp?: string | null;
}

export interface VoloAbpLanguageManagementDtoCreateLanguageDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  cultureName?: string | null;
  uiCultureName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
}

export interface VoloAbpLanguageManagementDtoCultureInfoDto {
  displayName?: string | null;
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  cultureName?: string | null;
  uiCultureName?: string | null;
  displayName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
  isDefaultLanguage?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageResourceDto {
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageTextDto {
  resourceName?: string | null;
  cultureName?: string | null;
  baseCultureName?: string | null;
  baseValue?: string | null;
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpLanguageManagementDtoUpdateLanguageDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpLocalizationLanguageInfo {
  cultureName?: string | null;
  uiCultureName?: string | null;
  displayName?: string | null;
  twoLetterISOLanguageName?: string | null;
  flagIcon?: string | null;
}

export interface VoloAbpNameValue {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpOpenIddictApplicationsDtosApplicationDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  clientId?: string | null;
  displayName?: string | null;
  type?: string | null;
  clientSecret?: string | null;
  consentType?: string | null;
  /** @uniqueItems true */
  postLogoutRedirectUris?: string[] | null;
  /** @uniqueItems true */
  redirectUris?: string[] | null;
  allowPasswordFlow?: boolean;
  allowClientCredentialsFlow?: boolean;
  allowAuthorizationCodeFlow?: boolean;
  allowRefreshTokenFlow?: boolean;
  allowHybridFlow?: boolean;
  allowImplicitFlow?: boolean;
  allowLogoutEndpoint?: boolean;
  allowDeviceEndpoint?: boolean;
  /** @uniqueItems true */
  scopes?: string[] | null;
  clientUri?: string | null;
  logoUri?: string | null;
}

export interface VoloAbpOpenIddictApplicationsDtosCreateApplicationInput {
  extraProperties?: Record<string, any>;
  clientId: string;
  displayName: string;
  type?: string | null;
  clientSecret?: string | null;
  consentType?: string | null;
  /** @uniqueItems true */
  postLogoutRedirectUris?: string[] | null;
  /** @uniqueItems true */
  redirectUris?: string[] | null;
  allowPasswordFlow?: boolean;
  allowClientCredentialsFlow?: boolean;
  allowAuthorizationCodeFlow?: boolean;
  allowRefreshTokenFlow?: boolean;
  allowHybridFlow?: boolean;
  allowImplicitFlow?: boolean;
  allowLogoutEndpoint?: boolean;
  allowDeviceEndpoint?: boolean;
  /** @uniqueItems true */
  scopes?: string[] | null;
  clientUri?: string | null;
  logoUri?: string | null;
}

export interface VoloAbpOpenIddictApplicationsDtosUpdateApplicationInput {
  extraProperties?: Record<string, any>;
  clientId: string;
  displayName: string;
  type?: string | null;
  clientSecret?: string | null;
  consentType?: string | null;
  /** @uniqueItems true */
  postLogoutRedirectUris?: string[] | null;
  /** @uniqueItems true */
  redirectUris?: string[] | null;
  allowPasswordFlow?: boolean;
  allowClientCredentialsFlow?: boolean;
  allowAuthorizationCodeFlow?: boolean;
  allowRefreshTokenFlow?: boolean;
  allowHybridFlow?: boolean;
  allowImplicitFlow?: boolean;
  allowLogoutEndpoint?: boolean;
  allowDeviceEndpoint?: boolean;
  /** @uniqueItems true */
  scopes?: string[] | null;
  clientUri?: string | null;
  logoUri?: string | null;
}

export interface VoloAbpOpenIddictScopesDtosCreateScopeInput {
  extraProperties?: Record<string, any>;
  /** @pattern \w+ */
  name: string;
  displayName?: string | null;
  description?: string | null;
  /** @uniqueItems true */
  resources?: string[] | null;
}

export interface VoloAbpOpenIddictScopesDtosScopeDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  buildIn?: boolean;
  /** @uniqueItems true */
  resources?: string[] | null;
}

export interface VoloAbpOpenIddictScopesDtosUpdateScopeInput {
  extraProperties?: Record<string, any>;
  /** @pattern \w+ */
  name: string;
  displayName?: string | null;
  description?: string | null;
  /** @uniqueItems true */
  resources?: string[] | null;
}

export interface VoloAbpPermissionManagementGetPermissionListResultDto {
  entityDisplayName?: string | null;
  groups?: VoloAbpPermissionManagementPermissionGroupDto[] | null;
}

export interface VoloAbpPermissionManagementPermissionGrantInfoDto {
  name?: string | null;
  displayName?: string | null;
  parentName?: string | null;
  isGranted?: boolean;
  allowedProviders?: string[] | null;
  grantedProviders?: VoloAbpPermissionManagementProviderInfoDto[] | null;
}

export interface VoloAbpPermissionManagementPermissionGroupDto {
  name?: string | null;
  displayName?: string | null;
  displayNameKey?: string | null;
  displayNameResource?: string | null;
  permissions?: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null;
}

export interface VoloAbpPermissionManagementProviderInfoDto {
  providerName?: string | null;
  providerKey?: string | null;
}

export interface VoloAbpPermissionManagementUpdatePermissionDto {
  name?: string | null;
  isGranted?: boolean;
}

export interface VoloAbpPermissionManagementUpdatePermissionsDto {
  permissions?: VoloAbpPermissionManagementUpdatePermissionDto[] | null;
}

export interface VoloAbpSettingManagementEmailSettingsDto {
  smtpHost?: string | null;
  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
}

export interface VoloAbpSettingManagementSendTestEmailInput {
  senderEmailAddress: string;
  targetEmailAddress: string;
  subject: string;
  body?: string | null;
}

export interface VoloAbpSettingManagementUpdateEmailSettingsDto {
  /** @maxLength 256 */
  smtpHost?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 65535
   */
  smtpPort?: number;
  /** @maxLength 1024 */
  smtpUserName?: string | null;
  /**
   * @format password
   * @maxLength 1024
   */
  smtpPassword?: string | null;
  /** @maxLength 1024 */
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  /** @maxLength 1024 */
  defaultFromAddress: string;
  /** @maxLength 1024 */
  defaultFromDisplayName: string;
}

export interface VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput {
  /**
   * @minLength 0
   * @maxLength 128
   */
  templateName: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  cultureName?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto {
  name?: string | null;
  displayName?: string | null;
  isLayout?: boolean;
  layout?: string | null;
  isInlineLocalized?: boolean;
  defaultCultureName?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto {
  name?: string | null;
  cultureName?: string | null;
  content?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput {
  /**
   * @minLength 0
   * @maxLength 128
   */
  templateName: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  cultureName?: string | null;
  content?: string | null;
}

export interface VoloAbpUsersUserData {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
  name?: string | null;
  surname?: string | null;
  isActive?: boolean;
  email?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
}

export interface VoloAbpValidationStringValuesIStringValueType {
  name?: string | null;
  properties?: Record<string, any>;
  validator?: VoloAbpValidationStringValuesIValueValidator;
}

export interface VoloAbpValidationStringValuesIValueValidator {
  name?: string | null;
  properties?: Record<string, any>;
}

export interface VoloPaymentPlansPlanDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloPaymentRequestsPaymentRequestProductDto {
  /** @format uuid */
  paymentRequestId?: string;
  code?: string | null;
  name?: string | null;
  /** @format float */
  unitPrice?: number;
  /** @format int32 */
  count?: number;
  /** @format float */
  totalPrice?: number;
  paymentType?: VoloPaymentRequestsPaymentType;
  /** @format uuid */
  planId?: string;
  extraProperties?: Record<string, any>;
}

/** @format int32 */
export enum VoloPaymentRequestsPaymentRequestState {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface VoloPaymentRequestsPaymentRequestWithDetailsDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  products?: VoloPaymentRequestsPaymentRequestProductDto[] | null;
  currency?: string | null;
  state?: VoloPaymentRequestsPaymentRequestState;
  failReason?: string | null;
  /** @format date-time */
  emailSendDate?: string | null;
  gateway?: string | null;
  externalSubscriptionId?: string | null;
  /** @format float */
  totalPrice?: number;
  /** @format date-time */
  creationTime?: string;
}

/** @format int32 */
export enum VoloPaymentRequestsPaymentType {
  Value0 = 0,
  Value1 = 1,
}

export interface VoloSaasHostDtosEditionCreateDto {
  extraProperties?: Record<string, any>;
  displayName: string;
  /** @format uuid */
  planId?: string | null;
}

export interface VoloSaasHostDtosEditionDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  displayName?: string | null;
  /** @format uuid */
  planId?: string | null;
  planName?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosEditionLookupDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface VoloSaasHostDtosEditionUpdateDto {
  extraProperties?: Record<string, any>;
  displayName: string;
  /** @format uuid */
  planId?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosSaasTenantConnectionStringsDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  default?: string | null;
  databases?: VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto[] | null;
}

export interface VoloSaasHostDtosSaasTenantCreateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name: string;
  /** @format uuid */
  editionId?: string | null;
  activationState?: VoloSaasTenantActivationState;
  /** @format date-time */
  activationEndDate?: string | null;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  adminEmailAddress: string;
  /**
   * @minLength 0
   * @maxLength 128
   */
  adminPassword: string;
  connectionStrings?: VoloSaasHostDtosSaasTenantConnectionStringsDto;
}

export interface VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto {
  extraProperties?: Record<string, any>;
  databaseName?: string | null;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  connectionString?: string | null;
}

export interface VoloSaasHostDtosSaasTenantDatabasesDto {
  extraProperties?: Record<string, any>;
  databases?: string[] | null;
}

export interface VoloSaasHostDtosSaasTenantDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format uuid */
  editionId?: string | null;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  editionName?: string | null;
  hasDefaultConnectionString?: boolean;
  activationState?: VoloSaasTenantActivationState;
  /** @format date-time */
  activationEndDate?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosSaasTenantSetPasswordDto {
  username?: string | null;
  password?: string | null;
}

export interface VoloSaasHostDtosSaasTenantUpdateDto {
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name: string;
  /** @format uuid */
  editionId?: string | null;
  activationState?: VoloSaasTenantActivationState;
  /** @format date-time */
  activationEndDate?: string | null;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostGetEditionUsageStatisticsResultDto {
  data?: Record<string, number | null>;
}

/** @format int32 */
export enum VoloSaasTenantActivationState {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title PccServer23 API
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsCreate
     * @summary Create new group.
     * @request POST:/api/app/custom-groups
     */
    appCustomGroupsCreate: (data: PccServer23GroupsGroupCreateSelfDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsUpdate
     * @summary Update group details
     * @request PUT:/api/app/custom-groups/{id}
     */
    appCustomGroupsUpdate: (id: string, data: PccServer23GroupsGroupUpdateDto, params: RequestParams = {}) =>
      this.request<PccServer23GroupsGroupDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsDelete
     * @summary Delete a group
     * @request DELETE:/api/app/custom-groups/{id}
     */
    appCustomGroupsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsJoinCreate
     * @summary Join a group.
     * @request POST:/api/app/custom-groups/join
     */
    appCustomGroupsJoinCreate: (data: PccServer23GroupsGroupJoinDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups/join`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsAcceptCreate
     * @summary Accept a group user join request
     * @request POST:/api/app/custom-groups/accept
     */
    appCustomGroupsAcceptCreate: (data: PccServer23GroupsGroupAcceptDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups/accept`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsRejectCreate
     * @summary Reject a group user join request
     * @request POST:/api/app/custom-groups/reject
     */
    appCustomGroupsRejectCreate: (data: PccServer23GroupsGroupRejectDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-groups/reject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppCustomGroupsMyCreatedGroupsList
     * @summary Get list of groups created by authenticated user
     * @request GET:/api/app/custom-groups/my-created-groups
     */
    appCustomGroupsMyCreatedGroupsList: (
      query?: {
        FilterText?: string;
        Name?: string;
        Description?: string;
        Sorting?: string;
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        SkipCount?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsGroupWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-groups/my-created-groups`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSecurityQuestionChoices
     * @name AppCustomSecurityQuestionChoicesSecurityQuestionsList
     * @summary Get list of security questions
     * @request GET:/api/app/custom-security-question-choices/security-questions
     */
    appCustomSecurityQuestionChoicesSecurityQuestionsList: (params: RequestParams = {}) =>
      this.request<PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput, VoloAbpHttpRemoteServiceErrorResponse>(
        {
          path: `/api/app/custom-security-question-choices/security-questions`,
          method: "GET",
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags CustomUsernameChoices
     * @name AppCustomUsernameChoicesCheckUsernameAvailabilityCreate
     * @summary Check a username is taken up by existing users
     * @request POST:/api/app/custom-username-choices/check-username-availability
     */
    appCustomUsernameChoicesCheckUsernameAvailabilityCreate: (
      data: PccServer23UsernameChoicesCheckUsernameAvailabilityInput,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23UsernameChoicesCheckUsernameAvailabilityOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-username-choices/check-username-availability`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomUsernameChoices
     * @name AppCustomUsernameChoicesUsernameChoicesList
     * @summary Get list of username for new user selection
     * @request GET:/api/app/custom-username-choices/username-choices
     */
    appCustomUsernameChoicesUsernameChoicesList: (params: RequestParams = {}) =>
      this.request<PccServer23UsernameChoicesGetUsernameChoicesOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-username-choices/username-choices`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags User
 * @name AppUserCreate
 * @summary Create new user with standard role.
To create new user with professional role use: api/app/user/professional
 * @request POST:/api/app/user
 */
    appUserCreate: (data: PccServer23UsersCreateUserInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserQuestionIdsList
     * @summary Get user selected security question IDs by username
     * @request GET:/api/app/user/question-ids
     */
    appUserQuestionIdsList: (
      query?: {
        Username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PccServer23UsersGetQuestionIdsOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/question-ids`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserResetPasswordCreate
     * @summary Reset user password
     * @request POST:/api/app/user/reset-password
     */
    appUserResetPasswordCreate: (data: PccServer23UsersResetPasswordInput, params: RequestParams = {}) =>
      this.request<PccServer23UsersResetPasswordOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags User
 * @name AppUserProfessionalCreate
 * @summary Create new user with professional role.
To create new user with standard role use: api/app/user
 * @request POST:/api/app/user/professional
 */
    appUserProfessionalCreate: (data: PccServer23UsersCreateProfessionalUserInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/professional`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserUsersList
     * @summary Get list of users with their role
     * @request GET:/api/app/user/users
     */
    appUserUsersList: (
      query?: {
        FilterText?: string;
        Name?: string;
        Role?: string;
        Sorting?: string;
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        SkipCount?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1PccServer23UsersGetUsersDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/user/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserUserProfileList
     * @summary Get current authenticated user's profile with latest 10 user joined groups data
     * @request GET:/api/app/user/user-profile
     */
    appUserUserProfileList: (params: RequestParams = {}) =>
      this.request<PccServer23UsersGetUserProfileDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/user-profile`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * No description
     *
     * @tags Login
     * @name TokenCreate
     * @summary Returns access token for authenticated access
     * @request POST:/connect/token
     */
    tokenCreate: (
      data: {
        /** @default "password" */
        grant_type?: string;
        username?: string;
        password?: string;
        /** @default "PccServer23_Web" */
        client_id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          access_token?: string;
          /** @default "Bearer" */
          token_type?: string;
          /** @default 3600 */
          expires_in?: number;
        },
        {
          error?: string;
          error_description?: string;
          error_uri?: string;
        }
      >({
        path: `/connect/token`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
}
