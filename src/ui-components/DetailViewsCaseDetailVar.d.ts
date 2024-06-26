/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailViewsCaseDetailVarOverridesProps = {
    DetailViewsCaseDetailVar?: PrimitiveOverrideProps<FlexProps>;
    main?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4373"?: PrimitiveOverrideProps<FlexProps>;
    header3906849?: PrimitiveOverrideProps<FlexProps>;
    header3906850?: PrimitiveOverrideProps<FlexProps>;
    "Case Information"?: PrimitiveOverrideProps<TextProps>;
    subHeader?: PrimitiveOverrideProps<FlexProps>;
    "Created Date"?: PrimitiveOverrideProps<TextProps>;
    "09-09-0000"?: PrimitiveOverrideProps<TextProps>;
    Divider3906861?: PrimitiveOverrideProps<DividerProps>;
    DataRow3906862?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Case Title"?: PrimitiveOverrideProps<TextProps>;
    "Case Offense"?: PrimitiveOverrideProps<TextProps>;
    Felony?: PrimitiveOverrideProps<TextProps>;
    Divider3906867?: PrimitiveOverrideProps<DividerProps>;
    DataRow3906868?: PrimitiveOverrideProps<FlexProps>;
    "Case Offesne Category"?: PrimitiveOverrideProps<TextProps>;
    Financial?: PrimitiveOverrideProps<TextProps>;
    Divider3906973?: PrimitiveOverrideProps<DividerProps>;
    DataRow3906970?: PrimitiveOverrideProps<FlexProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    "This is the Description"?: PrimitiveOverrideProps<TextProps>;
    Divider3906873?: PrimitiveOverrideProps<DividerProps>;
    "Delete Account"?: PrimitiveOverrideProps<FlexProps>;
    header3906945?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DetailViewsCaseDetailVarProps = React.PropsWithChildren<Partial<FlexProps> & {
    appcase?: any;
} & {
    overrides?: DetailViewsCaseDetailVarOverridesProps | undefined | null;
}>;
export default function DetailViewsCaseDetailVar(props: DetailViewsCaseDetailVarProps): React.ReactElement;
