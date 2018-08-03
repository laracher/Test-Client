import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';
import { AddClientComponent } from './addClient.component';

@Component
({
  selector: 'client-comp',
  templateUrl: './client.component.html',
  providers: [ ClientService ]
})
export class ClientComponent implements OnInit
{
  
// //Для хранения редактируемого пользователя
//   editedClient: Client;

//для хранения списка пользователей
  clients: Array<Client>;

  addClientComp: AddClientComponent;

  //если новая запись (новый клиент)
  isNewRecord: boolean;

  statusMessage: string;

  constructor(private serv: ClientService)
  {
    this.clients = new Array<Client>();
  }

  ngOnInit()
  {
    this.loadClients();
  }

//загрузка пользователей в список
  loadClients()
  {
    this.serv.getClients().subscribe((data: Client[]) => 
    {
      this.clients = data;
    });
  }

//добавление пользователя  
  addClient()
  {
    this.addClientComp.editedClient = new Client(0, "", "", "", "", new Date(), "", 0, "", "", "");
    this.clients.push(this.addClientComp.editedClient);
    this.isNewRecord = true;
  }

//редактирование пользователя
  // editClient(client: Client)
  // {
  //   this.editedClient = new Client
  //   (
  //       client.Id, client.lastName, client.firstName, 
  //       client.secondName, client.gender, client.yearBirth, 
  //       client.riskGroup, client.pasportNumber, client.city, 
  //       client.country, client.email
  //   );
  // }
//загружаем один из двух шаблонов
  // loadTemplate(client: Client)
  // {
  //   if(this.editedClient && this.editedClient.Id == client.Id)
  //   {
  //       return this.editTemplate;
  //   }
  //   else
  //   {
  //       return this.readOnlyTemplate;
  //   }
  // }
// сохраняем пользователя
  // saveClient()
  // {
  //   if(this.isNewRecord)
  //   //добавляем пользователя
  //   {
  //     this.serv.createClient(this.editedClient).subscribe(data =>
  //     {
  //       this.statusMessage = 'Данные успешно добавлены',
  //       this.loadClients();
  //     });
  //     this.isNewRecord = false;
  //     this.editedClient = null;
  //   }
  //   else
  //   //изменяем пользователя
  //   {
  //     this.serv.updateClient(this.editedClient.Id, this.editedClient).subscribe(data =>
  //     {
  //       this.statusMessage = 'Данные успешно обновлены',
  //       this.loadClients();
  //     });
  //     this.editedClient = null;
  //   }
  // }
  //отмена редактирования
  // cancel()
  // {
  // //если отмена при добавлении, удаляем последнюю запись
  // if(this.isNewRecord)
  // {
  //   this.clients.pop();
  //   this.isNewRecord = false;
  // }
  // this.editedClient = null;    
  // }
//удаление пользователя
  deleteClient(client: Client)
  {
    this.serv.deleteClient(client.Id).subscribe(data =>
    {
      this.statusMessage = 'Данные успешно удалены',
      this.loadClients();
    });
  }
}