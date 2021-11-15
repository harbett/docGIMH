import innerArraySchema from "./innerArraySchema";
import innerSchemaAddress from "./innerSchemaAddress";

const schemaPerson = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        lastName: { type: "string", minLength: 2 },
        type: { type: "string", minLength: 2 },
        gender: { type: "string", minLength: 2 },
        birth: { type: "string", minLength: 2 },
        avatar: { type: "string", minLength: 2 },
        document: innerArraySchema("object"),
        email: innerArraySchema("string"),
        address: innerSchemaAddress,
        phone: innerArraySchema("string"),
        movil: innerArraySchema("string"),
        file: innerArraySchema("string"),
        status: { type: "string", minLength: 2 },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: [
        "name",
        "type",
        "avatar",
        "document",
        "email",
        "address",
        "phone",
        "movil",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaPerson;
