"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

export const textInputStyles = styles({
	base: [
		"rounded-md border border-stroke-strong text-text-strong placeholder:text-text-weaker",
		"outline-stroke-focus focus:outline-2 focus:outline-offset-0 focus:outline-solid",
		"disabled:border-stroke-disabled disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["gap-x-2 px-2.5 py-[calc(--spacing(2)-1px)] text-sm/5"],
			md: ["gap-x-2 px-3 py-[calc(--spacing(2)-1px)] text-base/6"],
			lg: ["gap-x-2 px-3.5 py-[calc(--spacing(2.5)-1px)] text-base/6"],
		},
	},
	defaults: {
		size: "md",
	},
});

type TextInputStylesProps = GetVariantProps<typeof textInputStyles>;

interface TextInputProps extends Omit<AriaInputProps, "size">, TextInputStylesProps {}

export function TextInput(props: Readonly<TextInputProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaInput
			{...rest}
			className={composeRenderProps(className, (className) => {
				return textInputStyles({ className, size });
			})}
		>
			{children}
		</AriaInput>
	);
}
