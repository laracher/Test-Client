import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Group } from './group.model';
import { GroupService } from './group.service';
import { Observable } from 'rxjs';

@Component
({
  selector: 'grpoup-comp',
  templateUrl: './group.component.html',
  providers: [ GroupService ]
})
export class GroupComponent {}