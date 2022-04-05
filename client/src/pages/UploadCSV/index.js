import ReactFileReader from "react-file-reader";

function UploadCSV() {
  const readAllFiles = async (allFiles) => {
    var finalData = [];
    for (let file of allFiles) {
      await new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onload = () => {
          var lines = reader.result.split("\n");
          var headers = lines[0].split("|");
          for (var i = 1; i < lines.length - 1; i++) {
            var obj = {};
            var currentline = lines[i].split("|");
            for (var j = 0; j < headers.length; j++) {
              obj[headers[j]] = currentline[j];
            }
            finalData.push(obj);
          }
          resolve(reader.finalData);
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    }
    uploadData(finalData);
  };

  function uploadData(arr) {
    var csvString = JSON.stringify(arr);
    fetch("/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: csvString,
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }

  return (
    <>
      <h1>Express File Upload</h1>
      <ReactFileReader
        multipleFiles={true}
        handleFiles={readAllFiles}
        fileTypes={".csv"}
      >
        <button className="btn">Upload</button>
      </ReactFileReader>
    </>
  );
}

export default UploadCSV;
