export default function Button({ onClick }:any) {
  return (
    <button
      onClick={onClick}
      className="h-24 w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      Submit
    </button>
  );
}