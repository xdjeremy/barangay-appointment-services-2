migrate(
  (db) => {
    const collection = new Collection({
      id: "0y4vr5nnjy0ahrj",
      created: "2023-07-01 14:10:24.053Z",
      updated: "2023-07-01 14:10:24.053Z",
      name: "tickets",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "waikpj0p",
          name: "user",
          type: "relation",
          required: true,
          unique: false,
          options: {
            collectionId: "_pb_users_auth_",
            cascadeDelete: false,
            minSelect: null,
            maxSelect: 1,
            displayFields: [],
          },
        },
        {
          system: false,
          id: "vticbnpw",
          name: "email",
          type: "email",
          required: true,
          unique: false,
          options: {
            exceptDomains: [],
            onlyDomains: [],
          },
        },
        {
          system: false,
          id: "isaznivk",
          name: "subject",
          type: "text",
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "mfrbsx28",
          name: "body",
          type: "text",
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "pkzjforv",
          name: "active",
          type: "bool",
          required: false,
          unique: false,
          options: {},
        },
      ],
      indexes: [],
      listRule: "@request.auth.role = 'admin' || @request.auth.id = user.id",
      viewRule: "@request.auth.role = 'admin' || @request.auth.id = user.id",
      createRule: "",
      updateRule: "@request.auth.role = 'admin'",
      deleteRule: "@request.auth.role = 'admin'",
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("0y4vr5nnjy0ahrj");

    return dao.deleteCollection(collection);
  }
);
