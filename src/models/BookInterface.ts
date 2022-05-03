export interface BookInterface {
  favoured?: string;
  id: string ;
  authors: string | string[];
  title: string;
  publishedDate: string;
  image?: string | any | undefined;
  language: string;
  description: string;
};
