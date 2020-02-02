const server = require("./server");
const secrets = require("./secrets.js");

const PORT = secrets.PORT;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
