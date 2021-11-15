import innerArraySchema from "./innerArraySchema";

const innerSchemaIpc = {
    type: "object",
    properties: {
        accept: { type: "boolean" },
        negative: { type: "boolean" },
        readjustment: innerArraySchema("string")
    },
    required: ["accept", "negative", "readjustment"],
    additionalProperties: false
};

export default innerSchemaIpc;
