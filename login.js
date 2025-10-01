function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ⚠️ Pour l'instant, les identifiants sont codés en dur pour test
    const validUsername = "admin";
    const validPassword = "1234";

    if(username === validUsername && password === validPassword) {
        // Rediriger vers le site principal
        window.location.href = "index.html";
    } else {
        document.getElementById('errorMsg').innerText = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
}
