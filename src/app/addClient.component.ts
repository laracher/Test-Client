import { Component } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';
import { ClientComponent } from './client.component';

@Component
({
    selector: 'add-client-comp',
    templateUrl: './addClient.component.html',
    providers: [ ClientService ]
})
export class AddClientComponent
{
  clientComp: ClientComponent;
  //Для хранения редактируемого пользователя
  editedClient: Client;

constructor (private serv: ClientService) {}

editClient(client: Client)
  {
    this.editedClient = new Client
    (
        client.Id, client.lastName, client.firstName, 
        client.secondName, client.gender, client.yearBirth, 
        client.riskGroup, client.pasportNumber, client.city, 
        client.country, client.email
    );
  }
  saveClient()
  {
    if(this.clientComp.isNewRecord)
    //добавляем пользователя
    {
      this.serv.createClient(this.editedClient).subscribe(data =>
      {
        this.clientComp.statusMessage = 'Данные успешно добавлены',
        this.clientComp.loadClients();
      });
      this.clientComp.isNewRecord = false;
      this.editedClient = null;
    }
    else
    //изменяем пользователя
    {
      this.serv.updateClient(this.editedClient.Id, this.editedClient).subscribe(data =>
      {
        this.clientComp.statusMessage = 'Данные успешно обновлены',
        this.clientComp.loadClients();
      });
      this.editedClient = null;
    }
  }
  //отмена редактирования
  cancel()
  {
  //если отмена при добавлении, удаляем последнюю запись
  if(this.clientComp.isNewRecord)
  {
    // this.clients.pop();
    this.clientComp.isNewRecord = false;
  }
  this.editedClient = null;    
  }
}