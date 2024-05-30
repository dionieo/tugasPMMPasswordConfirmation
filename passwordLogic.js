function formCheck(){
    let cekusername = document.forms["topupForm"]["username"].value;
    let cekpassword = document.forms["topupForm"]["password"].value;
    
    if(cekusername == ""){
        alert("Harap isi username");
        username.focus();
        return false;
    } else if(cekpassword == ""){
        alert("Harap isi password");
        password.focus();
        return false;
    } else if(!/[A-Z]/.test(cekpassword)){
        alert("Password harus mengandung huruf kapital");
        return false;
    } else if(!/[a-z]/.test(cekpassword)){
        alert("Password harus mengandung huruf kecil");
        return false;
    } else if(!/[0-9]/.test(cekpassword)){
        alert("Password harus mengandung angka");
        return false;
    } else if(!/[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]/.test(cekpassword)){
        alert("Password harus mengandung simbol");
        return false;
    } else{
        alert('Akun anda berhasil dibuat')
        return true;
    }
    
}