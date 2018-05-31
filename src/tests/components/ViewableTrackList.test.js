import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ViewableTrackList from '../../components/ViewableTrackList';
import TrackListItem from '../../components/TrackListItem';
import exampleTracks from '../../exampleTracks.json';

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewableTrackList />', () => {
  it('should render 50 TrackListItems when given 50 tracks', () => {
    const wrapper = shallow(<ViewableTrackList trackList={exampleTracks} />);
    expect(wrapper.find(TrackListItem)).toHaveLength(50);
  });

  it('should render 0 TrackListItems when given an empty trackList', () => {
    const wrapper = shallow(<ViewableTrackList trackList={[]} />);
    expect(wrapper.find(TrackListItem)).toHaveLength(0);
  });
});
