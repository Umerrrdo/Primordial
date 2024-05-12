import time 
import sys
import random

# Efficient primality testing using Miller-Rabin algorithm
def is_prime(n, k=5):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False
    # Find r and d such that n = 2^r * d + 1
    d = n - 1
    r = 0
    while d % 2 == 0:
        d //= 2
        r += 1
    # Perform Miller-Rabin test k times
    for _ in range(k):
        a = random.randint(2, n - 2)
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue
        for _ in range(r - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return False
    return True

# Selecting prime numbers
def select_prime(prompt):
    while True:
        try:
            num = int(input(prompt))
            if is_prime(num):
                print(f"Congratulations, {num} is a prime number.\n")
                return num
            else:
                print(f"Sorry, {num} is not a prime number. Try again...\n")
        except ValueError:
            print("Invalid input. Please enter an integer.")

# Greatest Common Divisor
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# Selecting public key (e)
def select_public_key(phi_n):
    while True:
        try:
            e = int(input('Select your public key (1 < e < phi_n) which is coprime with phi_n: '))
            if 1 < e < phi_n and gcd(e, phi_n) == 1:
                print(f'Public key selected: {e}\n')
                return e
            else:
                print(f'Invalid public key. Please select a value in the range (1, phi_n) that is coprime with phi_n.')
        except ValueError:
            print("Invalid input. Please enter an integer.")

# Extended Euclidean Algorithm for modular inverse
def extended_gcd(a, b):
    if b == 0:
        return (a, 1, 0)
    else:
        d, x, y = extended_gcd(b, a % b)
        return (d, y, x - (a // b) * y)

# Modular inverse
def mod_inverse(a, m):
    d, x, _ = extended_gcd(a, m)
    if d == 1:
        return x % m

# Encrypting data
def encrypt(plain_text, e, n):
    return pow(plain_text, e, n)

# Decrypting data
def decrypt(cipher_text, d, n):
    return pow(cipher_text, d, n)

# Main function
def main():
    print('************     KEEP YOUR SYSTEM SECURE. ENCRYPT YOUR DATA WITH RSA     *************\n')
    p = select_prime("\nSelect first large random prime number: ")
    q = select_prime("Select second large random prime number: ")
    n = p * q
    print(f"The product of the two prime numbers is [n: {n}]\n")
    phi_n = (p - 1) * (q - 1)
    print(f"The value of phi_n is [phi_n: {phi_n}]\n")
    e = select_public_key(phi_n)
    d = mod_inverse(e, phi_n)
    print(f'Private Key: {d}\n')

    while True:
        try:
            print('**********     WELCOME TO ENCRYPTION / DECRYPTION PHASE     ************\n')
            choice = input('Press 1 for Encryption\nPress 2 for Decryption\nPress 3 to exit\nEnter Your Choice: ')
            if choice == '1':
                plain_text = int(input('Enter Plain text for Encryption: '))
                cipher_text = encrypt(plain_text, e, n)
                print(f"Cipher Text: {cipher_text}\n")
            elif choice == '2':
                cipher_text = int(input('Enter Cipher Text for Decryption: '))
                plain_text = decrypt(cipher_text, d, n)
                print(f"Plain Text: {plain_text}\n")
            elif choice == '3':
                print('Exiting program...')
                break
            else:
                print('Invalid choice. Please enter 1, 2, or 3.')
        except ValueError:
            print('Invalid input. Please enter an integer.')

if __name__ == "__main__":
    main()
