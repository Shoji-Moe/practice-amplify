/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function TableHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1020px"
      height="45px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "TableHeader")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="8px"
        height="11px"
        position="absolute"
        top="17px"
        left="885px"
        {...getOverrideProps(overrides, "Group 824345")}
      >
        <Icon
          width="8px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
          paths={[
            {
              d: "M4 5L0 0L8 0L4 5Z",
              fill: "rgba(125,144,178,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="calc(50% - 2.5px - -3px)"
          left="calc(50% - 4px - 0px)"
          {...getOverrideProps(overrides, "Polygon 14346")}
        ></Icon>
        <Icon
          width="8px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
          paths={[
            {
              d: "M4 0L0 5L8 5L4 0Z",
              fill: "rgba(125,144,178,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="calc(50% - 2.5px - 3px)"
          left="calc(50% - 4px - 0px)"
          {...getOverrideProps(overrides, "Polygon 24347")}
        ></Icon>
      </View>
      <View
        width="8px"
        height="11px"
        position="absolute"
        top="17px"
        left="129px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Shape/Sort")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="8px"
          height="11px"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 824353")}
        >
          <Icon
            width="8px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
            paths={[
              {
                d: "M4 5L0 0L8 0L4 5Z",
                fill: "rgba(125,144,178,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="calc(50% - 2.5px - -3px)"
            left="calc(50% - 4px - 0px)"
            {...getOverrideProps(overrides, "Polygon 14354")}
          ></Icon>
          <Icon
            width="8px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
            paths={[
              {
                d: "M4 0L0 5L8 5L4 0Z",
                fill: "rgba(125,144,178,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="calc(50% - 2.5px - 3px)"
            left="calc(50% - 4px - 0px)"
            {...getOverrideProps(overrides, "Polygon 24355")}
          ></Icon>
        </View>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,111,137,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.45px"
        width="150px"
        position="absolute"
        top="15px"
        left="80px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="日付"
        {...getOverrideProps(overrides, "\u65E5\u4ED8")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,111,137,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.45px"
        width="150px"
        position="absolute"
        top="15px"
        left="250px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="証券番号"
        {...getOverrideProps(overrides, "\u8A3C\u5238\u756A\u53F7")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,111,137,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.45px"
        width="100px"
        position="absolute"
        top="16px"
        left="382px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="URI"
        {...getOverrideProps(overrides, "URI")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,111,137,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.45px"
        width="100px"
        position="absolute"
        top="16px"
        left="608px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="書類ID"
        {...getOverrideProps(overrides, "\u66F8\u985EID")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,111,137,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.45px"
        width="100px"
        position="absolute"
        top="15px"
        left="780px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Status"
        {...getOverrideProps(overrides, "Status")}
      ></Text>
    </View>
  );
}
