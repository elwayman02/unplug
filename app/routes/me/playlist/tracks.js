import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    model(params) {
        return this.modelFor('me.playlist');
    }
});
