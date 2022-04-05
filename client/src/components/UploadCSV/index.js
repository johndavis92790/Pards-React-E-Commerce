import ReactFileReader from "react-file-reader";
const csvtojson = require("csvtojson");

function UploadCSV() {

  function csvJSON(csv) {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      console.log("reader.result", reader.result);
      
      var lines = reader.result.split("\n");

      var result = [];

      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step
      // (you might convert them to &&& or something, then covert them back later)
      // jsfiddle showing the issue https://jsfiddle.net/
      var headers = lines[0].split(",");

      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      var json = Object.assign({}, result);
      var csvString = JSON.stringify(json);

      fetch("/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: csvString,
      }).then((res) => {
        console.log("Request complete! response:", res);
      });
    };
    reader.readAsText(csv[0]);
    
  }

 

  return (
    <>
      {/* <button>Delete Database</button> */}
      <h1>Express File Upload</h1>
      {/* <form method="POST" action="/upload" enctype="multipart/form-data">
        <label for="files">Select files:</label>
        <input type="file" id="files" name="files" multiple />
        <input type="submit" />
      </form> */}
      <ReactFileReader handleFiles={csvJSON} fileTypes={".csv"}>
        <button className="btn">Upload</button>
      </ReactFileReader>
    </>
  );
}

export default UploadCSV;
