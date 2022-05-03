import BookApiInterface  from '../../models/BookApiInterface';
import { ImageLinks, VolumeInfo } from './GoogleBookModels';

export default interface GoogleBook extends BookApiInterface {
    imageLinks: ImageLinks;
    id: string;
    volumeInfo: VolumeInfo;
}
