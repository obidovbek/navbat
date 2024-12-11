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
    return this.http.post(environment.http.setNewPvo.path, {
      new_pvo: new_pvo,
    });
  }
  removePvo(pvo_added_id) {
    return this.http.post(environment.http.removePvo.path, {
      pvo_added_id: pvo_added_id,
    });
  }
  editUserAccaunt(pvo_added_id, new_data) {
    return this.http.post(environment.http.editUserAccaunt.path, {
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
