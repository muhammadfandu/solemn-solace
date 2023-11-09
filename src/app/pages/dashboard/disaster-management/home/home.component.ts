import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  initialRows: any[] = [];
  rows: any[] = [];
  meta: any;
  page: number = 1;
  limit: number = 10;

  isLoading = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchRowData();
  }

  fetchRowData() {
    this.rows = [
      {
        id: "1",
        name: "Mount Semeru eruption",
        description: "A volcanic eruption of Mount Semeru on Java Island, Indonesia, on December 4, 2021. The eruption caused pyroclastic flows that reached villages and killed at least 76 people.",
        location: "Java Island, Indonesia",
      },
      {
        id: "2",
        name: "Palu earthquake and tsunami",
        description: "A magnitude 7.5 earthquake struck Central Sulawesi, Indonesia, on September 28, 2018, triggering a tsunami that devastated the city of Palu and surrounding areas. At least 2,254 people were killed and thousands more were displaced.",
        location: "Central Sulawesi, Indonesia",
      },
      {
        id: "3",
        name: "Lombok earthquake",
        description: "A magnitude 7.0 earthquake struck the Indonesian island of Lombok on August 5, 2018. The earthquake caused widespread damage and killed at least 481 people.",
        location: "Lombok Island, Indonesia",
      },
      {
        id: "4",
        name: "Sunda Strait tsunami",
        description: "A tsunami struck the coast of Java and Sumatra, Indonesia, on December 22, 2018. The tsunami was caused by the collapse of the Anak Krakatau volcano. At least 437 people were killed and thousands more were displaced.",
        location: "Sunda Strait, Indonesia",
      },
    ]

  }

  onAddClick() {

  }

  onDetailClick(data: any) {
    this.router.navigateByUrl('dashboard/disaster-management/' + data.id)
  }

  onPaginationChange(page: number) {
    this.page = page;
    this.fetchRowData();
  }

  onLimitChange(limit: number) {
    this.limit = limit;
    this.fetchRowData();
  }
}
