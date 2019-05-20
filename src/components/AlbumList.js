import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// const styles = {

// };

const AlbumList = props => {
  const [albums, setAlbums] = useState(undefined);

  useEffect(() => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        if (res.status === 200) {
          setAlbums(res.data);
          console.log(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderAlbums = () => (
    albums.map(a => 
      <AlbumDetail key={a.title} album={a} />
    )
  );

  if (!albums) { 
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else if (albums.length === 0) {
    return (
      <View>
        <Text>No Record/s Found.</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      {renderAlbums()}
    </ScrollView>
  );
};

export default AlbumList;
