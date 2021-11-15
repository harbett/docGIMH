import innerSchemaIpc from "./innerSchemaIpc";

const schemaRentalValue = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id: { type: "string", minLength: 2 },
        id_contract: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        type_currency: { type: "string", minLength: 2 },
        form_of_payment: { type: "string", minLength: 2 },
        payment_periods: { type: "string", minLength: 2 },
        days: { type: "number", minimum: 0 },
        ipc: innerSchemaIpc,
        units: { type: "number", minimum: 1 },
        total_surface: { type: "number", minimum: 0 },
        value: { type: "number", minimum: 0 },
        start_date: { type: "string", minLength: 2 },
        end_date: { type: "string", minLength: 2 },
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
        "type_currency",
        "form_of_payment",
        "payment_periods",
        "days",
        "ipc",
        "value",
        "start_date",
        "end_date",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaRentalValue;
