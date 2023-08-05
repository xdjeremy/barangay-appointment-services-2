migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // remove
    collection.schema.removeField("tonspvgu");

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "tonspvgu",
        name: "role",
        type: "select",
        required: true,
        unique: false,
        options: {
          maxSelect: 1,
          values: ["user", "admin"],
        },
      })
    );

    return dao.saveCollection(collection);
  }
);
