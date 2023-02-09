import React from 'react';
import {ScrollView} from 'react-native';
import {CollectionList, Header, ProductList} from '../../components/Store';
import {withFurnitures} from '../../hocs/withFurnitures';
import {withLayout} from '../../hocs/withLayout';

const Store = ({collections, products, setQuery, currentQuery}) => {
  return (
    <ScrollView>
      <Header />
      <CollectionList
        collections={collections}
        setQuery={setQuery}
        currentQuery={currentQuery}
      />
      <ProductList products={products} />
    </ScrollView>
  );
};

const StoreWithFurnitures = withFurnitures(Store);
const StoreWithFurnituresAndLayout = withLayout(StoreWithFurnitures);

export default StoreWithFurnituresAndLayout;
