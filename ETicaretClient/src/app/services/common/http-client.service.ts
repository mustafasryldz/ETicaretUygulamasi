import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl")private baseUrl: string) { }


  get<T>(){

  }

  post(){

  }

  put(){


  }

  delete(){
    
  }
}

