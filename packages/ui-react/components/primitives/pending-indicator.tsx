"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components";

export const pendingIndicatorStyles = styles({
	base: [],
	variants: {
		size: {
			xs: [],
			sm: [],
			md: [],
			lg: [],
			xl: [],
			"2xl": [],
		},
	},
	defaults: {
		size: "md",
	},
});

type PendingIndicatorStylesProps = GetVariantProps<typeof pendingIndicatorStyles>;

interface PendingIndicatorProps extends AriaProgressBarProps, PendingIndicatorStylesProps {}

export function PendingIndicator(props: Readonly<PendingIndicatorProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaProgressBar
			{...rest}
			className={composeRenderProps(className, (className) => {
				return pendingIndicatorStyles({ className, size });
			})}
		>
			{children}
		</AriaProgressBar>
	);
}
