import Ember from 'ember';

export default Ember.Controller.extend({
    sortBy: ['name:asc'],
    playlists: Ember.computed.sort('model', 'sortBy')
});
