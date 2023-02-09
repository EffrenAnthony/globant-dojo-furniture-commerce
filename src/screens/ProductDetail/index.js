import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {withLayout} from '../../hocs/withLayout';
import {ProductView} from '../../components/ProductDetail';
const ProductDetail = props => {
  const {
    route: {params},
    navigation,
  } = props;
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={styles.header}>
          <Icon
            name="chevron-left"
            color="#4398D1"
            size={25}
            style={styles.leftIcon}
            onPress={navigation.goBack}
          />
          <Icon
            name="heart"
            color="#4398D1"
            size={25}
            style={styles.rightIcon}
            onPress={() => {}}
          />
        </View>
      ),
    });
  }, [navigation]);
  return <ProductView {...params} />;
};

const ProductDetailWithLayout = withLayout(ProductDetail);

export default ProductDetailWithLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    marginTop: 80,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  leftIcon: {
    marginLeft: 20,
    marginBottom: 5,
  },
  rightIcon: {
    marginRight: 20,
    marginBottom: 5,
  },
});
