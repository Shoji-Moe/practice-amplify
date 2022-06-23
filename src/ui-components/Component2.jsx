/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="80px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component2")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(74,87,206,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="35%"
        bottom="8.75%"
        left="5.76%"
        right="76.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="イベントDB参照"
        {...getOverrideProps(
          overrides,
          "\u30A4\u30D9\u30F3\u30C8DB\u53C2\u7167"
        )}
      ></Text>
      <Image
        position="absolute"
        top="10%"
        bottom="18.75%"
        height="71.25%"
        left="75.56%"
        right="19.58%"
        width="4.86%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "iconmonstr-menu-lined-240 1")}
      ></Image>
      <Image
        position="absolute"
        top="20%"
        bottom="18.75%"
        height="61.25%"
        left="1.46%"
        right="95.14%"
        width="3.4%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "iconmonstr-home-6-240 1")}
      ></Image>
    </View>
  );
}
