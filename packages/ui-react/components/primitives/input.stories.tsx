import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/primitives/input";

const meta = {
	title: "Primitives/Input",
	component: Input,
	parameters: {
		a11y: {
			config: {
				rules: [
					{
						id: "label",
						enabled: false,
					},
				],
			},
		},
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithPlaceholder: Story = {
	args: {
		placeholder: "Placeholder",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		value: "Text",
	},
};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
		value: "Text",
	},
};

export const Sizes: Story = {
	args: {},
	render(args, _context) {
		const sizes = ["sm", "md", "lg"] as const;

		return (
			<section className="flex flex-col gap-y-2">
				{sizes.map((size) => {
					return <Input key={size} {...args} placeholder={size} size={size} />;
				})}
			</section>
		);
	},
};
