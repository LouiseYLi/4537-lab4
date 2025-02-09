class Server {
    http = require('http');
    url = require('url');
    fs = require('fs');
    msg = require('./lang/messages/en/user.js');
    // utils = require('./modules/utils.js');
    endpoint_route = "/api/dictionary";
    Dictionary = require('./js/dictionary.js');
    constructor(port) {
      this.port = port;
      this.server = this.http.createServer(this.handleRequest.bind(this));
      this.dictionary = new this.Dictionary();
    }
    handleRequest(request, response) {
      response.writeHead(200, {
          "content-type": "text/html",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*"
      });
      if (request.method === "GET") {
          console.log("get");
      } else if (request.method == "POST" && request.url == this.endpoint_route) {
        console.log("post");
        let body = "";
        request.on('data', (chunk) => { 
          if (chunk != null ) body += chunk;
        });

        request.on('end', () => { 
          console.log(body);
          let q = this.url.parse(body, true);
          this.dictionary.add_entry(q.query.word, q.query.definition);
          console.log(this.dictionary);
          response.end('Successfully added to dictionary.');
        });
      }
  }
    start() {
      this.server.listen(this.port, () => {
        console.log(`listening...`);
      });
    }
}

const server = new Server(8080);
server.start();
