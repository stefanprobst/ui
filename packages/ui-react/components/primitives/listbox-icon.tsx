"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentPropsWithRef, ReactNode } from "react";

interface ListBoxIconProps
	extends Omit<ComponentPropsWithRef<typeof ChevronDownIcon>, "children"> {}

export function ListBoxIcon(props: Readonly<ListBoxIconProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<ChevronDownIcon
			{...rest}
			aria-hidden={true}
			className={cn(
				"-mr-1 shrink-0 self-center text-icon-neutral group-disabled:text-icon-disabled",
				className,
			)}
			data-slot="icon"
		/>
	);
}
