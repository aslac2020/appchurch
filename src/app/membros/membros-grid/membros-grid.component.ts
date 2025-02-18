import { Membros, MembrosSemEndereco } from '../../model/Membros';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membros-grid',
  templateUrl: './membros-grid.component.html',
  styleUrls: ['./membros-grid.component.scss']
})
export class MembrosGridComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'dataNascimento', 'email', 'igreja'];
    dataSource!: MatTableDataSource<Membros>;
    membros: Membros[] = [];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarTodosMembros();
  }

  buscarTodosMembros(){
    this.apiService.getAllMembers().subscribe((data: Membros[] | any) => {
      data.forEach((membro: Membros) => {

        this.apiService.getMemberById(membro.idMembro).subscribe((membro: Membros) => {
          if(membro){
            this.membros.push(membro);
            this.dataSource = new MatTableDataSource(this.membros);
          }
        });
      });
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

  cadastrarMembro(){
    this.router.navigate(['membros/cadastro']);
  }

}
