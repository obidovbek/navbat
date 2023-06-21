//ferpi///////////
export const environment = {
  production: true,
  otm_name: "Farg'ona Politexnika Instituti ta'lim sifatini nazorat qilish bo'limi",
  firebaseConfig:{ // pvorey
    apiKey: "AIzaSyBmzKSP6a7bHTJWRZTqRgF3u8ucSJB2_fg",
    authDomain: "pvorey.firebaseapp.com",
    databaseURL: "https://pvorey-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pvorey",
    storageBucket: "pvorey.appspot.com",
    messagingSenderId: "975847085157",
    appId: "1:975847085157:web:5008868ba373c480ffa28c",
    measurementId: "G-GRE7FMXH99"
  },
  http: {
    setNewPvo: {
       path: "http://tsnqb.uz/db_ferpi/2022/set_new_pvo.php",
    },
    removePvo: {
       path: "http://tsnqb.uz/db_ferpi/2022/remove_pvo.php",
    },
    editUserAccaunt: {
       path: "http://tsnqb.uz/db_ferpi/2022/edit_user_account.php",
    },
    get_menu: {
       path: "http://192.168.10.0/queue/navbat-db/get_data.php",
    },
    add_queue: {
       path: "http://192.168.10.0/queue/navbat-db/add_queue.php",
    },
    update_menu: {
       path: "http://192.168.10.0/queue/navbat-db/update_menu.php",
    },
    officer_next_item: {
       path: "http://192.168.10.0/queue/navbat-db/officer_next_item.php",
    },
    getStatistics: {
       path: "http://192.168.10.0/queue/navbat-db/get_statistics.php",
    },
  }
};
