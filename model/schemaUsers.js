const schemaUsers = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id_person: { type: "string", minLength: 2 },
        id_permits: { type: "string", minLength: 2 },
        user_name: { type: "string", minLength: 2 },
        password: { type: "string", minLength: 2 },
        type_users_access: { type: "string", minLength: 2 },
        token: { type: "string", minLength: 2 },
        status: { type: "string", minLength: 2 },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: ["id_person", "id_permits", "user_name", "password"],
    additionalProperties: false
};

export default schemaUsers;
