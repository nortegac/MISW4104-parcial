/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantsComponent } from './plants.component';
import { CommonModule } from '@angular/common';
import { Plant } from './plant';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule],
      declarations: [PlantsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;

    component.plants = [
      new Plant(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
      new Plant(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
      new Plant(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with a header', () => {
    expect(debug.query(By.css('thead'))).toBeTruthy(); //Existe el encabezado
    expect(debug.query(By.css('thead')).children[0].children.length).toEqual(4) //Tiene 4 celdas de títulos
  })

  it('should have a table with 3 rows of plants', () => {
    let rows = debug.query(By.css('tbody')).children;
    expect(rows.length).toEqual(3) //Tiene 3 filas

    //El contenido de las filas es correcto
    rows.forEach((row,i) => {
      expect(row.children[0].children[0].nativeElement.innerHTML).toEqual(component.plants[i].id.toString())
      expect(row.children[1].nativeElement.innerHTML).toEqual(component.plants[i].nombre_comun)
      expect(row.children[2].nativeElement.innerHTML).toEqual(component.plants[i].tipo)
      expect(row.children[3].nativeElement.innerHTML).toEqual(component.plants[i].clima)
    })
  })
});
