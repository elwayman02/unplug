import Ember from 'ember';

export default Ember.Controller.extend({
    trackList: Ember.computed.map('model.tracks', function (track) {
        const url = track.url ? ` - ${track.url}` : '';
        return `${track.author} - ${track.title}${url}`;
    }),

    tracks: Ember.computed('trackList', function () {
        return this.get('trackList').reduce(function (prev, track) {
            prev += `${track}\n`;
            return prev;
        }, '');
    })
});
