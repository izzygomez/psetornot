# psetornot
Android application developed in App Inventor for 6.S198.

## Collaborators:
Izzy Gomez, Wei Low, Phillip Graham

## Links
* [Assignment Description](https://docs.google.com/document/d/122lMQwimmNUJPi_9JrN461NcQ3heumaPk_tlAecnVxI/edit?usp=sharing)
* [Project Proposal](https://docs.google.com/document/d/1q60MTPBHtoVfwjLIQEMVrf2yxY6auJ9KkGJQzaqwkP8/edit?usp=sharing)
* [Proposal Presentations](https://docs.google.com/presentation/d/1pDHII2nwpUIn4UF5sj5ziGEjYwj-xKTu4C9tSLXKUEs/edit?usp=sharing)

## ToDo: 24.Feb.2015
- Screen Flow:
  - Phillip: FrontEnd
  - Login button - put in info the first time you use it, will be saved via TinyDB
  - Edit Profile/Classes - Backend saved to the global "website database"
  - PsetNow -buttons for each class
  - Collaborator Suggestions -has person's contact info & button w/ tiny map with location in new screen
- BackEnd:
  - Izzy: Database server
    -Program flow:
      -Store user's GPS coordinates onto Fusion Table
      -Be able to add/delete user's location from Fusion Table via on/off "PsetNow" toggle
  - Wei Low: Javascript Google Maps markers on personal website
    -Program flow:
      -Javascript to query your fusion table for GPS coordinates
      -Use Google Maps Javascript API v3 to display pins

## References
* [TinyDB - Database](http://explore.appinventor.mit.edu/ai2/pizzaparty)
* [TinyDB - Car App](http://appinventor.mit.edu/explore/ai2/android-wheres-my-car.html)

##Important Keys:
For the first stage of the prototype, we will be using a Public API Key for the Android application. In a future iteration of this application, we will swap to a Certificate system that authenticates the user.
-TEMPORARY Fusion Tables Public API Key for Android application:
  -[add public API key here]
