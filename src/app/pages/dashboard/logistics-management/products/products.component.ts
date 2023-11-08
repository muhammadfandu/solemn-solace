import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { ConfirmModalComponent } from 'src/app/components/utility/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  initialRows: any[] = [];
  rows: any[] = [];
  meta: any;
  page: number = 1;
  limit: number = 10;

  isLoading = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.fetchRowData();
  }

  fetchRowData() {
    this.rows = [
      {
        name: "Emergency Food Rations",
        description: "A box containing a variety of non-perishable food items, such as canned goods, dried foods, and ready-to-eat meals.",
        image: "https://i.imgur.com/5555555.jpg",
        category: "Food",
      },
      {
        name: "Water Purification Tablets",
        description: "Tablets that can be used to purify water, making it safe to drink.",
        image: "https://i.imgur.com/6666666.jpg",
        category: "Water",
      },
      {
        name: "Family Tent",
        description: "A tent that can accommodate multiple people, providing shelter in the event of a disaster.",
        image: "https://i.imgur.com/7777777.jpg",
        category: "Shelter",
      },
      {
        name: "First Aid Kit",
        description: "A kit containing essential medical supplies, such as bandages, gauze, and pain relievers.",
        image: "https://i.imgur.com/8888888.jpg",
        category: "Medical supplies",
      },
      {
        name: "Hygiene Kit",
        description: "A kit containing essential hygiene supplies, such as soap, toothpaste, and toilet paper.",
        image: "https://i.imgur.com/9999999.jpg",
        category: "Hygienic supplies",
      },
      // {
      //   name: "Portable Generator",
      //   description: "A generator that can be used to provide electricity in the event of a power outage.",
      //   image: "https://i.imgur.com/10101010.jpg",
      //   category: "Power generation and distribution",
      // },
      // {
      //   name: "Satellite Phone",
      //   description: "A phone that can be used to communicate in areas without cell phone service.",
      //   image: "https://i.imgur.com/11111111.jpg",
      //   category: "Communication and coordination",
      // },
      {
        name: "4x4 Truck",
        description: "A truck that can be used to transport logistics items to and from disaster zones, even over rough terrain.",
        image: "https://i.imgur.com/12121212.jpg",
        category: "Transportation and logistics",
      },
      {
        name: "Bulletproof Vest",
        description: "A vest that can be used to protect disaster relief workers from gunfire.",
        image: "https://i.imgur.com/13131313.jpg",
        category: "Security and safety",
      },
      {
        name: "Work Gloves",
        description: "Gloves that can be used to protect disaster relief workers from cuts and abrasions.",
        image: "https://i.imgur.com/14141414.jpg",
        category: "Other",
      },
    ]

  }

  onAddClick() {
    const modalRef = this.modalService.open(ProductsModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000' });
    modalRef.componentInstance.action = 'create';
    modalRef.closed.subscribe(event => {
      if (event === 'success') {
        this.fetchRowData();
      } else {
        this.rows.push(event)
      }
    })
  }

  onDetailClick(data: any) {
    const modalRef = this.modalService.open(ProductsModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000 shadow' });
    modalRef.componentInstance.action = 'read';
    modalRef.componentInstance.data = data;
  }

  onEditClick(data: any) {
    const modalRef = this.modalService.open(ProductsModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000 shadow' });
    modalRef.componentInstance.action = 'edit';
    modalRef.componentInstance.data = data;
  }

  onDeleteClick(data: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000' });
    modalRef.componentInstance.modalLabel = "Are you sure to delete this product?";
    modalRef.closed.subscribe(async event => {
      if (event === true) {

      }
    })
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
