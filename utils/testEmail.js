require("dotenv").config();
const sendEmail = require("./sendEmail");

sendEmail(
  "ujjwalnishad143@gmail.com",
  "Keyora Test",
  "If you received this, email setup works!"
)
.then(() => {
  console.log("Email sent successfully");
})
.catch((err) => {
  console.log(err);
});