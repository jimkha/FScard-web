# Book schedule app

Web is used to book a studying schedule that is similar to GOOGLE calendar.

You can play with it here: [Demo](https://book-schedule-app.herokuapp.com/)

- Tech stack: MERN
- API: [ej2](https://ej2.syncfusion.com/react/documentation/api/schedule/)

## Feature:

1.Login,register,logout

2.Add, delete, update a booking

\*Rule for booking:

- Duration > 15p
- No overlap
- Only set booking in a specified week (X)
- Table capacity <= 50 booking (X)

## Deploy:

1. Run `npm run setup`
2. Rename `.env.example` to `.env` and add environment-specifici variable
3. Run `npm run dev`

\*Note: if you meet a error about babel, you should delete babel-eslint and install babel-eslint@10.0.3
