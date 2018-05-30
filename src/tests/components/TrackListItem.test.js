import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrackListItem from '../../components/TrackListItem';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import exampleTracks from '../../exampleTracks.json';

Enzyme.configure({ adapter: new Adapter() });

describe('<TrackListItem />', () => {
  it('should render one <Card /> component', () => {
    const wrapper = shallow(<TrackListItem track={exampleTracks[1]} />);
    console.log(wrapper);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
  it('should render one <CardTitle /> component', () => {
    const wrapper = shallow(<TrackListItem track={exampleTracks[1]} />);
    console.log(wrapper.debug());
    expect(wrapper.find(CardTitle)).toHaveLength(1);
  });
});
