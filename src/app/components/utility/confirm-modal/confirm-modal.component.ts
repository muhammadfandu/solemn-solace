import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Input() modalLabel = 'Are you sure in executing this action?';
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel = 'Cancel';

  @Output() onConfirmResult = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onConfirmClick() {
    this.onConfirmResult.emit(true);
    this.activeModal.close(true);
  }

  onCancelClick() {
    this.onConfirmResult.emit(false);
    this.activeModal.close(false);
  }

}
