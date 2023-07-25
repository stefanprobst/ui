"use client";

import { type ComponentPropsWithRef, Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { Button } from "@/components/primitives/button";
import { PendingIndicator } from "@/components/primitives/pending-indicator";

interface PendingButtonProps extends ComponentPropsWithRef<typeof Button> {}

export function PendingButton(props: Readonly<PendingButtonProps>): ReactNode {
	const { children, ...rest } = props;

	return (
		<Button {...rest}>
			{composeRenderProps(children, (children, renderProps) => {
				const { isPending } = renderProps;

				return (
					<Fragment>
						{isPending ? <PendingIndicator /> : null}
						{children}
					</Fragment>
				);
			})}
		</Button>
	);
}
