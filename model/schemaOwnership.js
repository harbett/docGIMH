import innerArraySchema from "./innerArraySchema";
import innerSchemaAddress from "./innerSchemaAddress";
import innerSchemaSurface from "./innerSchemaSurface";

const schemaOwnership = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id: { type: "string", minLength: 2 },
        id_person: { type: "string", minLength: 2 },
        address: innerSchemaAddress,
        id_tax: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        avatar: { type: "string", minLength: 2 },
        surface: innerSchemaSurface,
        year: { type: "string", minLength: 2 },
        file: innerArraySchema("object"),
        status: { type: "string", minLength: 2 },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: [
        "id",
        "id_person",
        "address",
        "id_tax",
        "name",
        "avatar",
        "surface",
        "year",
        "file",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaOwnership;
