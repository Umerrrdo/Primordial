#include <bits/stdc++.h>
#include <chrono>
using namespace std;
typedef long long int ll;

ll en[100] = {0};
ll p, q, t, len, n, e;
ll m[100];

ll inv(ll a, ll m)
{
    ll m0 = m, t, q;
    ll x0 = 0, x1 = 1;

    if (m == 1)
        return 0;
    while (a > 1)
    {
        q = a / m;
        t = m;
        m = a % m, a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }
    if (x1 < 0)
        x1 += m0;

    return x1;
}

ll gcdExtended(ll a, ll b, ll *x, ll *y)
{
    if (a == 0)
    {
        *x = 0, *y = 1;
        return b;
    }

    ll x1, y1;
    ll gcd = gcdExtended(b % a, a, &x1, &y1);

    *x = y1 - (b / a) * x1;
    *y = x1;

    return gcd;
}

ll modInverse(ll a, ll m)
{
    ll x, y;
    ll g = gcdExtended(a, m, &x, &y);
    if (g != 1)
        return 0;
    else
    {
        ll res = (x % m + m) % m;
        return res;
    }
}

ll power(ll x, ll y, ll p)
{
    ll res = 1;
    x = x % p;
    if (x == 0)
        return 0;
    while (y > 0)
    {
        if (y & 1)
            res = (res * x) % p;
        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
}

void decrypt(ll d_val)
{
    ll i = 0;
    while (i < len)
    {
        m[i++] = power(en[i], d_val, n);
    }

    cout << "\nTHE DECRYPTED MESSAGE IS\n";

    for (i = 0; i < len; i++)
    {
        char val = m[i];
        cout << val;
    }
    cout << endl;
}

int main()
{
    cout << "Enter the public key e: ";
    cin >> e;
    cout << "Enter the modulus N: ";
    cin >> n;

    cout << "Enter the length of the ciphertext: ";
    cin >> len;
    cout << "Enter the ciphertext: ";
    for (ll i = 0; i < len; i++)
        cin >> en[i];

    ll cnt = 0;
    ll sqn = sqrt(n);

    if (n % 2 == 0)
    {
        cout << "2 " << n / 2 << endl;
        return 0;
    }

    auto start = chrono::high_resolution_clock::now();

    for (ll i = 3; i <= sqn;)
    {
        if ((n % i) == 0)
        {
            cout << "factor found" << endl;
            cout << "p= " << i << endl;
            p = i;
            cout << "q= " << n / i << endl;
            q = n / i;
            break;
        }
        i = i + 2;
    }

    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> time_taken = end - start;
    
    cout << "Time taken by program is : " << fixed
         << time_taken.count()*10 << setprecision(5);
    cout << " sec " << endl;

    t = (p - 1) * (q - 1);
    ll d = inv(e, t);
    cout << "Private key Cracked is " << d << endl;
    decrypt(d);
    return 0;
}
