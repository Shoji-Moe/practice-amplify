/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Search(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="514px"
      height="51px"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05999999865889549)"
      borderRadius="6px"
      padding="6px 12px 6px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Search")}
    >
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Search4911")}
      >
        <Icon
          width="14px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
          paths={[
            {
              d: "M9.68208 10.7458C8.66576 11.5361 7.38866 12.0067 6.00167 12.0067C2.68704 12.0067 0 9.31891 0 6.00335C0 2.68779 2.68704 0 6.00167 0C9.31631 0 12.0033 2.68779 12.0033 6.00335C12.0033 7.39059 11.533 8.66794 10.743 9.6845L13.7799 12.7186C14.0731 13.0115 14.0734 13.4867 13.7806 13.7799C13.4878 14.0731 13.0128 14.0734 12.7196 13.7805L9.68208 10.7458ZM10.5029 6.00335C10.5029 8.49002 8.48765 10.5059 6.00167 10.5059C3.5157 10.5059 1.50042 8.49002 1.50042 6.00335C1.50042 3.51668 3.5157 1.50084 6.00167 1.50084C8.48765 1.50084 10.5029 3.51668 10.5029 6.00335Z",
              fill: "rgba(134,143,160,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="6.25%"
          bottom="6.25%"
          left="6.25%"
          right="6.25%"
          {...getOverrideProps(overrides, "icon")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(161,169,184,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="466px"
        grow="1"
        basis="466px"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="証券番号"
        {...getOverrideProps(overrides, "\u8A3C\u5238\u756A\u53F7")}
      ></Text>
    </Flex>
  );
}
