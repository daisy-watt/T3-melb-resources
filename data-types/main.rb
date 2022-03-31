name = "Alex"
my_age = 34 
my_bank_balance = 1.34
puts name.class
puts my_age.class
puts my_bank_balance.class

names = ["Iryna", "Nora", "Daisy"]

puts names.class

alex_hash = {
  name: "Alex",
  age: 34,
  location: "Melbourne",
  salary: "Ten bucks"
}

puts alex_hash.class
puts alex_hash[:name]

if alex_hash[:salary]
  puts "Kaching"
end 