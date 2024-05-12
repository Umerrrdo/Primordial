# String to bytes
string_data = "Hello, world!"
bytes_data = string_data.encode('utf-8')
print("String to bytes:", bytes_data)

# Bytes to int
int_data = int.from_bytes(bytes_data, byteorder='big')
print("Bytes to int:", int_data)

# Int to bytes
bytes_from_int = int_data.to_bytes((int_data.bit_length() + 7) // 8, byteorder='big')
print("Int to bytes:", bytes_from_int)

# Bytes back to string
string_from_bytes = bytes_from_int.decode('utf-8')
print("Bytes to string:", string_from_bytes)