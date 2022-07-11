# p-dev.js
The official API wrapper for p-dev.cf written in JavaScript
<br />
[p-dev.cf API docs](https://github.com/Platin-Developmentstudios/p-dev.js/blob/main/API.md) 

## Create a short link
```js
import PDevClient from 'p-dev.js';
const client = new PDevClient();

//Create a short link of example.com
client.generateLink("https://example.com");
```

## Install p-dev.js
You can install p-dev.js from the npm registry with the command 
`npm install p-dev.js`
