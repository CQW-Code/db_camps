#template for seeding DB
# quote marks around info and don't forget the 
#comma!!!!!
# {
#   name:
#   organization:
#   address1:
#   address2:
#   city:
#   state:
#   zip:
#   web_url:
#   begin_date:
#   end_date:
#   details:
#   contact1:
#   type1:
#   contact2:
#   type2:
#   email:
#   cost:
#   image:
# },

camps = [
  {
    name:  "Chris",
    organization: "test",
    address1: "123 main st",  
    city: "Huntersville",
    state: "NC", 
    
  },

]

camps.each do |camp|
  Camp.create(
    name: camp[:name],
    organization: camp[:organization],
    address1: camp[:address1],
    address2: camp[:address2],
    city: camp[:city],
    state: camp[:state],
    zip: camp[:zip],
    web_url: camp[:web_url],
    begin_date: camp[:begin_date],
    end_date: camp[:end_date],
    details: camp[:details],
    contact1: camp[:contact1],
    type1: camp[:type1],
    contact2: camp[:contact2],
    email: camp[:email],
    cost: camp[:cost],
    image: camp[:image]
  )
end

1.times do
  User.create(
    email: "admin@test.com",
    password: "password"
  )
end

puts "Seeded a bunch of camps"
puts "and 1 user"
puts "email: admin@test.com"
puts "password: password"

