const fs = require("fs");
// // Write File
// fs.writeFile("newText.txt", "hello i'm mehedi hasan rasel.", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully Complete.");
// });
// // Update File
// fs.appendFile("newText.txt", "I'm a student of IDB-BISEW", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully Complete.");
// });
// // Read File
// fs.readFile("newText.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// // Rename File
// fs.rename("newText.txt", "renameText.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("Rename Complete.");
// });

// // Exists
// fs.exists("newText.txt", (err) => {
//   if (err) console.log("File Found");
//   else console.log("File Not Found");
// });
// fs.exists("renameText.txt", (err) => {
//   if (err) console.log("File Found");
//   else console.log("File Not Found");
// });

// Delete/Remove (unlink) File
fs.unlink("renameText.txt", (err) => {
  if (err) console.log(err);
  else console.log("File Remove SuccessFull");
});
