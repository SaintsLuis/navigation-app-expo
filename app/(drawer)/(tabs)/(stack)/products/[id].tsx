import { useLocalSearchParams, Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { products } from '~/store/products.store';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.title,
        }}
      />

      <View className="mt-2 px-5">
        <Text className="font-work-black text-2xl">{product.title}</Text>
        <Text className="mt-2">{product.description}</Text>
        <Text className="mt-2 font-work-black">${product.price}</Text>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
