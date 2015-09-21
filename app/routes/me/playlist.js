import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    model(params) {
        return this.get('playlists').findBy('id', parseInt(params.playlist_id, 10));
    },

    actions: {
        submit(id) {
            this.transitionTo('me.playlist.tracks', id);
        }
    }
});
