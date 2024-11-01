import { Component, OnInit,Input } from '@angular/core';
interface carouselImage{
  url:string,
  title:string,
  description:string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
@Input() images: carouselImage[] = []
@Input() indicators:boolean=true;
@Input() controls:boolean=true;
@Input() autoSlide=false;
@Input() slidesInterval = 3000;
//   @Input() slides:any[] =[];
//   currentslide=0;
selectedIndex = 0;




// selectedIndex = 0;

  constructor() { }
  
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

    autoSlideImages(){
    setInterval(()=>{
      this.onNextClick();
    }, this.slidesInterval);
  }
  // this.slides=[
  //   {url:'/assets/auto.jpg',title:'Auto',description:''},
  //   {url:'/assets/electrician.jpg',title:'Electrician',description:''},
  //   {url:'/assets/mechanic.jpg',title:'Mechanic',description:''},
  //   {url:'/assets/plumbing.jpg',title:'Plumber',description:''},
  //   {url:'/assets/taxi.jpg',title:'Taxi',description:''},
  //   {url:'/assets/restrant.jpg',title:'Restrant',description:''},];

  selectImage(index:number):void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick():void{
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex =0;
    }else{
      this.selectedIndex++;
    }
  }

}
