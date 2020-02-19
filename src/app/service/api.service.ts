
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from "../model/car.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3333/car/';

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:3333/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  createUser(user: Car): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  getUserById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  updateUser(user: Car): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user._id, user);
  }

  deleteUser(id): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}