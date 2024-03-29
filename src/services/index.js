import axios from 'axios';
import router from '@/router';

let Service = axios.create({
    baseURL: 'https://wabackend.onrender.com',
    /* url: 'https://wabackend.onrender.com', */
    /* baseURL: 'https://wabackend.onrender.com', */
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
// koristi na REQUESTu slijedeci interceptor, ta funkcija u 'use' prima taj request
Service.interceptors.request.use((request) => {  // ako vrati request nazad na backend, mora se postaviti header
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.dajToken();
    } catch (e) {
        console.error("Greška u interceptoru", e);
    }
    return request;
    /* let token = Auth.dajToken();
    if (!token) {
        $router.go(); //osvijezavanje stranice
        return;
    } else {
        request.headers['Authorization'] = 'Bearer ' + token;
    }
    return request */
});

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
        const trenutnaruta = router.currentRoute.value.name;
        if (trenutnaruta !== 'Prijava') {
            Auth.odjava()
            router.go()
        };
    }
})


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
        try {
            let response = await Service.post("/prijava", {
                username: email,
                password: password,
            });

            let user = response.data // spremljeni podaci sa backenda

            localStorage.setItem('korisnik', JSON.stringify(user));

            return true;
        } catch (error) {
            console.error("Greška prilikom prijava() ", error);
            throw new Error("Prijava nije uspijela");
        }
    },
    async registracija(ime, username, password) {  //PENSAN DA JE REGISTRACIJA DOBRA
        try {
            let response = await Service.post("/registracija", {
                ime: ime,
                username: username,
                password: password,
            });
            let user = response.data

            user.registered = true;


            console.log("Korisnik je tu: ", user)
            localStorage.setItem('korisnik', JSON.stringify(user));

            return true;
        } catch (error) {

            console.error("Greška prilikom registracija() ", error);
            throw error;
        }
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
        if (korisnik && korisnik.username) {
            return true;
        }
        return false;
    },
    registriran() {
        let korisnik = Auth.dajkorisnika();
        if (korisnik) {
            return true;
        } return false;
    },
    id() {
        let korisnik = Auth.dajkorisnika();
        console.log("Stored user data: ", korisnik)
        if (korisnik && korisnik._id) {
            return korisnik._id;
        } else {
            console.log("Nema id-a")
            return null;
        }
    },

    stanje: {
        get authenticated() {
            return Auth.authenticated();
        },
        get imekorisnik() {
            let korisnik = Auth.dajkorisnika();
            if (korisnik) {
                console.log("imekorisnik je tu: ", korisnik.username)
                return korisnik.username;
            }
        },
        get registriran() {
            return Auth.registriran();
        },
        get id() {
            return Auth.id();
        }


    },
};

export { Service, Auth, Iskustvo };