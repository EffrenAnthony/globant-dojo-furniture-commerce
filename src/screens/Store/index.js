import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  CollectionList,
  Header,
  LanguageSwitch,
  ProductList,
} from '../../components/Store';
import {withFurnitures} from '../../hocs/withFurnitures';

const Store = ({collections, products, setQuery, currentQuery}) => {
  return (
    <SafeAreaView>
      <LanguageSwitch />
      <ScrollView>
        <Header />
        <CollectionList
          collections={collections}
          setQuery={setQuery}
          currentQuery={currentQuery}
        />
        <ProductList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};
const StoreWithFurnitures = withFurnitures(Store);
export default StoreWithFurnitures;
