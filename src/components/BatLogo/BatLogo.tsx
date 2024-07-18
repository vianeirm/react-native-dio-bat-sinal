import React from 'react';
import { Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.jpg'

export function BatLogo() {
  return (
    <>
        <Image source={batLogo} />
    </>
  );
}