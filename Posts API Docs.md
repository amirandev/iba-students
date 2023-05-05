API Documentation:

API endpoint: https://amirandev.com/study/api

GET /posts:
Returns a list of all posts in descending order of their ids.

Response:
```json
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "student_id": 1,
      "text": "This is a post.",
      "created_at": "2022-05-01 12:00:00",
      "updated_at": "2022-05-01 12:00:00"
    },
    {
      "id": 2,
      "student_id": 2,
      "text": "This is another post.",
      "created_at": "2022-05-02 12:00:00",
      "updated_at": "2022-05-02 12:00:00"
    }
  ]
}
```

GET /post/{id}:
Returns the post with the specified id.

Response:
```json
{
  "status": 1,
  "data": {
    "id": 1,
    "student_id": 1,
    "text": "This is a post.",
    "created_at": "2022-05-01 12:00:00",
    "updated_at": "2022-05-01 12:00:00"
  }
}
```

POST /posts/add:
Adds a new post to the database with the specified student_id and text.

Request body:
```json
{
  "student_id": 1,
  "text": "This is a new post."
}
```

Response:
```json
{
  "status": 1,
  "data": {
    "id": 3
  }
}
```

Note: The API uses Laravel validation to validate the request parameters. The student_id parameter must exist in the "students" table and the text parameter must be at least 3 characters long. If the validation fails, the API returns an error message with status code 0.
