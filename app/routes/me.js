import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    afterModel(model, transition) {
        if (['/me', '/me/'].contains(transition.intent.url) && Ember.isPresent(Object.keys(this.get('playlists.content')))) {
            this.transitionTo('me.playlists');
        }
    },

    model(params) {
        return this.get('playlists').findBy('id', params.playlistId);
    }
});
