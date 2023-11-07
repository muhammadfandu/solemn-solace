import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-file-viewer-modal',
  templateUrl: './file-viewer-modal.component.html',
  styleUrls: ['./file-viewer-modal.component.css']
})
export class FileViewerModalComponent implements OnInit {
  fileUrl: any;
  fileExt = '';
  rotate: any;

  public cancelBtnLabel: string = 'Close';

  constructor(
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // console.log(this.fileUrl);
    this.fileExt = this.fileUrl.split('.').pop().toLowerCase();
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl);
  }

  ngOnDestroy() {
    this.onCancel();
  }

  public onCancel(): void {
    // NOTE: closing modal shows console error, currently no idea how to fix it
    this.activeModal.close();
  }

}
