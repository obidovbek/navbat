import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public editUserForm: FormGroup;
  public userId: number;
  public servicesData = [];
  public loading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.loadServices();
    this.loadUserData();
  }

  loadServices() {
    this.httpService.getMenu().subscribe(
      (data: any) => {
        this.servicesData = data;
        this.addServiceCheckboxes();
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  loadUserData() {
    this.httpService.getUserById(this.userId).subscribe(
      (user: any) => {
        this.createEditUserForm(user);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching user:', error);
        this.loading = false;
      }
    );
  }

  createEditUserForm(user: any) {
    this.editUserForm = this.fb.group({
      first_name: [user.first_name, Validators.required],
      second_name: [user.second_name, Validators.required],
      patronymic: [user.patronymic],
      email: [user.email, [Validators.required, Validators.email]],
      reception_number: [user.reception_number],
      services: new FormArray([]),
    });

    // Populate service checkboxes based on user services
    this.servicesData.forEach(() => {
      const isChecked = user.services.some(
        (service: any) =>
          service.title ===
          this.servicesData[this.servicesData.length - 1]?.title
      );
      (this.editUserForm.get('services') as FormArray).push(
        new FormControl(isChecked)
      );
    });
  }

  addServiceCheckboxes() {
    const servicesFormArray = this.editUserForm.get('services') as FormArray;
    this.servicesData.forEach(() =>
      servicesFormArray.push(new FormControl(false))
    );
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      const updatedData = this.editUserForm.value;
      updatedData.services = updatedData.services
        .map((checked: boolean, i: number) =>
          checked ? this.servicesData[i] : null
        )
        .filter((v: any) => v !== null);

      this.httpService.updateUser(this.userId, updatedData).subscribe(
        (response) => {
          alert('Foydalanuvchi muvaffaqiyatli yangilandi!');
          this.router.navigate(['/users']);
        },
        (error) => {
          alert("Nimadur xato ketti. Qaytadan urinib ko'ring!");
          console.error('Error updating user:', error);
        }
      );
    }
  }
}
