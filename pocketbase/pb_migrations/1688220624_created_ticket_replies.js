migrate(
  (db) => {
    const collection = new Collection({
      id: "ihlrh4kd8ys7w2x",
      created: "2023-07-01 14:10:24.054Z",
      updated: "2023-07-01 14:10:24.054Z",
      name: "ticket_replies",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "s2mxvdki",
          name: "ticket",
          type: "relation",
          required: true,
          unique: false,
          options: {
            collectionId: "0y4vr5nnjy0ahrj",
            cascadeDelete: true,
            minSelect: null,
            maxSelect: 1,
            displayFields: [],
          },
        },
        {
          system: false,
          id: "zmy6en5d",
          name: "message",
          type: "text",
          required: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "dfxk3ihz",
          name: "role",
          type: "select",
          required: true,
          unique: false,
          options: {
            maxSelect: 1,
            values: ["user", "admin"],
          },
        },
      ],
      indexes: [],
      listRule: "",
      viewRule: "",
      createRule: "",
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("ihlrh4kd8ys7w2x");

    return dao.deleteCollection(collection);
  }
);
