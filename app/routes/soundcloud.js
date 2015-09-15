import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        //return Ember.$.ajax(`https://api.soundcloud.com/tracks/${params.id}?client_id=45a1f5c3061b56d6a9f4587769919bf7`)
        //    .then(function (song) { return song; });
        return params.id;
    }
});
