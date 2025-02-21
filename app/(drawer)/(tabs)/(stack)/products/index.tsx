import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { products } from '~/store/products.store';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10 ">
            <Text className="font-work-black text-2xl">{item.title}</Text>
            <Text className="text-sm">{item.description}</Text>
            <View className="mt-2 flex flex-row justify-between">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={{
                  pathname: '/products/[id]',
                  params: { id: item.id },
                }}
                className="text-primary">
                Ver más
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
