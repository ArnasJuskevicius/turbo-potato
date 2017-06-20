import 'whatwg-fetch';

class BeerService {
    endpoint = 'http://localhost:8000/';
    search = 'beer';
    headers = {
        'Authorization': 'VerySecretToken'
    };

    list() {
        return fetch(`${this.endpoint}${this.search}`, {headers: this.headers})
            .then(response => response.json());
    }
}

export default new BeerService();
