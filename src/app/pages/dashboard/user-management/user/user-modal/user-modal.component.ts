import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {


  @Input() action: any = 'create';
  @Input() data!: any;

  currentOrganisationId: string;
  userForm!: UntypedFormGroup;
  title = '';
  selectedOptions: any = {
    category: ''
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    switch (this.action) {
      case 'create':
        this.title = 'Add User';
        this.userForm = this.formBuilder.group({
          user: ['', Validators.required],
        });
        break;
      case 'read':
        this.title = 'User Detail';
        break;
      case 'edit':
        this.title = 'Update User';
        this.userForm = this.formBuilder.group({
          user: [this.data.name, Validators.required],
        });
        break;
    }
  }

  confirm() {
    if (this.action === 'view') {
      this.activeModal.close();
    } else {
      this.onConfirmResult(true)
      // const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'modal-bg-transparent darken-bg modal-confirm-padding' });
      // modalRef.componentInstance.modalLabel = this.action !== 'delete' ? 'Are you sure to submit certificate category?' : 'Are you sure to delete certificate category?';
      // modalRef.closed.subscribe(e => this.onConfirmResult(e))
    }
  }

  onConfirmResult(event: any) {
    if (event === true) {
      switch (this.action) {
        case 'create':
          this.createUser();
          break;
        case 'edit':
          this.updateUser();
          break;
      }
    }
  }

  async createUser() {
    const payload = {
      name: this.userForm.value.user,
    }
    console.log(payload)
    this.activeModal.close(payload);
    // const submit = await this.certificatesService.create(CertificatesServiceType.CERTIFICATES_CATEGORY, payload)
    // submit.subscribe({
    //   next: (response) => {
    //     this.activeModal.close('success');
    //     this.toastr.success('Certificates category created');
    //   },
    //   error: (e: HttpErrorResponse) => {
    //     this.errorHandlerService.handleHttpError(e);
    //   }
    // });
  }

  async updateUser() {
    const payload = {
      name: this.userForm.value.user,
    }
    // const submit = await this.certificatesService.update(CertificatesServiceType.CERTIFICATES_CATEGORY, payload, this.data.id)
    // submit.subscribe({
    //   next: (response) => {
    //     this.activeModal.close('success');
    //     this.toastr.success('Certificates category updated');
    //   },
    //   error: (e: HttpErrorResponse) => {
    //     this.errorHandlerService.handleHttpError(e);
    //   }
    // });
  }
}
