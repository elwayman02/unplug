import Ember from 'ember';
import Playlists from 'unplug/models/playlists';
import LinkExtractor from 'unplug/utils/link-extractor';

export default Ember.Controller.extend({
    tracks: '',
    playlists: Playlists.create(),

    buildPromise(track) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            const url = LinkExtractor.getLink(track);
            if (track.format === 1) {
                track.url = url;
                resolve(track);
            } else {
                Ember.$.get(url).then(function (trackData) {
                    track.url = trackData.permalink_url;
                    resolve(track);
                }, function () {
                    resolve(track);
                });
            }
        });
    },

    buildTracks(trackJSON) {
        const tracks = [];
        const promise = this.buildPromise(trackJSON[0]);
        const tracksPromise = trackJSON.reduce((prev, track, index) => {
            return prev.then((prevTrack) => {
                tracks.push(prevTrack);
                if (index < trackJSON.length - 1) {
                    return this.buildPromise(trackJSON[index+1]);
                }
            });
        }, promise);
        return tracksPromise.then(() => {
            const id = this.get('model.id');
            const playlists = this.get('playlists');
            const playlist = playlists.findBy('id', id);
            playlist.tracks = tracks;
            this.get('playlists').replace(playlists.indexOf(playlist), 1, playlist);
            this.get('playlists').save();
            this.transitionToRoute('me.playlist.tracks', id);
            this.set('tracks', '');
        });
    },

    actions: {
        submit(tracks) {
            this.buildTracks(JSON.parse(tracks).data);
        }
    }
});
