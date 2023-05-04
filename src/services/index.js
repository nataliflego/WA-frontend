import axios from 'axios';
import $router from '@/router';

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
});
// koristi na REQUESTu slijedeci interceptor, ta funkcija u 'use' prima taj request
/* Service.interceptors.request.use((request) => {  // ako vrati request nazad na backend, mora se postaviti header

    let token = Auth.dajToken();
    if (!token) {
        $router.go(); //osvijezavanje stranice
        return;
    } else {
        request.headers['Authorization'] = 'Bearer ' + token;
    }
    return request
});

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
        Auth.odjava()
        $router.go()
    }
}) */

let Iskustvo = {

    async pretrazi(searchTerm) {
        console.log("pocetak pretrazi()")
        const response = await Service.get("/upisibolest", {
            params: {
                term: searchTerm,
            }
        });
        console.log("nakon awaita na pretrazi() podaci sa backenda", response.data);

        return response.data

    },

    /* razdjeli() {
        let rijeci = this.kljucnerijeci;
        let splited;
        if (rijeci.includes(",") == true) {
            splited = rijeci.split(",");
        }
        console.log(splited);
    }, */

    async spremanje(nazivbolesti, koristenilijek, mjestolijecenja, email, opisiskustva, kljucnerijeci) {
        /*  kljucnerijeci = [];
         let razdvojeno = kljucnerijeci.split(','); */

        let spremi = await Service.post("/iskustvo", {
            nazivbolesti: nazivbolesti,
            lijek: koristenilijek,
            mjesto: mjestolijecenja,
            email: email,
            opis: opisiskustva,
            kljucnerijeci: kljucnerijeci
        })
        return spremi.data;
        /*    .then(response => { console.log(response.data); })
           .catch(error => { console.error(error); }); */
    }

}

let Auth = {       // email = username
    async prijava(email, password) {
        let response = await Service.post("/prijava", {
            username: email,
            password: password,
        });

        let user = response.data // spremljeni podaci sa backenda

        localStorage.setItem('korisnik', JSON.stringify(user));

        return true;
    },
    async registracija(ime, username, password) {  //PENSAN DA JE REGISTRACIJA DOBRA
        let response = await Service.post("/registracija", {
            ime: ime,
            username: username,
            password: password,
        });
        let user = response.data

        console.log(user, "je tuuu")
        localStorage.setItem('korisnik', JSON.stringify(user));

        return true;
    },

    odjava() {
        localStorage.removeItem('korisnik');
    },
    dajkorisnika() {         // za izvuc korisnika iz localstoragea
        return JSON.parse(localStorage.getItem('korisnik'));
    },
    dajToken() {
        let user = Auth.dajkorisnika();
        if (user && user.token) {
            return user.token
        } else {
            return false;
        }
    },
    authenticated() {
        let korisnik = Auth.dajkorisnika();
        if (korisnik && korisnik.token) {
            return true;
        }
        return false;
    },
    stanje: {
        get authenticated() {
            return Auth.authenticated();
        },
        get imekorisnik() {
            let korisnik = Auth.dajkorisnika();
            if (korisnik) {
                return korisnik.username;
            }
        },

    },
};

export { Service, Auth, Iskustvo };