# airport challenge javascript

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

In this challenge I tried to re-create the airport challenge from week1 of Ruby into JS.

I went about it stepwise, building each test and TDD to get them working.
- I used Jasmine Spy Objects in order to mock behaviour in order to get randomness of my code to work correctly.
- I did this by registering the weather as true or false for stormy depending on what I wanted to test.

The user stories were as follows:

```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 
```
## Future goal
- A stretch goal I want to complete in the future is to add capacity to the airport.
- This would involve adding a isFull? method and capacity attribute to the aiport.
