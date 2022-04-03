

function UploadCSV() {
  return (
    <>
      {/* <button>Delete Database</button> */}
      <h1>Express File Upload</h1>
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <label for="files">Select files:</label>
        <input type="file" id="files" name="files" multiple />
        <input type="submit" />
      </form>
    </>
  );
}

export default UploadCSV;
