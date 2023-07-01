migrate(
  (db) => {
    const collection = new Collection({
      id: "7aq2qxxirrlelde",
      created: "2023-07-01 14:10:24.054Z",
      updated: "2023-07-01 14:10:24.054Z",
      name: "appointments",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "cyxxsgs7",
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
          id: "vofazy9p",
          name: "appoint_type",
          type: "select",
          required: false,
          unique: false,
          options: {
            maxSelect: 1,
            values: [
              "barangay_captain",
              "barangay_secretatary",
              "barangay_treasurer",
              "barangay_councilor",
              "sk_chairman",
            ],
          },
        },
        {
          system: false,
          id: "voyfr3mf",
          name: "appointment_date",
          type: "date",
          required: false,
          unique: false,
          options: {
            min: "",
            max: "",
          },
        },
        {
          system: false,
          id: "okwiruzx",
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
    const collection = dao.findCollectionByNameOrId("7aq2qxxirrlelde");

    return dao.deleteCollection(collection);
  }
);
