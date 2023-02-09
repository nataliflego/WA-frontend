import axios from 'axios';
import $router from '@/router';

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
});
// koristi na REQUESTu slijedeci interceptor, ta funkcija u 'use' prima taj request
Service.interceptors.request.use((request) => {  // ako vrati request nazad na backend, mora se postaviti header

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
})

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

export { Service, Auth };