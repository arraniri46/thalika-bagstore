import mongoose from "mongoose";

main().catch((error) => console.log(error));

async function main() {
  await mongoose.connect(`http:127.0.0.1:27017/thalikabagstore`);
}
