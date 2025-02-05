class Server2 {
    http = require('http');
    url = require('url');
    fs = require('fs');
    msg = require('./lang/messages/en/user.js')
    class_dictionary = require('./js/dictionary.js')
    constructor(port) {
        this.port = port;
        this.server = this.http.createServer(this.handleRequest.bind(this));
    }

    handleRequest(request, response) {
        const q = this.url.parse(request.url, true);
        const q_pathname = q.pathname;
  
        let split_path = q_pathname.substring(1).split("/");
        let path = split_path.shift();
        // if (path === "") {

        // }
        // if (rw === "getDate") {
        //   this.handleGetDate(q, response);
        // } else if (rw === "readFile") {
        //   this.handleRead(q, response);
        // } else if (rw === "writeFile") {
        //   this.handleWrite(q, response);
        // } else {
        //   response.writeHead(404, { 'Content-Type': 'text/plain' });
        //   response.end(`${this.msg.RES_404}`);
        // }
      }

      start() {
        this.server.listen(this.port, () => {
          console.log(`listening...`);
        });
      }
}

const server = new Server2(8080);
server.start();
