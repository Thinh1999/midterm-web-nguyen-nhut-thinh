// ===========================
// Lấy các phần tử
// ===========================

const form = document.getElementById("registerForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");

// ===========================
// Xóa lỗi cũ
// ===========================

function clearErrors() {

    document.querySelectorAll(".error").forEach(function(item){
        item.textContent="";
    });

    document.querySelectorAll("input").forEach(function(input){

        input.classList.remove("error-input");
        input.classList.remove("success-input");

    });

}

// ===========================
// Hiện lỗi
// ===========================

function showError(input,errorId,message){

    input.classList.add("error-input");

    document.getElementById(errorId).textContent=message;

}

// ===========================
// Thành công
// ===========================

function showSuccess(input){

    input.classList.add("success-input");

}

// ===========================
// Submit Form
// ===========================

form.addEventListener("submit",function(event){

    event.preventDefault();

    clearErrors();

    let isValid=true;

    // Họ tên

    if(fullName.value.trim()===""){

        showError(fullName,"fullNameError","Vui lòng nhập họ tên");

        isValid=false;

    }else{

        showSuccess(fullName);

    }

    // Email

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value.trim())){

        showError(email,"emailError","Email không hợp lệ");

        isValid=false;

    }else{

        showSuccess(email);

    }

    // Phone

    if(phone.value.trim()===""){

        showError(phone,"phoneError","Vui lòng nhập số điện thoại");

        isValid=false;

    }else{

        showSuccess(phone);

    }

    // Password

    if(password.value.length<6){

        showError(password,"passwordError","Mật khẩu tối thiểu 6 ký tự");

        isValid=false;

    }else{

        showSuccess(password);

    }

    // Confirm Password

    if(password.value!==confirmPassword.value){

        showError(confirmPassword,"confirmPasswordError","Mật khẩu không khớp");

        isValid=false;

    }else{

        showSuccess(confirmPassword);

    }

    // Agree

    if(!agree.checked){

        document.getElementById("agreeError").textContent="Bạn phải đồng ý điều khoản";

        isValid=false;

    }

    // Thành công

    if(isValid){

        alert("Đăng ký thành công!");

        const gender=document.querySelector("input[name='gender']:checked").value;

        document.getElementById("showName").textContent=fullName.value;
        document.getElementById("showEmail").textContent=email.value;
        document.getElementById("showPhone").textContent=phone.value;
        document.getElementById("showGender").textContent=gender;

        document.getElementById("resultCard").style.display="block";

        form.reset();

        document.querySelectorAll("input").forEach(function(input){

            input.classList.remove("success-input");

        });

    }

});

// ===========================
// Hiện / Ẩn mật khẩu
// ===========================

const togglePassword=document.getElementById("togglePassword");

togglePassword.addEventListener("click",function(){

    if(password.type==="password"){

        password.type="text";

        togglePassword.textContent="Ẩn";

    }else{

        password.type="password";

        togglePassword.textContent="Hiện";

    }

});