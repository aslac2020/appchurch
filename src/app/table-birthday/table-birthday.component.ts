import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Membros } from '../model/Membros';


@Component({
  selector: 'app-table-birthday',
  templateUrl: './table-birthday.component.html',
  styleUrls: ['./table-birthday.component.scss']
})
export class TableBirthdayComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dataNascimento', 'email', 'igreja'];
  dataSource!: MatTableDataSource<Membros>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.buscarMembrosAniversariantes();
  }


  buscarMembrosAniversariantes(){
    this.apiService.getAllMembersBirthdays().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


