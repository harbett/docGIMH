const innerSchemaSurface = {
    type: "object",
    properties: {
        surface: { type: "string", minLength: 2 },
        built: { type: "string", minLength: 2 },
        land: { type: "string", minLength: 2 }
    },
    required: ["surface", "built", "land"],
    additionalProperties: false
};

export default innerSchemaSurface;
