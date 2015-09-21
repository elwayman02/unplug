import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('playlist', { path: '/playlist/:id' });
  this.route('soundcloud', { path: '/soundcloud/:id' });
  this.route('youtube', { path: '/youtube/:id' });
  this.route('me', { path: '/me' }, function () {
    this.route('index', { path: '/' });
    this.route('playlists');
    this.route('playlist', { path: '/playlist/:playlist_id' }, function () {
        this.route('index', { path: '/' });
        this.route('tracks');
    });
  });
});

export default Router;
