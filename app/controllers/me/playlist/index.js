import Ember from 'ember';
import Playlists from 'unplug/models/playlists';

export default Ember.Controller.extend({
    playlists: Playlists.create(),

    actions: {
        submit(tracks) {
            const id = this.get('model.id');
            const playlists = this.get('playlists');
            const playlist = playlists.findBy('id', id);
            playlist.tracks = JSON.parse(tracks).data;
            this.get('playlists').replace(playlists.indexOf(playlist), 1, playlist);
            this.get('playlists').save();
            this.transitionToRoute('me.playlist.tracks', id);
        }
    }
});
