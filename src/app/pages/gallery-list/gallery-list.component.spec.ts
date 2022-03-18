import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Image } from 'src/app/_models/image.model';
import { ImagesService } from 'src/app/_services/images.service';

import { GalleryListComponent } from './gallery-list.component';

const imagesResponse: Image[] = [
  { "id": "0", "author": "Alejandro Escamilla", "width": 5616, "height": 3744, "url": "https://unsplash.com/photos/yC-Yzbqy7PY", "download_url": "https://picsum.photos/id/0/5616/3744" }
]

describe('GalleryListComponent', () => {
  let component: GalleryListComponent;
  let fixture: ComponentFixture<GalleryListComponent>;
  let imageService: jasmine.SpyObj<ImagesService>;

  beforeEach(async () => {
    imageService = jasmine.createSpyObj(['getAllImages']);

    await TestBed.configureTestingModule({
      declarations: [ GalleryListComponent ],
      providers: [
        { provide: ImagesService, useValue: imageService },

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get images', () => {
    imageService.getAllImages.and.returnValue(of(imagesResponse));
    component.ngOnInit();
    fixture.detectChanges();
    const images = fixture.debugElement.queryAll(By.css('.figure'));
    expect(images).toBeTruthy();
    expect(images.length).toBe(1);
  });

  it('should select image on click', ()=>{
    imageService.getAllImages.and.returnValue(of(imagesResponse));
    component.ngOnInit();
    fixture.detectChanges();
    const image = fixture.debugElement.query(By.css('.figure'));
    image.nativeElement.click();
    expect(component.chosenImage).toBeTruthy();
    expect(component.chosenImage.id).toEqual('0');
  })
});
