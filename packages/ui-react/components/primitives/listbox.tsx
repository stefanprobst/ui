"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	type ListBoxItemProps as AriaListBoxItemProps,
	type ListBoxProps as AriaListBoxProps,
} from "react-aria-components";

export const listBoxStyles = styles({
	base: ["flex flex-col"],
	variants: {
		size: {
			sm: ["p-0.5"],
			md: ["p-1"],
			lg: ["p-1.5"],
		},
	},
	defaults: {
		size: "md",
	},
});

type ListBoxStylesProps = GetVariantProps<typeof listBoxStyles>;

interface ListBoxProps<T extends object> extends AriaListBoxProps<T>, ListBoxStylesProps {}

export function ListBox<T extends object>(props: Readonly<ListBoxProps<T>>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaListBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxStyles({ className, size });
			})}
		>
			{children}
		</AriaListBox>
	);
}

export const listBoxItemStyles = styles({
	base: [
		"inline-flex whitespace-nowrap text-text-strong select-none",
		"hover:bg-fill-hover",
		"outline-stroke-focus focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid",
	],
	variants: {
		size: {
			sm: ["px-2 py-2 text-sm/5"],
			md: ["px-2 py-2 text-base/6"],
			lg: ["px-2 py-2.5 text-base/6"],
		},
	},
	defaults: {
		size: "md",
	},
});

type ListBoxItemStylesProps = GetVariantProps<typeof listBoxItemStyles>;

interface ListBoxItemProps<T extends object>
	extends AriaListBoxItemProps<T>,
		ListBoxItemStylesProps {}

export function ListBoxItem<T extends object>(props: Readonly<ListBoxItemProps<T>>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaListBoxItem
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxItemStyles({ className, size });
			})}
		>
			{children}
		</AriaListBoxItem>
	);
}
