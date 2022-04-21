import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
    >
      Geoboost
      <Text as='span' color='blue.900' ml='1'>!</Text>
    </Text>
    </>
  );
}