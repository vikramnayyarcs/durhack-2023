import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type Artist = {
  endTime?: string;
  artistName: string;
  trackName: string;
  msPlayed: number;
};

type Inputs = {
  file: Blob;
  prompt: string;
};

interface FormComponentProps {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}




export default function FormComponent({ setShowResults }: FormComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // let sqlQuery: string | null = null;
  const [, setSelectedFile] = useState<File | null>(null);
  const [ prompt, setPrompt ] = useState("");
  const [fileContent, setFileContent] = useState<string | null>("");

  const addData = async (insertSQL: string) => {
    try{
      const response =
          await fetch('http://localhost:5001/api/insertData',{
            method:'POST',
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              insertSQL
            })
          })
      console.log(response);
    } catch (e){
      console.log(e);
    }

  };

  const getQuery = async (prompt: string) =>{
    try{
      const response =
          await fetch('http://localhost:5001/api/seacrh',{
            method:'GET',
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "searchPrompt": prompt
            })
          })
      const sqlQuery = await response.json();
      return sqlQuery as string;
    } catch (e){
      console.log(e);
    }
  };

  const getData = async (query: any) => {

      try{
          const response =
              await fetch('http://localhost:5001/api/seacrhDb',{
                  method:'POST',
                  headers:{
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      query
                  })
              })
          const data = await response.json();
          console.log(data);
          return data;
      } catch (e){
          console.log(e);
      }


  }



  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;

      if (typeof content === "string") {
        setFileContent(content);
      }
    };

    reader.readAsText(file);
  };



  const onSubmit: SubmitHandler<Inputs> = () => {

    // const formattedJSONData = fileContent ? JSON.parse(fileContent) : undefined;

    const formattedJSONData = fileContent ? JSON.parse(fileContent) : [];

// Define a function to escape single quotes
    function escapeSingleQuotes(str: string): string {
      return str.replace(/'/g, "''");
    }

// Initialize the SQL statement
    let insertSQL = 'INSERT INTO public."Data" ("endTime", "trackName", "msPlayed", "artistName") VALUES ';

// Iterate through the JSON data and build the SQL statement
    formattedJSONData.forEach((data, index) => {
      const { endTime, trackName, msPlayed, artistName } = data;

      // Ensure that values are properly escaped and formatted
      const formattedEndTime = escapeSingleQuotes(endTime);
      const formattedTrackName = escapeSingleQuotes(trackName);
      const formattedMsPlayed = escapeSingleQuotes(msPlayed.toString());
      const formattedArtistName = escapeSingleQuotes(artistName);

      // Construct the values part of the SQL statement
      let values = `('${formattedEndTime}', '${formattedTrackName}', '${formattedMsPlayed}', '${formattedArtistName}')`;

      // Add a comma if not the last record
      if (index < formattedJSONData.length - 1) {
        values += ', ';
      }

      // Append the values to the SQL statement
      insertSQL += values;
    });

    addData(insertSQL);



    getData(getQuery(prompt));



// Now, you have the complete SQL statement
    console.log(insertSQL);


    setShowResults(true);
  };

// console.log(prompt)


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
              value={prompt}
              id="prompt"
              onChange={(e) => {
                register("prompt")
                setPrompt((e.target.value))
              }}

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