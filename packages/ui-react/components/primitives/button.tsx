"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

export const buttonStyles = styles({
	base: [
		"relative isolate inline-flex items-baseline justify-center rounded-md border text-center font-strong whitespace-nowrap transition select-none",
		"outline-stroke-focus focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid forced-colors:outline-[Highlight]",
		"pending:cursor-not-allowed",
		"disabled:forced-colors:text-[GrayText]",
		"*:data-[slot=icon]:first:-ml-1 *:data-[slot=icon]:last:-mr-1",
	],
	variants: {
		size: {
			xs: [
				"gap-x-2 px-3 py-[calc(--spacing(1.75)-1px)] text-xs/4.5",
				"*:data-[slot=icon]:size-3.5",
			],
			sm: ["gap-x-2 px-3.5 py-[calc(--spacing(2)-1px)] text-sm/5", "*:data-[slot=icon]:size-4"],
			md: ["gap-x-2 px-4 py-[calc(--spacing(2.5)-1px)] text-sm/5", "*:data-[slot=icon]:size-4"],
			lg: [
				"gap-x-2 px-4.5 py-[calc(--spacing(2.5)-1px)] text-base/6",
				"*:data-[slot=icon]:size-4.5",
			],
			xl: ["gap-x-2.5 px-5 py-[calc(--spacing(3)-1px)] text-base/6", "*:data-[slot=icon]:size-4.5"],
			"2xl": [
				"gap-x-3 px-7 py-[calc(--spacing(5)-1px)] text-base/6",
				"*:data-[slot=icon]:size-4.5",
			],
		},
		tone: {
			brand: [
				"[--_button-color-icon:var(--color-icon-brand)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-brand-strong)] [--_button-color-weak:var(--color-fill-brand-weak)]",
			],
			neutral: [
				"[--_button-color-icon:var(--color-icon-neutral)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-strong)] [--_button-color-weak:var(--color-fill-weak)]",
			],
			inverse: [
				"[--_button-color-icon:var(--color-icon-inverse)] [--_button-color-inverse:var(--color-text-strong)] [--_button-color-strong:var(--color-fill-inverse-strong)] [--_button-color-weak:var(--color-fill-inverse-weak)]",
			],
			negative: [
				"[--_button-color-icon:var(--color-icon-negative)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-negative-strong)] [--_button-color-weak:var(--color-fill-negative-weak)]",
			],
			positive: [
				"[--_button-color-icon:var(--color-icon-positive)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-positive-strong)] [--_button-color-weak:var(--color-fill-positive-weak)]",
			],
			warning: [
				"[--_button-color-icon:var(--color-icon-notice)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-warning-strong)] [--_button-color-weak:var(--color-fill-warning-weak)]",
			],
			informative: [
				"[--_button-color-icon:var(--color-icon-informative)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-informative-strong)] [--_button-color-weak:var(--color-fill-informative-weak)]",
			],
		},
		variant: {
			solid: [
				"border-transparent bg-(--_button-color-strong) text-(--_button-color-inverse) shadow-raised",
				"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition hover:after:bg-fill-hover pressed:shadow-none pressed:after:bg-fill-press",
				"disabled:bg-fill-disabled disabled:shadow-none",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			subtle: [
				"border-transparent bg-(--_button-color-weak)",
				"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition hover:after:bg-fill-hover pressed:after:bg-fill-press",
				"disabled:text-text-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			outline: [
				"border-(--_button-color-strong) text-(--_button-color-strong) shadow-raised",
				"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition hover:after:bg-fill-hover pressed:shadow-none pressed:after:bg-fill-press",
				"disabled:border-stroke-disabled disabled:text-text-disabled disabled:shadow-none",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			plain: [
				"border-transparent",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
				"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition hover:after:bg-fill-hover pressed:after:bg-fill-press",
				"disabled:text-text-disabled",
			],
			text: [
				"border-transparent text-(--_button-color-strong) underline",
				"hover:no-underline pressed:no-underline",
				"disabled:text-text-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
		tone: "neutral",
		variant: "solid",
	},
});

type ButtonStylesProps = GetVariantProps<typeof buttonStyles>;

interface ButtonProps extends AriaButtonProps, ButtonStylesProps {}

export function Button(props: Readonly<ButtonProps>): ReactNode {
	const { children, className, size, tone, variant, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return buttonStyles({ className, size, tone, variant });
			})}
		>
			{children}
		</AriaButton>
	);
}
