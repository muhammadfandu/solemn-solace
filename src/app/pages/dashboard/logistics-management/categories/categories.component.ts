import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
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
        category: "Food",
        description: "Items that provide sustenance to disaster survivors, such as canned goods, dried foods, and ready-to-eat meals.",
      },
      {
        category: "Water",
        description: "Items that provide clean drinking water to disaster survivors, such as bottled water, water purification tablets, and water filters.",
      },
      {
        category: "Shelter",
        description: "Items that provide shelter to disaster survivors, such as tents, tarps, and blankets.",
      },
      {
        category: "Medical supplies",
        description: "Items that can be used to provide medical care to disaster survivors, such as bandages, first aid kits, and antibiotics.",
      },
      {
        category: "Hygienic supplies",
        description: "Items that can be used to maintain hygiene and sanitation in disaster zones, such as soap, toothpaste, and toilet paper.",
      },
      {
        category: "Power generation and distribution",
        description: "Items that can be used to generate and distribute electricity in disaster zones, such as generators, solar panels, and batteries.",
      },
      {
        category: "Communication and coordination",
        description: "Items that can be used to facilitate communication and coordination among disaster relief workers, such as radios, satellite phones, and computers.",
      },
      {
        category: "Transportation and logistics",
        description: "Items that can be used to transport and store logistics items, such as vehicles, trucks, and warehouses.",
      },
      {
        category: "Security and safety",
        description: "Items that can be used to ensure the security and safety of disaster relief workers and survivors, such as helmets, vests, and security equipment.",
      },
      {
        category: "Other",
        description: "Items that do not fit into any of the above categories, such as tools, cleaning supplies, and clothing.",
      },
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
