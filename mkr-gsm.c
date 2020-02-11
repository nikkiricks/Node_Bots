/*
  SMS sender

  This sketch, for the MKR GSM 1400 board,sends an SMS message
  you enter in the serial monitor. Connect your Arduino with the
  GSM shield and SIM card, open the serial monitor, and wait for
  the "READY" message to appear in the monitor. Next, type a
  message to send and press "return". Make sure the serial
  monitor is set to send a newline when you press return.

  Circuit:
   MKR GSM 1400 board
   Antenna
   SIM card that can send SMS

  created 25 Feb 2012
  by Tom Igoe
*/

// Include the GSM library
#include <MKRGSM.h>

#include "arduino_secrets.h"
// Please enter your sensitive data in the Secret tab or arduino_secrets.h
const char PINNUMBER[] = SECRET_PINNUMBER;

// Pin numbers
const int happy = 6;    // sending the happy emoji
const int sad = 8;    // sending the sad emoji

// Variables will change:
int happyButtonState;             // the current reading from the input pin
int happyLastButtonState = LOW;   // the previous reading from the input pin

int sadButtonState;             // the current reading from the input pin
int sadLastButtonState = LOW;   // the previous reading from the input pin

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.

unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers

unsigned long happyLastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long sadLastDebounceTime = 0;  // the last time the output pin was toggled


// initialize the library instance
GSM gsmAccess;
GSM_SMS sms;

void setup() {

  //setup() for the buttons
  pinMode(happy, INPUT);
  pinMode(sad, INPUT);
  
  // initialize serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  Serial.println("SMS Messages Sender");

  // connection state
  bool connected = false;

  // Start GSM shield
  // If your SIM has PIN, pass it as a parameter of begin() in quotes
  while (!connected) {
    if (gsmAccess.begin(PINNUMBER) == GSM_READY) {
      connected = true;
    } else {
      Serial.println("Not connected");
      delay(1000);
    }
  }

  Serial.println("GSM initialized");
}

void happyText() {
  // send the message when HAPPY is presses
  sms.beginSMS("+61488611347");
  sms.print(u8"\U0001f60e");
  sms.print("I'm having a great time mom! :)");
  sms.endSMS();
}

void sadText() {
  // send the message when SAD is presses
  sms.beginSMS("+61488611347");
  sms.print("Please come home :(");
  sms.endSMS();
}

void loop() {

  //FOR HAPPY
  // read the state of the switch into a local variable:
  int happyReading = digitalRead(happy);

  // check to see if you just pressed the button
  // (i.e. the input went from LOW to HIGH), and you've waited long enough
  // since the last press to ignore any noise:

  // If the switch changed, due to noise or pressing:
  if (happyReading != happyLastButtonState) {
    // reset the debouncing timer
    happyLastDebounceTime = millis();
  }

  if ((millis() - happyLastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer than the debounce
    // delay, so take it as the actual current state:

    // if the button state has changed:
    if (happyReading != happyButtonState) {
      happyButtonState = happyReading;

      // write in serial monitor if the new button state is HIGH
      if (happyButtonState == HIGH) {
        Serial.println("happy is working");
        happyText();
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  happyLastButtonState = happyReading;

//FOR SAD

  // read the state of the switch into a local variable:
  int sadReading = digitalRead(sad);

  // check to see if you just pressed the button
  // (i.e. the input went from LOW to HIGH), and you've waited long enough
  // since the last press to ignore any noise:

  // If the switch changed, due to noise or pressing:
  if (sadReading != sadLastButtonState) {
    // reset the debouncing timer
    sadLastDebounceTime = millis();
  }

  if ((millis() - sadLastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer than the debounce
    // delay, so take it as the actual current state:

    // if the button state has changed:
    if (sadReading != sadButtonState) {
      sadButtonState = sadReading;

      // write in serial monitor if the new button state is HIGH
      if (sadButtonState == HIGH) {
        Serial.println("sad is working");
        sadText();
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  sadLastButtonState = sadReading;
}



