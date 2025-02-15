import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  public user_list = [];
  public servicesData = [];
  public selectedServices: string[] = [];
  public editUserForm: FormGroup;
  public isEditModalVisible = false;
  private editingUserId: number;
  public loading = false;
  public isDeleteModalVisible = false; // For delete confirmation modal
  private deletingUserId: number; // ID of the user to be deleted
  public settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit_user',
          title: '<a class="edit_icon"></a>',
        },
        {
          name: 'delete_user',
          title: '<a class="delete_icon"></a>',
        },
      ],
      position: 'right',
    },
    columns: {
      first_name: { title: 'Ismi', editable: false },
      second_name: { title: 'Familiyasi', editable: false },
      patronymic: { title: 'Sharifi', editable: false },
      email: { title: 'Email', editable: false },
      services: {
        title: 'Xizmatlar',
        editable: false,
        valuePrepareFunction: (services: any[]) =>
          services.map((service) => service.title).join(', '),
      },
    },
  };

  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadServices();
    this.initEditForm();
  }

  onCustomAction(event: any) {
    if (event.action === 'edit_user') {
      this.openEditModal(event);
    } else if (event.action === 'delete_user') {
      this.openDeleteModal(event);
    }
  }
  openDeleteModal(event: any) {
    this.deletingUserId = event.data.id;
    this.isDeleteModalVisible = true;
  }
  confirmDelete() {
    this.httpService.deleteUser(this.deletingUserId).subscribe(
      () => {
        alert("Foydalanuvchi muvaffaqiyatli o'chirildi!");
        this.isDeleteModalVisible = false;
        this.loadUsers(); // Refresh user list
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  cancelDelete() {
    this.isDeleteModalVisible = false;
  }
  loadUsers() {
    this.httpService.getUsers().subscribe((data: any) => {
      this.user_list = data;
    });
  }
  getServices(menu) {
    var items = [];
    menu.forEach((menu_item, idx) => {
      menu_item.inner_menu.forEach((inner) => {
        items.push({ title: inner.uz });
      });
    });
    return items;
  }
  loadServices() {
    this.httpService.getMenu().subscribe((data: any) => {
      this.servicesData = this.getServices(data);
    });
  }

  initEditForm() {
    this.editUserForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      patronymic: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', []],
      reception_number: ['', Validators.required],
    });
  }

  openEditModal(event: any) {
    const user = event.data;
    this.editingUserId = user.id;
    this.selectedServices = user.services.map((s: any) => s.title);
    this.editUserForm.patchValue({
      first_name: user.first_name,
      second_name: user.second_name,
      patronymic: user.patronymic,
      email: user.email,
    });
    this.isEditModalVisible = true;
  }

  toggleService(serviceTitle: string) {
    if (this.selectedServices.includes(serviceTitle)) {
      this.selectedServices = this.selectedServices.filter(
        (s) => s !== serviceTitle
      );
    } else {
      this.selectedServices.push(serviceTitle);
    }
  }

  saveUser() {
    const updatedUser = {
      ...this.editUserForm.value,
      services: this.selectedServices.map((title) => ({ title })),
    };
    this.httpService
      .updateUser(this.editingUserId, updatedUser)
      .subscribe(() => {
        alert('Foydalanuvchi muvaffaqiyatli yangilandi!');
        this.isEditModalVisible = false;
        this.loadUsers();
      });
  }

  closeModal() {
    this.isEditModalVisible = false;
  }
}
