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
  test("should render a progress bar",()=>{
    const tree = renderer
		.create(<ProgressBar percent={20} width={500} height={100} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
});


// it is silly test but just have three levels covered!

describe("ProgressBar interaction testing example" ,()=> {
  test("should have a div" ,()=> {
    const wrapper = Enzyme.shallow(
			<ProgressBar percent={20} width={500} height={100} />
    );
    expect(wrapper.find('div')).toHaveLength(2)
  })
})