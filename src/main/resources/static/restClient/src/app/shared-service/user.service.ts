import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import{User}  from '../user';
import { Nid } from '../nid';
import { Passport } from '../passport';



@Injectable()
export class UserService {
  
  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  
  private user = new User();
  private nid = new Nid();
  private passport = new Passport();

  constructor(private _http:Http) { }


  
  /************************* Nid */

  getNids(){
    return this._http.get(this.baseUrl+'/nids',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getNid(id:Number){
    return this._http.get(this.baseUrl+'/nids/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  deleteNid(id:Number){
    return this._http.delete(this.baseUrl+'/nids/'+id,this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  updateNid(nid:Nid){
    return this._http.put(this.baseUrl+'/nid',JSON.stringify(nid), this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  createNid(nid:Nid){
    return this._http.post(this.baseUrl+'/nid',JSON.stringify(nid), this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  

  /*********************************** Passport */

  getPassports(){
    return this._http.get(this.baseUrl+'/passports',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getPassport(id:Number){
    return this._http.get(this.baseUrl+'/passports/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  deletePassport(id:Number){
    return this._http.delete(this.baseUrl+'/passports/'+id,this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  updatePassport(passport:Passport){
    return this._http.put(this.baseUrl+'/passport',JSON.stringify(passport),this.options).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  createPassport(passport:Passport){
    return this._http.post(
      this.baseUrl+'/passport',JSON.stringify(passport),this.options
    ).map((response:Response)=>response.json())
  .catch(this.errorHandler);
  }

  /********************************** Users */

  getUsers(){
    return this._http.get(this.baseUrl+'/users',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl+'/user/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl+'/user/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createUser(user:User){
    return this._http.post(this.baseUrl+'/user',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl+'/user',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  errorHandler(error:Response){
     return Observable.throw(error||"SERVER ERROR");
  }

  setter(nid:Nid){
      this.nid=nid;
  }

  getter(){
    return this.nid;
  }

  setterNid(nid:Nid){
    this.nid=nid;
  }

  getterNid(){
    return this.nid;
  }

  setterPassport(passport:Passport){
    this.passport=passport;
  }

  getterPassport(){
    return this.passport;
  } 

}