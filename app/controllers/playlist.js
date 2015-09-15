import Ember from 'ember';

export default Ember.Controller.extend({
    sortBy: ['author:asc'],
    tracks: Ember.computed.sort('model', 'sortBy')
    //tracks: Ember.computed.map('trackList', function (track) {
    //    if (track.format === 1) {
    //        track.url = `https://youtu.be/${track.cid}`;
    //    } else {
    //        track.url = `https://api.soundcloud.com/tracks/${track.cid}?client_id=45a1f5c3061b56d6a9f4587769919bf7`;
    //    }
    //    return track;
    //})
});
