migrate(
  (db) => {
    const collection = new Collection({
      id: "kzpgfaji9ms9z9r",
      created: "2023-07-01 14:10:24.053Z",
      updated: "2023-07-01 14:10:24.053Z",
      name: "document_requests",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "rf2r3szu",
          name: "document_type",
          type: "select",
          required: true,
          unique: false,
          options: {
            maxSelect: 1,
            values: [
              "barangay_clearance",
              "police_clearance",
              "barangay_id",
              "potsal_id",
            ],
          },
        },
        {
          system: false,
          id: "3hfs6kld",
          name: "user",
          type: "relation",
          required: true,
          unique: false,
          options: {
            collectionId: "_pb_users_auth_",
            cascadeDelete: true,
            minSelect: null,
            maxSelect: 1,
            displayFields: [],
          },
        },
        {
          system: false,
          id: "pvppwkym",
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
          id: "3zx7evnc",
          name: "active",
          type: "bool",
          required: false,
          unique: false,
          options: {},
        },
      ],
      indexes: [],
      listRule: "@request.auth.role = 'admin'",
      viewRule: "@request.auth.role = 'admin'",
      createRule: "",
      updateRule: "@request.auth.role = 'admin'",
      deleteRule: "@request.auth.role = 'admin'",
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r");

    return dao.deleteCollection(collection);
  }
);
