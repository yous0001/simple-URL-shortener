# Simple URL Shortener

This project is a URL shortener service built with Node.js, Express, and MongoDB. It allows users to shorten long URLs and redirect to the original URL using the shortened link.

## Features

- Shorten long URLs.
- Redirect to original URLs via shortened links.
- Track the number of visits to each shortened URL.

## Prerequisites

- Node.js installed
- MongoDB instance running locally or remotely

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yous0001/simple-URL-shortener.git
   cd simple-URL-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   CONNECTION_URL_DEPLOY=mongodb://127.0.0.1:27017/shorter-url
   BASE_URL=http://localhost:3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage

- To shorten a URL, send a POST request to `/` with a JSON body containing the `longUrl`:
  ```json
  {
    "longUrl": "https://example.com"
  }
  ```

- To access the original URL, send a GET request to `/` with a JSON body containing the `shortUrl`:
  ```json
  {
    "shortUrl": "http://localhost:3000/abc123"
  }
  ```

- If the `shortUrl` exists, you will be redirected to the corresponding `longUrl`.

## Routes

- `POST /`: Shorten a URL.
- `GET /`: Redirect to the original URL using the shortened link.

## Project Structure

```
.
├── DB
│   └── models
│       └── url.model.js
├── Routes
│   └── shorterRoute.js
├── controllers
│   └── shorterController.js
├── middlewares
│   └── errorHandler.js
├── index.js
├── package.json
├── .env
└── README.md
```

## Error Handling

This project includes basic error handling to manage unexpected issues. Common error responses include:

- `400 Bad Request`: Invalid input (e.g., invalid URL format).
- `404 Not Found`: URL not found in the database.
- `409 Conflict`: URL already exists in the database.
- `500 Internal Server Error`: Unexpected server errors.

## Future Enhancements

- Add a user interface for easier interaction.
- Track the number of visits for each shortened URL.
- Implement user authentication for private URL management.
- Add custom alias support for shortened URLs.

## License

This project is licensed under the MIT License.

## Author

Yousef Emad Mikhail
