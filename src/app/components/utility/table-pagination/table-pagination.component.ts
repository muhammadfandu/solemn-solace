import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {


  @Output() paginationChange = new EventEmitter<any>(true);
  @Output() limitChange = new EventEmitter<any>(true);
  @Output() addButtonClick = new EventEmitter<any>(true);
  @Input() rows = [];
  @Input() page = 1;
  @Input() limit = 10;
  @Input() meta: any;
  @Input() shortTable = false;
  @Input() addButton = false;
  @Input() buttonLabel: string = 'New';

  constructor() { }

  ngOnInit(): void {
  }

  onPageLimitChange(value: any) {
    this.limit = value.target.value;
    this.limitChange.emit({ limit: this.limit });
  }

  onPrevPageClick() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.paginationChange.emit({ page: this.page });
    }
  }

  onNextPageClick() {
    if (this.meta) {
      if (this.meta.hasNextPage) {
        this.page = this.page + 1;
        this.paginationChange.emit({ page: this.page });
      }
    } else {
      if (this.page - 1 < Math.floor(this.rows.length / this.limit)) {
        this.page = this.page + 1;
        this.paginationChange.emit({ page: this.page });
      }
    }
  }


}
