import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextArea } from "@/components/primitives/text-area";

const meta = {
	title: "Primitives/TextArea",
	component: TextArea,
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
} satisfies Meta<typeof TextArea>;

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
					return <TextArea key={size} {...args} placeholder={size} size={size} />;
				})}
			</section>
		);
	},
};
