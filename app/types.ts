import { AnimationAction } from "three";

export type ActionModelType = {
  [x: string]: AnimationAction | null;
};

export type SkillCategoriesI = {
  FRONTEND: string;
  BACKEND: string;
  DATABASE: string;
  SERVICE: string;
  VERSION_CONTROL: string;
  DEVOPS: string;
  STATE_MANAGEMENT: string;
  OTHER: string;
};

export type SkillType = {
  imageUrl: string;
  name: string;
  yoe: number;
  type: string;
  order: number;
};

export type ExperienceType = {
  title: string;
  company_name: string;
  company_link: string;
  icon: string;
  icon_bg: string;
  date: string;
  points: string[];
};

export type ProjectType = {
  icon_url: string;
  theme: string;
  name: string;
  descriptions: string[];
  link: string;
};

export type BlogType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: number[];
  class_list: string[];
  yoast_head: string;
  yoast_head_json: Yoastheadjson;
  _links: Links;
};

interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Author2[];
  replies: Author2[];
  "version-history": Versionhistory[];
  "predecessor-version": Predecessorversion[];
  "wp:featuredmedia": Author2[];
  "wp:attachment": Self[];
  "wp:term": Wpterm[];
  curies: Cury[];
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Wpterm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Predecessorversion {
  id: number;
  href: string;
}

interface Versionhistory {
  count: number;
  href: string;
}

interface Author2 {
  embeddable: boolean;
  href: string;
}

interface Self {
  href: string;
}

interface Yoastheadjson {
  title: string;
  description: string;
  robots: Robots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_published_time: string;
  article_modified_time: string;
  og_image: Ogimage[];
  author: string;
  twitter_card: string;
  twitter_misc: Twittermisc;
  schema: Schema;
}

interface Schema {
  "@context": string;
  "@graph": Graph[];
}

interface Graph {
  "@type": string;
  "@id": string;
  isPartOf?: IsPartOf;
  author?: Author;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: IsPartOf;
  wordCount?: number;
  commentCount?: number;
  publisher?: IsPartOf;
  image?: Image;
  thumbnailUrl?: string;
  keywords?: string[];
  articleSection?: string[];
  inLanguage?: string;
  potentialAction?: PotentialAction[];
  url?: string;
  name?: string;
  primaryImageOfPage?: IsPartOf;
  description?: string;
  breadcrumb?: IsPartOf;
  contentUrl?: string;
  width?: number;
  height?: number;
  caption?: string;
  itemListElement?: ItemListElement[];
  alternateName?: string;
  logo?: Logo;
  publishingPrinciples?: string;
  ownershipFundingInfo?: string;
  actionableFeedbackPolicy?: string;
  correctionsPolicy?: string;
  ethicsPolicy?: string;
  diversityPolicy?: string;
  diversityStaffingReport?: string;
  sameAs?: string[];
}

interface Logo {
  "@type": string;
  inLanguage: string;
  "@id": string;
  url: string;
  contentUrl: string;
  width: number;
  height: number;
  caption: string;
}

interface ItemListElement {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

interface PotentialAction {
  "@type": string;
  name?: string;
  target: string[] | Target2;
  "query-input"?: Queryinput;
}

interface Queryinput {
  "@type": string;
  valueRequired: boolean;
  valueName: string;
}

interface Target2 {
  "@type": string;
  urlTemplate: string;
}

interface Image {
  "@id": string;
  "@type"?: string;
  inLanguage?: string;
  url?: string;
  contentUrl?: string;
  caption?: string;
}

interface Author {
  name: string;
  "@id": string;
}

interface IsPartOf {
  "@id": string;
}

interface Twittermisc {
  "Written by": string;
  "Est. reading time": string;
}

interface Ogimage {
  width: number;
  height: number;
  url: string;
  type: string;
}

interface Robots {
  index: string;
  follow: string;
  "max-snippet": string;
  "max-image-preview": string;
  "max-video-preview": string;
}

interface Meta {
  footnotes: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Guid {
  rendered: string;
}

export interface BlogCategoryI {
  id: number;
  name: string;
}

export interface BlogTagI extends BlogCategoryI {}

export type AuthorType = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: AvatarUrls;
};

interface AvatarUrls {
  "24": string;
  "48": string;
  "96": string;
}

export type PostsGraphqlType = {
  data: Data;
  extensions: Extensions;
};

interface Extensions {
  debug: any[];
  queryAnalyzer: QueryAnalyzer;
}

interface QueryAnalyzer {
  keys: string;
  keysLength: number;
  keysCount: number;
  skippedKeys: string;
  skippedKeysSize: number;
  skippedKeysCount: number;
  skippedTypes: any[];
}

interface Data {
  posts: Posts;
}

export interface Posts {
  nodes: PostItem[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}

export interface PostItem {
  author: Author;
  content: string;
  categories: Categories;
  date: string;
  modified: string;
  desiredSlug: null;
  excerpt: string;
  featuredImage: FeaturedImage;
  postViews: PostViews;
  link: string;
  postId: number;
  slug: string;
  tags: Tags;
  title: string;
  uri: string;
}

export interface PostSEO {
  author: Author;
  title: string;
  seo: SEO;
}

export interface SEO {
  canonical: string;
  cornerstone: string;
  focuskw: string;
  fullHead: string;
  metaDesc: string;
  metaKeywords: string;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  opengraphAuthor: string;
  opengraphDescription: string;
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  opengraphPublisher: string;
  opengraphSiteName: string;
  opengraphTitle: string;
  opengraphType: string;
  opengraphUrl: string;
  opengraphImage: {
    sourceUrl: string;
    altText: string;
  };
  readingTime: string;
  title: string;
  twitterDescription: string;
  twitterTitle: string;
}

interface Tags {
  nodes: TagItem[];
}

export interface TagItem {
  description: null;
  id: string;
  name: string;
}

interface FeaturedImage {
  node: FeaturedImageDetail;
}

interface FeaturedImageDetail {
  altText: string;
  srcSet: string;
  sourceUrl: string;
  width?: number;
  height?: number;
}

interface PostViews {
  total: number;
}

interface Categories {
  nodes: PostCategory[];
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
  uri: string;
  description: string;
  children: Children;
  parent: Parent;
}

interface Children {
  nodes: Omit<PostCategory, "children">[];
}
interface Parent {
  node: {
    name: string;
  };
}
interface Author {
  node: AuthorInfo;
}

export interface AuthorInfo {
  avatar: Avatar;
  firstName: string;
  lastName: null;
  username: string;
  name: string;
  slug: string;
  url: string;
  description: string;
}

interface Avatar {
  url: string;
  width: number;
  extraAttr: null;
  height: number;
}

export interface GetPostsByAuthorVariables {
  author: string;
}

export interface GetPostsByAuthorResponse {
  user: {
    avatar: Avatar;
    description: string;
    name: string;
    firstName: string;
    lastName: string;
    slug: string;
    email: string;
    posts: Posts;
  };
}
