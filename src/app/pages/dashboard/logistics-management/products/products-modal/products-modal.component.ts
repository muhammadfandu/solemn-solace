import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {

  @Input() action: any = 'create';
  @Input() data!: any;

  currentOrganisationId: string;
  productForm!: UntypedFormGroup;
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
        this.title = 'Add Product';
        this.productForm = this.formBuilder.group({
          product: ['', Validators.required],
          category: ['', Validators.required],
          description: ['', Validators.required],
        });
        break;
      case 'read':
        this.title = 'Product Detail';
        break;
      case 'edit':
        this.title = 'Update Product';
        this.productForm = this.formBuilder.group({
          product: [this.data.name, Validators.required],
          category: [this.data.category, Validators.required],
          description: [this.data.description, Validators.required],
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
          this.createProduct();
          break;
        case 'edit':
          this.updateProduct();
          break;
      }
    }
  }

  async createProduct() {
    const payload = {
      name: this.productForm.value.product,
      category: this.productForm.value.category,
      description: this.productForm.value.description
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

  async updateProduct() {
    const payload = {
      name: this.productForm.value.product,
      category: this.productForm.value.category,
      description: this.productForm.value.description
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
