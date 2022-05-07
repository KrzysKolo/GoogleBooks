export interface BookInterface {
  id: string ;
  authors: string | string[];
  title: string;
  publishedDate: string;
  image?: string | undefined ;
  language: string;
  link: string;
  description?: string | undefined | any;
  favoriteBook: boolean;
};
