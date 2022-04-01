names = ["alice", "andrew", "charlie", "bob", "abigail", "david", "steph"]

filtered_names = names.filter do |name| 
  name[0] == "a"
end 

pp filtered_names