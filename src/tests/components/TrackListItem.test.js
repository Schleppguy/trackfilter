import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TrackListItem from '../../components/TrackListItem';
import exampleTracks from '../../exampleTracks.json';

Enzyme.configure({ adapter: new Adapter() });

describe('<TrackListItem />', () => {
  it('should render the track title', () => {
    const wrapper = shallow(<TrackListItem track={exampleTracks[1]} />);
    expect(
      wrapper
        .find('a')
        .at(1)
        .text()
    ).toBe('Total Mass Retain');
  });

  it('should render the artist name', () => {
    const wrapper = shallow(<TrackListItem track={exampleTracks[1]} />);
    expect(
      wrapper
        .find('a')
        .at(0)
        .text()
    ).toBe('kikipopo');
  });
});
