module.exports = function csvUpload(req, res) {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }
  const files = req.files.files;
  files.map((file) => {
    const filePath = __dirname + "/csv/" + file.name;
    file.mv(filePath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200);
    });
  })
};
