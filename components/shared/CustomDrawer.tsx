import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="mx-3 mb-10 flex h-[150px] items-center justify-center rounded-xl bg-primary p-10">
        <View className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <Text className="font-work-black text-3xl text-primary">LS</Text>
        </View>
      </View>

      {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
