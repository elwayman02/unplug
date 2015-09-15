import Ember from 'ember';

export default Ember.Controller.extend({
    sortBy: ['author:asc'],
    trackList: Ember.computed.sort('model', 'sortBy'),
    tracks: Ember.computed.map('trackList', function (track) {
        if (track.format === 1) {
            track.url = `https://youtu.be/${track.cid}`;
        }
        return track;
    })
});
