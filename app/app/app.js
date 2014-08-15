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