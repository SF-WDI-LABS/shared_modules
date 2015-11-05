# Solutions

## Think, Pair, Share

1. `User.where(last_name: "Hendrickson")`
2. `Article.where(id: 54...67)` <-- exclusive of 67, two dots (..) is inclusive
3. `Answer.where("upvotes > ?", 100)`
4. `Article.all`


### hello.rb

1. hello.rb
```ruby
first_name = "John"
last_name = "Doe"
street_number = "1567"
street_address = "Elementary Dr"
city = "San Francisco"
state = "California"
favorite_thing = "string"

p "Hello, my name is #{first_name} #{last_name} and I live at #{street_number} #{street_address}, #{city} #{state}. I lurv #{favorite_thing}!" * 10
```

2. speakers
```ruby
require 'ffaker'

10.times do
  first_name = FFaker::Name.first_name
  last_name = FFaker::Name.last_name
  email = FFaker::Internet.free_email
  phone = FFaker::PhoneNumber.short_phone_number
  puts "#{first_name} #{last_name}, #{email}, #{phone}"
end
```

### Conference seed data

```ruby
# seed database
10.times do
  Speaker.create({
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    email: FFaker::Internet.free_email
  })
end
```

1. `Speaker.delete(1)`
1. `Speaker.first`
1. `Speaker.last`
1. `Speaker.find_by(id:2)` OR `Speaker.find_by_id(2)` OR `Speaker.find(2)`
1. `Speaker.find_by(first_name: 'Juliana')`
1. `Speaker.order(:last_name)`
1. `Speaker.find_by(id:2).update(email: 'new@email.com')`
1. `Speaker.destroy_all`
