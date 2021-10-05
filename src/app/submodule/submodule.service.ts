import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './store/models/posts.model';

@Injectable({providedIn: 'root'})
export class SubmoduleService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Posts[]>('https://my-json-server.typicode.com/typicode/demo/posts');
  }

}
