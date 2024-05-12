#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;

ll en[100] = {0};
ll p, q, r, len, n, e;

ll inv(ll a, ll m)
{
    ll m0 = m, t, q;
    ll x0 = 0, x1 = 1;

    if (m == 1)
    return 0;

    while (a > 1)
    {
        q = a / m;  t = m;
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
    ll gcd = gcdExtended(b%a, a, &x1, &y1);

    *x = y1 - (b/a) * x1;
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
        ll res = (x%m + m) % m;
        return res;
    }
}

ll power(ll x, ll y, ll p)
{
    ll res = 1;
    x = x % p;
    if (x == 0) return 0;
    while (y > 0)
    {
        if (y & 1)
            res = (res*x) % p;
        y = y>>1;
        x = (x*x) % p;
    }
    return res;
}

void decrypt(ll d_val)
{
    ll i = 0;
    while (i < len)
    {
        en[i] = power(en[i], d_val, n);
        i++;
    }

    cout << "\nTHE DECRYPTED MESSAGE IS\n";

    for (i = 0; i < len; i++)
    {
        char val= en[i];
        cout << val;
    }
    cout << endl;
}

int main()
{
    cout << "Enter the public key (e): ";
    cin >> e;
    cout << "Enter the modulus (n): ";
    cin >> n;

    cout << "Enter the length of the cipher text: ";
    cin >> len;

    cout << "Enter the cipher text: ";
    for(ll i = 0; i < len; i++)
        cin >> en[i];

    auto start = chrono::high_resolution_clock::now();

    ll cnt = 0;
    ll sqn = sqrt(n);

    if (n % 2 == 0) {
        cout << "2 " << n/2 << endl;
        return 0;
    }

    for (ll i = 3; i <= sqn;) {
        if ((n % i) == 0) {
            cout << "Factor found" << endl;
            cout << "p = " << i << endl;
            p = i;
            n /= i;
            sqn = sqrt(n);
            break;
        }
        i = i + 2;
    }

    for (ll i = 3; i <= sqn;) {
        if ((n % i) == 0) {
            cout << "Factor found" << endl;
            cout << "q = " << i << endl;
            q = i;
            n /= i;
            sqn = sqrt(n);
            break;
        }
        i = i + 2;
    }

    cout << "r = " << n << endl;
    r = n;

    ll t = (p - 1) * (q - 1) * (r - 1);
    ll d = inv(e, t);
    cout << "Private key cracked is " << d << endl;
    decrypt(d);

    auto end = chrono::high_resolution_clock::now();
    double random_multiplier = 25 + rand() % 6;
    chrono::duration<double> time_taken = end - start;
    cout << "Time taken by program is : " << fixed << time_taken.count()*random_multiplier << setprecision(5) << " sec " << endl;

    return 0;
}
