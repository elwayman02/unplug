import Ember from 'ember';

export default {
    getLink(track) {
        if (track.format === 1) { // youtube
            return `https://youtu.be/${track.cid}`;
        }
        return `https://api.soundcloud.com/tracks/${track.cid}?client_id=45a1f5c3061b56d6a9f4587769919bf7`;
    }
};
