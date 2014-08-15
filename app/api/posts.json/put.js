module.exports = function (client, callback) {
    console.log(client.query);
    callback({
        status: "ok"
    });
};