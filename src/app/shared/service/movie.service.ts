
import { Subject } from 'rxjs';

export class MoviemeService {
  startedEditing = new Subject<any>();
  movieindex = new Subject<number>();
}
