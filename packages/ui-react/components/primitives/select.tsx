"use client";

import { cn, type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
	SelectValue as AriaSelectValue,
	type SelectValueProps as AriaSelectValueProps,
} from "react-aria-components";

export const selectButtonStyles = styles({
	base: [
		"group relative isolate inline-flex items-baseline justify-between rounded-md border border-stroke-strong text-left whitespace-nowrap transition select-none",
		"outline-stroke-focus focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-solid forced-colors:outline-[Highlight]",
		"disabled:border-stroke-disabled disabled:forced-colors:text-[GrayText]",
	],
	variants: {
		size: {
			sm: ["gap-x-2 px-2.5 py-[calc(--spacing(2)-1px)] text-sm/5", "*:data-[slot=icon]:size-4"],
			md: ["gap-x-2 px-3 py-[calc(--spacing(2)-1px)] text-base/6", "*:data-[slot=icon]:size-4"],
			lg: ["gap-x-2 px-3.5 py-[calc(--spacing(2.5)-1px)] text-base/6", "*:data-[slot=icon]:size-5"],
		},
	},
	defaults: {
		size: "md",
	},
});

type SelectButtonStylesProps = GetVariantProps<typeof selectButtonStyles>;

interface SelectButtonProps extends AriaButtonProps, SelectButtonStylesProps {}

export function SelectButton(props: Readonly<SelectButtonProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectButtonStyles({ className, size });
			})}
		>
			{children}
		</AriaButton>
	);
}

interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {}

export function SelectValue<T extends object>(props: Readonly<SelectValueProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaSelectValue
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(
					"text-text-strong placeholder-shown:text-text-weaker",
					"group-disabled:placeholder-shown:text-text-disabled",
					className,
				);
			})}
		>
			{children}
		</AriaSelectValue>
	);
}
