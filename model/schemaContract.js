import innerArraySchema from "./innerArraySchema";

const schemaContract = {
    type: "object",
    properties: {
        _id: { type: "string", minLength: 2 },
        _rev: { type: "string", minLength: 2 },
        id: { type: "string", minLength: 2 },
        id_ownership: { type: "string", minLength: 2 },
        rent_list: innerArraySchema("string"),
        tenant: innerArraySchema("string"),
        endorsements: innerArraySchema("string"),
        start_contract: { type: "string" },
        end_contract: { type: "string" },
        contract_duration: { type: "string" },
        start_date: { type: "string" },
        end_date: { type: "string" },
        renewable: { type: "boolean" },
        reminder: { type: "number", minimum: 1, maximum: 5 },
        file: innerArraySchema("object"),
        status: { type: "string" },
        user_add: { type: "string", minLength: 2 },
        user_update: { type: "string", minLength: 2 },
        create_at: { type: "string", minLength: 10 },
        delete_at: { type: "string" },
        update_at: { type: "string" }
    },
    required: [
        "id",
        "id_ownership",
        "tenant",
        "endorsements",
        "start_contract",
        "end_contract",
        "contract_duration",
        "start_date",
        "end_date",
        "renewable",
        "reminder",
        "status",
        "user_add"
    ],
    additionalProperties: false
};

export default schemaContract;
