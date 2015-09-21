import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    model(params) {
        const playlists = this.get('playlists');
        return JSON.parse(playlists.storage()[playlists.storageKey]).findBy('id', this.modelFor('me.playlist').id);
    }
});
