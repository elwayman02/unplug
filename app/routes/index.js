import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { "active": false, "count": 200, "id": 6782961, "name": "Fusion 2" },
            { "active": false, "count": 27, "id": 7843516, "name": "xEvent Mixes" },
            { "active": false, "count": 200, "id": 6877928, "name": "Old: Chill 4" },
            { "active": false, "count": 200, "id": 6289562, "name": "Old: Chill 2" },
            { "active": false, "count": 199, "id": 7600757, "name": "Old: Chill 5" },
            { "active": false, "count": 18, "id": 6074305, "name": "Soundcloud Favorites" },
            { "active": false, "count": 127, "id": 8096724, "name": "Fusion 3" },
            { "active": false, "count": 200, "id": 6450166, "name": "Old: Chill 3" },
            { "active": false, "count": 200, "id": 6083321, "name": "Old: Chill" },
            { "active": false, "count": 173, "id": 8214053, "name": "Chill 6" },
            { "active": true, "count": 154, "id": 7376114, "name": "Chilliest" },
            { "active": false, "count": 200, "id": 6083001, "name": "Fusion"
        }];
    },

    actions: {
        select(id) {
            this.transitionTo('playlist', id);
        }
    }
});
