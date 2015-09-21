import StorageArray from 'ember-local-storage/local/array';
// or use sessionStorage
// `import StorageArray from 'ember-local-storage/session/array';`

export default StorageArray.extend({
    initialContent: [],
    storageKey: 'plug-playlists'
});
