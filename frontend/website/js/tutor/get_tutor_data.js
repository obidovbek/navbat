$(document).ready( function () {
	const url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    // console.log(c);
	get_tutor_data(id);
} );

function get_tutor_data(uid){
    var http = new XMLHttpRequest();
    // var url = 'http://hujjat.ferpi.uz/marketing/ish/db/get_vacancies.php';
    var url = 'https://adtitsnqb.uz/tutor/get_user.php';
    var params = JSON.stringify({http_auth: "s3fBffF64Q7EGHfJ9fRBCD", uid:uid});
    // var params = JSON.stringify({ 'to': parseInt(document.getElementsByClassName('paginate_button current')[0].innerText) });
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            var res = JSON.parse(http.responseText)
            // if (res.status === 200) {
                gen_tutor_content(res);
            // }
            console.log(res)
        }
    }
    http.send(params);
}
function gen_tutor_content(tutor){
    if(tutor){
            document.getElementById('main_tutor_name').innerHTML = tutor.last_name +' '+tutor.first_name+' '+ (tutor.patronymic?tutor.patronymic:'');
        	document.getElementById('faculty').innerHTML = tutor.faculty;
            document.getElementById('sub_tutor_name').innerHTML = tutor.last_name +' '+tutor.first_name+' '+ (tutor.patronymic?tutor.patronymic:'');
            document.getElementById('phone').innerHTML = tutor.phone;
            document.getElementById('email').innerHTML = tutor.email;
            document.getElementById("tutor_img").src=tutor.files[1] ? tutor.files[1] : tutor.files[0];
            
            // var div = document.createElement('div');
            // div.classList.add("pro");
            // var html =      '<div class="pro-img">'+
            //                     '<img src='+((tutor['files']) ? (tutor.files[0]) : ("images/tutors/tutor3.jpg")) +' alt="">'+
            //                     '<a class="pro-btn" href="tutor.html?id='+tutor.uid+'"></a>'+
            //                 '</div>'+
            //                 '<div class="des">'+
            //                     '<h3>'+ tutor.last_name +' '+tutor.first_name+' '+tutor.patronymic +'</h3>'+
            //                 '</div>';
            // div.innerHTML = html;
            // tutors_hh.append(div);
        // tutors_hh.innerHTML = html;
    }	
}