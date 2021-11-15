const innerSchemaSurfaceOfUnit = {
    type: "object",
    properties: {
        surface: { type: "string", minLength: 2 },
        total: { type: "string", minLength: 2 },
        useful: { type: "string", minLength: 2 }
    },
    required: ["surface", "total", "useful"],
    additionalProperties: false
};

export default innerSchemaSurfaceOfUnit;
