import request from 'request'
import PDevClient from '../main.mjs'

var client = new PDevClient();
client.generateLink("https://example.com/");
