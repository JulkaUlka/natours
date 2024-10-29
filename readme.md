<h1 align="center">
  <br>
  <a href=""><img src="https://github.com/JulkaUlka/natours/blob/main/public/img/logo-green.png" alt="Natours" width="200"></a>
  <br>
  Natours
  <br>
</h1>

<h4 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

## Key Features 📝

### Authentication and Authorization

- `Sign up`, `Log in`, `Logout`, `Update`, and `Reset password`

### User Profile

- Update `username`, `photo`, `email`, `password`, and other information
- Roles: `regular user` (default), `admin`, `lead guide`, and `guide`

### Tours

- Tours can be:
  - Created by `admin` or `lead guide`
  - Viewed by `all users`
  - Updated or deleted by `admin` or `lead guide`
- Users can manage `bookings`, view `tour map`, and check `reviews` and `ratings`

### Bookings

- Only `regular users` can book tours (with payment)

### Reviews

- `Regular users` can write, edit, and delete reviews for tours they've booked
- `Admin` can delete any review
- All users can view tour reviews

### Favorite Tours

- `Regular users` can:
  - Add a booked tour to `favorites`
  - Remove a tour from `favorites`
  - Restriction: can’t add a tour that’s already in `favorites`

### Payments

- Support for `credit card payment` on bookings

## How To Use 🤔

### Book a tour

- Create an accaunt or login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page
- Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 29
  - CVV: 222
  ```
- Finished!

### Manage your booking

- Check the tour you have booked on the "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

- You can update your own username, profile photo, email, and password.

## Build With 🏗️

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API and Making payments on the app.
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) - Email delivery platform
- [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Mapbox](https://www.mapbox.com/) - Displaying the different locations of each tour.
