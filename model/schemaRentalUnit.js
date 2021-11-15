import innerArraySchema from "./innerArraySchema";
import innerSchemaFloor from "./innerSchemaFloor";
import innerSchemaSurfaceOfUnit from "./innerSchemaSurfaceOfUnit";

const schemaTypeRentalUnit = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id: { type: "string", minLength: 2 },
        id_ownership: { type: "string", minLength: 2 },
        type_activity: { type: "string", minLength: 2 },
        type_lease: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        avatar: { type: "string", minLength: 2 },
        surface: innerSchemaSurfaceOfUnit,
        floor: innerSchemaFloor,
        services: innerArraySchema("object"),
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
        "id_ownership",
        "type_activity",
        "type_lease",
        "name",
        "avatar",
        "surface",
        "floor",
        "services",
        "file",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaTypeRentalUnit;
