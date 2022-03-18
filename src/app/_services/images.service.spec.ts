import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ImagesService } from './images.service';
import { Image } from '../_models/image.model';

const imagesResponse: Image[] = [
  { "id": "0", "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/yC-Yzbqy7PY", "download_url": "https://picsum.photos/id/0/5616/3744" }
]
describe('ImagesService', () => {
  let service: ImagesService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ImagesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get images', () => {
    service.getAllImages().subscribe(images => {
      expect(images.length).toEqual(1);
      expect(images[0].id).toEqual('0');
    })
    const req = httpTestingController.expectOne('https://picsum.photos/v2/list');
    expect(req.request.method).toEqual('GET');
    req.flush(imagesResponse);
  })
});
