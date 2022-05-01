export interface Books {
  name: string;
  autor: string;
  publishedDate: string;
  image:  {
    url: string,
    alt: string,
  };
  description: string;
  favoured: boolean;
};
