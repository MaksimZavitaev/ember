Irene = Ember.Application.create({
    LOG_ACTIVE_GENERATION: true,
    LOG_TRANSITIONS: true, // basic logging of successful transitions
    LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
    LOG_VIEW_LOOKUPS: true
});

//DS.RESTAdapter.reopen({
//    namespace: 'api',
//    pathForType: function(type) {
//        return Ember.String.pluralize(type) + '.json';
//    }
//});
Irene.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api',
    pathForType: function(type) {
        return Ember.String.pluralize(type) + '.json';
    }
});

Irene.ApplicationStore = DS.Store.extend({
    revision: 12,
    adapter: "Irene.ApplicationAdapter"
});
Irene.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        doneEditing: function(element) {
            this.set('isEditing', false);
//            var rec = this.get('model');
//            console.log(rec);
//            rec.save();
            element.save();
        }
    }
});
Ember.Handlebars.helper('format-date', function(date){
    return moment(date).fromNow();
});
var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function (input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
});
Irene.Post = DS.Model.extend({
    title: DS.attr(),
    author: DS.attr(),
    date: DS.attr(),
    excerpt: DS.attr(),
    body: DS.attr()
});
Irene.Router.map(function(){
    this.resource('about');
    this.resource('posts', function(){
        this.resource('post', {path: ':post_id'});
    });
});
Irene.PostRoute = Ember.Route.extend({
    model: function (params) {
        return posts.findBy('id', params.post_id);
    }
});
Irene.PostsRoute = Ember.Route.extend({
    model: function () {
//        return $.getJSON('/api/get_recent_posts.json').then(function (data) {
//            return data.posts.map(function (post) {
//                post.body = post.content;
//                return post;
//            });
//        });
        console.log(this);
        return this.store.find('post');
    }
});

var posts = [
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
];