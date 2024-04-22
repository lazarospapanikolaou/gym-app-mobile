/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonAlert, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { thumbsDownOutline, thumbsUpOutline } from 'ionicons/icons';

export
@Component({
  selector: 'component-slider-confirm',
  templateUrl: './slider-confirm.component.html',
  styleUrls: ['./slider-confirm.component.scss'],
  standalone: true,
  imports: [IonAlert, IonIcon],
})
class SliderConfirmComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @ViewChild('dragItem') dragItem!: ElementRef;
  @ViewChild('track') container!: ElementRef;
  @ViewChild('before') before!: ElementRef;
  @ViewChild('after') after!: ElementRef;
  @ViewChild('end') end!: ElementRef;
  dragWidth!: number;
  active: boolean;
  currentX!: number;
  initialX!: number;
  xOffset: number;
  openAlert: boolean = false;
  alertButtons = [
    {
      text: '',
      handler: (data: any) => {
        const thumbsupButton = document.querySelector('.thumbs-up');
        const thumbsdownButton = document.querySelector('.thumbs-down');

        thumbsdownButton?.classList.remove('selected-rating'); // remove selected class from all siblings
        thumbsupButton?.classList.add('selected-rating'); // add selected class to currently selected item
        return false;
      }, // prevents from closing the alert
      cssClass: 'thumbs-up',
    },
    {
      text: '',
      handler: (data: any) => {
        const thumbsupButton = document.querySelector('.thumbs-up');
        const thumbsdownButton = document.querySelector('.thumbs-down');

        thumbsupButton?.classList.remove('selected-rating'); // remove selected class from all siblings
        thumbsdownButton?.classList.add('selected-rating'); // add selected class to currently selected item
        return false;
      }, // prevents from closing the alert
      cssClass: 'thumbs-down',
    },
    // {
    //   text: 'Later',
    //   handler: (data: any) => this.submitLater(data),
    //   cssClass: 'rate-later',
    // },
    // {
    //   text: 'Submit',
    //   handler: (data: any) => this.submitNow(data),
    //   cssClass: 'rate-now',
    // },
  ];

  constructor() {
    this.active = false;
    this.xOffset = 0;
    addIcons({ thumbsUpOutline, thumbsDownOutline }); // you are missing addIcons Import
  }

  ngAfterViewInit(): void {
    this.dragWidth =
      this.container?.nativeElement.clientWidth -
      this.dragItem?.nativeElement.clientWidth;

    this.container?.nativeElement.addEventListener(
      'touchstart',
      this.dragStart,
      false
    );
    this.container?.nativeElement.addEventListener(
      'touchend',
      this.dragEnd,
      false
    );
    this.container?.nativeElement.addEventListener(
      'touchmove',
      this.drag,
      false
    );

    this.container?.nativeElement.addEventListener(
      'mousedown',
      this.dragStart,
      false
    );
    this.container?.nativeElement.addEventListener(
      'mouseup',
      this.dragEnd,
      false
    );
    this.container?.nativeElement.addEventListener(
      'mousemove',
      this.drag,
      false
    );
  }

  ngOnInit() {}

  submitLater(event: any) {}

  submitNow(event: any) {}

  selectedRatingHandler = (event: any) => {
    // handler for clicked rating icon button
  };

  dragStart = (e: any) => {
    this.dragWidth =
      this.container?.nativeElement.clientWidth -
      this.dragItem?.nativeElement.clientWidth -
      7;
    if (e.type === 'touchstart') {
      this.initialX = e.touches[0].clientX - this.xOffset;
    } else {
      this.initialX = e.clientX - this.xOffset;
    }

    if (e.target === this.dragItem.nativeElement) {
      this.active = true;
    }
  };

  dragEnd = (e: any) => {
    if (this.currentX < this.dragWidth) {
      this.animateBack();
    } else {
      this.completed();
    }

    this.initialX = this.currentX;
    this.active = false;
  };

  drag = (e: any) => {
    if (this.active) {
      e.preventDefault();

      if (e.type === 'touchmove') {
        this.currentX = e.touches[0].clientX - this.initialX;
      } else {
        this.currentX = e.clientX - this.initialX;
      }

      // xOffset = currentX;

      if (this.currentX > 0 && this.currentX < this.dragWidth) {
        this.setTranslate(this.currentX, this.dragItem);
      }
    }
  };

  setTranslate = (xPos: any, el: any) => {
    el.nativeElement.style.transform =
      'translate3d(' + xPos + 'px, ' + 0 + 'px, 0)';
    this.end.nativeElement.style.opacity = 0;
    if (xPos > this.dragWidth / 2) {
      this.after.nativeElement.style.opacity = 1;
      this.before.nativeElement.style.opacity = 0;
      this.container.nativeElement.style.backgroundColor = 'rgb(25, 233, 118)';
    } else {
      this.after.nativeElement.style.opacity = 0;
      this.before.nativeElement.style.opacity = 1;
      this.container.nativeElement.style.backgroundColor = 'rgb(66, 79, 227)';
    }
  };

  animateBack = () => {
    // turn off/on animations to speed up the fallback
    this.dragItem.nativeElement.classList.toggle('animate');
    this.container.nativeElement.classList.toggle('animate');
    this.before.nativeElement.classList.toggle('animate');
    this.after.nativeElement.classList.toggle('animate');
    this.setTranslate(0, this.dragItem);
    setTimeout(() => {
      // wait for the animation is done before turning animations back on/off
      this.dragItem.nativeElement.classList.toggle('animate');
      this.container.nativeElement.classList.toggle('animate');
      this.before.nativeElement.classList.toggle('animate');
      this.after.nativeElement.classList.toggle('animate');
    }, 500);
  };

  completed = () => {
    this.end.nativeElement.style.opacity = 1;
    this.after.nativeElement.style.opacity = 0;
    this.before.nativeElement.style.opacity = 0;
    this.openAlert = true;
  };

  setOpen(isOpen: boolean) {
    this.openAlert = isOpen;
  }
}
