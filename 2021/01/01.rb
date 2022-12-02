test_data = DATA.map &:to_i 
# the DATA variable stores all of what is written after the __END__ block in ruby

file_data = File.read("ruby_input.txt")
# reads the content of the file
file_data = file_data.chomp.split.map(&:to_i)
# the chomp method removes the new line or return at the end of the string, we do this just in case there is a new line at the end of our input
# split with no option splits the string at every new line
# map(&:to_i) invokes .map on the array, and for each element in the array, returns the result of calling to_i on that element.

depth_increase = 0;

# Test if each measurement is greater than the previous
file_data.each_with_index do |int, idx|
  if idx >= 1 && file_data[idx - 1] < int
    depth_increase += 1
  end
end

# Test if each group of 3 measurements is greater than the previous 3 measurements
def group_measurements(input)
  idx = 1;
  group_increase = 0;

  while idx <= input.length - 3
    a = input[idx - 1] + input[idx] + input[idx + 1]
    b = input[idx] + input[idx + 1] + input[idx + 2]
    if b > a 
      group_increase += 1
    end
    idx += 1
  end
  # this entire block is my ruby version of a javascript for loop
  group_increase
end

puts "Part One: #{depth_increase}"
puts "Part Two: #{group_measurements(file_data)}"

__END__
199
200
208
210
200
207
240
269
260
263