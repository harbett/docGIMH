const innerSchemaFloor = {
    type: "object",
    properties: {
        flat: { type: "string", minLength: 2 },
        location: { type: "string", minLength: 2 },
        number: { type: "string", minLength: 2 }
    },
    required: ["flat", "location", "number"],
    additionalProperties: false
};

export default innerSchemaFloor;
