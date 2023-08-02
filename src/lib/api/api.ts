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

export interface PccServer23AchievementGroupsAchievementGroupCreateDto {
  name?: string | null;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
}

export interface PccServer23AchievementGroupsAchievementGroupDto {
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
  icon?: string | null;
  color?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23AchievementGroupsAchievementGroupUpdateDto {
  name?: string | null;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23AchievementsAchievementCreateDto {
  title?: string | null;
  description?: string | null;
  message?: string | null;
  /** @format int32 */
  viewCount?: number | null;
  icon?: string | null;
  color?: string | null;
  /** @format uuid */
  achievementGroupId?: string | null;
}

export interface PccServer23AchievementsAchievementDto {
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
  description?: string | null;
  message?: string | null;
  /** @format int32 */
  viewCount?: number | null;
  icon?: string | null;
  color?: string | null;
  /** @format uuid */
  achievementGroupId?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23AchievementsAchievementUpdateDto {
  title?: string | null;
  description?: string | null;
  message?: string | null;
  /** @format int32 */
  viewCount?: number | null;
  icon?: string | null;
  color?: string | null;
  /** @format uuid */
  achievementGroupId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23AchievementsAchievementWithNavigationPropertiesDto {
  achievement?: PccServer23AchievementsAchievementDto;
  achievementGroup?: PccServer23AchievementGroupsAchievementGroupDto;
}

export interface PccServer23ActivitiesActivityCreateDto {
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
}

export interface PccServer23ActivitiesActivityDto {
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
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  language?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23ActivitiesActivityUpdateDto {
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23ActivitiesCustomMultiLingualActivityCreate {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23ActivitiesCustomMultiLingualActivityCreateDto {
  english: PccServer23ActivitiesCustomMultiLingualActivityCreate;
  french: PccServer23ActivitiesCustomMultiLingualActivityCreate;
  tags?: string | null;
}

export interface PccServer23ActivitiesCustomMultiLingualActivityUpdate {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23ActivitiesCustomMultiLingualActivityUpdateDto {
  english: PccServer23ActivitiesCustomMultiLingualActivityUpdate;
  french: PccServer23ActivitiesCustomMultiLingualActivityUpdate;
  tags?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ActivitiesPublicActivityDto {
  /** @format uuid */
  id?: string;
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  language?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23AdminNotificationsAdminNotificationCreateDto {
  description: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23AdminNotificationsAdminNotificationDto {
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
  description?: string | null;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23AdminNotificationsAdminNotificationUpdateDto {
  description: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerCreateDto {
  answer: string;
  /** @format uuid */
  identityUserId?: string | null;
  /** @format uuid */
  assessmentQuestionId?: string;
}

export interface PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerCreateInput {
  answer: string;
  /** @format uuid */
  assessmentQuestionId: string;
}

export interface PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerDto {
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
  answer?: string | null;
  /** @format uuid */
  identityUserId?: string | null;
  /** @format uuid */
  assessmentQuestionId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerUpdateDto {
  answer: string;
  /** @format uuid */
  identityUserId?: string | null;
  /** @format uuid */
  assessmentQuestionId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerWithNavigationPropertiesDto {
  assessmentQuestionChoiceUserAnswer?: PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerDto;
  identityUser?: any;
  assessmentQuestion?: PccServer23AssessmentQuestionsAssessmentQuestionDto;
}

export interface PccServer23AssessmentQuestionsAssessmentQuestionCreateDto {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDescription?: string | null;
  frenchDescription?: string | null;
  englishImage?: string | null;
  frenchImage?: string | null;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  themeId?: string;
  /** @format uuid */
  curriculumId?: string;
  answer?: PccServer23AssessmentQuestionsMCQModelDto;
}

export interface PccServer23AssessmentQuestionsAssessmentQuestionDto {
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
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDescription?: string | null;
  frenchDescription?: string | null;
  englishImage?: string | null;
  frenchImage?: string | null;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  themeId?: string;
  /** @format uuid */
  curriculumId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23AssessmentQuestionsAssessmentQuestionUpdateDto {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDescription?: string | null;
  frenchDescription?: string | null;
  englishImage?: string | null;
  frenchImage?: string | null;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  themeId?: string;
  /** @format uuid */
  curriculumId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23AssessmentQuestionsAssessmentQuestionWithNavigationPropertiesDto {
  assessmentQuestion?: PccServer23AssessmentQuestionsAssessmentQuestionDto;
  theme?: PccServer23ThemesThemeDto;
  curriculum?: PccServer23CurriculumsCurriculumDto;
}

export interface PccServer23AssessmentQuestionsMCQChoiceModel {
  /** @format uuid */
  id?: string;
  name?: string | null;
  valid?: boolean;
}

export interface PccServer23AssessmentQuestionsMCQChoiceModelDto {
  englishDescription?: string | null;
  frenchDescription?: string | null;
  valid?: boolean;
}

export interface PccServer23AssessmentQuestionsMCQModelDto {
  choiceOne?: PccServer23AssessmentQuestionsMCQChoiceModel;
  choiceTwo?: PccServer23AssessmentQuestionsMCQChoiceModel;
  choiceThree?: PccServer23AssessmentQuestionsMCQChoiceModel;
  choiceFour?: PccServer23AssessmentQuestionsMCQChoiceModel;
}

export interface PccServer23AssessmentQuestionsMultiLingualAssessmentQuestionCreateDto {
  englishTitle: string;
  frenchTitle: string;
  englishDescription: string;
  frenchDescription: string;
  englishImage?: string | null;
  frenchImage?: string | null;
  answer?: PccServer23AssessmentQuestionsMCQChoiceModelDto[] | null;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  themeId: string;
  /** @format uuid */
  curriculumId: string;
}

export interface PccServer23AssessmentQuestionsMultiLingualAssessmentQuestionUpdateDto {
  englishTitle: string;
  frenchTitle: string;
  englishDescription: string;
  frenchDescription: string;
  englishImage?: string | null;
  frenchImage?: string | null;
  answer?: PccServer23AssessmentQuestionsMCQChoiceModelDto[] | null;
  /** @format int32 */
  order?: number;
  concurrencyStamp?: string | null;
}

export interface PccServer23AssessmentQuestionsUserCompletedAssessmentDto {
  /** @format uuid */
  assessmentQuestionId?: string;
  assessmentQuestionEnglishDesc?: string | null;
  assessmentQuestionFrenchDesc?: string | null;
  userName?: string | null;
  /** @format uuid */
  assessmentQuestionAnswerId?: string;
}

export interface PccServer23AvatarsAvatarCreateDto {
  name?: string | null;
  imageUrl: string;
}

export interface PccServer23AvatarsAvatarDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  imageUrl?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23AvatarsAvatarUpdateDto {
  name?: string | null;
  imageUrl: string;
  concurrencyStamp?: string | null;
}

/** @format string */
export enum PccServer23BasePublishStatusEnum {
  Preview = "Preview",
  Published = "Published",
}

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

export interface PccServer23CalendarEventsCalendarEventCreateDto {
  title?: string | null;
  description?: string | null;
  type?: PccServer23CalendarEventsCalendarEventType;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format uuid */
  calendarId?: string;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  topicId?: string | null;
  /** @format uuid */
  activityId?: string | null;
}

export interface PccServer23CalendarEventsCalendarEventDto {
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
  title?: string | null;
  description?: string | null;
  type?: PccServer23CalendarEventsCalendarEventType;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format uuid */
  calendarId?: string;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  topicId?: string | null;
  /** @format uuid */
  activityId?: string | null;
  concurrencyStamp?: string | null;
}

/** @format string */
export enum PccServer23CalendarEventsCalendarEventType {
  None = "None",
  Note = "Note",
  Activity = "Activity",
  Recipe = "Recipe",
  Assessment = "Assessment",
  MealtimeMoment = "MealtimeMoment",
  Foodway = "Foodway",
  EducatorNote = "EducatorNote",
  Theme = "Theme",
  DailyDiscovery = "DailyDiscovery",
}

export interface PccServer23CalendarEventsCalendarEventUpdateDto {
  title?: string | null;
  description?: string | null;
  type?: PccServer23CalendarEventsCalendarEventType;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format uuid */
  calendarId?: string;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  topicId?: string | null;
  /** @format uuid */
  activityId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23CalendarEventsCalendarEventWithNavigationPropertiesDto {
  calendarEvent?: PccServer23CalendarEventsCalendarEventDto;
  calendar?: PccServer23CalendarsCalendarDto;
  curriculum?: PccServer23CurriculumsCurriculumDto;
  topic?: PccServer23TopicsTopicDto;
  activity?: PccServer23ActivitiesActivityDto;
}

export interface PccServer23CalendarEventsPublicCalendarEventCreateDto {
  title?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format uuid */
  groupId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
  /** @format uuid */
  eventId?: string | null;
}

export interface PccServer23CalendarEventsPublicCalendarEventDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  description?: string | null;
  type?: PccServer23CalendarEventsCalendarEventType;
  /** @format date-time */
  start?: string | null;
  /** @format date-time */
  end?: string | null;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  topicId?: string | null;
  /** @format uuid */
  activityId?: string | null;
}

export interface PccServer23CalendarEventsPublicCalendarEventUpdateDto {
  /** @format uuid */
  id?: string;
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format uuid */
  groupId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
  /** @format uuid */
  eventId?: string | null;
}

export interface PccServer23CalendarEventsPublicCalendarEventWithNavigationPropertiesDto {
  calendarEvent?: PccServer23CalendarEventsPublicCalendarEventDto;
  curriculum?: PccServer23CurriculumsCurriculumDto;
  topic?: PccServer23TopicsTopicDto;
  activity?: PccServer23ActivitiesActivityDto;
}

export interface PccServer23CalendarsCalendarCreateDto {
  description?: string | null;
  /** @format uuid */
  groupId?: string | null;
  /** @format uuid */
  userId?: string | null;
}

export interface PccServer23CalendarsCalendarDto {
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
  /** @format uuid */
  groupId?: string | null;
  /** @format uuid */
  userId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23CalendarsCalendarUpdateDto {
  description?: string | null;
  /** @format uuid */
  groupId?: string | null;
  /** @format uuid */
  userId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23CalendarsCalendarWithNavigationPropertiesDto {
  calendar?: PccServer23CalendarsCalendarDto;
  group?: PccServer23GroupsGroupDto;
  identityUser?: any;
  calendarEvent?: PccServer23CalendarEventsCalendarEventDto;
}

export interface PccServer23CurriculumRecipesCurriculumRecipeCreateDto {
  title?: string | null;
  topic?: string | null;
  image?: string | null;
  description?: string | null;
  jsonData?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
}

export interface PccServer23CurriculumRecipesCurriculumRecipeDto {
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
  topic?: string | null;
  image?: string | null;
  description?: string | null;
  jsonData?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  language?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23CurriculumRecipesCurriculumRecipeUpdateDto {
  title?: string | null;
  topic?: string | null;
  image?: string | null;
  description?: string | null;
  jsonData?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23CurriculumRecipesCustomCustomCurriculumRecipeCreateDto {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23CurriculumRecipesCustomCustomCurriculumRecipeUpdateDto {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23CurriculumRecipesCustomMultiLingualCurriculumRecipeCreateDto {
  english: PccServer23CurriculumRecipesCustomCustomCurriculumRecipeCreateDto;
  french: PccServer23CurriculumRecipesCustomCustomCurriculumRecipeCreateDto;
  tags?: string | null;
}

export interface PccServer23CurriculumRecipesCustomMultiLingualCurriculumRecipeUpdateDto {
  english: PccServer23CurriculumRecipesCustomCustomCurriculumRecipeUpdateDto;
  french: PccServer23CurriculumRecipesCustomCustomCurriculumRecipeUpdateDto;
  tags?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23CurriculumRecipesPublicCurriculumRecipeDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  topic?: string | null;
  image?: string | null;
  description?: string | null;
  jsonData?: string | null;
  language?: string | null;
  concurrencyStamp?: string | null;
  status?: PccServer23BasePublishStatusEnum;
}

export interface PccServer23CurriculumsCurriculumCreateDto {
  name: string;
}

export interface PccServer23CurriculumsCurriculumDto {
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
}

export interface PccServer23CurriculumsCurriculumUpdateDto {
  name: string;
  concurrencyStamp?: string | null;
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

export interface PccServer23EducatorNotesEducatorNoteCreateDto {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDesc?: string | null;
  frenchDesc?: string | null;
  englishJson?: string | null;
  frenchJson?: string | null;
  tags?: string | null;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  themeId?: string | null;
}

export interface PccServer23EducatorNotesEducatorNoteDto {
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
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDesc?: string | null;
  frenchDesc?: string | null;
  englishJson?: string | null;
  frenchJson?: string | null;
  tags?: string | null;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23EducatorNotesEducatorNoteUpdateDto {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDesc?: string | null;
  frenchDesc?: string | null;
  englishJson?: string | null;
  frenchJson?: string | null;
  tags?: string | null;
  /** @format uuid */
  curriculumId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23EducatorNotesEducatorNoteWithNavigationPropertiesDto {
  educatorNote?: PccServer23EducatorNotesEducatorNoteDto;
  curriculum?: PccServer23CurriculumsCurriculumDto;
  theme?: PccServer23ThemesThemeDto;
}

export interface PccServer23FoodwayStopsFoodwayStopCreate {
  timePeriod: string;
  description?: string | null;
  location?: string | null;
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

export interface PccServer23FoodwayStopsMultiLingualFoodwayStopCreateDto {
  /** @format uuid */
  foodwayId?: string;
  english: PccServer23FoodwayStopsFoodwayStopCreate;
  french: PccServer23FoodwayStopsFoodwayStopCreate;
  image?: string | null;
  /** @format int32 */
  order?: number;
}

export interface PccServer23FoodwayStopsMultiLingualFoodwayStopUpdateDto {
  english: PccServer23FoodwayStopsTranslationFoodwayStopUpdateDto;
  french: PccServer23FoodwayStopsTranslationFoodwayStopUpdateDto;
  /** @format int32 */
  order?: number;
  /** @format uuid */
  foodwayId?: string;
  image?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23FoodwayStopsPublicFoodwayStopDto {
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
  language?: string | null;
}

export interface PccServer23FoodwayStopsTranslationFoodwayStopUpdateDto {
  timePeriod: string;
  description?: string | null;
  location?: string | null;
}

export interface PccServer23FoodwaysFoodwayCreateDto {
  title: string;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  status?: PccServer23BasePublishStatusEnum;
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
  status?: PccServer23BasePublishStatusEnum;
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
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23FoodwaysMultiLingualFoodwayCreateDto {
  english?: PccServer23FoodwaysTranslationFoodwayCreateDto;
  french?: PccServer23FoodwaysTranslationFoodwayCreateDto;
}

export interface PccServer23FoodwaysMultiLingualFoodwayUpdateDto {
  english: PccServer23FoodwaysTranslationFoodwayUpdateDto;
  french: PccServer23FoodwaysTranslationFoodwayUpdateDto;
}

export interface PccServer23FoodwaysPublicFoodwayDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  info?: string | null;
  image?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  language?: string | null;
  concurrencyStamp?: string | null;
  foodwayStops?: PccServer23FoodwayStopsPublicFoodwayStopDto[] | null;
}

export interface PccServer23FoodwaysTranslationFoodwayCreateDto {
  title: string;
  info?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23FoodwaysTranslationFoodwayUpdateDto {
  title: string;
  info?: string | null;
  /** @format date-time */
  featureDate?: string;
  description?: string | null;
  image?: string | null;
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

export interface PccServer23GeneralNotificationsGeneralNotificationCreateDto {
  description: string;
  /** @format uuid */
  userId?: string | null;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23GeneralNotificationsGeneralNotificationDto {
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
  description?: string | null;
  /** @format uuid */
  userId?: string | null;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23GeneralNotificationsGeneralNotificationUpdateDto {
  description: string;
  /** @format uuid */
  userId?: string | null;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23GroupNotificationsGroupNotificationCreateDto {
  description: string;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
  /** @format uuid */
  userId?: string | null;
}

export interface PccServer23GroupNotificationsGroupNotificationDto {
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
  description?: string | null;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
  /** @format uuid */
  userId?: string | null;
}

export interface PccServer23GroupNotificationsGroupNotificationUpdateDto {
  description: string;
  /** @format uuid */
  groupId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
  /** @format uuid */
  userId?: string | null;
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
  /** @format uuid */
  groupId?: string;
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

export interface PccServer23ImpactReportsGetQuestionsOutput {
  questions?: PccServer23ImpactReportsImpactReportQuestion[] | null;
}

export interface PccServer23ImpactReportsImpactReportCreateDto {
  /** @format int32 */
  questionId?: number;
  answer?: string | null;
  /** @format uuid */
  curriculumId?: string;
  province?: string | null;
}

export interface PccServer23ImpactReportsImpactReportDto {
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
  /** @format int32 */
  questionId?: number;
  answer?: string | null;
  /** @format uuid */
  curriculumId?: string;
  province?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ImpactReportsImpactReportQuestion {
  /** @format int32 */
  id?: number;
  question?: string | null;
}

export interface PccServer23ImpactReportsImpactReportUpdateDto {
  /** @format int32 */
  questionId?: number;
  answer?: string | null;
  /** @format uuid */
  curriculumId?: string;
  province?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ImpactReportsPublicImpactReportDto {
  /** @format int32 */
  questionId?: number;
  answer?: string | null;
  /** @format uuid */
  curriculumId?: string;
  province?: string | null;
  /** @format date-time */
  creationTime?: string;
}

export interface PccServer23IngredientsIngredient {
  /** @format uuid */
  id?: string;
  extraProperties?: Record<string, any>;
  concurrencyStamp?: string | null;
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
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  /** @format uuid */
  recipeId?: string;
  translations?: PccServer23IngredientsIngredientTranslation[] | null;
}

export interface PccServer23IngredientsIngredientCreateDto {
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  /** @format uuid */
  recipeId?: string;
}

export interface PccServer23IngredientsIngredientDto {
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
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  /** @format uuid */
  recipeId?: string;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23IngredientsIngredientTranslation {
  /** @format uuid */
  ingredientId?: string;
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  language?: string | null;
}

export interface PccServer23IngredientsIngredientUpdateDto {
  /** @format uuid */
  id?: string;
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  /** @format uuid */
  recipeId?: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23IngredientsIngredientWithNavigationPropertiesDto {
  ingredient?: PccServer23IngredientsIngredientDto;
  recipe?: PccServer23RecipesRecipeDto;
}

export interface PccServer23IngredientsPublicIngredientDto {
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
  language?: string | null;
}

export interface PccServer23MealPlannerImportAppServiceGroceryListIngredient {
  name?: string | null;
  measurement?: string | null;
  /** @format int32 */
  value?: number;
}

export interface PccServer23MealPlansGetMealPlanRequest {
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  daysOfWeek?: SystemDayOfWeek[] | null;
  mealTimings?: string[] | null;
  /** @format int32 */
  servingSize?: number;
}

export interface PccServer23MealPlansMealPlanCreateDto {
  data?: string | null;
}

export interface PccServer23MealPlansMealPlanData {
  meals?: PccServer23MealPlansOrganizedMealPlan[] | null;
  /** @format int32 */
  mealsPerDay?: number;
  /** @format int32 */
  servingSize?: number;
}

export interface PccServer23MealPlansMealPlanDto {
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
  data?: string | null;
}

export interface PccServer23MealPlansMealPlanRecipe {
  /** @format uuid */
  recipeId?: string | null;
  description?: string | null;
  image?: string | null;
  /** @format date-time */
  time?: string | null;
}

export interface PccServer23MealPlansMealPlanUpdateDto {
  data?: string | null;
}

export interface PccServer23MealPlansOrganizedMealPlan {
  /** @format date-time */
  date?: string;
  day?: string | null;
  plans?: PccServer23MealPlansMealPlanRecipe[] | null;
}

export interface PccServer23MealPlansPublicMealPlanDto {
  /** @format uuid */
  id?: string;
  data?: PccServer23MealPlansMealPlanData;
}

export interface PccServer23MealtimeMomentsMealtimeMomentCreateDto {
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
}

export interface PccServer23MealtimeMomentsMealtimeMomentDto {
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
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
  language?: string | null;
}

export interface PccServer23MealtimeMomentsMealtimeMomentUpdateDto {
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  status?: PccServer23BasePublishStatusEnum;
  concurrencyStamp?: string | null;
}

export interface PccServer23MealtimeMomentsMultiLingualMealtimeMomentCreate {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23MealtimeMomentsMultiLingualMealtimeMomentCreateDto {
  english: PccServer23MealtimeMomentsMultiLingualMealtimeMomentCreate;
  french: PccServer23MealtimeMomentsMultiLingualMealtimeMomentCreate;
  tags?: string | null;
}

export interface PccServer23MealtimeMomentsMultiLingualMealtimeMomentUpdate {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23MealtimeMomentsMultiLingualMealtimeMomentUpdateDto {
  english: PccServer23MealtimeMomentsMultiLingualMealtimeMomentUpdate;
  french: PccServer23MealtimeMomentsMultiLingualMealtimeMomentUpdate;
  tags?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23MealtimeMomentsPublicMealtimeMomentDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  jsonData?: string | null;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  tags?: string | null;
  language?: string | null;
  concurrencyStamp?: string | null;
  status?: PccServer23BasePublishStatusEnum;
}

export interface PccServer23RecipeMediasRecipeMedia {
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
  recipe?: PccServer23RecipesRecipe;
  concurrencyStamp?: string | null;
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

/** @format string */
export enum PccServer23RecipeMediasRecipeMediaType {
  Image = "Image",
  Video = "Video",
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

export interface PccServer23RecipesIngredientUpdate {
  english: PccServer23RecipesRecipeIngredientUpdateDto;
  french: PccServer23RecipesRecipeIngredientUpdateDto;
}

export interface PccServer23RecipesMultiLingualIngredientCreate {
  english: PccServer23RecipesRecipeIngredientCreateDto;
  french: PccServer23RecipesRecipeIngredientCreateDto;
}

export interface PccServer23RecipesMultiLingualRecipeCreateDto {
  english: PccServer23RecipesRecipeCreate;
  french: PccServer23RecipesRecipeCreate;
  image?: string | null;
  ingredients: PccServer23RecipesMultiLingualIngredientCreate[];
}

export interface PccServer23RecipesMultiLingualRecipeUpdate {
  name?: string | null;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
}

export interface PccServer23RecipesMultiLingualRecipeUpdateDto {
  english: PccServer23RecipesMultiLingualRecipeUpdate;
  french: PccServer23RecipesMultiLingualRecipeUpdate;
  image?: string | null;
  concurrencyStamp?: string | null;
  ingredients?: PccServer23RecipesIngredientUpdate[] | null;
}

export interface PccServer23RecipesPublicRecipeDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
  image?: string | null;
  language?: string | null;
  concurrencyStamp?: string | null;
  ingredients?: PccServer23IngredientsPublicIngredientDto[] | null;
}

export interface PccServer23RecipesRecipe {
  /** @format uuid */
  id?: string;
  extraProperties?: Record<string, any>;
  concurrencyStamp?: string | null;
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
  image?: string | null;
  translations?: PccServer23RecipesRecipeTranslation[] | null;
  medias?: PccServer23RecipeMediasRecipeMedia[] | null;
  ingredients?: PccServer23IngredientsIngredient[] | null;
}

export interface PccServer23RecipesRecipeCreate {
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
  image?: string | null;
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
  image?: string | null;
  concurrencyStamp?: string | null;
  language?: string | null;
  medias?: PccServer23RecipeMediasRecipeMediaDto[] | null;
  ingredients?: PccServer23IngredientsIngredientDto[] | null;
}

export interface PccServer23RecipesRecipeIngredientCreateDto {
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
}

export interface PccServer23RecipesRecipeIngredientUpdateDto {
  /** @format uuid */
  id?: string;
  quantity?: string | null;
  measurement?: string | null;
  name?: string | null;
}

export interface PccServer23RecipesRecipeTranslation {
  /** @format uuid */
  recipeId?: string;
  name?: string | null;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
  language?: string | null;
}

export interface PccServer23RecipesRecipeUpdateDto {
  name: string;
  goodFor?: string | null;
  servingSize?: string | null;
  tags?: string | null;
  directions?: string | null;
  image?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23SearchesGetListDto {
  contentType?: string | null;
  contentTitle?: string | null;
  contentDescription?: string | null;
  contentThemeName?: string | null;
}

export interface PccServer23SearchesGetListOutput {
  items?: PccServer23SearchesGetListDto[] | null;
  /** @format int64 */
  totalCount?: number;
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

/** @format string */
export enum PccServer23SecurityQuestionChoicesSecurityQuestionChoiceType {
  First = "First",
  Second = "Second",
  Third = "Third",
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

export interface PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23ActivitiesPublicActivityDto;
  french?: PccServer23ActivitiesPublicActivityDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23CurriculumRecipesPublicCurriculumRecipeDto;
  french?: PccServer23CurriculumRecipesPublicCurriculumRecipeDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23FoodwayStopsPublicFoodwayStopDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23FoodwayStopsPublicFoodwayStopDto;
  french?: PccServer23FoodwayStopsPublicFoodwayStopDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23FoodwaysPublicFoodwayDto;
  french?: PccServer23FoodwaysPublicFoodwayDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23MealtimeMomentsPublicMealtimeMomentDto;
  french?: PccServer23MealtimeMomentsPublicMealtimeMomentDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23RecipesPublicRecipeDto;
  french?: PccServer23RecipesPublicRecipeDto;
}

export interface PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  english?: PccServer23ThemesPublicThemeDto;
  french?: PccServer23ThemesPublicThemeDto;
}

export interface PccServer23SharedLookupDto1SystemGuidSystemPrivateCoreLibVersion7000CultureNeutralPublicKeyToken7Cec85D7Bea7798E {
  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface PccServer23ThemeActivitiesThemeActivityCreateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  activityId?: string | null;
  /** @format uuid */
  themeId?: string | null;
}

export interface PccServer23ThemeActivitiesThemeActivityDto {
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
  activityId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemeActivitiesThemeActivityUpdateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  activityId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemeActivitiesThemeActivityWithNavigationPropertiesDto {
  themeActivity?: PccServer23ThemeActivitiesThemeActivityDto;
  activity?: PccServer23ActivitiesActivityDto;
  theme?: PccServer23ThemesThemeDto;
}

export interface PccServer23ThemeRecipesThemeRecipeCreateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  curriculumRecipeId?: string | null;
  /** @format uuid */
  themeId?: string | null;
}

export interface PccServer23ThemeRecipesThemeRecipeDto {
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
  curriculumRecipeId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemeRecipesThemeRecipeUpdateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  curriculumRecipeId?: string | null;
  /** @format uuid */
  themeId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemeRecipesThemeRecipeWithNavigationPropertiesDto {
  themeRecipe?: PccServer23ThemeRecipesThemeRecipeDto;
  curriculumRecipe?: PccServer23CurriculumRecipesCurriculumRecipeDto;
  theme?: PccServer23ThemesThemeDto;
}

export interface PccServer23ThemesCustomAddEducatorNoteInput {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDesc?: string | null;
  frenchDesc?: string | null;
  englishJson?: string | null;
  frenchJson?: string | null;
  tags?: string | null;
  /** @format uuid */
  curriculumId: string;
  /** @format uuid */
  themeId: string;
}

export interface PccServer23ThemesCustomPublicUserCompletedThemesDto {
  description?: string | null;
  /** @format uuid */
  themeId?: string;
  /** @format uuid */
  userId?: string;
}

export interface PccServer23ThemesCustomSaveUserLessonCompletionStatusInput {
  /** @format uuid */
  themeId?: string;
}

export interface PccServer23ThemesCustomUpdateEducatorNoteInput {
  englishTitle?: string | null;
  frenchTitle?: string | null;
  englishDesc?: string | null;
  frenchDesc?: string | null;
  englishJson?: string | null;
  frenchJson?: string | null;
  tags?: string | null;
}

export interface PccServer23ThemesMultiLingualThemeCreate {
  name?: string | null;
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23ThemesMultiLingualThemeCreateDto {
  english: PccServer23ThemesMultiLingualThemeCreate;
  french: PccServer23ThemesMultiLingualThemeCreate;
}

export interface PccServer23ThemesMultiLingualThemeUpdate {
  jsonData?: string | null;
  title?: string | null;
  topic?: string | null;
  description?: string | null;
  image?: string | null;
}

export interface PccServer23ThemesMultilingualThemeUpdateDto {
  english: PccServer23ThemesMultiLingualThemeUpdate;
  french: PccServer23ThemesMultiLingualThemeUpdate;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemesPublicThemeDto {
  /** @format uuid */
  id?: string;
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  jsonData?: string | null;
  status?: PccServer23ThemesThemeStatus;
  language?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23ThemesThemeAttachActivityDto {
  /** @format uuid */
  activityId: string;
  /** @format uuid */
  themeId: string;
}

export interface PccServer23ThemesThemeAttachRecipeDto {
  /** @format uuid */
  curriculumRecipeId: string;
  /** @format uuid */
  themeId: string;
}

export interface PccServer23ThemesThemeCreateDto {
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  jsonData?: string | null;
  status?: PccServer23ThemesThemeStatus;
}

export interface PccServer23ThemesThemeDto {
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
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  jsonData?: string | null;
  status?: PccServer23ThemesThemeStatus;
  language?: string | null;
  concurrencyStamp?: string | null;
}

/** @format string */
export enum PccServer23ThemesThemeStatus {
  Preview = "Preview",
  Complete = "Complete",
}

export interface PccServer23ThemesThemeUpdateDto {
  title?: string | null;
  image?: string | null;
  topic?: string | null;
  description?: string | null;
  jsonData?: string | null;
  status?: PccServer23ThemesThemeStatus;
  concurrencyStamp?: string | null;
}

export interface PccServer23TopicsTopicCreateDto {
  name: string;
}

export interface PccServer23TopicsTopicDto {
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
}

export interface PccServer23TopicsTopicUpdateDto {
  name: string;
  concurrencyStamp?: string | null;
}

export interface PccServer23UserCompletedThemessUserCompletedThemesCreateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  themeId?: string | null;
  /** @format uuid */
  identityUserId?: string | null;
}

export interface PccServer23UserCompletedThemessUserCompletedThemesDto {
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
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  themeId?: string | null;
  /** @format uuid */
  identityUserId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23UserCompletedThemessUserCompletedThemesUpdateDto {
  name?: string | null;
  description?: string | null;
  /** @format uuid */
  themeId?: string | null;
  /** @format uuid */
  identityUserId?: string | null;
  concurrencyStamp?: string | null;
}

export interface PccServer23UserCompletedThemessUserCompletedThemesWithNavigationPropertiesDto {
  userCompletedThemes?: PccServer23UserCompletedThemessUserCompletedThemesDto;
  theme?: PccServer23ThemesThemeDto;
  identityUser?: any;
}

export interface PccServer23UserNotificationsUserNotificationCreateDto {
  description: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23UserNotificationsUserNotificationDto {
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
  description?: string | null;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
}

export interface PccServer23UserNotificationsUserNotificationUpdateDto {
  description: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string | null;
  eventType?: PccServer23CalendarEventsCalendarEventType;
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

/** @format string */
export enum PccServer23UsernameChoicesUsernameChoiceType {
  First = "First",
  Second = "Second",
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
  /** @format uuid */
  avatarId?: string | null;
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
  /** @format uuid */
  avatarId?: string | null;
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
  avatar?: string | null;
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

/** @format string */
export enum SystemDayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export type SystemVoid = object;

export interface VoloAbpApplicationDtosListResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23ActivitiesActivityDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23CurriculumRecipesCurriculumRecipeDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23EducatorNotesEducatorNoteDto[] | null;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23ActivitiesActivityDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23AssessmentQuestionsAssessmentQuestionWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23AssessmentQuestionsAssessmentQuestionWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23AssessmentQuestionsUserCompletedAssessmentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23AssessmentQuestionsUserCompletedAssessmentDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23AvatarsAvatarDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23AvatarsAvatarDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23CalendarEventsPublicCalendarEventWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23CalendarEventsPublicCalendarEventWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23CurriculumRecipesCurriculumRecipeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

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

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23ImpactReportsPublicImpactReportDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23ImpactReportsPublicImpactReportDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23MealtimeMomentsMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23MealtimeMomentsMealtimeMomentDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23RecipesPublicRecipeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1PccServer23ThemesThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: PccServer23ThemesThemeDto[] | null;
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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
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
     * @tags CustomActivities
     * @name AppActivitiesList
     * @summary Get list of activity
     * @request GET:/api/app/activities
     */
    appActivitiesList: (
      query?: {
        FilterText?: string;
        JsonData?: string;
        Title?: string;
        Image?: string;
        Topic?: string;
        Description?: string;
        Tags?: string;
        Status?: PccServer23BasePublishStatusEnum;
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
        language?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/activities`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomActivities
     * @name AppActivitiesCreate
     * @summary Create a new activity record
     * @request POST:/api/app/activities
     * @secure
     */
    appActivitiesCreate: (data: PccServer23ActivitiesCustomMultiLingualActivityCreateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/activities`,
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
     * @tags CustomActivities
     * @name AppActivitiesDetail
     * @summary Get activity record
     * @request GET:/api/app/activities/{id}
     * @secure
     */
    appActivitiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/activities/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomActivities
     * @name AppActivitiesDelete
     * @summary Delete activity record with id
     * @request DELETE:/api/app/activities/{id}
     * @secure
     */
    appActivitiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/activities/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomActivities
     * @name AppActivitiesUpdate
     * @summary Update an existing activity record's details
     * @request PUT:/api/app/activities/{id}
     * @secure
     */
    appActivitiesUpdate: (
      id: string,
      data: PccServer23ActivitiesCustomMultiLingualActivityUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/activities/${id}`,
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
     * @tags CustomActivities
     * @name AppActivitiesChangeStatusCreate
     * @request POST:/api/app/activities/{id}/change-status
     * @secure
     */
    appActivitiesChangeStatusCreate: (
      id: string,
      query?: {
        status?: PccServer23BasePublishStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/activities/${id}/change-status`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestionChoiceUserAnswers
     * @name AppAssessmentQuestionChoiceUserAnswersSubmitAnswerCreate
     * @request POST:/api/app/assessment-question-choice-user-answers/submit-answer
     */
    appAssessmentQuestionChoiceUserAnswersSubmitAnswerCreate: (
      data: PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerCreateInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-question-choice-user-answers/submit-answer`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsList
     * @request GET:/api/app/assessment-questions
     */
    appAssessmentQuestionsList: (
      query?: {
        FilterText?: string;
        EnglishTitle?: string;
        FrenchTitle?: string;
        EnglishDescription?: string;
        FrenchDescription?: string;
        EnglishImage?: string;
        FrenchImage?: string;
        /** @format int32 */
        OrderMin?: number;
        /** @format int32 */
        OrderMax?: number;
        /** @format uuid */
        ThemeId?: string;
        /** @format uuid */
        CurriculumId?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23AssessmentQuestionsAssessmentQuestionWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/assessment-questions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsCreate
     * @request POST:/api/app/assessment-questions
     */
    appAssessmentQuestionsCreate: (
      data: PccServer23AssessmentQuestionsMultiLingualAssessmentQuestionCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23AssessmentQuestionsAssessmentQuestionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsDetail
     * @request GET:/api/app/assessment-questions/{id}
     */
    appAssessmentQuestionsDetail: (id: string, params: RequestParams = {}) =>
      this.request<PccServer23AssessmentQuestionsAssessmentQuestionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsDelete
     * @request DELETE:/api/app/assessment-questions/{id}
     */
    appAssessmentQuestionsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsUpdate
     * @request PUT:/api/app/assessment-questions/{id}
     */
    appAssessmentQuestionsUpdate: (
      id: string,
      data: PccServer23AssessmentQuestionsMultiLingualAssessmentQuestionUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23AssessmentQuestionsAssessmentQuestionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsAnswersForQuestionList
     * @request GET:/api/app/assessment-questions/answers-for-question
     */
    appAssessmentQuestionsAnswersForQuestionList: (
      query?: {
        /** @format uuid */
        AssessmentQuestionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PccServer23AssessmentQuestionsMCQChoiceModelDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions/answers-for-question`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsCompletedAssessmentsList
     * @summary Get User's completed assessments
     * @request GET:/api/app/assessment-questions/completed-assessments
     */
    appAssessmentQuestionsCompletedAssessmentsList: (
      query?: {
        /** @format uuid */
        AssessmentQuestionId?: string;
        FilterText?: string;
        Name?: string;
        /** @format int32 */
        OrderMin?: number;
        /** @format int32 */
        OrderMax?: number;
        /** @format uuid */
        ThemeId?: string;
        /** @format uuid */
        CurriculumId?: string;
        /** @format uuid */
        UserId?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23AssessmentQuestionsUserCompletedAssessmentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/assessment-questions/completed-assessments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAssessmentQuestions
     * @name AppAssessmentQuestionsSubmitAnswerCreate
     * @request POST:/api/app/assessment-questions/submit-answer
     * @secure
     */
    appAssessmentQuestionsSubmitAnswerCreate: (
      data: PccServer23AssessmentQuestionChoiceUserAnswersAssessmentQuestionChoiceUserAnswerCreateInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/assessment-questions/submit-answer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomAvatars
     * @name AppAvatarsList
     * @summary Get list of avatars
     * @request GET:/api/app/avatars
     */
    appAvatarsList: (
      query?: {
        FilterText?: string;
        Name?: string;
        ImageUrl?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23AvatarsAvatarDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/avatars`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCalendars
     * @name AppCalendarsMyCalendarEventsList
     * @summary Get authenticated user's calendar events
     * @request GET:/api/app/calendars/my-calendar-events
     * @secure
     */
    appCalendarsMyCalendarEventsList: (
      query?: {
        FilterText?: string;
        Description?: string;
        /** @format date-time */
        StartDate?: string;
        /** @format date-time */
        EndDate?: string;
        FilterGroupIds?: string[];
        FilterEventTypes?: PccServer23CalendarEventsCalendarEventType[];
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23CalendarEventsPublicCalendarEventWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/calendars/my-calendar-events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCalendars
     * @name AppCalendarsGroupCalendarEventsList
     * @summary Get a group's calendar events
     * @request GET:/api/app/calendars/group-calendar-events
     */
    appCalendarsGroupCalendarEventsList: (
      query: {
        FilterText?: string;
        Description?: string;
        /** @format uuid */
        GroupId: string;
        /** @format date-time */
        StartDate?: string;
        /** @format date-time */
        EndDate?: string;
        FilterGroupIds?: string[];
        FilterEventType?: PccServer23CalendarEventsCalendarEventType[];
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23CalendarEventsPublicCalendarEventWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/calendars/group-calendar-events`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCalendars
     * @name AppCalendarsEventDelete
     * @summary Delete an existing calendar event by id
     * @request DELETE:/api/app/calendars/{id}/event
     * @secure
     */
    appCalendarsEventDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/calendars/${id}/event`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCalendars
     * @name AppCalendarsEventToMyCalendarCreate
     * @summary Add calendar event for authenticated user
     * @request POST:/api/app/calendars/event-to-my-calendar
     * @secure
     */
    appCalendarsEventToMyCalendarCreate: (
      data: PccServer23CalendarEventsPublicCalendarEventCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23CalendarEventsPublicCalendarEventDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/calendars/event-to-my-calendar`,
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
     * @tags CustomCalendars
     * @name AppCalendarsEventToGroupCalendarCreate
     * @summary Add calendar event for a group
     * @request POST:/api/app/calendars/event-to-group-calendar
     * @secure
     */
    appCalendarsEventToGroupCalendarCreate: (
      data: PccServer23CalendarEventsPublicCalendarEventCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23CalendarEventsPublicCalendarEventDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/calendars/event-to-group-calendar`,
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
     * @tags CustomCalendars
     * @name AppCalendarsEventUpdate
     * @summary Update an existing calendar event
     * @request PUT:/api/app/calendars/event
     * @secure
     */
    appCalendarsEventUpdate: (
      data: PccServer23CalendarEventsPublicCalendarEventUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/calendars/event`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCloudDrive
     * @name AppCloudDriveUploadFileCreate
     * @request POST:/api/app/cloud-drive/upload-file
     */
    appCloudDriveUploadFileCreate: (
      data: {
        /** @format binary */
        file?: File;
      },
      query?: {
        folder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cloud-drive/upload-file`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCloudDrive
     * @name AppCloudDriveDriveFilesList
     * @request GET:/api/app/cloud-drive/drive-files
     */
    appCloudDriveDriveFilesList: (
      query?: {
        folder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cloud-drive/drive-files`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCloudDrive
     * @name AppCloudDriveDriveFileDelete
     * @request DELETE:/api/app/cloud-drive/drive-file
     */
    appCloudDriveDriveFileDelete: (
      query?: {
        relativePath?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cloud-drive/drive-file`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesList
     * @summary Get list of curriculum recipe
     * @request GET:/api/app/curriculum-recipes
     */
    appCurriculumRecipesList: (
      query?: {
        FilterText?: string;
        Title?: string;
        Topic?: string;
        Image?: string;
        Description?: string;
        JsonData?: string;
        Tags?: string;
        Status?: PccServer23BasePublishStatusEnum;
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
        language?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/curriculum-recipes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesCreate
     * @summary Create a new curriculum recipe record
     * @request POST:/api/app/curriculum-recipes
     * @secure
     */
    appCurriculumRecipesCreate: (
      data: PccServer23CurriculumRecipesCustomMultiLingualCurriculumRecipeCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/curriculum-recipes`,
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
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesDetail
     * @summary Get curriculum recipe record
     * @request GET:/api/app/curriculum-recipes/{id}
     * @secure
     */
    appCurriculumRecipesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/curriculum-recipes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesDelete
     * @summary Delete curriculum recipe record with id
     * @request DELETE:/api/app/curriculum-recipes/{id}
     * @secure
     */
    appCurriculumRecipesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/curriculum-recipes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesUpdate
     * @summary Update an existing curriculum recipe record's details
     * @request PUT:/api/app/curriculum-recipes/{id}
     * @secure
     */
    appCurriculumRecipesUpdate: (
      id: string,
      data: PccServer23CurriculumRecipesCustomMultiLingualCurriculumRecipeUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/curriculum-recipes/${id}`,
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
     * @tags CustomCurriculumRecipes
     * @name AppCurriculumRecipesChangeStatusCreate
     * @request POST:/api/app/curriculum-recipes/{id}/change-status
     * @secure
     */
    appCurriculumRecipesChangeStatusCreate: (
      id: string,
      query?: {
        status?: PccServer23BasePublishStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/curriculum-recipes/${id}/change-status`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomCurriculums
     * @name AppCurriculumsList
     * @request GET:/api/app/curriculums
     */
    appCurriculumsList: (params: RequestParams = {}) =>
      this.request<PccServer23CurriculumsCurriculumDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/curriculums`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomFoodways
     * @name AppFoodwaysList
     * @summary Get list of foodway with list of foodwaystop
     * @request GET:/api/app/foodways
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
    appFoodwaysCreate: (data: PccServer23FoodwaysMultiLingualFoodwayCreateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
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
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
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
      data: PccServer23FoodwaysMultiLingualFoodwayUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
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
     * @tags CustomFoodways
     * @name AppFoodwaysChangeStatusCreate
     * @request POST:/api/app/foodways/{id}/change-status
     * @secure
     */
    appFoodwaysChangeStatusCreate: (
      id: string,
      query?: {
        status?: PccServer23BasePublishStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/foodways/${id}/change-status`,
        method: "POST",
        query: query,
        secure: true,
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
      data: PccServer23FoodwayStopsMultiLingualFoodwayStopUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23FoodwayStopsPublicFoodwayStopDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
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
    appFoodwayStopsCreate: (
      data: PccServer23FoodwayStopsMultiLingualFoodwayStopCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23FoodwayStopsPublicFoodwayStopDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
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
     * @summary Join a group by group id.
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
     * @name AppGroupsMyAllParticipatedGroupsList
     * @summary Get list of groups created AND joined by authenticated user
     * @request GET:/api/app/groups/my-all-participated-groups
     * @secure
     */
    appGroupsMyAllParticipatedGroupsList: (
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
        path: `/api/app/groups/my-all-participated-groups`,
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
     * @name AppGroupsUserListForGroupList
     * @summary Get list of group joined users
     * @request GET:/api/app/groups/user-list-for-group
     * @secure
     */
    appGroupsUserListForGroupList: (
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
        path: `/api/app/groups/user-list-for-group`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomImpactReports
     * @name AppImpactReportsCreate
     * @request POST:/api/app/impact-reports
     */
    appImpactReportsCreate: (data: PccServer23ImpactReportsImpactReportCreateDto, params: RequestParams = {}) =>
      this.request<PccServer23ImpactReportsPublicImpactReportDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/impact-reports`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomImpactReports
     * @name AppImpactReportsAnswersList
     * @request GET:/api/app/impact-reports/answers
     */
    appImpactReportsAnswersList: (
      query?: {
        FilterText?: string;
        /** @format int32 */
        QuestionIdMin?: number;
        /** @format int32 */
        QuestionIdMax?: number;
        Answer?: string;
        /** @format uuid */
        CurriculumId?: string;
        Province?: string;
        /** @format date-time */
        StartDate?: string;
        /** @format date-time */
        EndDate?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23ImpactReportsPublicImpactReportDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/impact-reports/answers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomImpactReports
     * @name AppImpactReportsQuestionsList
     * @request GET:/api/app/impact-reports/questions
     */
    appImpactReportsQuestionsList: (params: RequestParams = {}) =>
      this.request<PccServer23ImpactReportsGetQuestionsOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/impact-reports/questions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerGetMealPlanCreate
     * @request POST:/api/app/meal-planner/get-meal-plan
     */
    appMealPlannerGetMealPlanCreate: (data: PccServer23MealPlansGetMealPlanRequest, params: RequestParams = {}) =>
      this.request<PccServer23MealPlansMealPlanData, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/meal-planner/get-meal-plan`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerMealPlanByIdDetail
     * @request GET:/api/app/meal-planner/{id}/meal-plan-by-id
     */
    appMealPlannerMealPlanByIdDetail: (id: string, params: RequestParams = {}) =>
      this.request<PccServer23MealPlansPublicMealPlanDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/meal-planner/${id}/meal-plan-by-id`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerMealPlanUpdate
     * @request PUT:/api/app/meal-planner/{id}/meal-plan
     */
    appMealPlannerMealPlanUpdate: (id: string, data: PccServer23MealPlansMealPlanData, params: RequestParams = {}) =>
      this.request<PccServer23MealPlansPublicMealPlanDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/meal-planner/${id}/meal-plan`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerSaveMealPlanCreate
     * @request POST:/api/app/meal-planner/save-meal-plan/{groupId}
     */
    appMealPlannerSaveMealPlanCreate: (
      groupId: string,
      data: PccServer23MealPlansMealPlanData,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23MealPlansPublicMealPlanDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/meal-planner/save-meal-plan/${groupId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerGroceryListDetail
     * @request GET:/api/app/meal-planner/grocery-list/{mealPlanId}
     */
    appMealPlannerGroceryListDetail: (mealPlanId: string, params: RequestParams = {}) =>
      this.request<
        PccServer23MealPlannerImportAppServiceGroceryListIngredient[],
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/meal-planner/grocery-list/${mealPlanId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealPlanner
     * @name AppMealPlannerImportSpreadsheetCreate
     * @request POST:/api/app/meal-planner/import-spreadsheet
     */
    appMealPlannerImportSpreadsheetCreate: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/meal-planner/import-spreadsheet`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsList
     * @summary Get list of mealtime moments
     * @request GET:/api/app/mealtime-moments
     */
    appMealtimeMomentsList: (
      query?: {
        FilterText?: string;
        JsonData?: string;
        Title?: string;
        Image?: string;
        Topic?: string;
        Description?: string;
        Tags?: string;
        Status?: PccServer23BasePublishStatusEnum;
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
        language?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1PccServer23MealtimeMomentsMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mealtime-moments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsCreate
     * @summary Create a new mealtime moments record
     * @request POST:/api/app/mealtime-moments
     * @secure
     */
    appMealtimeMomentsCreate: (
      data: PccServer23MealtimeMomentsMultiLingualMealtimeMomentCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mealtime-moments`,
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
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsDetail
     * @summary Get mealtime moments record
     * @request GET:/api/app/mealtime-moments/{id}
     */
    appMealtimeMomentsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mealtime-moments/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsDelete
     * @summary Delete mealtime moments record with id
     * @request DELETE:/api/app/mealtime-moments/{id}
     * @secure
     */
    appMealtimeMomentsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mealtime-moments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsUpdate
     * @summary Update an existing mealtime moments record's details
     * @request PUT:/api/app/mealtime-moments/{id}
     * @secure
     */
    appMealtimeMomentsUpdate: (
      id: string,
      data: PccServer23MealtimeMomentsMultiLingualMealtimeMomentUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mealtime-moments/${id}`,
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
     * @tags CustomMealtimeMoments
     * @name AppMealtimeMomentsChangeStatusCreate
     * @request POST:/api/app/mealtime-moments/{id}/change-status
     * @secure
     */
    appMealtimeMomentsChangeStatusCreate: (
      id: string,
      query?: {
        status?: PccServer23BasePublishStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mealtime-moments/${id}/change-status`,
        method: "POST",
        query: query,
        secure: true,
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
    appRecipeMediasCreate: (
      data: {
        /** @format binary */
        file?: File;
      },
      query?: {
        mediaType?: PccServer23RecipeMediasRecipeMediaType;
        /** @format uuid */
        recipeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PccServer23RecipeMediasRecipeMediaDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/recipe-medias`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipes
     * @name AppRecipesList
     * @summary Get list of recipe with recipe medias
     * @request GET:/api/app/recipes
     */
    appRecipesList: (
      query?: {
        FilterText?: string;
        Name?: string;
        GoodFor?: string;
        ServingSize?: string;
        Tags?: string;
        Directions?: string;
        Image?: string;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/recipes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipes
     * @name AppRecipesCreate
     * @summary Create a new recipe
     * @request POST:/api/app/recipes
     * @secure
     */
    appRecipesCreate: (data: PccServer23RecipesMultiLingualRecipeCreateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/recipes`,
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
     * @tags CustomRecipes
     * @name AppRecipesDetail
     * @summary Get a recipe with recipe medias
     * @request GET:/api/app/recipes/{id}
     */
    appRecipesDetail: (id: string, params: RequestParams = {}) =>
      this.request<PccServer23RecipesPublicRecipeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/recipes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipes
     * @name AppRecipesDelete
     * @summary Delete an existing recipe with it's id
     * @request DELETE:/api/app/recipes/{id}
     * @secure
     */
    appRecipesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/recipes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomRecipes
     * @name AppRecipesUpdate
     * @summary Update an existing recipe details
     * @request PUT:/api/app/recipes/{id}
     * @secure
     */
    appRecipesUpdate: (id: string, data: PccServer23RecipesMultiLingualRecipeUpdateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/recipes/${id}`,
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
     * @tags CustomSearch
     * @name AppSearchList
     * @request GET:/api/app/search
     */
    appSearchList: (
      query: {
        FilterText: string;
        IncludeFoodway?: boolean;
        IncludeFoodwayStop?: boolean;
        IncludeRecipe?: boolean;
        IncludeActivity?: boolean;
        IncludeTheme?: boolean;
        IncludeThemeRecipe?: boolean;
        IncludeThemeActivity?: boolean;
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
      this.request<PccServer23SearchesGetListOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/search`,
        method: "GET",
        query: query,
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
     * @tags CustomThemes
     * @name AppThemesList
     * @summary Get list of theme
     * @request GET:/api/app/themes
     */
    appThemesList: (
      query?: {
        FilterText?: string;
        Title?: string;
        Image?: string;
        Topic?: string;
        Description?: string;
        JsonData?: string;
        Status?: PccServer23ThemesThemeStatus;
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
        VoloAbpApplicationDtosPagedResultDto1PccServer23ThemesThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesDetail
     * @summary Get a theme record with id
     * @request GET:/api/app/themes/{id}
     */
    appThemesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesDelete
     * @summary Delete an existing theme record
     * @request DELETE:/api/app/themes/{id}
     */
    appThemesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesUpdate
     * @summary Update theme details
     * @request PUT:/api/app/themes/{id}
     * @secure
     */
    appThemesUpdate: (id: string, data: PccServer23ThemesMultilingualThemeUpdateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/${id}`,
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
     * @tags CustomThemes
     * @name AppThemesEducatorNotesDetail
     * @summary Get Educator Notes for theme
     * @request GET:/api/app/themes/educator-notes/{themeId}
     */
    appThemesEducatorNotesDetail: (themeId: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/educator-notes/${themeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesEducatorNoteCreate
     * @summary Add educator note for a theme with a curriculum id
     * @request POST:/api/app/themes/educator-note
     */
    appThemesEducatorNoteCreate: (data: PccServer23ThemesCustomAddEducatorNoteInput, params: RequestParams = {}) =>
      this.request<PccServer23EducatorNotesEducatorNoteDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/educator-note`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesEducatorNoteUpdate
     * @summary Update educator note for a theme with a curriculum id
     * @request PUT:/api/app/themes/{id}/educator-note
     */
    appThemesEducatorNoteUpdate: (
      id: string,
      data: PccServer23ThemesCustomUpdateEducatorNoteInput,
      params: RequestParams = {},
    ) =>
      this.request<PccServer23EducatorNotesEducatorNoteDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/${id}/educator-note`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesEducatorNoteDelete
     * @summary Delete educator note for a theme
     * @request DELETE:/api/app/themes/{id}/educator-note
     */
    appThemesEducatorNoteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/${id}/educator-note`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesNewThemeCreate
     * @summary Creates a new theme in preview mode and returns Id
     * @request POST:/api/app/themes/new-theme
     * @secure
     */
    appThemesNewThemeCreate: (data: PccServer23ThemesMultiLingualThemeCreateDto, params: RequestParams = {}) =>
      this.request<
        PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/new-theme`,
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
     * @tags CustomThemes
     * @name AppThemesAttachedActivitiesDetail
     * @request GET:/api/app/themes/attached-activities/{themeId}
     */
    appThemesAttachedActivitiesDetail: (
      themeId: string,
      query?: {
        language?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/attached-activities/${themeId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesAttachedRecipesDetail
     * @request GET:/api/app/themes/attached-recipes/{themeId}
     */
    appThemesAttachedRecipesDetail: (
      themeId: string,
      query?: {
        language?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/themes/attached-recipes/${themeId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesDetachActivityCreate
     * @request POST:/api/app/themes/detach-activity
     */
    appThemesDetachActivityCreate: (data: PccServer23ThemesThemeAttachActivityDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/detach-activity`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesAttachActivityCreate
     * @request POST:/api/app/themes/attach-activity
     */
    appThemesAttachActivityCreate: (data: PccServer23ThemesThemeAttachActivityDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/attach-activity`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesDetachRecipeCreate
     * @request POST:/api/app/themes/detach-recipe
     */
    appThemesDetachRecipeCreate: (data: PccServer23ThemesThemeAttachRecipeDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/detach-recipe`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesAttachRecipeCreate
     * @request POST:/api/app/themes/attach-recipe
     */
    appThemesAttachRecipeCreate: (data: PccServer23ThemesThemeAttachRecipeDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/attach-recipe`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesChangeStatusCreate
     * @request POST:/api/app/themes/{id}/change-status
     * @secure
     */
    appThemesChangeStatusCreate: (
      id: string,
      query?: {
        status?: PccServer23ThemesThemeStatus;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/${id}/change-status`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesSaveUserLessonCompletionStatusCreate
     * @summary Save user lesson completion status of current user
     * @request POST:/api/app/themes/save-user-lesson-completion-status
     */
    appThemesSaveUserLessonCompletionStatusCreate: (
      data: PccServer23ThemesCustomSaveUserLessonCompletionStatusInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/save-user-lesson-completion-status`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomThemes
     * @name AppThemesUserLessonCompletionStatusList
     * @summary Get current user lesson completion status
     * @request GET:/api/app/themes/user-lesson-completion-status
     */
    appThemesUserLessonCompletionStatusList: (
      query?: {
        /** @format uuid */
        ThemeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PccServer23ThemesCustomPublicUserCompletedThemesDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/themes/user-lesson-completion-status`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

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
     * @tags Import
     * @name AppTestImportDoWorkCreate
     * @request POST:/api/app/test-import/do-work
     */
    appTestImportDoWorkCreate: (params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-import/do-work`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name AppTestImportDoTestCreate
     * @request POST:/api/app/test-import/do-test
     */
    appTestImportDoTestCreate: (params: RequestParams = {}) =>
      this.request<
        PccServer23MealPlannerImportAppServiceGroceryListIngredient[],
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/test-import/do-test`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name AppTestImportTryParseQuantityCreate
     * @request POST:/api/app/test-import/try-parse-quantity
     */
    appTestImportTryParseQuantityCreate: (
      data: PccServer23RecipesRecipe[],
      query?: {
        /** @format int32 */
        servingSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PccServer23MealPlannerImportAppServiceGroceryListIngredient[],
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/test-import/try-parse-quantity`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
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
     * @name AppUserUserByIdDetail
     * @request GET:/api/app/user/{id}/user-by-id
     */
    appUserUserByIdDetail: (id: string, params: RequestParams = {}) =>
      this.request<PccServer23UsersGetUsersDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user/${id}/user-by-id`,
        method: "GET",
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
