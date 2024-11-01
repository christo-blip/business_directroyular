import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {http} from '@angular/http';

@Component({
  selector: 'app-businessuser',
  templateUrl: './businessuser.component.html',
  styleUrls: ['./businessuser.component.css']
})
export class BusinessuserComponent implements OnInit {
  
  public name:any;
  public phonenumber:any;
  public department:any;
  public address:any;
  public time:any;
  
  formData:any ={
    name:'',
    phonenumber:'',
    department:'',
    address:'',
    time:'',
  };

  public productdata:any=[];
  selectedFile:any;
  constructor(public location:Location,private http:HttpClient) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  goback(){
    this.location.back()
  }
//   onSubmit() {
//     const formData = new FormData();
//     formData.append('n1', this.formData.name);
//     formData.append('n2', this.formData.phonenumber);
//     formData.append('n3', this.formData.department);
//     formData.append('n4', this.formData.address);
//     formData.append('n5', this.formData.time);
//     if (this.selectedFile) {
//         formData.append('n6', this.selectedFile, this.selectedFile.name);
//     }
//     // Ensure 'Save' is included
//     formData.append('Save', 'true');

//     const url = 'http://localhost/business-directory/page.php'; 
//     this.http.post<any>(url, formData).subscribe(
//         response => {
//             console.log('Response:', response);
//             if (response.error) {
//                 alert('Error: ' + response.error);
//             } else {
//                 alert('Success: ' + response.message);
//             }
//         },
//         error => {
//             console.error('There was an error!', error);
//             alert('Failed to submit: ' + JSON.stringify(error));
//         }
//     );
// }
onSubmit() {
  const formData = new FormData();
  formData.append('name', this.name);
  formData.append('phonenumber', this.phonenumber);
  formData.append('department', this.department);
  formData.append('address', this.address);
  formData.append('time', this.time);
  
  if (this.selectedFile) {
    formData.append('filedata', this.selectedFile); // Append the file
  }
  console.log("send data = "+formData)
  const url = 'http://localhost/business-directory/page.php';
    this.http.post(url, formData).subscribe(
    data => {
      console.log("Response data:", JSON.stringify(data));
      const obj = data as any;
      if (obj && obj.key === 1) {
  
        this.name='';
        this.phonenumber='';
        this.department='';
        this.address='';
        this.time='';
        this.selectedFile='';

        // Clear the local storage
        localStorage.removeItem('name');
        localStorage.removeItem('phonenumber');
        localStorage.removeItem('department');
        localStorage.removeItem('address');
        localStorage.removeItem('time');
        // localStorage.clear();
      alert("Success");
      } else {
        alert("Error");
      }
    },
    error => {
      console.error("Error sending the data:", error);
      console.error("Error details:", error.error); // Log the actual error details
    }
  );
}

  // Modify this method to use FileReader instead of getBuffer
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string); // Resolve the base64 string
      };
      reader.onerror = reject;
      reader.readAsDataURL(file); // Read the file as a Data URL (Base64)
    });
  }


  // handleFileInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files[0]) {
  //     const file = input.files[0];
  //     // Convert the file to Base64
  //     this.convertFileToBase64(file).then((base64data: string) => {
  //      var splitdata=base64data.split(',')
  //       this.selectedFile = splitdata[1]; // Store the base64 string
  //       console.log(this.selectedFile); // For debugging
  //       // Reset the file input after processing the file
  //       input.value = ''; // Clear the file input
  //     }).catch(error => {
  //       console.error('Error converting file to Base64:', error);
  //     });
  //   }
  // }
  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0]; // Store the file
      console.log(this.selectedFile);
      // input.value = ''; // Clear the file input
    }
  }
}

