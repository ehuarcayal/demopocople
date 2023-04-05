import { Component, OnInit, } from "@angular/core";
import { Request } from './request';
import { Response } from './response';
import { ApiService } from './api.service';
import { Requestout } from "./requestout";
 
@Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.css"],
})
 
export class AppComponent implements OnInit {

      request = new Requestout();
      response = new Response();
      buttonDisabled!: boolean;
      src:any;
      srcInput = '';

      constructor(private apiService:ApiService) {}

      ngOnInit(): void {
            this.buttonDisabled = false;
      }

      ejecutar() {    
            this.response = new Response();         
            if (!this.buttonDisabled){
                  this.buttonDisabled = true;
                  this.apiService.ejecutar(this.request)
                  .subscribe(
                        (data: any) => {
                              this.buttonDisabled = false;
                              console.log(data);
                              this.response = data;
                        },
                       (error: any) => {
                              this.buttonDisabled = false;
                              this.response.messageResponse = error.message;
                       }
                  )
            }                          
      }

      visualizar() {            
           this.apiService.download(this.srcInput)
           .subscribe((file: ArrayBuffer) => {
                  this.src = new Uint8Array(file);
            // or directly passing ArrayBuffer
            // this.pdfSrc = file;
          });
      }
}