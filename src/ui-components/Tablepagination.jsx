/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Tablepagination(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="103px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Tablepagination")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="93px"
        height="20px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 843")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="0px"
          left="0px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 850")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="20px"
            overflow="hidden"
            position="relative"
            boxShadow="0px 0px 0px rgba(0.27450981736183167, 0.30849677324295044, 0.3764705955982208, 0.23999999463558197)"
            borderRadius="6px"
            padding="2px 4px 2px 4px"
            backgroundColor="rgba(247,249,252,1)"
            {...getOverrideProps(overrides, "Button4866")}
          >
            <View
              width="16px"
              height="16px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "left")}
            ></View>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="500"
            color="rgba(104,113,130,1)"
            lineHeight="18px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.21px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1/10"
            {...getOverrideProps(overrides, "1/10")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="20px"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Button4869")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="20px"
              overflow="hidden"
              position="relative"
              boxShadow="0px 1px 1px rgba(0, 0, 0, 0.10000000149011612)"
              borderRadius="6px"
              padding="2px 4px 2px 4px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Button4870")}
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
