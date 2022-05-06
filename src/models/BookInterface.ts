export interface BookInterface {
  favoured?: string | boolean;
  id: string ;
  authors: string | string[];
  title: string;
  publishedDate: string;
  image?: string | any | undefined;
  language: string;
  link: string;
  description: string;
  favoriteBook: boolean;
};
