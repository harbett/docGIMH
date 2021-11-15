import innerArraySchema from "./innerArraySchema";

const schemaPermits = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        create: { type: "boolean" },
        update: { type: "boolean" },
        delete: { type: "boolean" },
        access: innerArraySchema("string"),
        ownershipLimit: innerArraySchema("string"),
        status: { type: "string", minLength: 2 },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: ["create", "update", "delete", "access", "user_add"],
    additionalProperties: false
};

export default schemaPermits;
