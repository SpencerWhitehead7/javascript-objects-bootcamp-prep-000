var playlist = new Object({AAA:"170"});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  return Object.assign({}, {delete playlist.artistName;})
}