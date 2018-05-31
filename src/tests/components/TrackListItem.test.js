import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TrackListItem from '../../components/TrackListItem';
import exampleTracks from '../../exampleTracks.json';

Enzyme.configure({ adapter: new Adapter() });

describe('<TrackListItem />', () => {
  it('should render the track title', () => {
    const wrapper = render(<TrackListItem track={exampleTracks[1]} />);
    expect(wrapper.find('h5').text()).toBe('Total Mass Retain');
  });

  it('should render the artist name', () => {
    const wrapper = render(<TrackListItem track={exampleTracks[1]} />);
    expect(wrapper.find('p').text()).toBe('kikipopo');
  });
});
