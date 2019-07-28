import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProgressBar from "./ProgressBar";
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

describe("ProgressBar", () => {
	test("width 500 with percentage 20% should return 100", () => {
		const wrapper = Enzyme.shallow(
			<ProgressBar percent={20} width={500} height={100} />
		);
		const width = wrapper.instance().getWidthAsPercentInTotalWidth();
		expect(width).toEqual(100);
	});
});

describe("ProgressBar - snapshot testing", () => {
	const tree = renderer
		.create(<ProgressBar percent={20} width={500} height={100} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
