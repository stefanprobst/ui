"use client";

import { createContext, type ReactNode, use } from "react";

type SizeContextValue = "sm" | "md" | "lg";

const SizeContext = createContext<SizeContextValue>("md");

interface SizeProviderProps {
	children: ReactNode;
	size: SizeContextValue;
}

export function SizeProvider(props: Readonly<SizeProviderProps>): ReactNode {
	const { children, size } = props;

	return <SizeContext value={size}>{children}</SizeContext>;
}

export function useSize(): SizeContextValue {
	const value = use(SizeContext);

	return value;
}
