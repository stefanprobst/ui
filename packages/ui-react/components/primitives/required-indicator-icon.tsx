"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { AsteriskIcon } from "lucide-react";
import type { ComponentPropsWithRef, ReactNode } from "react";

interface RequiredIndicatorIconProps
	extends Omit<ComponentPropsWithRef<typeof AsteriskIcon>, "children"> {}

export function RequiredIndicatorIcon(props: Readonly<RequiredIndicatorIconProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<AsteriskIcon
			{...rest}
			aria-hidden={true}
			className={cn("mt-px size-[0.75em] shrink-0 self-start", className)}
			data-slot="icon"
		/>
	);
}
