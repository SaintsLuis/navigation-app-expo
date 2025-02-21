import { Redirect } from 'expo-router';
import React from 'react';

const index = () => {
  // return <Redirect href="/(stack)/home" />;
  // return <Redirect href="/tabs" />;

  return (
    <Redirect href="/home" /> // "/(drawer)/(tabs)/(stack)/home"
    // <Redirect
    //   href={{
    //     pathname: '/tabs/(stack)/home',
    //   }}
    // />
  );
  // return (
  //   <SafeAreaView>
  //     <View className="mx-2.5 mt-6 bg-white">
  //       <Text className="font-work-black text-primary">Hola Mundo!</Text>
  //       <Text className="text-secondary-100 text-3xl">Hola Mundo!</Text>

  //       <Link href="/products">Products</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default index;
