import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {DEFAULT_QUERY} from '../../util/constants';

const CollectionItem = ({item, setQuery}) => {
  const handleSetQuery = () => {
    if (item.name === 'All') {
      setQuery(DEFAULT_QUERY);
      return;
    }
    setQuery(item.name);
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={handleSetQuery}>
        <Text style={styles.collectionItem}>{item.name}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const CollectionList = ({collections, setQuery}) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        horizontal
        data={collections}
        renderItem={({item}) => (
          <CollectionItem item={item} setQuery={setQuery} />
        )}
      />
    </View>
  );
};

export default CollectionList;

const styles = StyleSheet.create({
  list: {
    maxHeight: 110,
    paddingLeft: 16,
  },
  collectionItem: {
    paddingHorizontal: 15,
  },
});
