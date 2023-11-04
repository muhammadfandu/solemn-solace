import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  initialRows: any[] = [];
  rows: any[] = [];
  meta: any;
  page: number = 1;
  limit: number = 10;

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    this.fetchRowData();
  }

  fetchRowData() {
    this.rows = [
      {
        product: "Food rations",
        quantity: 10000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Drinking water",
        quantity: 5000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Shelter materials",
        quantity: 2000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Medical supplies",
        quantity: 1000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Hygienic supplies",
        quantity: 5000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Generators",
        quantity: 100,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Water purification tablets",
        quantity: 10000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Mosquito nets",
        quantity: 5000,
        updatedAt: "2023-11-04T14:18:27Z",
      },
      {
        product: "Blankets",
        quantity: 10000,
        updatedAt: "2023-11-04T14:18:27Z",
      }
    ]

  }

  onAddClick() {

  }

  onDetailClick(data: any) {

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
