# Backend using SpringBoot

### APIs

```
GET localhost:8080/users/vaccinated
```

This gets the number of vaccinated users on the website

***

```
GET localhost:8080/users
```

This gets the number of all users on the website

***

```
POST localhost:8080/users/create
```

This helps create a new user on the website and assign it a vaccination appoinetment.

Body : firstname, lastname , email , birthday , city , phone, sex

***

```
PUT localhost:8080/users/update/{id}
```

This updates user status to vaccinated.
This takes the id of the user as parameter.
