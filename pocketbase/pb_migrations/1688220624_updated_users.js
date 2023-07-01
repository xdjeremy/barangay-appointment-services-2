migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    collection.listRule =
      "id = @request.auth.id || @request.auth.role = 'admin'";
    collection.viewRule =
      "id = @request.auth.id || @request.auth.role = 'admin'";
    collection.createRule = "@request.data.role = 'user'";
    collection.updateRule =
      "id = @request.auth.id || @request.auth.role = 'admin'";
    collection.deleteRule =
      "id = @request.auth.id || @request.auth.role = 'admin'";
    collection.options = {
      allowEmailAuth: true,
      allowOAuth2Auth: false,
      allowUsernameAuth: true,
      exceptEmailDomains: null,
      manageRule: null,
      minPasswordLength: 8,
      onlyEmailDomains: null,
      requireEmail: true,
    };

    // remove
    collection.schema.removeField("users_avatar");

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
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    collection.listRule = null;
    collection.viewRule = null;
    collection.createRule = null;
    collection.updateRule = null;
    collection.deleteRule = null;
    collection.options = {
      allowEmailAuth: true,
      allowOAuth2Auth: true,
      allowUsernameAuth: true,
      exceptEmailDomains: null,
      manageRule: null,
      minPasswordLength: 8,
      onlyEmailDomains: null,
      requireEmail: false,
    };

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "users_avatar",
        name: "avatar",
        type: "file",
        required: false,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp",
          ],
          thumbs: null,
          protected: false,
        },
      })
    );

    // remove
    collection.schema.removeField("tonspvgu");

    return dao.saveCollection(collection);
  }
);
