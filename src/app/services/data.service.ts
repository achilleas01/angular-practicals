import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { District, DISTRICTS, RAPID_API_KEY, STATES } from '../constants/constant';
import { Blog, Group, NameValuePair, ReportData, State, User } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return timer(5000).pipe(
      map((x) => ({
        id: 1,
        name: 'Rajiv',
        age: 24,
      }))
    );
  }

  getBlogById(id: number): Observable<Blog> {
    return timer(2000).pipe(
      map((x) => ({
        postId: 1,
        title: 'Learn RxJS',
        averageReadingTime: 5,
        category: 'Angular',
      }))
    );
  }

  getBlogsById(id: number): Observable<Blog[]> {
    return timer(2000).pipe(
      map((x) => [
        {
          postId: 1,
          title: 'Learn RxJS',
          averageReadingTime: 5,
          category: 'Angular',
        },
        {
          postId: 2,
          title: 'Refactor Branching',
          averageReadingTime: 5,
          category: 'General Programming',
        },
      ])
    );
  }

  getDropDownData(): Observable<Group[]> {
    return timer(2000).pipe(
      map((x) => [
        // {
        //   id: 1,
        //   text: 'Group 1',
        // },
        // {
        //   id: 2,
        //   text: 'Group 2',
        // },
      ])
    );
  }
  getCategoryByBlogId(id:number): Observable<Group[]> {
    return timer(2000).pipe(
      map((x) => [
        // {
        //   id: 1,
        //   text: 'Group 1',
        // },
        // {
        //   id: 2,
        //   text: 'Group 2',
        // },
      ])
    );
  }

  getCountryById(id:any) {
    return timer(5000).pipe(
      map((x) => ({
        Id: 2,
        Text: 'Ukraine',
        ModifiedBy: 'Admin',
        DateModified: '20-11-2021',
        IsDeleted: true,
        IsUsed: false,
      }))
    );
  }
  updateCountry(id:number,text:string) {
    return timer(5000).pipe(
      map((x) => ({
        Response:'Successful'
      }))
    );
  }
  getCountryMaster() {
    return timer(2000).pipe(
      map((x) => ({
        Id: 1,
        Text: 'Ukraine',
        DateCreated: '20-11-2021',
        DateModified: '20-11-2021',
        IsDeleted: true,
        IsUsed: false,
      }))
    );
  }

  getDataFromAPI(): Observable<string> {
    return this.http
      .get('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
        headers: new HttpHeaders()
          .set('x-rapidapi-host', 'imdb8.p.rapidapi.com')
          .set('x-rapidapi-key', RAPID_API_KEY),
      })
      .pipe(map((response: any) => response['q'] as string));
  }

  getStates():Observable<State[]>{
    return timer(2000).pipe(
      map((x) => STATES)
    );
  }
  getDistrict():Observable<District[]>{
    return timer(200).pipe(
      map((x) => DISTRICTS)
    );
  }
  getStateById(id:number):Observable<State>{
    return timer(100).pipe(
      map((x) => ({ id: 1, text: 'Andhra Pradesh' }))
    );
  }
  getDistrictsByStateId(stateId:number):Observable<District[]>{
    return timer(200).pipe(
      map((x) => DISTRICTS)
    );
  }

  getData(filterText: string) {
    const timertTime = Math.floor(Math.random() * 10000);
    console.log(`SearchText: ${filterText},Time taken by API: ${timertTime} milliseconds`)
    return timer(timertTime).pipe(
      map((x) =>
        [
          { id: 1, text: 'Andhra Pradesh' },
          { id: 2, text: 'Arunachal Pradesh' },
          { id: 3, text: 'Assam' },
          { id: 4, text: 'Bihar' },
          { id: 5, text: 'Chhattisgarh' },
          { id: 6, text: 'Goa' },
          { id: 7, text: 'Gujarat' },
          { id: 8, text: 'Haryana' },
          { id: 9, text: 'Himachal Pradesh' },
          { id: 10, text: 'Jharkhand' },
          { id: 11, text: 'Karnataka' },
          { id: 12, text: 'Kerala' },
          { id: 13, text: 'Madhya Pradesh' },
          { id: 14, text: 'Maharashtra' },
          { id: 15, text: 'Manipur' },
          { id: 16, text: 'Meghalaya' },
          { id: 17, text: 'Mizoram' },
          { id: 18, text: 'Nagaland' },
          { id: 19, text: 'Odisha' },
          { id: 20, text: 'Punjab' },
          { id: 21, text: 'Rajasthan' },
          { id: 22, text: 'Sikkim' },
          { id: 23, text: 'Tamil Nadu' },
          { id: 24, text: 'Telangana' },
          { id: 25, text: 'Tripura' },
          { id: 26, text: 'Uttarakhand' },
          { id: 27, text: 'Uttar Pradesh' },
          { id: 28, text: 'West Bengal' },
        ].filter((state) =>
          state.text
            .toLocaleLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
      )
    );
  }

  getReports(): Observable<NameValuePair[]> {
    return timer(2000).pipe(
      map((x) => [
        {
          name: 'Service',
          value: '1',
        },
        {
          name: 'Order',
          value: '2',
        },
        {
          name: 'Invoice',
          value: '2',
        },
      ])
    );
  }
  getReportFormats(): Observable<NameValuePair[]> {
    return timer(100).pipe(
      map((x) => [
        {
          name: 'Excel',
          value: '1',
        },
        {
          name: 'Pdf',
          value: '2',
        },
        
      ])
    );
  }

  getSavedReportData():Observable<ReportData>{
    return timer(100).pipe(
      map(() =>({
          reportValue: "1",
          reportFormatValue: "1"
        })
    ));
  }

}
