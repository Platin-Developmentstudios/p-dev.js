import request from 'request'
export default class PDevClient {
    constructor() {
        this.baseURL = "https://p-dev.cf/"
    }
    
    /**
     * Generate a p-dev.cf short link.
     * @param {*} longURL
     */
    generateLink(longURL) {
        const options = {
            url: "https://p-dev.cf/",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                "url": `${longURL}`
            },
            json: true
        };
        
        request.post(options, function(error, response, body) {
            console.log(body);
        });
    };
}






