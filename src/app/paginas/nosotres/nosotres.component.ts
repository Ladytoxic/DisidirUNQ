import { Component } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-nosotres',
  templateUrl: './nosotres.component.html',
  styleUrls: ['./nosotres.component.scss']
})
export class NosotresComponent {
  perfiles: any;

  constructor(private data: DataService) {

  }
  ngOnInit(): void {
    this.data.obtenerDatosPerfiles().subscribe(data => {
      this.perfiles = data.equipo;
      console.log(this.perfiles)
    });

  }
}
