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