import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Controller.extend({
    playlists: Playlists.create(),

    actions: {
        submit(tracks) {
            const id = this.get('model.id');
            const playlists = this.get('playlists');
            playlists.findBy('id', id).tracks = JSON.parse(tracks).data;
            this.set('playlists', playlists);
            this.transitionToRoute('me.playlist.tracks', id);
        }
    }
});
