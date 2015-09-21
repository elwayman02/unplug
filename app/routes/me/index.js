import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Route.extend({
    playlists: Playlists.create(),

    actions: {
        submit(playlists) {
            playlists = JSON.parse(playlists);
            this.get('playlists').addObjects(playlists.data);
            this.transitionTo('me.playlists');
        }
    }
});
