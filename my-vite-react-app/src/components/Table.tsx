import { CompactTable } from "@table-library/react-table-library/compact";

export default function Table() {
const nodes = [
  {
    id: 1,
    endTime: "2022-04-11 17:09",
    artistName: "Coldplay",
    trackName: "People of The Pride",
    msPlayed: 203079,
  },
];

  const data = { nodes };

  const COLUMNS = [
    { label: "Id", renderCell: (item: any) => item.id },
    { label: "End Time", renderCell: (item: any) => item.endTime },
    { label: "Artist Name", renderCell: (item: any) => item.artistName },
    { label: "Track Name", renderCell: (item: any) => item.trackName },
    { label: "Minutes Played", renderCell: (item: any) => item.msPlayed },
  ];

  return <CompactTable columns={COLUMNS} data={data} />;
}
