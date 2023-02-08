import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionList = ({collections, setQuery, currentQuery}) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        horizontal
        data={collections}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CollectionItem
            item={item}
            setQuery={setQuery}
            currentQuery={currentQuery}
          />
        )}
      />
    </View>
  );
};

export default CollectionList;

const styles = StyleSheet.create({
  list: {
    maxHeight: 110,
    paddingHorizontal: 16,
    marginHorizontal: 15,
  },
});
