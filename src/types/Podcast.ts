export type Podcast = {
  "im:name": Name;
  "im:price": Price;
  "im:image": Age[];
  summary: Summary;
  "im:artist": Artist;
  title: Title;
  link: Link;
  id: Id;
  "im:contentType": ContentType;
  category: Category;
  "im:releaseDate": ReleaseDate;
};

export type Name = {
  label: string;
};

export type Price = {
  label: string;
  attributes: PriceAttributes;
};

export type PriceAttributes = {
  amount: string;
  currency: string;
};

export type Age = {
  label: string;
  attributes: AgeAttributes;
};

export type AgeAttributes = {
  height: string;
};

export type Summary = {
  label: string;
};

export type Artist = {
  label: string;
};

export type Title = {
  label: string;
};

export type Link = {
  attributes: LinkAttributes;
};

export type LinkAttributes = {
  rel: string;
  type: string;
  href: string;
};

export type Id = {
  label: string;
  attributes: IdAttributes;
};

export type IdAttributes = {
  "im:id": string;
};

export type ContentType = {
  attributes: ContentTypeAttributes;
};

export type ContentTypeAttributes = {
  term: string;
  label: string;
};

export type Category = {
  attributes: CategoryAttributes;
};

export type CategoryAttributes = {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
};

export type ReleaseDate = {
  label: string;
  attributes: ReleaseDateAttributes;
};

export type ReleaseDateAttributes = {
  label: string;
};
