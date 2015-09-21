import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        this._super.apply(this, arguments);
        if (Ember.isPresent(model.tracks)) {
            this.transitionTo('me.playlist.tracks', model.id);
        }
    }
});
