const innerArraySchema = (param) => {
    const schema = {
        type: "array",
        items: [
            param === "object"
                ? {
                      type: "object",
                      patternProperties: {
                          "^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$":
                              { type: "string", minLength: 2 }
                      },
                      additionalProperties: true
                  }
                : { type: "string", minLength: 2 }
        ],
        minItems: 1
    };

    return schema;
};

export default innerArraySchema;
