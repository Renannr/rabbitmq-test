import { receiveMessage } from "./receive";
import { sendMessage } from "./send";

(async () => {
  await receiveMessage()
  setTimeout(async () => {
    await sendMessage()
  }, 1000);
})()
