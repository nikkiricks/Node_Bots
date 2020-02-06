let current_state = "waiting"

while (current_state !== "done") {
  switch (current_state) {
      case "waiting":
        // do nothing
        // check for button press
        break;

      case "button_six_pressed":
        // take action from press
          sms.beginSMS(+61488611347)
          sms.print("🙂 I am having a great time, no need to come home!🙂")
        break;

      case "button_eight_pressed":
        // take action from press
          sms.beginSMS(+61488611347)
          sms.print("😢 Please come home! 😢")
        break;
      
      case "error":
        // handle proble,
        current_state = "done"
        break;
  }
}

