const innerSchemaAddress = {
    type: "object",
    properties: {
        country: { type: "string", minLength: 2 },
        code: { type: "string", minLength: 2 },
        city: { type: "string", minLength: 2 },
        state: { type: "string", minLength: 2 },
        location: { type: "string", minLength: 2 },
        zip: { type: "string", minLength: 2 }
    },
    required: ["country", "city", "state", "location", "zip"],
    additionalProperties: false
};

export default innerSchemaAddress;
