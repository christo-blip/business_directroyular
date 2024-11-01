import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SelectedServiceService } from '../selected-service.service';

@Component({
  selector: 'app-selected-service',
  templateUrl: './selected-service.component.html',
  styleUrls: ['./selected-service.component.css']
})
export class SelectedServiceComponent implements OnInit {

  public categoryData: any[] = [];
  public category: string = '';
  public localhosturl:string='http://localhost/business-directory/';

  constructor(public location:Location, private route:ActivatedRoute, private http:HttpClient,private categoryService: SelectedServiceService) { }
  showScrollButton = false;
  ngOnInit(): void {
    this.categoryData=[];
  this.category = this.route.snapshot.paramMap.get('category') ||'';
  this.fetchCategoryData(this.category)
  }

  goback(){
    this.location.back()
  }

fetchCategoryData(value: any) {
  this.categoryService.getCategoryData(value).subscribe(
    (response: any) => { // Use any type
      this.categoryData = response.data; // Access data directly
      console.log("data = ", this.categoryData);
    },
    error => {
      console.error("Error fetching data", error);
    }
  );
}

@HostListener('window:scroll', [])
onWindowScroll(){
  if(window.pageYOffset > 200){
    this.showScrollButton=true
  }else{
    this.showScrollButton = false;
  }
}

scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'})
}

}
