import Ember from 'ember';

export default Ember.Controller.extend({
    sortBy: ['author:asc'],
    tracks: Ember.computed.sort('model', 'sortBy')
});
