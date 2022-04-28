import ReactFileReader from "react-file-reader";
import { Link } from "react-router-dom";
import "../../App.css"
import {
  Row,
  Col,
  Button,
} from "react-bootstrap";

//page for owners to easily upload updated product information
function UploadCSV(props) {

  //reads the file or files chose by owner
  const readAllFiles = async (allFiles) => {
    //starts with an empty array
    var finalData = [];
    //loops through each file
    for (let file of allFiles) {
      await new Promise((resolve, reject) => {
        //reads the file information
        var reader = new FileReader();
        reader.onload = () => {
          //splits each row
          var lines = reader.result.split("\n");
          //splits each cell within the top row which are the headers for the columns
          var headers = lines[0].split("|");
          //loops through each row
          for (var i = 1; i < lines.length - 1; i++) {
            //creates an object for each row
            var obj = {};
            //splits each cell within the current row
            var currentline = lines[i].split("|");
            //loops through each cell to get every piece of data for that part
            for (var j = 0; j < headers.length; j++) {
              //sets the data for the object
              obj[headers[j]] = currentline[j];
            }
            //pushes object to array
            finalData.push(obj);
          }
          resolve(reader.finalData);
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    }
    //pushes completed array to upload function
    uploadData(finalData);
  };

  //uploads data array to backend
  function uploadData(arr) {
    var csvString = JSON.stringify(arr);
    fetch("/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: csvString,
    }).then((res) => {
      console.log("Request complete! response:", res);
      window.alert("Items uploaded!");
      window.location.href = "/dashboard";
    });
  }

  //returns title and button to choose file or files, only allows .csv files
  return (
    <>{props.user ?
      <>
        <Row>
          <Col>
            <Link to={"/dashboard"}>
              <Button variant="primary" className="m-3">
                Back to Dashboard
              </Button>
            </Link>
          </Col>
        </Row>
        <div className="uploadPage my-5">
          <h1>Express File Upload</h1>
          <h3>.csv files only!</h3>
          <ReactFileReader
            multipleFiles={true}
            handleFiles={readAllFiles}
            fileTypes={".csv"}
          >
            <button className="btn btn-success my-3">Upload</button>
          </ReactFileReader>
        </div>
      </>
      : <>
        <h1>You are not authorized!</h1>
      </>
    }</>
  );
}

export default UploadCSV;
