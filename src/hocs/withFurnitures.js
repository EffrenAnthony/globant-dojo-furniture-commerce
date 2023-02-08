import React, {useEffect} from 'react';
import {getAllCollections} from '../api/collection';
import {getRandomProductsByQuery} from '../api/product';
import {DEFAULT_QUERY} from '../util/constants';

export function withFurnitures(WrappedComponent) {
  return function WrappedComponentWithFurnitures() {
    const [collections, setCollections] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [collectionQuery, setCollectionQuery] = React.useState(DEFAULT_QUERY);

    useEffect(() => {
      (async () => {
        const response = await getAllCollections();
        const collectionList = response.data.map(item => {
          return {
            id: item.id,
            name: item.attributes.collectionName,
            maxPrice: item.attributes.maxPrice,
            minPrice: item.attributes.minPrice,
          };
        });
        setCollections([...collectionList]);
      })();
    }, []);

    useEffect(() => {
      (async () => {
        const response = await getRandomProductsByQuery(collectionQuery);
        setProducts(response);
      })();
    }, [collectionQuery]);

    return (
      <WrappedComponent
        collections={collections}
        products={products}
        setQuery={setCollectionQuery}
      />
    );
  };
}
