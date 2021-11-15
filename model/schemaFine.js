const schemaFine = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id: { type: "string", minLength: 2 },
        id_contract: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        description: { type: "string", minLength: 2 },
        type_payment: { type: "string", minLength: 2 },
        type_currency: { type: "string", minLength: 2 },
        form_of_payment: { type: "string", minLength: 2 },
        payment_periods: { type: "string", minLength: 2 },
        value: { type: "number", minimum: 0 },
        status: { type: "string", minLength: 2 },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: [
        "id",
        "id_contract",
        "name",
        "description",
        "type_payment",
        "type_currency",
        "form_of_payment",
        "payment_periods",
        "value",
        "status",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaFine;
