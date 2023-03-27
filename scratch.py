my_string = 'My age is '
my_age = 44

added_string = my_string + str(my_age)
print(added_string)


num1 = 10
num2 = '20'

# num3 = num1 + num2

print(5 == 5)
print(5 == 5.0)
print(5 == '5')

list1 = [1, 2, 3, 4]
list2 = [1, 2, 3, 4]
list3 = list1

print(list1 == list2)
print(list1 is list2)
print(list1 is list3)

random_number = 5

if random_number > 10:
    print('This is in the if block')
    print('So is this')

print('This is out of the if block')