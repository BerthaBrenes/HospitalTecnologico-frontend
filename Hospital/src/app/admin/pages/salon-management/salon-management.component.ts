import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-management',
  templateUrl: './salon-management.component.html',
  styleUrls: ['./salon-management.component.sass']
})
export class SalonManagementComponent implements OnInit {

  viewSalon = false;
  createSalon = false;
  listSalon = true;
  idSalon = 0;
  salon: any;

  constructor( ) {
    this.salon = [
      { id: 1, nombre: 'salon1', capacidad: 7, especialidad: 'hombres', piso: 1 },
      { id: 2, nombre: 'salon2', capacidad: 8, especialidad: 'mujeres', piso: 2 },
      { id: 5, nombre: 'salon3', capacidad: 7, especialidad: 'niños', piso: 2 },
      { id: 7, nombre: 'salon4', capacidad: 9, especialidad: 'mujeres', piso: 1 },
    ];
   }

  ngOnInit() {
  }

  salonView(id: number) {
    this.viewSalon = true;
    this.createSalon = false;
    this.listSalon = false;
    this.idSalon = id;
  }

  salonCreate() {
    this.viewSalon = false;
    this.createSalon = true;
    this.listSalon = false;
  }

  salonList() {
    this.viewSalon = false;
    this.createSalon = false;
    this.listSalon = true;
  }

}