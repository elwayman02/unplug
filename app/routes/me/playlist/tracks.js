import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    activate: function() {
        this._super.apply(this, arguments);
        window.scrollTo(0,0);
    },

    model(params) {
        const playlists = this.get('playlists');
        return JSON.parse(playlists.storage()[playlists.storageKey]).findBy('id', this.modelFor('me.playlist').id);
    }
});
