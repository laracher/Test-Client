import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Group } from './group.model';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService
{
    private url = "http://localhost:8084/risk-group/";
    constructor(private http: HttpClient) {}

    getGroups()
    {
        return this.http
            .get(this.url);
    }
    
    updateGroup(id: number, group: Group)
    {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http
            .put(this.url, group, { params: urlParams });
    }
}