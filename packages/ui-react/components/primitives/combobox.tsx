"use client";

import { cn, type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
	Group as AriaGroup,
	type GroupProps as AriaGroupProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

export const comboBoxInputGroupStyles = styles({
	base: [
		"group relative isolate inline-flex items-baseline justify-between rounded-md border border-stroke-strong text-left whitespace-nowrap transition select-none",
		"outline-stroke-focus focus-within:outline-2 focus-within:outline-offset-0 focus-visible:outline-solid forced-colors:outline-[Highlight]",
		"disabled:border-stroke-disabled disabled:forced-colors:text-[GrayText]",
	],
	variants: {
		size: {
			sm: ["gap-x-2 px-2.5 py-[calc(--spacing(2)-1px)] text-sm/5", "**:data-[slot=icon]:size-4"],
			md: ["gap-x-2 px-3 py-[calc(--spacing(2)-1px)] text-base/6", "**:data-[slot=icon]:size-4"],
			lg: [
				"gap-x-2 px-3.5 py-[calc(--spacing(2.5)-1px)] text-base/6",
				"**:data-[slot=icon]:size-5",
			],
		},
	},
	defaults: {
		size: "md",
	},
});

type ComboBoxInputGroupStylesProps = GetVariantProps<typeof comboBoxInputGroupStyles>;

interface ComboBoxInputGroupProps extends AriaGroupProps, ComboBoxInputGroupStylesProps {}

export function ComboBoxInputGroup(props: Readonly<ComboBoxInputGroupProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaGroup
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxInputGroupStyles({ className, size });
			})}
		>
			{children}
		</AriaGroup>
	);
}

interface ComboBoxInputProps extends AriaInputProps {}

export function ComboBoxInput(props: Readonly<ComboBoxInputProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaInput
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("placeholder:text-text-weaker focus:outline-hidden", className);
			})}
		>
			{children}
		</AriaInput>
	);
}

interface ComboBoxButtonProps extends AriaButtonProps {}

export function ComboBoxButton(props: Readonly<ComboBoxButtonProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("self-center focus:outline-hidden", className);
			})}
		>
			{children}
		</AriaButton>
	);
}
