import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>('assets/posts/index.json');
  }

  getPost(id: string) {
    return this.http.get<any[]>(`assets/posts/${id}.json`);
  }
}