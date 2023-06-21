$(document).ready( function () {
	// const url = window.location.href;
	// var new_url = new URL(url);
	// var id = new_url.search.slice(4);
	// console.log('ready function')
    // console.log('view vacancy', id);
	get_tutors();
} );

function get_tutors(){
    var http = new XMLHttpRequest();
    // var url = 'http://hujjat.ferpi.uz/marketing/ish/db/get_vacancies.php';
    var url = 'https://adtitsnqb.uz/tutor/get_users_mainpage.php';
    var params = JSON.stringify({http_auth: "s3fBffF64Q7EGHfJ9fRBCD"});
    // var params = JSON.stringify({ 'to': parseInt(document.getElementsByClassName('paginate_button current')[0].innerText) });
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            var res = JSON.parse(http.responseText)
            if (res.status === 200) {
                gen_tutors_content(res.users);
            }
            console.log(res)
        }
    }
    http.send(params);
}
function gen_tutors_content(tutors){
    if(tutors){
    	var tutors_hh = document.getElementById('tutors_hh');
        tutors.map(tutor=>{
            console.log(tutor)

            var div = document.createElement('div');
            div.classList.add("pro");
            var html =      '<div class="pro-img">'+
                                '<img src='+((tutor['files']) ? (tutor.files[0]) : ("images/tutors/tutor3.jpg")) +' alt="">'+
                                '<a class="pro-btn" href="tutor.html?id='+tutor.uid+'"></a>'+
                            '</div>'+
                            '<div class="des">'+
                                '<h3>'+ tutor.last_name +' '+tutor.first_name+' '+tutor.patronymic +'</h3>'+
                            '</div>';
            div.innerHTML = html;
            tutors_hh.append(div);
        });
        // tutors_hh.innerHTML = html;
    }	
}