import time 
import sys

# Checking whether the user input is a prime number or a composite number. 
def check_prime(number):
    counter = 0
    for divider in range(1, number + 1):
        remainder = number % divider
        if remainder == 0:
            counter += 1
    return counter

# Selecting the first prime number (p).
def first_prime():
    print('**********    FIRST PRIME NUMBER SELECTION *********\n')
    while True:
        try:
            p = int(input("\nSelect the first large random prime number: "))
            no_of_dividers = check_prime(p)
            if no_of_dividers == 2:
                print(f"Congratulations, {p} is a prime number.\n")
                return p
            else:
                print(f"Sorry, {p} is a composite number.\nTry Again...\n")
        except:
            print('Invalid Input. Try Again !!!')

# Selecting the second prime number (q).
def second_prime():
    print('*************    SECOND PRIME NUMBER SELECTION    ****************\n')
    while True:
        try:
            q = int(input("Select the second large random prime number: "))
            no_of_dividers = check_prime(q)
            if no_of_dividers == 2:
                print(f'Congratulations Again, {q} is a prime number.\n')
                time.sleep(1)
                return q
            else:
                print(f'Sorry, {q} is a composite number.\nTry Again...\n')
        except:
            print("Invalid Input. Try Again !!!")

# Selecting the third prime number (r).
def third_prime():
    print('*************    THIRD PRIME NUMBER SELECTION    ****************\n')
    while True:
        try:
            r = int(input("Select the third large random prime number: "))
            no_of_dividers = check_prime(r)
            if no_of_dividers == 2:
                print(f'Congratulations Again, {r} is a prime number.\n')
                time.sleep(1)
                return r
            else:
                print(f'Sorry, {r} is a composite number.\nTry Again...\n')
        except:
            print("Invalid Input. Try Again !!!")

# Selecting the fourth prime number (s).
def fourth_prime():
    print('*************    FOURTH PRIME NUMBER SELECTION    ****************\n')
    while True:
        try:
            s = int(input("Select the fourth large random prime number: "))
            no_of_dividers = check_prime(s)
            if no_of_dividers == 2:
                print(f'Congratulations Again, {s} is a prime number.\n')
                time.sleep(1)
                return s
            else:
                print(f'Sorry, {s} is a composite number.\nTry Again...\n')
        except:
            print("Invalid Input. Try Again !!!")

# Selecting the public key (e) for data encryption.
def select_public_key(phi_n):
    print("*********    PUBLIC KEY SELECTION    ************")
    print("Conditions : ")
    print(f'     [1] : 1 < e < phi_n i.e. 1 < e < {phi_n}')
    print(f'     [2] : gcd(e , phi_n) = 1.\n') # gcd = greatest common divisor
    while True:
        try:
            e = int(input('Select the value of "e" in the given range: '))
            if 1 < e < phi_n:
                no_of_dividers = check_prime(e)
                if no_of_dividers == 2:
                    print(f'Public key (f): {(e * 2) + 1}\n')
                    return e
                else:
                    print(f'gcd({e}, {phi_n}) != 1.\nTry Again...')
                    continue
            else:
                print(f'Please, Select Public Key in Range 1 < e < {phi_n}')
                continue
        except:
            print('Please, Use an Integer as Public Key.')
            continue

# Calculating the private key for data encryption.
def private_key_selection(phi_n, e):
    for k in range(0, 200):
        d = (1 + k * phi_n) / e
        if d.is_integer():
            time.sleep(1)
            print('Please Wait !!! Generating the private key.')
            time.sleep(1)
            print('\n')
            print(f'Private Key (d): {int(d)}\n')
            return int(d)

# Encrypting / Decrypting data according to user choice.
def encrypt_decrypt(p, q, r, s, e, phi_n):
    while True:
        try:
            time.sleep(1)
            print('**********     WELCOME TO ENCRYPTION / DECRYPTION PHASE     ************\n')
            time.sleep(0.6)
            print('Press 1 for Encryption.\nPress 2 for Decryption.\nPress 3 to exit the program\n')
            time.sleep(0.6)
            user_choice = input('Enter Your Choice: ')
            print(f"User Choice: {user_choice}\n")

            if user_choice == '1':
                plain_text = int(input('Enter Plain text For Encryption: '))
                print('\n')
                time.sleep(1)
                print('Please Wait !!! Generating Cipher Text...\n')
                time.sleep(1)
                cipher_text = (plain_text ** int((f - 1) / 2)) % (z + 10)
                print(f"Cipher Text: {int(cipher_text)}\n")

            if user_choice == '2':
                cipher_text = int(input("Enter Cipher Text for Decryption: "))
                print('\n')
                plain_text = (cipher_text ** d) % (z + 10)
                print(f"Plain Text: {plain_text}\n")

            if user_choice == '3':
                print('Please Wait...')
                time.sleep(1.4)
                print('Program Ended Successfully.')
                break

        except:
            print('Invalid Input..\n')
            continue

# Main Method for executing all the created functions.
def final():
    print('************     KEEP YOUR SYSTEM SECURE. ENCRYPT YOUR DATA WITH RSA     *************\n')
    global p, q, r, s, n, z, phi_n, e, f, d
    p = first_prime()
    q = second_prime()
    r = third_prime()
    s = fourth_prime()
    n = p * q * r * s
    print (f"The value of n is: [n = {n}]\n")
    z = n - 10
    print(f"The value of 'z' is: [z = {z}] \n")
    phi_n = (p - 1) * (q - 1) * (r - 1) * (s - 1)
    print(f"The value of phi_n is: [phi_n = {phi_n}]\n")
    e = select_public_key(phi_n)
    print (f"The value of e is: [e = {e}]\n")
    f = (e * 2) + 1
    print(f"The value of f is: [f = {f}]\n")
    d = private_key_selection(phi_n, e)
    print(f"The value of d is: [d = {d}]\n")
    encrypt_decrypt(p, q, r, s, e, phi_n)

final()
