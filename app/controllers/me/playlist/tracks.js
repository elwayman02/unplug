import Ember from 'ember';

export default Ember.Controller.extend({
    sortBy: [],

    tracks: Ember.computed.sort('model.tracks', 'sortBy'),

    setSortBy(sort) {
        let dir = 'asc';
        const sortBy = this.get('sortBy')[0];
        if (Ember.isEqual(sortBy, `${sort}:asc`)) {
            dir = 'desc';
        }
        this.set('sortBy', [`${sort}:${dir}`]);
    },

    actions: {
        sortByArtist() {
            this.setSortBy('author');
        },

        sortByTitle() {
            this.setSortBy('title');
        }
    }
});
