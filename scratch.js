options = {
    validator: {
        $jsonSchema: {
            required: ["title"],
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

db.films.insertMany([
    {
        title: "My Dearest Assassin",
        writers: ["Watthana Veerayawatthana"],
        actors: ["Pimchanok Luevisadpaibul", "Tor Thanapob Leeratanakachorn", "Sivakorn Adulsuttiku"],
        year: 2026,
        running_time: 127,
        budget: 237000000,
        genre: ["Action", "Romance", "Thai", "Thriller", "Drama"],
    },
    {
        title: "Fictionally Fake Film",
    },
    {
        title: "You Cannae be Serious About a Fictional Film",
    }
]);

db.films.insertMany([
    {
        title: "Pride",
        year: 2014,
        writers: ["Stephen Beesform"],
        franchise: [],
        running_time: 192,
        imdb_rating: 7.8
    },
    {
        title: "Pee Wee Herman's Big Adventure",
    },
    {
        title: "A Fictional Tale as a Fake Film",
    },
]);

