
class CPassword {
    constructor(longitud = 8, contraseña) {
        this.longitud = longitud;
        this.contraseña = contraseña;
    }
    esFuerte() {
        if(this.contraseña.match(/[A-Z]/g) == null){
            return false
        }
        if(this.contraseña.match(/[a-z]/g) == null){
            return false
        }
        if(this.contraseña.match(/[0-9]/g) == null){
            return false
        }
        if (this.contraseña.match(/[A-Z]/g).length < 2) {
            return false;
        }
        if (this.contraseña.match(/[a-z]/g).length < 1) {
            return false;
        }
        if (this.contraseña.match(/[0-9]/g).length < 5) {
            return false;
        }

        return true;
    }
    generarPassword() {
        let passwrd = "";
        let numeroAleatorio = Math.floor(Math.random() * 26);
        let caracterAleatorio = String.fromCharCode(65 + numeroAleatorio);
        passwrd += caracterAleatorio;
        while (passwrd.length < 8) {
            let opc = Math.ceil(Math.random() * 3);
            switch (opc) {
                case 1:

                    if (passwrd.match(/[A-Z]/g).length < 2) {
                        numeroAleatorio = Math.floor(Math.random() * 26);
                        caracterAleatorio = String.fromCharCode(65 + numeroAleatorio);
                        passwrd += caracterAleatorio;

                    }
                    break;
                case 2:
                    if (passwrd.match(/[a-z]/g) === null) {
                        numeroAleatorio = Math.floor(Math.random() * 26);
                        caracterAleatorio = String.fromCharCode(65 + numeroAleatorio);
                        passwrd += caracterAleatorio.toLowerCase();
                    }
                    if (passwrd.match(/[a-z]/g).length < 1) {
                        numeroAleatorio = Math.floor(Math.random() * 26);
                        caracterAleatorio = String.fromCharCode(65 + numeroAleatorio);
                        passwrd += caracterAleatorio.toLowerCase();

                    }
                    break;
                case 3:
                    if (passwrd.match(/[0-9]/g) === null) {
                        passwrd += "" + Math.round(Math.random() * 9);
                    }
                    if (passwrd.match(/[0-9]/g).length < 5) {
                        passwrd += "" + Math.round(Math.random() * 9);
                    }
                    break;
            }

        }
        this.contraseña = passwrd;
        return this.contraseña;
    }

}

let passw;
document.getElementById("comprobar").addEventListener("click",()=>{
    event.preventDefault();
    let inp = document.querySelector("input").value;
    passw = new CPassword(inp.length,inp);
    if(passw.esFuerte()){
        document.getElementById("Resultado").innerHTML = "La contraseña es fuerte.";
    }else{
        document.getElementById("Resultado").innerHTML = "La contraseña es debil.";
    }
});
document.getElementById("crear").addEventListener("click",()=>{
    event.preventDefault();
    let inp = document.querySelector("input");
    inp.value = passw.generarPassword();
})
