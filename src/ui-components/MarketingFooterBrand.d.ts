/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MarketingFooterBrandOverridesProps = {
    MarketingFooterBrand?: PrimitiveOverrideProps<FlexProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    Cases?: PrimitiveOverrideProps<TextProps>;
    "Case Notes"?: PrimitiveOverrideProps<TextProps>;
    Suspects?: PrimitiveOverrideProps<TextProps>;
    Evidence?: PrimitiveOverrideProps<TextProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    "\u00A9 2024 Private Eye. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterBrandProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterBrandOverridesProps | undefined | null;
}>;
export default function MarketingFooterBrand(props: MarketingFooterBrandProps): React.ReactElement;
