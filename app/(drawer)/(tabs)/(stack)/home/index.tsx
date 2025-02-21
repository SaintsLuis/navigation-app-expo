import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import CustomButton from '~/components/shared/CustomButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="mt-5 px-10">
        <CustomButton className="mb-2" color="primary" onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton className="mb-2" color="secondary" onPress={() => router.push('/profile')}>
          Perfil
        </CustomButton>

        <CustomButton className="mb-2" color="tertiary" onPress={() => router.push('/settings')}>
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>
        {/* <Link className="mb-5" href="/products">
          Productos
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil
        </Link>
        <Link className="mb-5" href="/settings">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
