import { Component, OnInit, HostListener, AfterViewInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, AfterViewInit {
businessuser: string|any[]|null|undefined;
showScrollButton = false;
selectedIndex = 0;
public indicators:boolean=true;
public controls:boolean=true;
public autoSlide=false;
public slidesInterval = 3000;
private intervalId: any;
images:any[]=[
  {url:'assets/auto.jpg',title:'Auto',description:''},
  {url:'assets/electrician.jpg',title:'Electrician',description:''},
  {url:'assets/mechanic.jpg',title:'Mechanic',description:''},
  {url:'assets/plumbing.jpg',title:'Plumber',description:''},
  {url:'assets/taxi.jpg',title:'Taxi',description:''},
  {url:'assets/restrant.jpg',title:'Restrant',description:''},];
 

  constructor(public router:Router,private el: ElementRef) { }
  
  ngOnInit(): void {
    // if(this.autoSlide){
    //   this.autoSlideImage();
    // }
  }

  ngAfterViewInit() {
    this.checkVisibility(); // Check visibility once after the view initializes
  }

  private checkVisibility() {
    // const animatedElement = this.el.nativeElement.querySelector('h3');
    const animatedElement = document.getElementById('animatedElement')!;
    const rect = animatedElement.getBoundingClientRect();
    
    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      console.log('Element is in view');
      animatedElement.classList.add('pushReleaseFromLeft');
    }
  }

  navigateToSectionPage(){
    this.router.navigate(['/businessuser'])
  }

  search_category(value:any){
    this.router.navigate([`/category`, value])
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    if(window.pageYOffset > 200){
      this.showScrollButton=true
    }else{
      this.showScrollButton = false;
    }
    this.checkVisibility();
  }
  
  scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

  //sets index of image on dot/indicator click
  selectImage(index:number):void{
    this.selectedIndex = index;
  }

  // onPrevClick(): void{
  //   if(this.selectedIndex === 0){
  //     this.selectedIndex = this.slides.length -1;
  //   }else{
  //     this.selectedIndex--;
  //   }
  // }

  // onNextClick():void{
  //   if(this.selectedIndex === this.slides.length -1){
  //     this.selectedIndex =0;
  //   }else{
  //     this.selectedIndex++;
  //   }
  // }
}
