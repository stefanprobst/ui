"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components";

interface LabelProps extends AriaLabelProps {}

export function Label(props: Readonly<LabelProps>): ReactNode {
	const { children, className, ...rest } = props;

	if (children == null) {
		return null;
	}

	return (
		<AriaLabel
			{...rest}
			className={cn("inline-flex gap-x-1.5 text-sm font-strong text-text-strong", className)}
		>
			{children}
		</AriaLabel>
	);
}
