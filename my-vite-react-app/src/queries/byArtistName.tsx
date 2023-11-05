import { Artist } from "../components/FormComponent";

export const getByArtistName = (artistName: string, formattedJSONData: any) => {
    const byArtistResults: Artist[] = [];
    formattedJSONData
      ?.filter((entry: Artist) => entry.artistName === artistName)
      .map((artist: Artist) => ({
        artistName: artist.artistName,
        trackName: artist.trackName,
        msPlayed: artist.msPlayed,
      }))
      .forEach((element: Artist) => {
        const filteredByTrackName = byArtistResults.filter(
          (result) => result.trackName === element.trackName
        );

        if (filteredByTrackName.length === 0) {
          byArtistResults.push(element);
        }
      });
}