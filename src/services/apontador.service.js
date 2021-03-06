let instance = null;

export default class ApontadorService {

    constructor() {

        if (!instance) {
            instance = this;
        }

        // Cria um singleton da classe
        return instance;
    }

    /**
     * Retorna o header para acesso a API
     * @returns {*}
     */
    get accessHeaders() {

        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessKey}`
        };
    }

    /**
     * Retorna a chave de acesso à API
     */
    get accessKey() {
        return localStorage.getItem('accessToken');
    }

    /**
     * Retorna as fotos do local passado por parâmetro
     * @param placeId
     * @returns {*}
     */
    getPlacePhotos(placeId = 'B37822W2') {

        return fetch(`https://api.apontador.com.br/v2/places/${placeId}/photos`, {
            method: 'GET',
            headers: this.accessHeaders
        }).then(response => response.json());
    }

    /**
     * Retorna as informações do local passado por parâmetro
     * @param placeId
     */
    getPlaceInfo(placeId = 'B37822W2') {

        return fetch(`https://api.apontador.com.br/v2/places/${placeId}?fl=*,openingHours`, {
            method: 'GET',
            headers: this.accessHeaders
        }).then(response => response.json());
    }

    setAccessKey() {

        return fetch('https://api.apontador.com.br/v2/oauth/token?client_id=testefront&client_secret=jO98nsGN6rXlmWXKKxnwS9NogdD~&grant_type=client_credentials')
            .then(response => response.json())
            .then(response => {
                debugger;
                localStorage.setItem('accessToken', response.access_token);
                return response;
            });
    }
}