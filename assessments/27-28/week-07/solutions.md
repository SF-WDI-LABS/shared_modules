# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Week 7 Assessment [SOLUTIONS]

1. You have a SQL table named `clothes` with three columns (`type`, `color`, and `count`). Use **raw SQL** (i.e. NOT Active Record) to insert three items into the table with one command.

  ```SQL
  INSERT INTO clothes
    (type, color, count)
  VALUES
    ("shoes", "blue", 200),
    ("shirts", "red", 150),
    ("short", "black", 20);
  ```

2. You've discovered that one of your SQL queries is taking two seconds to respond. The query runs when loading the user profile page to build a list of favorites for that user. While debugging you notice that the query plan mentions a full table scan. Which database technique can you use to speed up this operation?

  > Add an index on the favorites table to make lookups faster and prevent the full table scan.

3. Which Rails `ActiveModel` feature allows you create and check secure user passwords?

  ```ruby
  has_secure_password
  ```

4. You have a form on your website that looks like this:

  ```html
  <form id="signup-form" action="/users/new" method="post">
    <input type="email" name="user[email]" required minlength="2" autofocus>
    <input type="password" name="user[password]" required minlength="6">
    <input type="submit" value="Sign Up">
  </form>
  <script>
    $('#signup-form').validate();
  </script>
  ```

  Is this validation strategy enough to prevent a user from entering invalid data into the database? Why or why not?

  > No, it's not, because if JavaScript fails to load or the client "hacks" your site by removing the `required` or `minlength` attributes from the form in the DOM, invalid data can pass straight through to your database. You should use client-side validations for a good user experience, but you need server-side (database) validations to truly validate your data.

5. You have a Rails app with three models: `Course`, `Student`, and `Enrollment`. A course has many students through enrollments. How would you implement this relationship in the `Course` model?

  ```ruby
  class Course < ActiveRecord::Base
    has_many :enrollments, dependent: :destroy
    has_many :students, through: :enrollments
  end
  ```

6. Name two benefits of using the Rails asset pipeline.

  * Compresses assets (CSS and JavaScript files) so they load faster.
  * Combines asset files before sending them to the browser.
  * Caches asset files to make sure they are only downloaded when they are updated.

7. You have a Rails app with the following stylesheets:

  ```
  homepage.css
  layout.css
  main.css
  navbar.css
  profile.css
  ```

  You want to take advantage of the Rails asset pipeline to combine your stylesheets into one `application.css` file to send to the client. You need the stylesheets to load in the following order:

  ```
  1. layout.css
  2. main.css
  3. navbar.css
  4. homepage.css
  5. profile.css
  ```

  Edit the default `application.css` file below to include all your stylesheets in the correct order:

  ```css
  /*
   * ...
   *
   *= layout.css
   *= main.css
   *= navbar.css
   *= homepage.css
   *= profile.css
   *
   */
  ```

8. Fill in the blanks in the following RSpec test. The test is for an instance method in the `User` model called `full_name` that combines the user's first and last names to return the user's full name.

  ```ruby
  before do
    @user = FactoryGirl.create(:user)
  end
  describe "#full_name" do
    it "should combine first and last name" do
      expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
    end
  end
  ```
