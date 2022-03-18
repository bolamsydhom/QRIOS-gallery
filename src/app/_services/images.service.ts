import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Image } from '../_models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }
  getAllImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>('https://picsum.photos/v2/list').pipe(
      shareReplay()
    );
  }
}
