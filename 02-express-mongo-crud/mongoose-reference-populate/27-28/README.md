#<img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Relationships in Mongo: Referenced Data


## Learning Objectives

| Objectives |
| :---- |
| Write mongoose schemas for Mongoose's "reference" pattern of relating data. |
| Build the appropriate queries for referenced data relationships using `populate()`. |
| Incorporate referenced data handling into express server routes. |

## Motivation

Real-world data usually consists of different types of things that are related to each other in some way. A banking app might need to track employees, customers, and accounts. A food ordering app needs to know about restaurants, menus, and its users!  We've seen that when data is very simple, we can combine it all into one model.  When data is more complex or less closely tied together, we often create two or more related models.

Today we'll look at how mongoose helps us store related data through _reference_.


## Data Relationships in Mongoose

### Document Structure: Embed or Reference?


**Embedded Data** is directly nested *inside* of other data. Each record has a copy of the data.

![](http://docs.mongodb.org/manual/_images/data-model-denormalized.png)

**Referenced Data** is stored as an *id* inside other data. The id can be used to look up the information. All records that reference the same data look up the same copy.

![](http://docs.mongodb.org/manual/_images/data-model-normalized.png)


### Tradeoffs

There are tradeoffs of *efficiency* and *consistency* depending on which one you choose.

It's often more *efficient* to embed data because you don't have to make a separate request or a separate database query -- the first request or query gets you all the information you need.

It's easier to stay *consistent* when you reference data because you only keep one copy around. You don't have to worry that you'll forget to update or delete one copy of the data.



The decision to embed or reference data is a design decision. How would you design the following?

* A `User` that has many `Tweets`?
* A `Food` that has many `Ingredients`?

## Setting Up Reference Relationships with Mongoose

### Standard Mongoose setup
```js
// pull in mongoose module with require
var mongoose = require('mongoose');
```

The above code is the standard boilerplate mongoose setup that you will see in any seed.js or Model file.

This next snippet only needs to happen once in your server-side code or models. It will usually be in your main server code (`server.js`) or in your models index (`/models/index.js`) if you have one.

```js
// connect to the mongoose `test` database on this computer
mongoose.connect('mongodb://localhost/test');
```

### Structure Data with Schemas

When we actually want to set up MongoDB data, we start with the Schema.

**Here's a reminder of the major SchemaTypes MongoDB can store:**
 - String
 - Number
 - Date
 - Buffer
 - Boolean
 - Mixed
 - ObjectId  <- used to create referenced data relationships!
 - Array

[Source Documentation](http://mongoosejs.com/docs/guide.html)  

[SchemaType Documentation](http://mongoosejs.com/docs/schematypes.html)

```js
// giving mongoose.Schema a shorter name for convenience
var Schema = mongoose.Schema;

// set up the videogame console schema
/* Console Schema */
var consoleSchema = new Schema({
	name: String,
	manufacturer: String,
	released: Date
});
```

The `consoleSchema` describes a videogame console such as Nintendo, Sega, or XBox.


```js
/* Game Schema */
var gameSchema = new Schema({
	name: String,
	developer: String,
	released: Date,
	// I'm telling consoles to EXPECT references to Console documents
	consoles: [
	    {
                type: Schema.Types.ObjectId,
                ref: 'Console'
            }
        ]
});
```

The `Game Schema` above describes an actual videogame such as Super Mario Bros., MegaMan, Final Fantasy, and Skyrim.

Note the specific code starting on line 7 within the `[]` brackets. With the brackets, we're letting the Game Schema know that each game will have an array called `consoles` in it. Inside the `[]`, we're describing what kind of elements will go inside a game's `consoles` array as we work with the database. In this case we are telling the Game Schema that we will be filling the `consoles` array with ObjectIds, which is the type of that big beautiful `_id` that Mongo automatically generates for us.

If you forgot, it looks like this: `55e4ce4ae83df339ba2478c6`. That's what's going on with `type: Schema.Types.Objectid`.

When we have the code `ref: 'Console'`, that means that we will be storing ONLY ObjectIds associated with the `Console` document type. Basically, we will only be putting `Console` ObjectIds inside the `consoles` array -- not the whole console object, and not any other kind of data object.

### Make Data with Models

Now that we have our schemas defined, let's compile them all into active models so we can start creating documents!

```js
/* Compiling models from the above schemas */
var Game = mongoose.model('Game', gameSchema);
var Console = mongoose.model('Console', consoleSchema);
```

Let's make two objects to test out creating a Console document and Game document.

```js
/* make a new Console document */
var nin64 = new Console ({
 name: 'Nintendo 64',
 manufacturer: 'Nintendo',
 released: 'September 29, 1996'
});
```

```js
/* make a new Game document */
var zelda = new Game ({
  name: 'The Legend of Zelda: Ocarina of Time',
  developer: 'Nintendo',
  release: new Date('April 27, 2000'),
  consoles: []
});
```

Notice that we start the `consoles` array empty within our zelda game document. That will be filled with ObjectIds later on.

Now we'll save our work.

```js
nin64.save(function(err, nintendo64) {
  if (err) {
    return console.log(err);
  } else {
    console.log('nintendo 64 saved successfully');
  }
});

zelda.consoles.push(nin64);
zelda.save(function(err, zeldaGame) {
  if (err) {
    return console.log(err);
  } else {
    console.log('zelda game is ', zeldaGame);
  }
});
```

Note that we push the `nin64` console document into the `zelda` consoles array. Since we already told the Game Schema that we will only be storing ObjectIds instead of actual `Console` documents in the `consoles` array, mongoose will convert `nin64` to it's unique `_id` and save that for us!


### Check Yourself

This is the log text after executing the code we've written thus far:

```
zelda game is { __v: 0,
  name: 'The Legend of Zelda: Ocarina of Time',
  developer: 'Nintendo',
  _id: 55e4eb857d6157f4d41a2981,
  consoles: [ 55e4eb857d6157f4d41a2980 ] }

nintendo 64 saved successfully

```


What are we looking at?

1. Line 1: `__v` represents the number of times the document has been accessed.

1. Line 2: The name property of the Game Document we have created.

1. Line 3: The developer property of the Game Document we have created.

1. Line 4: The unique `_id` created by Mongoose for our Game Document.

1. Line 5: The consoles array, with a single `ObjectId` that is associated with our Console Document.

Let's print out the Console Document `nintendo64` to make sure the `ObjectId` in consoles matches the `_id` we see for this game:

```js
Console.findOne({_id: "55e4eb857d6157f4d41a2980"}, function (err, foundConsole) {
 if (err) {
   return console.log(err);
 }
 console.log('found console: ', foundConsole);
});
```

```
found console: { _id: 55e4eb857d6157f4d41a2980,
  name: 'Nintendo 64',
  manufacturer: 'Nintendo',
  released: Sun Sep 29 1996 00:00:00 GMT-0700 (PDT),
  __v: 0 }
```

Sure enough, the only `ObjectId` from the game's `consoles` array matches the Console Document `_id` we created!. What's going on? The Game Document consoles has a single `Objectid` that contains the '*address*' or the '*location*' where it can find the Console Document if and when it needs it. This keeps our Game Document small, since it doesn't have to have so much information packed into it. When we need the Console Document data, we have to ask for it explicitly. Until then, mongoose is happy to show just the `ObjectId` associated with each console in the game's `consoles` array.

### Pull Data in With `.populate()`


When we want to get full information from a Console Document we have inside the Game Document consoles array, we use the method call `.populate()`.

```js
Game.findOne({ name: 'The Legend of Zelda: Ocarina of Time' })
  .populate('consoles')
  .exec(function(err, game) {
    if (err){
      return console.log(err);
    }
    if (game.consoles.length > 0) {
      for (var i=0; i<game.consoles.length; i++) {
        console.log("/nI love " + game.name + " for the " + game.consoles[0].name);
      }
    }
    else {
      console.log('Game has no consoles.');
    }
    console.log('what was that game?', game);
  });
```

Let's go over this method call line by line:

1. Line 1: We call a method to find only **one** Game Document that matches the name: `The Legend of Zelda: Ocarina of Time`.

1. Line 2: We ask the consoles array within that Game Document to fetch the actual Console Document instead of the `ObjectId` referencing that Console Document.

1. Line 3: When we use `find` without a callback, then `populate`, like here, we can put a callback inside an `.exec()` method call. Technically we have made a query with `find`, but only executed it when we call `.exec()`.

1. Lines 4-15: If we have any errors, we will log them.  Otherwise, we can display the entire Game Document **including** the populated consoles array.

1. Lines 9 and 15 demonstrate that we are able to access both data from the original Game Document we found **and** the referenced Console Document we summoned.

<details>
  <summary>What is the actual game output from the above `findOne()` method call with `populate`?</summary>

  ```
  { _id: 55e4eb857d6157f4d41a2981,
    name: 'The Legend of Zelda: Ocarina of Time',
    developer: 'Nintendo',
    __v: 1,
    consoles:
     [ { _id: 55e4eb857d6157f4d41a2980,
         name: 'Nintendo 64',
         manufacturer: 'Nintendo',
         released: Sun Sep 29 1996 00:00:00 GMT-0700 (PDT),
         __v: 0 }
     ]
  }

  I love The Legend of Zelda: Ocarina of Time on the Nintendo 64
  ```
</details>

Now, instead of seeing **only** the `ObjectId` that pointed us to the `Console` document, we can see the **entire** `Console` document. Notice that the `Console` document's `_id` is exactly the same as the `ObjectId` that was previously referencing it. They are one in the same!


## Integrate with Express

### RESTful Route Design

Remember to always make "RESTful" routes. RESTful routes are the most popular modern convention for designing resource paths for nested data. Here is an example of an application that has routes for `Store` and `Item` models:

**RESTful Routing**

| **HTTP Verb** | **Path** | **Description** |
|---|---|---|
| GET | /api/stores | Get all stores |
| POST | /api/stores | Create a store |
| GET | /api/stores/:id | Get a store |
| DELETE | /api/stores/:id | Delete a store |
| GET | /api/stores/:store_id/items | Get all items from a store |
| POST | /api/stores/:store_id/items | Create an item for a store |
| GET | /api/stores/:store_id/items/:item_id | Get an item from a store |
| DELETE | /api/stores/:store_id/items/:item_id | Delete an item from a store |

*In routes, avoid nesting resources deeper than shown above.*


### Special Routes for Referenced Data

Most of your routes for creating each piece of data will be the same, since games and consoles can exist independently of one another. However, when getting information about a game, remember to pull console data in with populate. Here are a few examples:

```js
// send all information for a single game
app.get('/api/games/:gameId/', function (req, res) {
  Game.findOne({ _id: req.params.gameId })
    .populate('consoles')
    .exec(function(err, game) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      console.log('found and populated game: ', game);
      res.json(game);
    });
});
```

```js
// send all information for all games
app.get('/api/games/', function (req, res) {
  Game.find({ })
    .populate('consoles')
    .exec(function(err, games) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      console.log('found and populated all games: ', games);
      res.json(games);
    });
});
```

But would we always want to populate all the game information before sending it back? Many APIs don't. For instance, the Spotify API is riddled with ids that developers can use to make a second request if they want more of the information.

```js
// create a game, given the name of a console it can run on
app.post('/api/games/', function (req, res) {
  var newGame = new Game({
    name: req.body.title,
    developer: req.body.developer,
    release: new Date(req.body.releaseDate),
    consoles: []
  });

  Console.findOne({ name: req.body.console }, function (err, foundConsole) {
    if (err) {
      res.status(500).send(err);
      return console.log(err);
    } else if (foundConsole){
      newGame.consoles.push(foundConsole);
    } else {
      console.log('console not found: ' + req.body.console + ' - leaving consoles array empty');
    }
    newGame.save(function (err, savedGame){
      if (err) {
        res.status(500).send(err);
        return console.log(err);
      }
      res.send(newGame);
    });
  });
});
```

## Exercises
Sprint 2 of [Mongoose Books app](https://github.com/SF-WDI-LABS/mongoose-books-app)
