import React, {useEffect} from 'react';
import {getAllCollections} from '../api/collection';
import {getRandomProductsByQuery} from '../api/product';
import {DEFAULT_QUERY} from '../util/constants';
import {capitalize} from 'lodash';
import {getRandomInt} from '../util/helpers';

export function withFurnitures(WrappedComponent) {
  return function WrappedComponentWithFurnitures(props) {
    const [collections, setCollections] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [collectionQuery, setCollectionQuery] = React.useState({
      query: DEFAULT_QUERY,
      maxPrice: 100,
      minPrice: 900,
    });

    useEffect(() => {
      (async () => {
        try {
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
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);

    useEffect(() => {
      (async () => {
        try {
          const response = await getRandomProductsByQuery(
            collectionQuery.query,
          );
          const productList = response.map(product => {
            return {
              id: product.id,
              thumbImage: product.urls.thumb,
              regularImage: product.urls.regular,
              name:
                product.alt_description &&
                collectionQuery.query !== DEFAULT_QUERY
                  ? capitalize(product.alt_description?.split(' ')[0]) +
                    ' ' +
                    capitalize(collectionQuery.query)
                  : collectionQuery.query !== DEFAULT_QUERY
                  ? capitalize(collectionQuery.query)
                  : 'Furniture',
              price: getRandomInt(
                collectionQuery.minPrice,
                collectionQuery.maxPrice,
              ),
              colors: product.color,
            };
          });
          setProducts(productList);
        } catch (e) {
          console.error(e);
        }
      })();
    }, [collectionQuery]);

    return (
      <WrappedComponent
        collections={collections}
        products={products}
        setQuery={setCollectionQuery}
        currentQuery={collectionQuery.query}
        {...props}
      />
    );
  };
}
