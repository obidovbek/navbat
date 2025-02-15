import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(environment.http.get_menu.path);
  }
  register(newUser) {
    return this.http.post(environment.http.register.path, newUser).toPromise();
  }
  getUsers() {
    return this.http.get(environment.http.user.path, {
      headers: { Authorization: `Beared ${this.token()}` },
    });
  }
  updateUser(user_id, user) {
    return this.http.put(environment.http.user.path + `/${user_id}`, user, {
      headers: { Authorization: `Beared ${this.token()}` },
    });
  }
  getUserById(user_id) {
    return this.http.get(environment.http.user.path + `/${user_id}`, {
      headers: { Authorization: `Beared ${this.token()}` },
    });
  }
  deleteUser(user_id) {
    return this.http.delete(environment.http.user.path + `/${user_id}`, {
      headers: { Authorization: `Beared ${this.token()}` },
    });
  }
  token() {
    return localStorage.getItem('jwtToken');
  }
  autologin() {
    return this.http
      .get(environment.http.autologin.path, {
        headers: { Authorization: `Beared ${this.token()}` },
      })
      .toPromise();
  }
  login(user) {
    return this.http.post(environment.http.login.path, user).toPromise();
  }
  updateMenu(menuNew) {
    return this.http.post(environment.http.update_menu.path, {
      menu_new: menuNew,
    });
  }
  addQueue(menuIndex, subMenuIndex) {
    console.log('addQueue', environment.http.add_queue.path);
    return this.http.post(environment.http.add_queue.path, {
      menuIndex,
      subMenuIndex,
    });
  }
  setNewPvo(new_pvo) {
    return this.http.post('', {
      new_pvo: new_pvo,
    });
  }
  removePvo(pvo_added_id) {
    return this.http.post('', {
      pvo_added_id: pvo_added_id,
    });
  }
  editUserAccaunt(pvo_added_id, new_data) {
    return this.http.post('', {
      pvo_added_id: pvo_added_id,
      new_data: new_data,
    });
  }
  officerNextItem(menu_idx, menu_sub_idx) {
    return this.http.post(environment.http.officer_next_item.path, {
      menu_idx: menu_idx,
      menu_sub_idx: menu_sub_idx,
    });
  }
  getStatistics() {
    return this.http.post(environment.http.getStatistics.path, {});
  }
}
