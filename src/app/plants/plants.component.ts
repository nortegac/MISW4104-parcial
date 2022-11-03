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

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() {
    this.plantsService.getPlants().subscribe((plants) => {
      this.plants = plants;
    })
  }


}
