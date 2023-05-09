Sure! Here is an example of how you could document the API routes in Markdown format for GitHub:

# API Documentation

This is the API documentation for the Study app.

**Base URL**: https://amirandev.com/study/api

## Users

### List all students

```
GET /students
```

Retrieves a list of all students.

#### Query Parameters

| Parameter | Type   | Description                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| search    | string | Optional. Filters the results to include only students whose name matches the search string.        |

#### Response

```json
{
    "status": 1,
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "avatar": "https://example.com/avatar.jpg",
            "created_at": "2022-05-01T12:00:00.000000Z",
            "updated_at": "2022-05-01T12:00:00.000000Z"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "avatar": null,
            "created_at": "2022-05-02T12:00:00.000000Z",
            "updated_at": "2022-05-02T12:00:00.000000Z"
        }
    ]
}
```

### Get a student

```
GET /student/{id}
```

Retrieves information for the student with the specified `id`.

#### Path Parameters

| Parameter | Type | Description                           |
| --------- | ---- | ------------------------------------- |
| id        | int  | Required. The ID of the student to get. |

#### Response

```json
{
    "status": 1,
    "data": {
        "id": 1,
        "name": "John Doe",
        "avatar": "https://example.com/avatar.jpg",
        "created_at": "2022-05-01T12:00:00.000000Z",
        "updated_at": "2022-05-01T12:00:00.000000Z"
    }
}
```

### Add a student

```
POST /students/add
```

Adds a new student.

#### Request Body

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| name      | string | Required. The name of the new student.            |
| avatar    | string | Optional. The URL of the avatar for the new student. |

#### Response

```json
{
    "status": 1,
    "message": "Student added successfully!",
    "data": {
        "id": 3
    }
}
```

## Error Responses

If there is an error processing a request, the API will return a JSON response with an `error` key and a message describing the error. For example:

```json
{
    "status": 0,
    "message": "The name field is required."
}
```

That's just an example of how you could format the API documentation in Markdown for GitHub. You can customize the formatting to suit your needs.
