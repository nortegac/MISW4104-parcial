import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants: Plant[] = []
  numInt!: number;
  numExt!: number;

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() {
    this.plantsService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.numInt = plants.filter((plant) => plant.tipo === 'Interior').length
      this.numExt = plants.filter((plant) => plant.tipo === 'Exterior').length
    })
  }


}
