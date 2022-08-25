# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

puts "Seeding users..."

20.times{
    User.create(
        name: Faker::Name.name, 
        username: Faker::Internet.username, 
        email: Faker::Internet.email, 
        password: Faker::Games::DnD.monster, 
        admin: Faker::Boolean.boolean(true_ratio: 0.1)
    )
}

puts "Seeding programs..."

20.times{
    Program.create(
        name: Faker::Book.title, 
        link: Faker::Internet.domain_name, 
        category: Faker::Book.genre, 
        rating: Faker::Number.between(from: 0.0, to: 5.0), 
        description: Faker::TvShows::RickAndMorty.quote,
        icon: Faker::Avatar.image,
        screenshot: Faker::LoremFlickr.image
    )
}

puts "Seeding favorites..."

30.times{
    Favorite.create( 
        user_id: User.all.ids.sample, 
        program_id: Program.all.ids.sample, 
        reason: Faker::Adjective.positive
    )
}

puts "Seeding comments..."

50.times{
    Comment.create( 
        user_id: User.all.ids.sample, 
        program_id: Program.all.ids.sample, 
        letter: Faker::Movies::PrincessBride.quote
    )
}

puts "Seeding responses..."

50.times{
    Response.create( 
        user_id: User.all.ids.sample, 
        comment_id: Program.all.ids.sample, 
        note: Faker::Hacker.say_something_smart
    )
}

