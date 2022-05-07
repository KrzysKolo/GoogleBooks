import { ImageLinks, VolumeInfo } from './GoogleBookModels';

export default interface GoogleBook  {
    imageLinks: ImageLinks;
    id: string;
    volumeInfo: VolumeInfo;
}
