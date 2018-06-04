import {
  isIncluded,
  filterByTrackName,
  filterByArtistName,
  filterTrackList
} from '../../containers/TrackList';
import exampleTracks from '../../exampleTracks';
import { defaultState } from '../../reducers/client';

const track = exampleTracks[0];

describe('isIncluded', () => {
  it('should return true', () => {
    expect(isIncluded('FulL', ' UL')).toBe(true);
  });

  it('should return false', () => {
    expect(isIncluded('full', 'at')).toBe(false);
  });
});

describe('filterByTrackName', () => {
  it('should return true when field is an empty string', () => {
    expect(filterByTrackName(track, { byTrackName: '' })).toBe(true);
  });

  it('should return false when field is not included in the track name', () => {
    expect(filterByTrackName(track, { byTrackName: 'xyzpdq' })).toBe(false);
  });

  it('should return true when field is included in the track name', () => {
    expect(filterByTrackName(track, { byTrackName: 'Techno 64' })).toBe(true);
  });
});

describe('filterByArtistName', () => {
  it('should return true when field is an empty string', () => {
    expect(filterByArtistName(track, { byArtistName: '' })).toBe(true);
  });

  it('should return false when field is not included in the track name', () => {
    expect(filterByArtistName(track, { byArtistName: 'xyzpdq' })).toBe(false);
  });

  it('should return true when field is included in the track name', () => {
    expect(filterByArtistName(track, { byArtistName: 'Gabriel' })).toBe(true);
  });
});

describe('filterTrackList', () => {
  it('should return the full track list in the defaultState', () => {
    expect(filterTrackList(exampleTracks, defaultState.filters)).toEqual(
      expect.arrayContaining(exampleTracks)
    );
  });

  it('should return 5 tracks for a track name search for "frisky"', () => {
    expect(
      filterTrackList(exampleTracks, {
        byTrackName: 'frisky',
        byArtistName: ''
      })
    ).toHaveLength(5);
  });

  it('should return 1 tracks for a track name search for "frisky" AND artist name search of "High"', () => {
    expect(
      filterTrackList(exampleTracks, {
        byTrackName: 'frisky',
        byArtistName: 'High'
      })
    ).toHaveLength(1);
  });
});
