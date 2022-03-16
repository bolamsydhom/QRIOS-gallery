import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/modal/modal.service';
import { Image } from 'src/app/_models/image.model';
import { ImagesService } from 'src/app/_services/images.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {

  imageList$!: Observable<Image[]>
  chosenImage!: Image;
  constructor(private imageService: ImagesService, public modalService: ModalService) { }

  ngOnInit(): void {
    this.imageList$ = this.imageService.getAllImages();
  }

  onChooseImage(image: Image) {
    this.imageService.chooseImage(image);
    this.chosenImage = image;
  }
}
