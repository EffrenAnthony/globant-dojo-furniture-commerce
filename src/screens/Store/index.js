import React from 'react';
import {SafeAreaView} from 'react-native';
import {CollectionList, Header, LanguageSwitch} from '../../components';
import {withFurnitures} from '../../hocs/withFurnitures';
import ProductList from '../../components/ProductList';

const Store = ({collections, products, setQuery}) => {
  return (
    <SafeAreaView>
      <LanguageSwitch />
      <Header />
      <CollectionList collections={collections} setQuery={setQuery} />
      <ProductList products={products} />
    </SafeAreaView>
  );
};
const StoreWithFurnitures = withFurnitures(Store);
export default StoreWithFurnitures;
