options = {
    validator: {
        $jsonSchema: {
            required: ["title", "year"],
            properties: {
                title: {
                    bsonType: "string",
                    minLength: 1,
                },
                year: {
                    bsonType: "int",
                    minimum: 1870,
                    maximum: 2500,
                },
                writers: {
                    bsonType: "array",
                    maxItems: 10,
                    items: {
                        bsonType: "string",
                    },
                },
                summary: { bsonType: "string" },
                franchise: { bsonType: "string" },
                runningTime: { bsonType: "int", maximum: 54000 },
                budget: { bsonType: "int", minimum: 0 },
                box_office: {
                    bsonType: "int",
                    minimum: 0,
                },
                actors: {
                    bsonType: "array",
                    maxItems: 20,
                    items: {
                        bsonType: "string",
                    },
                },
                directors: {
                    bsonType: "array",
                    maxItems: 10,
                    items: {
                        bsonType: "string",
                    },
                },
                genres: {
                    bsonType: "array",
                    maxItems: 10,
                    items: {
                        bsonType: "string",
                    },
                },
                imdb_id: { pattern: '^[a-z]{2}\d{7,}$' },
            },
        },
    },
};

db.films.insertOne({
    title: "Star Trek: Nemesis",
    year: 2002,
    writers: [
        "John Logan", "Rick Berman", "Brent Spiner"
    ],
    summary: (
        "A clone of Picard, created by the Romulans, assassinates the Romulan Senate, "+
        "assumes absolute power, and lures Picard and the Enterprise to Romulus "+
        "under the false pretext of a peace overture."
    ),
});