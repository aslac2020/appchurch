import { IgrejasSetores } from './../model/IgrejaSetores';
import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../api.service';
import { IgrejasSetoresSemEndereco } from '../model/IgrejaSetores';
import { IgrejasCongregacoesSemEndereco } from '../model/IgrejaCongregacoes';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';



export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  tooltip: ApexTooltip | any;
};

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent {
  igrejas?: any[] = [];
  membros: any[] = [];
  homensMembros?: number | any;
  mulheresMembros?: number | any;
  totalMembros?: number | any;
  totalIgrejas?: number | any;
  tituloDoCard: string | any;
  igrejasSetores: any[] = [];
  igrejasCongregacionais: IgrejasCongregacoesSemEndereco[] = [];
  totalIgrejAsCongregacionais: number | any;
  totalIgrejasSetores: any;
  listaNomeSetores: any[] | any;
  listaTotalSetores: number[] | any;
  listaTotalCongregacoes: number[] | any;
  listaNomeCongregacoes: any[] | any;
  congregacoesPorSetor: { [key: string]: string[] } = {};

  @ViewChild('chart', { static: false }) chart?: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public chartOptionsCongregacoes!: Partial<ChartOptions>;

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService
  ) {
    this.chartOptions = {} as Partial<ChartOptions>;
    this.chartOptionsCongregacoes = {} as Partial<ChartOptions>;
  }

  ngOnInit() {
    this.buscarTodasIgrejasSetores();
    this.buscarCongregacaoDoSetor();
    this.buscarMembros();
  }

  buscarTodasIgrejasSetores() {
    this.apiService
      .getAllChurchSetors()
      .subscribe((data: IgrejasSetoresSemEndereco[] | any) => {
        this.igrejasSetores = data;
        this.totalIgrejasSetores = data.length;

        this.setarDadosGraficosSetores(data);
      });
  }

  setarDadosGraficosSetores(data: any) {
    this.listaNomeSetores = [];
    this.listaTotalSetores = [];

    const setoresUnicos = new Set<string>();

    data.forEach((igreja: IgrejasSetoresSemEndereco) => {
      if (igreja.nome) {
        setoresUnicos.add(igreja.nome.trim().replace('Igreja', ''));
      }
    });

    this.listaNomeSetores = Array.from(setoresUnicos);
    this.listaTotalSetores = Array.from(
      { length: this.listaNomeSetores.length },
      (_, i) => i + 1
    );

    this.iniciarGraficosSetores();
  }

  buscarMembros() {
    this.apiService.getAllMembers().subscribe((data: any[] | any) => {
      this.membros = data;
      this.totalMembros = this.membros.length;
      this.homensMembros = this.membros.filter(
        (membro) => membro.sexo === 'Masculino'
      ).length;
      this.mulheresMembros = this.membros.length - this.homensMembros;
    });
  }

  buscarCongregacaoDoSetor() {
    this.apiService
      .getAllCongregacoes()
      .subscribe((data: IgrejasCongregacoesSemEndereco[] | any) => {
        if(data){
          this.setarDadosGraficosSetoresCongregacoes(data);
          this.totalIgrejas = data.length + (this.totalIgrejasSetores || 0);
        }

      });
  }

  iniciarGraficosSetores() {
    this.chartOptions = {
      series: [
        {
          data: this.listaTotalSetores,
        },
      ],
      chart: {
        height: 220,
        type: 'bar',
      },
      title: {
        text: 'Setores',
      },
      xaxis: {
        categories: this.listaNomeSetores,
        labels: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: (value: number) => value.toFixed(0),
          title: {
            formatter: () => "",
          },
        },
      },
    };
  }

  setarDadosGraficosSetoresCongregacoes(data: IgrejasCongregacoesSemEndereco[]) {
    const todasCongregacoes = new Set<string>();
    const contagemCongregacoesPorSetor: { [key: string]: number } = {};
    const congregacoesPorSetor: { [key: string]: string[] } = {};

    data.forEach((congregacao: IgrejasCongregacoesSemEndereco) => {
      if (congregacao.nome && congregacao.idIgrejaSetor) {
        todasCongregacoes.add(congregacao.nome);
        if (!contagemCongregacoesPorSetor[congregacao.idIgrejaSetor]) {
          contagemCongregacoesPorSetor[congregacao.nome] = 0;
          congregacoesPorSetor[congregacao.nome] = [];
        }
        contagemCongregacoesPorSetor[congregacao.nome]++;
        congregacoesPorSetor[congregacao.nome].push(congregacao.nome);
      }
    });

    this.listaNomeCongregacoes = Array.from(todasCongregacoes);
    this.listaTotalCongregacoes = this.listaNomeCongregacoes.map((setor: any) => contagemCongregacoesPorSetor[setor] || 0);
    this.congregacoesPorSetor = congregacoesPorSetor;

    this.iniciarGraficosCongregacoes(this.listaNomeCongregacoes);
  }


  iniciarGraficosCongregacoes(nomesCongregacoes: string[]) {
    this.chartOptionsCongregacoes = {
      series: [
        {
          name: "Congregações",
          data: this.listaTotalCongregacoes,
        },
      ],
      chart: {
        height: 200,
        type: "bar"
      },
      title: {
        text: "Congregações na regional"
      },
      xaxis: {
        categories: nomesCongregacoes,
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          distributed: true
        }
      },
      tooltip: {
        y: {
          formatter: (value: number) => value.toFixed(0),
          title: {
            formatter: () => "",
          },
        },
      },
    };
  }


}
