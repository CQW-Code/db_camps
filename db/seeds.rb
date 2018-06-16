

camps = [
  {
    name:'Seabeck DeafBlind Retreat',
    organization: 'The Lighthouse for the Blind Inc',
    address1: 'P.O. Box 14959',
    city: 'Seattle',
    state: 'WA',
    zip: '98114',
    web_url: 'http://thelighthousefortheblindinc.org/our-programs/deafblind-program/deafblind-retreat/',
    begin_date: '',
    end_date: '',
    details: 'The annual DeafBlind Retreat takes place in beautiful, rural Seabeck, WA, about 2 hours due West from Seattle. We may have anywhere from 60 to 80 DeafBlind in attendance from across the country and the world, along with 120 to 150 volunteer interpreters who provide visual information, sighted guide and interpreting to suppot and create an environment of complete accessibility.
    Activities include swimming, boating, tandem biking, multiple workshops, technology demonstrations, day/night tours to Poulsbo, Seattle Waterfront and more, hiking, dances, and much more ',
    contact1: '(206)452-5715',
    type1: 'VP',
    contact2: '(206)436-2234',
    type2: 'Fax',
    email: 'DBRetreat@seattlelh.org',
    cost: 'Full Week: $375.00, Half Week: $225.00',
    eligibility: 'Retreat participants: must be DeafBlind adults- legally blind and either Deaf, significantly hard of hearing, or late deafened. Services are open to all DeafBlind individuals over the age of 18 (16 with a parent or guardian present).
     Volunteer Interpreters: Volunteer Interpreters must be sighted adults over the age of 18, have a minimum 2 years experience in American Sign Language, and have experience communicating with and providing sighted guide to DeafBlind individuals.',
  },
  {
    name:'Deafblind Camp of Maryland',
    organization: 'Deafblind Camp of Maryland, Inc',
    address1: ' 1040 S. Beechfield Ave.',
    city: 'Baltimore',
    state: 'MD',
    zip: '21229',
    web_url: 'https://www.deafblindcampofmd.org/',
    begin_date: 'June 10, 2018',
    end_date: 'June 15, 2018',
    details: 'They provide variety of outdoor activities including boating, hiking, climbing wall, giant swing. Also, indoor activities include arts and crafts, Bible worship, Jewish fellowship, dancing, and most importantly meeting old friends and making new ones. ',
    contact1: '',
    type1: '',
    contact2: '',
    type2: '',
    email: 'info@dbcmd.org',
    cost: 'Full Week $50.00 deposit',
    eligibility: 'Camp is open to DeafBlind adults; you must be eighteen years of age by the first day of camp. Camp accepts the first 40 campers who apply. We accept campers from anywhere in the world.',
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

