function Habib() {
    const allChractor = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

    var storePass = "";

    for (var a = 0; a < 10; a++) {
        var gnp = Math.random() * allChractor.length;

        storePass += allChractor.substring(gnp, gnp + 1);
    };

    document.querySelector('#outPut').value = storePass;
};