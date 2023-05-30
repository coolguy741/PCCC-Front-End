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

export interface PccServer23BooksCustomFoodwayCreate {
  title: string;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
}

export interface PccServer23BooksCustomFoodwayStopCreate {
  timePeriod: string;
  description?: string | null;
  image?: string | null;
  location?: string | null;
}

export interface PccServer23BooksCustomMultiLingualBookCreateDto {
  english: PccServer23BooksCustomBookCreate;
  french: PccServer23BooksCustomBookCreate;
}

export interface PccServer23BooksCustomMultiLingualFoodwayCreateDto {
  english: PccServer23BooksCustomFoodwayCreate;
  french: PccServer23BooksCustomFoodwayCreate;
}

export interface PccServer23BooksCustomMultiLingualFoodwayStopCreateDto {
  /** @format uuid */
  foodwayId?: string;
  english: PccServer23BooksCustomFoodwayStopCreate;
  french: PccServer23BooksCustomFoodwayStopCreate;
  /** @format int32 */
  order?: number;
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

export interface PccServer23FoodwayStopsCustomFoodwayStopUpdateDto {
  timePeriod: string;
  description?: string | null;
  image?: string | null;
  location?: string | null;
}

export interface PccServer23FoodwayStopsCustomMultiLingualFoodwayStopUpdateDto {
  english: PccServer23FoodwayStopsCustomFoodwayStopUpdateDto;
  french: PccServer23FoodwayStopsCustomFoodwayStopUpdateDto;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  foodwayId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23FoodwayStopsFoodwayStopCreateDto {
  timePeriod: string;
  description?: string | null;
  /** @format int32 */
  order?: number;
  image?: string | null;
  location?: string | null;
  /** @format uuid */
  foodwayId?: string;
}

export interface PccServer23FoodwayStopsFoodwayStopDto {
  /** @format uuid */
  id?: string;
  timePeriod?: string | null;
  description?: string | null;
  /** @format int32 */
  order?: number;
  image?: string | null;
  location?: string | null;
  /** @format uuid */
  foodwayId?: string;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23FoodwayStopsFoodwayStopUpdateDto {
  timePeriod: string;
  description?: string | null;
  /** @format int32 */
  order?: number;
  image?: string | null;
  location?: string | null;
  /** @format uuid */
  foodwayId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23FoodwayStopsFoodwayStopWithNavigationPropertiesDto {
  foodwayStop?: PccServer23FoodwayStopsFoodwayStopDto;
  foodway?: PccServer23FoodwaysFoodwayDto;
}

export interface PccServer23FoodwaysCustomMultiLingualFoodwayUpdateDto {
  english: PccServer23FoodwaysFoodwayUpdateDto;
  french: PccServer23FoodwaysFoodwayUpdateDto;
}

export interface PccServer23FoodwaysFoodwayCreateDto {
  title: string;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
}

export interface PccServer23FoodwaysFoodwayDto {
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
  title?: string | null;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
  foodwayStops?: PccServer23FoodwayStopsFoodwayStopDto[] | null;
}

export interface PccServer23FoodwaysFoodwayUpdateDto {
  title: string;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23GameSavesGameSaveCreateDto {
  data: string;
  /** @format int32 */
  recipeNumber?: number;
  /** @format uuid */
  userId?: string;
}

export interface PccServer23GameSavesGameSaveDto {
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
  data?: string | null;
  /** @format int32 */
  recipeNumber?: number;
  /** @format uuid */
  userId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23GameSavesGameSaveUpdateDto {
  data: string;
  /** @format int32 */
  recipeNumber?: number;
  /** @format uuid */
  userId?: string;
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
  identityUser?: any;
}

export interface PccServer23GroupsCustomGetJoinedGroupUsersDto {
  /** @format uuid */
  groupUserId?: string;
  /** @format uuid */
  userId?: string;
  userName?: string | null;
  userRole?: string | null;
}

export interface PccServer23GroupsCustomGroupUserJoinRequestDto {
  /** @format uuid */
  groupUserId?: string;
  groupName?: string | null;
  userName?: string | null;
  userRole?: string | null;
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
}

export interface PccServer23IdentityPublicIdentityUserDto {
  username?: string | null;
  role?: string | null;
}

export interface PccServer23RecipeMediasRecipeMediaCreateDto {
  mediaType?: PccServer23RecipeMediasRecipeMediaType;
  fileType: string;
  fileName: string;
  filePath: string;
  /** @format uuid */
  recipeId?: string;
}

export interface PccServer23RecipeMediasRecipeMediaDto {
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
  mediaType?: PccServer23RecipeMediasRecipeMediaType;
  fileType?: string | null;
  fileName?: string | null;
  filePath?: string | null;
  /** @format uuid */
  recipeId?: string;
  concurrencyStamp?: string | null;
}

/** @format int32 */
export enum PccServer23RecipeMediasRecipeMediaType {
  Value0 = 0,
  Value1 = 1,
}

export interface PccServer23RecipeMediasRecipeMediaUpdateDto {
  mediaType?: PccServer23RecipeMediasRecipeMediaType;
  fileType: string;
  fileName: string;
  filePath: string;
  /** @format uuid */
  recipeId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23RecipeMediasRecipeMediaWithNavigationPropertiesDto {
  recipeMedia?: PccServer23RecipeMediasRecipeMediaDto;
  recipe?: PccServer23RecipesRecipeDto;
}

export interface PccServer23RecipesCustomMultiLingualRecipeCreateDto {
  english: PccServer23RecipesCustomRecipeCreate;
  french: PccServer23RecipesCustomRecipeCreate;
}

export interface PccServer23RecipesCustomMultiLingualRecipeUpdateDto {
  english: PccServer23RecipesRecipeUpdateDto;
  french: PccServer23RecipesRecipeUpdateDto;
  concurrencyStamp?: string | null;
}

export interface PccServer23RecipesCustomRecipeCreate {
  name: string;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
}

export interface PccServer23RecipesRecipeCreateDto {
  name: string;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
}

export interface PccServer23RecipesRecipeDto {
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
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
  medias?: PccServer23RecipeMediasRecipeMediaDto[] | null;
}

export interface PccServer23RecipesRecipeUpdateDto {
  name: string;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
  concurrencyStamp?: string | null;
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

export interface PccServer23UsersUserAppServiceSaveDataRequestModel {
  saveData?: string | null;
}

export interface PccServer23UsersUserInGroupDto {
  groupName?: string | null;
  /** @format int32 */
  memberCount?: number;
}

export type SystemVoid = object;

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23FoodwaysFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23FoodwaysFoodwayDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsCustomGetJoinedGroupUsersDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23GroupsCustomGetJoinedGroupUsersDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsCustomGroupUserJoinRequestDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23GroupsCustomGroupUserJoinRequestDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsGroupWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23GroupsGroupWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23UsersGetUsersDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23UsersGetUsersDto[] | null;
  /** @format int64 */
  totalCount?: number;
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
     * @tags CustomFoodways
     * @name AppFoodwaysList
     * @summary Get list of foodway with list of foodwaystop
     * @request GET:/api/app/foodways
     * @secure
     */
    appFoodwaysList: (
      query?: {
        FilterText?: string;
        Title?: string;
        Info?: string;
        LanguageCode?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23FoodwaysFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/foodways`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodways
     * @name AppFoodwaysCreate
     * @summary Create a new foodway record
     * @request POST:/api/app/foodways
     * @secure
     */
    appFoodwaysCreate: (data: PccServer23BooksCustomMultiLingualFoodwayCreateDto, params: RequestParams = {}) =>
      this.request<PccServer23FoodwaysFoodwayDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodways`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodways
     * @name AppFoodwaysDetail
     * @summary Get a foodway record
     * @request GET:/api/app/foodways/{id}
     * @secure
     */
    appFoodwaysDetail: (id: string, params: RequestParams = {}) =>
      this.request<PccServer23FoodwaysFoodwayDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodways/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodways
     * @name AppFoodwaysDelete
     * @summary Delete a foodway record with id
     * @request DELETE:/api/app/foodways/{id}
     * @secure
     */
    appFoodwaysDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodways/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodways
     * @name AppFoodwaysUpdate
     * @summary Update an existing foodway record's details
     * @request PUT:/api/app/foodways/{id}
     * @secure
     */
    appFoodwaysUpdate: (
      id: string,
      data: PccServer23FoodwaysCustomMultiLingualFoodwayUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23FoodwaysFoodwayDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodways/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodwayStops
     * @name AppFoodwayStopsDelete
     * @summary Delete a foodwaystop record with id
     * @request DELETE:/api/app/foodway-stops/{id}
     * @secure
     */
    appFoodwayStopsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodway-stops/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodwayStops
     * @name AppFoodwayStopsUpdate
     * @summary Update an existing foodwaystop record's details
     * @request PUT:/api/app/foodway-stops/{id}
     * @secure
     */
    appFoodwayStopsUpdate: (
      id: string,
      data: PccServer23FoodwayStopsCustomMultiLingualFoodwayStopUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23FoodwayStopsFoodwayStopDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodway-stops/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodwayStops
     * @name AppFoodwayStopsCreate
     * @summary Create a new foodwaystop record
     * @request POST:/api/app/foodway-stops
     * @secure
     */
    appFoodwayStopsCreate: (data: PccServer23BooksCustomMultiLingualFoodwayStopCreateDto, params: RequestParams = {}) =>
      this.request<PccServer23FoodwayStopsFoodwayStopDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodway-stops`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsCreate
     * @summary Create new group.
     * @request POST:/api/app/groups
     * @secure
     */
    appGroupsCreate: (data: PccServer23GroupsGroupCreateSelfDto, params: RequestParams = {}) =>
      this.request<PccServer23GroupsGroupDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsDelete
     * @summary Remove user from group
     * @request DELETE:/api/app/groups
     * @secure
     */
    appGroupsDelete: (
      query?: {
        /** @format uuid */
        GroupId?: string;
        /** @format uuid */
        UserId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsUpdate
     * @summary Update group details
     * @request PUT:/api/app/groups/{id}
     * @secure
     */
    appGroupsUpdate: (id: string, data: PccServer23GroupsGroupUpdateDto, params: RequestParams = {}) =>
      this.request<PccServer23GroupsGroupDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsDelete2
     * @summary Delete a group
     * @request DELETE:/api/app/groups/{id}
     * @originalName appGroupsDelete
     * @duplicate
     * @secure
     */
    appGroupsDelete2: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsJoinCreate
     * @summary Join a group.
     * @request POST:/api/app/groups/join
     * @secure
     */
    appGroupsJoinCreate: (data: PccServer23GroupsGroupJoinDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups/join`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsAcceptCreate
     * @summary Accept a group user join request
     * @request POST:/api/app/groups/accept
     * @secure
     */
    appGroupsAcceptCreate: (data: PccServer23GroupsGroupAcceptDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups/accept`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsRejectCreate
     * @summary Reject a group user join request
     * @request POST:/api/app/groups/reject
     * @secure
     */
    appGroupsRejectCreate: (data: PccServer23GroupsGroupRejectDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/groups/reject`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsMyCreatedGroupsList
     * @summary Get list of groups created by authenticated user
     * @request GET:/api/app/groups/my-created-groups
     * @secure
     */
    appGroupsMyCreatedGroupsList: (
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
        path: `/api/app/groups/my-created-groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsMyJoinedGroupsList
     * @summary Get list of groups joined by authenticated user
     * @request GET:/api/app/groups/my-joined-groups
     * @secure
     */
    appGroupsMyJoinedGroupsList: (
      query?: {
        FilterText?: string;
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
        path: `/api/app/groups/my-joined-groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsMyGroupsJoinRequestsList
     * @summary Get list of groups join requests of authenticated user's groups
     * @request GET:/api/app/groups/my-groups-join-requests
     * @secure
     */
    appGroupsMyGroupsJoinRequestsList: (
      query?: {
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsCustomGroupUserJoinRequestDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/groups/my-groups-join-requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomGroups
     * @name AppGroupsJoinedGroupUsersList
     * @summary Get list of group joined users
     * @request GET:/api/app/groups/joined-group-users
     * @secure
     */
    appGroupsJoinedGroupUsersList: (
      query: {
        /** @format uuid */
        GroupId: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsCustomGetJoinedGroupUsersDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/groups/joined-group-users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipeMedias
     * @name AppRecipeMediasDelete
     * @summary Delete a recipe media with Id
     * @request DELETE:/api/app/recipe-medias/{id}
     * @secure
     */
    appRecipeMediasDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/recipe-medias/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipeMedias
     * @name AppRecipeMediasCreate
     * @summary Create new recipe media
     * @request POST:/api/app/recipe-medias
     * @secure
     */
    appRecipeMediasCreate: (data: PccServer23RecipeMediasRecipeMediaCreateDto, params: RequestParams = {}) =>
      this.request<PccServer23RecipeMediasRecipeMediaDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/recipe-medias`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSecurityQuestionChoices
     * @name AppSecurityQuestionChoicesSecurityQuestionsList
     * @summary Get list of security questions
     * @request GET:/api/app/security-question-choices/security-questions
     */
    appSecurityQuestionChoicesSecurityQuestionsList: (params: RequestParams = {}) =>
      this.request<PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput, VoloAbpHttpRemoteServiceErrorResponse>(
        {
          path: `/api/app/security-question-choices/security-questions`,
          method: "GET",
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags CustomUsernameChoices
     * @name AppUsernameChoicesCheckUsernameAvailabilityCreate
     * @summary Check a username is taken up by existing users
     * @request POST:/api/app/username-choices/check-username-availability
     */
    appUsernameChoicesCheckUsernameAvailabilityCreate: (
      data: PccServer23UsernameChoicesCheckUsernameAvailabilityInput,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23UsernameChoicesCheckUsernameAvailabilityOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/username-choices/check-username-availability`,
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
     * @name AppUsernameChoicesUsernameChoicesList
     * @summary Get list of username for new user selection
     * @request GET:/api/app/username-choices/username-choices
     */
    appUsernameChoicesUsernameChoicesList: (params: RequestParams = {}) =>
      this.request<PccServer23UsernameChoicesGetUsernameChoicesOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/username-choices/username-choices`,
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
     * @secure
     */
    appUserUserProfileList: (params: RequestParams = {}) =>
      this.request<PccServer23UsersGetUserProfileDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/user-profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserGameSaveDataCreate
     * @request POST:/api/app/user/game-save-data/{recipeId}
     */
    appUserGameSaveDataCreate: (
      recipeId: number,
      data: PccServer23UsersUserAppServiceSaveDataRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<any, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/game-save-data/${recipeId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AppUserGameSaveDataDetail
     * @request GET:/api/app/user/game-save-data/{recipeId}
     */
    appUserGameSaveDataDetail: (recipeId: number, params: RequestParams = {}) =>
      this.request<any, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/game-save-data/${recipeId}`,
        method: "GET",
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
