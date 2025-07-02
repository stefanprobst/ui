import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react";

import { Label } from "@/components/primitives/label";
import { RequiredIndicatorIcon } from "@/components/primitives/required-indicator-icon";

const meta = {
	title: "Primitives/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Label",
	},
};

export const WithRequiredIndicator: Story = {
	args: {
		children: (
			<Fragment>
				Label <RequiredIndicatorIcon />
			</Fragment>
		),
	},
};
