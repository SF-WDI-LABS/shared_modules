# Intro to ActiveRecord

| Objectives       |  
| :------------------- |  
| Add models to a Rails app |
| Install a Ruby Gem to create seed data |
| Seed a Rails database |
| Write ActiveRecord queries |  
---

In this lab you will learn how to create seed data and use ActiveRecord, the Rails ORM.

#### Think, Pair, Share
Convert these English statements into queries. Consult the [Rails docs](http://guides.rubyonrails.org/active_record_querying.html) as needed.

1. Give me the all users with the last name "Hendrickson".

2. Give me all the articles with ids from 54 to 67.

3. Give me all the answers with more than 100 upvotes.

4. Give me all the articles.


#### Warmup with FFaker

##### 1 hello.rb
Copy or download the starter file `hello.rb`

When you run `ruby hello.rb` you should see the following printed to your terminal:

    "Hello, my name is Generic Student and I live at 123 Rudimentary Dr, Oakland California. I lurv geraniums!"

Modify the output to use __string interpolation__ (hint: `#{first_name}`), and your own name, address, and most favoritest thing in the world.

Bonus: print it ten times.

##### 2 speakers
Modify `hello.rb` so that when you run `ruby hello.rb` you see 10 lines of output, formatted like so:

    Reichel Theresia, giovani@gmail.com, 415-253-3253
    Botsford Vicenta, ernestine@gmail.com, 716-282-1443
    Waters Nayeli, annabel_walter@gmail.com, 415-793-2549
    ...


This output should _NOT_ be hardcoded. It should change for every run of the file!

To achieve this goal, you will need to familiarize yourself with the `ffaker` gem.

First, install the gems in your `Gemfile`. Simply run:  
```bash
bundle install
#or just
bundle
```

You can also install gems individually (e.g. `gem install ffaker`), but `bundle` is better in this case.

Now dive into [FFaker's Documentation](https://github.com/ffaker/ffaker/blob/master/REFERENCE.md)!

## Ready for Rails!


#### 1. Create a new rails application
``` bash
cd ~/dev
rails new conference_app -T --database=postgresql
cd conference_app
subl .
```
**ProTip: run `rails -help` to understand `-T` and `--database` as well as other options**

#### 2. Create a `Speaker` model
Our `Speaker` model will have two attributes: a topic and a duration, both strings.
``` bash
rails g model speaker first_name:string last_name:string email:string
```

Take a look at the files you just created:  
* `app/models/speaker.rb`
* `db/migrate/1234566789_create_speakers.rb`

#### 3. Setup your database
Download and Launch [Postgres.app](http://postgresapp.com/). You should see an elephant in your menu if it's running. [Postico](https://eggerapps.at/postico/), a Postgres GUI, is a helpful tool for visualizing your database.

Next, create your application database:
```bash
rake db:create # create a new database on your machine
rake db:migrate # instruct your database what tables it needs to contain
```

#### 4. Launch the rails console and create your first speaker!
```bash
rails console
# or
rails c
```

**Confirm that your model exists**  
```ruby
Speaker
 #=> Speaker(id: integer, first_name: string, last_name: string, email: string, created_at: datetime, updated_at: datetime)
```

(You may need to "connect" to your database in the rails console. Just follow the instructions.)

#### 5. Can you seed your database?
Take a look at `db/seeds.rb`.

Add the following line to `db/seeds.rb`:
```ruby
Speaker.create({first_name: "Juliana", last_name: "Lopker", email: "juliana_lopker@generalassemb.ly"})
```

Now run the following from your command line (not the console!):
```bash
rake db:seed
```

The `seeds.rb` file is magic, because it _already_ knows about all of the models and gems in your rails app. All you have to do is tell it what data to create!

Now, back in the rails console, type `Speaker.all`. Does it show the new speaker you just created?


#### Exercises
Seed your database with 10 speakers using the FFaker gem.

Using the rails console:

1. Delete a speaker
1. Find the first speaker
1. Find the last speaker
1. Search by id
1. Search by first name
1. Sort by last name
1. Update the email of a speaker
1. Delete all the speakers you created.


#### Stretch Exercises
1. Add a phone column to the Speaker table that will display the location of a given speaker and update the database. HINT: `rails g migration AddPhoneToSpeakers phone:string` and then don't forget to migrate!
1. Create a `Speaker` controller with an associated route and view. Display your speakers on your view. Remember to use instance variables! (solution [here](https://github.com/sf-wdi-22-23/simple-rails-app))


**Pro-Tip**: Remember, when you're working in the console/repl `up-arrow` is your friend! (That and "hanging a dot" + "double-tabbing").
