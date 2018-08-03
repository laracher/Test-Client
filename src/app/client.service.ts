import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from './client.model';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService
{
    private url = "../assets/clients.json";
    constructor(private http: HttpClient) {}

    getClients()
    {
        return this.http.get(this.url);
    }
    createClient(client: Client)
    {
        return this.http.post(this.url, client);
    }
    updateClient(id: number, client: Client)
    {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.put(this.url, client, { params: urlParams });
    }
    deleteClient(id: number)
    {
        const urlParams = new HttpParams().set("id",id.toString());
        return this.http.delete(this.url, { params: urlParams });
    }
}