import Ember from 'ember';
import LinkExtractor from 'unplug/utils/link-extractor';

export default Ember.Controller.extend({
    tracks: Ember.computed.map('model.tracks', function (track) {
        track.url = LinkExtractor.getLink(track);
        return track;
    })
});
