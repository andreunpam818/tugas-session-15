console.log("Javascript berhasil.");

const toggleButton = document.querySelector("#toggleTips");
const formTips = document.querySelector("#formTips");
const customerForm = document.querySelector("#customerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameFeedback = document.querySelector("#nameFeedback");
const emailFeedback = document.querySelector("#emailFeedback");
const noHpInput = document.querySelector("#No_Hp");
const noHpFeedback = document.querySelector("#No_HpFeedback");
const formMessage = document.querySelector("#formMessage");

toggleButton.addEventListener("click", function() {
    formTips.hidden=!formTips.hidden;

    //Jika formTips hidden, maka ubah textContent toggleButton menjadi "Tampilkan Petunjuk", jika tidak maka ubah menjadi "Sembunyikan Petunjuk"
    toggleButton.textContent = formTips.hidden ? "Tampilkan Petunjuk" : "Sembunyikan Petunjuk";
});

nameInput.addEventListener("input", function() {
    if (nameInput.value.trim() === "") {
        nameFeedback.textContent = "Nama tidak boleh kosong.";
    }else{
        nameFeedback.textContent = "Nama Sudah di isi";
    }
});

emailInput.addEventListener("input", function() {
    if (emailInput.value.trim() === "") {
        emailFeedback.textContent = "Email tidak boleh kosong.";
    }else if(!emailInput.validity.valid){
        emailFeedback.textContent = "Email tidak valid.";
    }else{
        emailFeedback.textContent = "Email Sudah di isi";
    }
});

customerForm.addEventListener("submit", function (event) {
    let hasError = false;

    nameFeedback.textContent = "";
    emailFeedback.textContent = "";
    formMessage.textContent = "";

    if (nameInput.value.trim() == "") {
        event.preventDefault();
        nameFeedback.textContent = "Nama tidak boleh kosong.";
        hasError = true;
    }

    if (emailInput.value.trim() == "" || !emailInput.validity.valid) {
        event.preventDefault();
        emailFeedback.textContent = "Email wajib diisi dan pastikan formatnya benar.";
        hasError = true;
    }

    if (noHpInput.value.trim() == "") {
        event.preventDefault();
        noHpFeedback.textContent = "No.Hp tidak boleh kosong.";
        hasError = true;
    }

    if (!hasError) {
        formMessage.textContent = "Perbaiki Input yg masih salah.";
    }else{
        formMessage.textContent = "Data sudah bisa diproses.";
    }


});
