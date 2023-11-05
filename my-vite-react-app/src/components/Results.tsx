import Table from "./Table";

export default function Results() {
  const DATA = [
    {
      id: 1,
      endTime: "2022-04-11 17:09",
      artistName: "Coldplay",
      trackName: "People of The Pride",
      msPlayed: 203079,
    },
  ];

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "End Time", accessor: "endTime" },
    { Header: "Artist Name", accessor: "artistName" },
    { Header: "Track Name", accessor: "trackName" },
    { Header: "Minutes Played", accessor: "msPlayed" },
  ];

  return (
    <div>
      <Table columns={columns} data={DATA} />
    </div>
  );
}
