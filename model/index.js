import nameSchemas from "./nameSchema";
import schemaTypePerson from "./schemaTypePerson";
import schemaTypeActivity from "./schemaTypeActivity";
import schemaTypeLease from "./schemaTypeLease";
import schemaTypeOwnership from "./schemaTypeOwnership";
import schemaTypeSurface from "./schemaTypeSurface";
import schemaOwnership from "./schemaOwnership";
import schemaTypeRolPerson from "./schemaTypeRolPerson";
import schemaPerson from "./schemaPerson";
import schemaTypeRentalUnit from "./schemaRentalUnit";
import schemaPermits from "./schemaPermits";
import schemaStatusContract from "./schemaStatusContract";
import schemaTypeContract from "./schemaTypeContract";
import schemaTypePayment from "./schemaTypePayment";
import schemaTypeCurrency from "./schemaTypeCurrency";
import schemaFormPayment from "./schemaFormPayment";
import schemaPaymentPeriods from "./schemaPaymentPeriods";
import schemaUsers from "./schemaUsers";
import schemaRentalValue from "./schemaRentalValue";
import schemaStatusOwnership from "./schemaStatusOwnership";
import schemaStatusLease from "./schemaStatusLease";
import schemaContract from "./schemaContract";
import schemaFine from "./schemaFine";
import schemaGuarantee from "./schemaGuarantee";
import schemaTypeUsersAccess from "./schemaTypeUsersAccess";
import schemaTypeDebtsContract from "./schemaTypeDebtsContract";
import schemaTypeEndorsement from "./schemaTypeEndorsement";
import schemaRecordRolPerson from "./schemaRecordRolPerson";

// TODO: revisar los esquemas y sus campos requeridos

// * lista de nombre de los documentos normalizados
const {
    TYPE_ROL_PERSON,
    TYPE_ACTIVITY,
    TYPE_PERSON,
    TYPE_OWNERSHIP,
    TYPE_LEASE,
    TYPE_SURFACE,
    TYPE_CONTRACT,
    TYPE_PAYMENT,
    TYPE_CURRENCY,
    TYPE_USER_ACCESS,
    TYPE_DEBT_CONTRACT,
    TYPE_ENDORSEMENT,
    FORM_OF_PAYMENT,
    PAYMENT_PERIODS,
    PERMITS,
    PERSON,
    RECORD_ROL_PERSON,
    USERS,
    OWNERSHIP,
    RENTAL_UNIT,
    RENTAL_VALUE,
    CONTRACT,
    GUARANTEE,
    FINE,
    STATUS_CONTRACT,
    STATUS_OWNERSHIP,
    STATUS_LEASE
} = nameSchemas;

// * funcion para seleccionar el esquema que se desea validar
function selectSchema(params) {
    switch (params) {
        case TYPE_PERSON:
            return schemaTypePerson;
        case TYPE_ACTIVITY:
            return schemaTypeActivity;
        case TYPE_LEASE:
            return schemaTypeLease;
        case TYPE_SURFACE:
            return schemaTypeSurface;
        case TYPE_CONTRACT:
            return schemaTypeContract;
        case TYPE_PAYMENT:
            return schemaTypePayment;
        case TYPE_CURRENCY:
            return schemaTypeCurrency;
        case TYPE_USER_ACCESS:
            return schemaTypeUsersAccess;
        case TYPE_DEBT_CONTRACT:
            return schemaTypeDebtsContract;
        case TYPE_ENDORSEMENT:
            return schemaTypeEndorsement;
        case FORM_OF_PAYMENT:
            return schemaFormPayment;
        case PAYMENT_PERIODS:
            return schemaPaymentPeriods;
        case USERS:
            return schemaUsers;
        case TYPE_OWNERSHIP:
            return schemaTypeOwnership;
        case TYPE_ROL_PERSON:
            return schemaTypeRolPerson;
        case PERMITS:
            return schemaPermits;
        case PERSON:
            return schemaPerson;
        case OWNERSHIP:
            return schemaOwnership;
        case RENTAL_UNIT:
            return schemaTypeRentalUnit;
        case RENTAL_VALUE:
            return schemaRentalValue;
        case CONTRACT:
            return schemaContract;
        case GUARANTEE:
            return schemaGuarantee;
        case FINE:
            return schemaFine;
        case STATUS_CONTRACT:
            return schemaStatusContract;
        case STATUS_OWNERSHIP:
            return schemaStatusOwnership;
        case STATUS_LEASE:
            return schemaStatusLease;
        case RECORD_ROL_PERSON:
            return schemaRecordRolPerson;

        default:
            return "No Encontrado";
    }
}

// * exportar funcion
export default selectSchema;
