/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@aws-amplify/ui-react";
export default function Suspect(props) {
  const { suspect, appCase, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: suspect?.id });
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      id={suspect?.id}
      {...getOverrideProps(overrides, "Suspect")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="960px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Suspect38791625")}
      >
        <Image
          width="400px"
          height="351px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="32px 32px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Information about this suspect"
                {...getOverrideProps(
                  overrides,
                  "Information about this evidence"
                )}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={suspect?.suspect_name}
              {...getOverrideProps(overrides, "Title - Fingerprint Images")}
            ></Text>
          </Flex>
          <Divider
            width="40px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Features")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"Suspect Background: "}${
                suspect?.suspect_background_information
              }`}
              {...getOverrideProps(
                overrides,
                "Information about this evidence."
              )}
            ></Text>
          </Flex>
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            variation="default"
            children={appCase?.case_title}
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
          <Button
            width="496px"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="View"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
