import type { ComponentPropsWithRef, ReactNode } from "react";

import { FieldDescription } from "@/components/primitives/field-description";
import { FieldError } from "@/components/primitives/field-error";
import { Label } from "@/components/primitives/label";
import { TextInput } from "@/components/primitives/text-input";
import { TextInputField } from "@/components/primitives/text-input-field";

interface TextInputFormFieldProps extends ComponentPropsWithRef<typeof TextInputField> {
	description?: ReactNode;
	error?: ReactNode;
	label: ReactNode;
	placeholder?: string;
}

export function TextInputFormField(props: Readonly<TextInputFormFieldProps>): ReactNode {
	const { description, error, label, placeholder, ...rest } = props;

	return (
		<TextInputField {...rest}>
			<Label>{label}</Label>
			<FieldError>{error}</FieldError>
			<TextInput placeholder={placeholder} />
			<FieldDescription>{description}</FieldDescription>
		</TextInputField>
	);
}
