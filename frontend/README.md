# Frontend using Angular

Angular is a very famous framework that conforms to the MVVM design pattern, which allows highly responsive frontend appications that efficiently update when data from the server changes or a user interacts with the application.

Benefits of using MVVM :
1. Unit testability 
2. Maintainability 
3. Modularity

MVVM pattern supports two-way data binding between View and View-Model. This allows automatic propagation of changes, inside the state of View-Model to the View.
We decided to use this architecture pattern because it is more event-driven as it uses data binding and thus makes easy separation of core business logic from the View.

### Tutorial 

```
ng serve 
```

***

You first begin by registering on the website by entring your data.

You will then recieve an appointement date so you can go get your vaccination.

You can see the number of registered users and vaccinated users updated in real-time.

After taking your vaccination, you can go back to the website and check that you recieved your vaccination. You can see the number of vaccinated users get incremented, this is assured by the `ngmodel` two-way data-binding.






