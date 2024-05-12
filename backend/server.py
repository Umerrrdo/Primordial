from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Efficient primality testing using Miller-Rabin algorithm
# def is_prime(n, k=5):
#     if n <= 1:
#         return False
#     if n <= 3:
#         return True
#     if n % 2 == 0:
#         return False
#     # Find r and d such that n = 2^r * d + 1
#     d = n - 1
#     r = 0
#     while d % 2 == 0:
#         d //= 2
#         r += 1
#     # Perform Miller-Rabin test k times
#     for _ in range(k):
#         a = random.randint(2, n - 2)
#         x = pow(a, d, n)
#         if x == 1 or x == n - 1:
#             continue
#         for _ in range(r - 1):
#             x = pow(x, 2, n)
#             if x == n - 1:
#                 break
#         else:
#             return False
#     return True

# # Selecting prime numbers
# def select_prime(num):
#     while True:
#         if is_prime(num):
#             return num
#         else:
#             num += 1

# # Greatest Common Divisor
# def gcd(a, b):
#     while b != 0:
#         a, b = b, a % b
#     return a

# # Selecting public key (e)
# def select_public_key(phi_n):
#     while True:
#         e = random.randint(2, phi_n - 1)
#         if gcd(e, phi_n) == 1:
#             return e

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
    
def private_key_selection(phi_n, e):
    for k in range(0,200):
        d = (1 + k * phi_n) / e
        if d.is_integer():
            return int(d)
            break


# Encrypting data
def encrypt(plain_text, e, n):
    return pow(plain_text, e, n)

# Decrypting data
def decrypt(cipher_text, d, n):
    return pow(cipher_text, d, n)

@app.route("/RSA/encrypt", methods=["POST"])
def encrypt_route():
    data = request.json
    plain_text = data.get("plainText")
    e = data.get("publicKey")
    p = data.get("p")
    q = data.get("q")
    p = int(p)
    q = int(q)
    e = int(e)
    plain_text = int(plain_text)
    n = p * q
    phi_n = (p - 1) * (q - 1)
    d = mod_inverse(e, phi_n)
    cipher_text = encrypt(plain_text, e, n)

    return jsonify({"cipherText": cipher_text, "privateKey":d, "modulus":n}), 200

@app.route("/RSA/decrypt", methods=["POST"])
def decrypt_route():
    data = request.json
    cipher_text = data.get("cipherText")
    d = data.get("privateKey")
    n = data.get("modulus")
    plain_text = decrypt(cipher_text, d, n)
    return jsonify({"plain_text": plain_text}), 200

@app.route("/RSA3/encrypt", methods=["POST"])
def encrypt3_route():
    data = request.json
    print(data)
    plain_text = data.get("plainText")
    e = data.get("publicKey")
    p = data.get("p")
    q = data.get("q")
    r = data.get("r")
    p = int(p)
    q = int(q)
    r = int(r)
    e = int(e)
    plain_text = int(plain_text)
    n = p * q * r
    z = n - 10
    f = (e * 2) + 1
    phi_n  = (p-1) * (q-1) * (r-1)
    d = private_key_selection(phi_n, e)
    cipher_text = (plain_text ** int((f-1)/2)) % (z+10)


    return jsonify({"cipherText": cipher_text, "privateKey":d, "modulus":n}), 200

@app.route("/RSA3/decrypt", methods=["POST"])
def decrypt3_route():
    data = request.json
    cipher_text = data.get("cipherText")
    d = data.get("privateKey")
    n = data.get("modulus")
    z = n - 10
    plain_text = (cipher_text ** d) % (z+10)

    return jsonify({"plain_text": plain_text}), 200

@app.route("/RSA4/encrypt", methods=["POST"])
def encrypt4_route():
    data = request.json
    print(data)
    plain_text = data.get("plainText")
    e = data.get("publicKey")
    p = data.get("p")
    q = data.get("q")
    r = data.get("r")
    s = data.get("s")
    p = int(p)
    q = int(q)
    r = int(r)
    s = int(s)
    e = int(e)
    plain_text = int(plain_text)
    n = p * q * r * s
    z = n - 10
    f = (e * 2) + 1
    phi_n = (p - 1) * (q - 1) * (r - 1) * (s - 1)
    d = private_key_selection(phi_n, e)
    cipher_text = (plain_text ** int((f-1)/2)) % (z+10)

    return jsonify({"cipherText": cipher_text, "privateKey":d, "modulus":n}), 200

@app.route("/RSA4/decrypt", methods=["POST"])
def decrypt4_route():
    data = request.json
    cipher_text = data.get("cipherText")
    d = data.get("privateKey")
    n = data.get("modulus")
    z = n - 10
    plain_text = (cipher_text ** d) % (z+10)

    return jsonify({"plain_text": plain_text}), 200

if __name__ == "__main__":
    app.run(debug=True)
