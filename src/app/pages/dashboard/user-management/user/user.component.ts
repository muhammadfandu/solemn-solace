import { Component, OnInit } from '@angular/core';
import { UserModalComponent } from './user-modal/user-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/components/utility/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
        name: 'John Doe',
        age: 28,
        gender: 'Male',
        skills: ['First Aid', 'Search and Rescue', 'Communication'],
        dateOfBirth: '1995-03-15',
        address: '123 Main Street, Cityville, State',
        phoneNumber: '555-1234',
        imageUrl: 'https://example.com/johndoe.jpg',
      },
      {
        name: 'Jane Smith',
        age: 35,
        gender: 'Female',
        skills: ['Medical Assistance', 'Logistics', 'Crisis Counseling'],
        dateOfBirth: '1988-07-22',
        address: '456 Oak Avenue, Townsville, State',
        phoneNumber: '555-5678',
        imageUrl: 'https://example.com/janesmith.jpg',
      },
      {
        name: 'Alex Johnson',
        age: 22,
        gender: 'Non-Binary',
        skills: ['Volunteer Coordination', 'Language Translation'],
        dateOfBirth: '2001-11-10',
        address: '789 Pine Road, Villagetown, State',
        phoneNumber: '555-9012',
        imageUrl: 'https://example.com/alexjohnson.jpg',
      },
    ]

  }

  onAddClick() {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000' });
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
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000 shadow' });
    modalRef.componentInstance.action = 'read';
    modalRef.componentInstance.data = data;
  }

  onEditClick(data: any) {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000 shadow' });
    modalRef.componentInstance.action = 'edit';
    modalRef.componentInstance.data = data;
  }

  onDeleteClick(data: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'lg', windowClass: 'modal-bg-transparent z-index-10000' });
    modalRef.componentInstance.modalLabel = "Are you sure to delete this volunteer?";
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
