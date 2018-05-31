import { isIncluded } from '../../containers/TrackList';

describe('isIncluded', () => {
  it('should return true', () => {
    expect(isIncluded('full', 'ul')).toBe(true);
  });
});
