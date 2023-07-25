"use client";

import type { ComponentPropsWithRef, ReactNode } from "react";
import { useFormStatus } from "react-dom";

import { PendingButton } from "@/components/primitives/pending-button";

interface SubmitButtonProps extends ComponentPropsWithRef<typeof PendingButton> {}

export function SubmitButton(props: Readonly<SubmitButtonProps>): ReactNode {
	const { children, isPending, ...rest } = props;

	const formStatus = useFormStatus();

	return (
		<PendingButton {...rest} isPending={isPending === true || formStatus.pending}>
			{children}
		</PendingButton>
	);
}
