import React from 'react';
import _ from 'lodash';
import AlbumsList from './SongsList';
const SearchResult = (props) => {
  const { result, setCategory, selectedCategory } = props;
  const { albums, artists, songs } = result;
  return (
    <React.Fragment>
      <div className="search-buttons">
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(songs.items) && (
          <button
            className={`${
              selectedCategory === 'songs' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('songs')}
          >
            Songs
          </button>
        )}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
    </React.Fragment>
  );
};
export default SearchResult;