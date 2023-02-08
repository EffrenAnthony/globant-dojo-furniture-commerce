import {
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {DEFAULT_QUERY} from '../../../util/constants';
import {capitalize} from 'lodash';

const CollectionItem = ({item, setQuery, currentQuery}) => {
  const textDecorationLine = {
    textDecorationLine:
      (currentQuery === item.name ||
        (currentQuery === DEFAULT_QUERY && item.name === 'all')) &&
      true,
  };
  const labelStyles = {
    fontFamily:
      currentQuery === item.name ||
      (currentQuery === DEFAULT_QUERY && item.name === 'all')
        ? 'Lato_900Black'
        : 'Lato_400Regular',
    ...styles.label,
  };
  const handleSetQuery = () => {
    if (item.name === 'all') {
      setQuery({
        query: DEFAULT_QUERY,
        maxPrice: item.maxPrice,
        minPrice: item.minPrice,
      });
      return;
    }
    setQuery({
      query: item.name,
      maxPrice: item.maxPrice,
      minPrice: item.minPrice,
    });
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={handleSetQuery}>
        <Text
          style={[labelStyles, Platform.OS === 'ios' && textDecorationLine]}>
          {capitalize(item.name)}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#898989',
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 15,
  },
});
export default CollectionItem;
