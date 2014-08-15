module.exports = function (client, callback) {
    callback({
        posts: [
            {
                id: '1',
                title: "Rails is Omakase",
                author: {name: "d2h"},
                date: new Date('12-27-2012'),
                excerpt: "There are lots of a la carte software environments in this world",
                body: "I wont this for my ORM, I wont that for my template language, and let's finish it of."
            },
            {
                id: '2',
                title: "The Parley Letter",
                author: {name: "d2h"},
                date: new Date('12-24-2012'),
                excerpt: "My [appearance on the Rubi Rogues podcast]",
                body: "A log list of topics were raised and I took a time to ramble at large about all of the"
            }
        ]
    });
};