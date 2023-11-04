import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  file: any;
  prompt: string;
};

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Access the file content here, assuming you have a state variable for it.
    console.log("File content:", fileContent);
    console.log(data);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  const formattedJSONData = fileContent ? JSON.parse(fileContent) : undefined;

  console.log(formattedJSONData);

  const byArtistResults = [];

  const byArtist = formattedJSONData
    ?.filter((entry) => entry.artistName === "demxntia") //HARDCODED QUERY.
    .map((artist: any) => ({
      artistName: artist.artistName,
      trackName: artist.trackName,
      msPlayed: artist.msPlayed,
    }))
    .forEach((element) => {
      const filteredByTrackName = byArtistResults.filter(
        (result) => result.trackName === element.trackName
      );

      if (filteredByTrackName.length === 0) {
        byArtistResults.push(element);
      }
    });

  console.log(byArtistResults);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="file" className="block font-medium text-gray-700">
          Select a File
        </label>
        <input
          type="file"
          {...register("file", { required: "File is required" })}
          onChange={(e) => handleFileInputChange(e)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
        {errors.file && (
          <p className="text-red-500 text-sm">{errors.file.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="prompt" className="block font-medium text-gray-700">
          Input Music Data for Analysis
        </label>
        <input
          type="text"
          id="prompt"
          {...register("prompt")}
          placeholder="Type here..."
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
