import GoogleBook from './GoogleBookModels';

export default interface GoogleBooksAPIResults {
    kind: string;
    totalItems: number;
    items: GoogleBook[];
    textSnippet: string | undefined;
}