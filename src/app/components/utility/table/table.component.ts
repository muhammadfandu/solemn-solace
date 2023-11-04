import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ContentChild('tableCellTemplate', { static: false }) tableCellTemplate: TemplateRef<any> | undefined;
  @ContentChild('tableHeaderTemplate', { static: false }) tableHeaderTemplate: TemplateRef<any> | undefined;
  @ContentChild('cardTemplate', { static: false }) cardTemplate: TemplateRef<any> | undefined;

  @Input() version: number = 1;
  @Input() columnsCount: number = 1;
  @Input() columns: any = [];
  @Input() rows: any = [];
  @Input() searchColumn: any = [];
  @Input() limit: number = 10;
  @Input() page: number = 1;
  @Input() meta: any;
  @Input() addButton: boolean = false;
  @Input() buttonLabel: string = 'New';
  @Input() isLoading: boolean = false;
  @Output() addButtonClick = new EventEmitter;
  @Output() paginationChange = new EventEmitter<any>(true);
  @Output() limitChange = new EventEmitter<any>(true);

  data: any = [];
  searchInput: any = '';
  shortTable = false;
  showTable = true;

  constructor() { }

  ngOnInit(): void {
    this.data = this.rows;
    if (this.limit < 10) this.shortTable = true;
  }

  ngOnChanges(): void {
    this.data = this.rows;
  }

  onPaginationChange(event: any) {
    this.page = parseInt(event.page);
    this.paginationChange.emit(this.page)
  }

  onLimitChange(event: any) {
    this.limit = parseInt(event.limit);
    this.limitChange.emit(this.limit)
  }

  doSearch() {
    var searchVal = this.searchInput.trim().toLowerCase();

    this.data = this.rows.filter((record: any) => {

      switch (this.searchColumn.length) {
        case 1:
          try {
            if (record[this.searchColumn[0]].toLowerCase().includes(searchVal)) {
              return record;
            }
          } catch (error) { return '' }
          break;
        case 2:
          try {
            if (
              record[this.searchColumn[0]].toLowerCase().includes(searchVal) ||
              record[this.searchColumn[1]].toLowerCase().includes(searchVal)
            ) {
              return record;
            }
          } catch (error) { return '' }
          break;
        default:
          try {
            if (
              record[this.searchColumn[0]].toLowerCase().includes(searchVal) ||
              record[this.searchColumn[1]].toLowerCase().includes(searchVal) ||
              record[this.searchColumn[2]].toLowerCase().includes(searchVal)
            ) {
              return record;
            }
          } catch (error) { return '' }
          break;
      }
    })
  }

}
