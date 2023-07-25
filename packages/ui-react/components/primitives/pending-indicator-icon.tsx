"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { Loader2Icon } from "lucide-react";
import type { ComponentPropsWithRef, ReactNode } from "react";

interface PendingIndicatorIconProps
	extends Omit<ComponentPropsWithRef<typeof Loader2Icon>, "children"> {}

export function PendingIndicatorIcon(props: Readonly<PendingIndicatorIconProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<Loader2Icon
			{...rest}
			aria-hidden={true}
			className={cn("shrink-0 animate-spin", className)}
			data-slot="icon"
		/>
	);
}
