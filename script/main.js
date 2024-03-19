function myFunction2() {
    alert("Harap Masukkan Username dan Password Anda");
}

function validateForm() {   // Mengecek kedua inputan harus terisi
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === '' || password.trim() === '') {
        return false;   // Jika form kosong, maka tidak bisa login
    }
   
    return alert("Selamat! Anda Berhasil Login");   // Jika kedua input telah diisi, maka bisa melakukan login
}


function displayRealTime() {    // Fungsi untuk menampilkan waktu dan tanggal real-time
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var now = new Date();
    var dayOfWeek = days[now.getDay()];
    var month = months[now.getMonth()];
    var day = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');



    // Menampilkan format tanggal dan waktu real-time"
    var dateString = dayOfWeek + " " + day + " " + month + " " + year + ", " + hours + ":" + minutes + ":" + seconds + " ";
    
    document.getElementById('realTime').innerText = dateString;
}

// Memperbarui waktu dan tanggal setiap detik
setInterval(displayRealTime, 1000);
