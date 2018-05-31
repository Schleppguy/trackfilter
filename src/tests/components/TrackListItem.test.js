import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TrackListItem from '../../components/TrackListItem';
import Card from 'react-toolbox/lib/card/Card';
import exampleTracks from '../../exampleTracks.json';

Enzyme.configure({ adapter: new Adapter() });

describe('<TrackListItem />', () => {
  it('should throw a TypeError when no track object is provided', () => {
    expect(() => shallow(<TrackListItem track="foo" />)).toThrow(TypeError);
  });

  it('should not throw a TypeError when a valid track object is provided', () => {
    expect(() =>
      shallow(<TrackListItem track={exampleTracks[1]} />)
    ).not.toThrow(TypeError);
  });
});
