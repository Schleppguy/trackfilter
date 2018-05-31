import { isIncluded } from '../../containers/TrackList';

describe('isIncluded', () => {
  it('should return true', () => {
    expect(isIncluded('FulL', ' UL')).toBe(true);
  });

  it('should return false', () => {
    expect(isIncluded('full', 'at')).toBe(false);
  });
});
