import Ember from 'ember';
import LinkExtractor from 'unplug/utils/link-extractor';

export default Ember.Controller.extend({
    trackList: Ember.computed.map('model.tracks', function (track) {
        return `${track.author} - ${track.title} - ${LinkExtractor.getLink(track)}`;
    }),

    tracks: Ember.computed('trackList', function () {
        return this.get('trackList').reduce(function (prev, track) {
            prev += `${track}\n`;
            return prev;
        }, '');
    })
});
