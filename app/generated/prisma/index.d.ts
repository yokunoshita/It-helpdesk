
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model MessageAttachment
 * 
 */
export type MessageAttachment = $Result.DefaultSelection<Prisma.$MessageAttachmentPayload>
/**
 * Model TicketStatusHistory
 * 
 */
export type TicketStatusHistory = $Result.DefaultSelection<Prisma.$TicketStatusHistoryPayload>
/**
 * Model TicketAssignmentHistory
 * 
 */
export type TicketAssignmentHistory = $Result.DefaultSelection<Prisma.$TicketAssignmentHistoryPayload>
/**
 * Model SlaPolicy
 * 
 */
export type SlaPolicy = $Result.DefaultSelection<Prisma.$SlaPolicyPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TicketCategory: {
  HARDWARE: 'HARDWARE',
  SOFTWARE: 'SOFTWARE',
  NETWORK: 'NETWORK',
  ACCOUNT: 'ACCOUNT',
  OTHER: 'OTHER'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING: 'WAITING',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tickets
 * const tickets = await prisma.ticket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tickets
   * const tickets = await prisma.ticket.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageAttachment`: Exposes CRUD operations for the **MessageAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageAttachments
    * const messageAttachments = await prisma.messageAttachment.findMany()
    * ```
    */
  get messageAttachment(): Prisma.MessageAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketStatusHistory`: Exposes CRUD operations for the **TicketStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketStatusHistories
    * const ticketStatusHistories = await prisma.ticketStatusHistory.findMany()
    * ```
    */
  get ticketStatusHistory(): Prisma.TicketStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAssignmentHistory`: Exposes CRUD operations for the **TicketAssignmentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAssignmentHistories
    * const ticketAssignmentHistories = await prisma.ticketAssignmentHistory.findMany()
    * ```
    */
  get ticketAssignmentHistory(): Prisma.TicketAssignmentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slaPolicy`: Exposes CRUD operations for the **SlaPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlaPolicies
    * const slaPolicies = await prisma.slaPolicy.findMany()
    * ```
    */
  get slaPolicy(): Prisma.SlaPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ticket: 'Ticket',
    TicketMessage: 'TicketMessage',
    MessageAttachment: 'MessageAttachment',
    TicketStatusHistory: 'TicketStatusHistory',
    TicketAssignmentHistory: 'TicketAssignmentHistory',
    SlaPolicy: 'SlaPolicy',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ticket" | "ticketMessage" | "messageAttachment" | "ticketStatusHistory" | "ticketAssignmentHistory" | "slaPolicy" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      MessageAttachment: {
        payload: Prisma.$MessageAttachmentPayload<ExtArgs>
        fields: Prisma.MessageAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          findFirst: {
            args: Prisma.MessageAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          findMany: {
            args: Prisma.MessageAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[]
          }
          create: {
            args: Prisma.MessageAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          createMany: {
            args: Prisma.MessageAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[]
          }
          delete: {
            args: Prisma.MessageAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          update: {
            args: Prisma.MessageAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.MessageAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.MessageAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
          }
          aggregate: {
            args: Prisma.MessageAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageAttachment>
          }
          groupBy: {
            args: Prisma.MessageAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<MessageAttachmentCountAggregateOutputType> | number
          }
        }
      }
      TicketStatusHistory: {
        payload: Prisma.$TicketStatusHistoryPayload<ExtArgs>
        fields: Prisma.TicketStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.TicketStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.TicketStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.TicketStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.TicketStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.TicketStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          update: {
            args: Prisma.TicketStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.TicketStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketStatusHistory>
          }
          groupBy: {
            args: Prisma.TicketStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      TicketAssignmentHistory: {
        payload: Prisma.$TicketAssignmentHistoryPayload<ExtArgs>
        fields: Prisma.TicketAssignmentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAssignmentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          findFirst: {
            args: Prisma.TicketAssignmentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAssignmentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          findMany: {
            args: Prisma.TicketAssignmentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>[]
          }
          create: {
            args: Prisma.TicketAssignmentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          createMany: {
            args: Prisma.TicketAssignmentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAssignmentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>[]
          }
          delete: {
            args: Prisma.TicketAssignmentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          update: {
            args: Prisma.TicketAssignmentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketAssignmentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAssignmentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketAssignmentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentHistoryPayload>
          }
          aggregate: {
            args: Prisma.TicketAssignmentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAssignmentHistory>
          }
          groupBy: {
            args: Prisma.TicketAssignmentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAssignmentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAssignmentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAssignmentHistoryCountAggregateOutputType> | number
          }
        }
      }
      SlaPolicy: {
        payload: Prisma.$SlaPolicyPayload<ExtArgs>
        fields: Prisma.SlaPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlaPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlaPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          findFirst: {
            args: Prisma.SlaPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlaPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          findMany: {
            args: Prisma.SlaPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          create: {
            args: Prisma.SlaPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          createMany: {
            args: Prisma.SlaPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlaPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          delete: {
            args: Prisma.SlaPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          update: {
            args: Prisma.SlaPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          deleteMany: {
            args: Prisma.SlaPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlaPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlaPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          upsert: {
            args: Prisma.SlaPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          aggregate: {
            args: Prisma.SlaPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlaPolicy>
          }
          groupBy: {
            args: Prisma.SlaPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlaPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlaPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<SlaPolicyCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    ticket?: TicketOmit
    ticketMessage?: TicketMessageOmit
    messageAttachment?: MessageAttachmentOmit
    ticketStatusHistory?: TicketStatusHistoryOmit
    ticketAssignmentHistory?: TicketAssignmentHistoryOmit
    slaPolicy?: SlaPolicyOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    messages: number
    statusHistory: number
    assignmentHistory: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TicketCountOutputTypeCountMessagesArgs
    statusHistory?: boolean | TicketCountOutputTypeCountStatusHistoryArgs
    assignmentHistory?: boolean | TicketCountOutputTypeCountAssignmentHistoryArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketStatusHistoryWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAssignmentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentHistoryWhereInput
  }


  /**
   * Count Type TicketMessageCountOutputType
   */

  export type TicketMessageCountOutputType = {
    attachments: number
  }

  export type TicketMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | TicketMessageCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TicketMessageCountOutputType without action
   */
  export type TicketMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessageCountOutputType
     */
    select?: TicketMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketMessageCountOutputType without action
   */
  export type TicketMessageCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageAttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    feedbackRating: number | null
  }

  export type TicketSumAggregateOutputType = {
    feedbackRating: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    reporterKey: string | null
    reporterName: string | null
    reporterLocation: string | null
    priority: $Enums.TicketPriority | null
    category: $Enums.TicketCategory | null
    status: $Enums.TicketStatus | null
    responseDueAt: Date | null
    resolveDueAt: Date | null
    firstReplyAt: Date | null
    closedAt: Date | null
    feedbackRating: number | null
    feedbackSubmittedAt: Date | null
    assignedAdminId: string | null
    assignedAt: Date | null
    lastAdminReadAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    reporterKey: string | null
    reporterName: string | null
    reporterLocation: string | null
    priority: $Enums.TicketPriority | null
    category: $Enums.TicketCategory | null
    status: $Enums.TicketStatus | null
    responseDueAt: Date | null
    resolveDueAt: Date | null
    firstReplyAt: Date | null
    closedAt: Date | null
    feedbackRating: number | null
    feedbackSubmittedAt: Date | null
    assignedAdminId: string | null
    assignedAt: Date | null
    lastAdminReadAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    code: number
    title: number
    description: number
    reporterKey: number
    reporterName: number
    reporterLocation: number
    priority: number
    category: number
    status: number
    responseDueAt: number
    resolveDueAt: number
    firstReplyAt: number
    closedAt: number
    feedbackRating: number
    feedbackSubmittedAt: number
    assignedAdminId: number
    assignedAt: number
    lastAdminReadAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    feedbackRating?: true
  }

  export type TicketSumAggregateInputType = {
    feedbackRating?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    reporterKey?: true
    reporterName?: true
    reporterLocation?: true
    priority?: true
    category?: true
    status?: true
    responseDueAt?: true
    resolveDueAt?: true
    firstReplyAt?: true
    closedAt?: true
    feedbackRating?: true
    feedbackSubmittedAt?: true
    assignedAdminId?: true
    assignedAt?: true
    lastAdminReadAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    reporterKey?: true
    reporterName?: true
    reporterLocation?: true
    priority?: true
    category?: true
    status?: true
    responseDueAt?: true
    resolveDueAt?: true
    firstReplyAt?: true
    closedAt?: true
    feedbackRating?: true
    feedbackSubmittedAt?: true
    assignedAdminId?: true
    assignedAt?: true
    lastAdminReadAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    reporterKey?: true
    reporterName?: true
    reporterLocation?: true
    priority?: true
    category?: true
    status?: true
    responseDueAt?: true
    resolveDueAt?: true
    firstReplyAt?: true
    closedAt?: true
    feedbackRating?: true
    feedbackSubmittedAt?: true
    assignedAdminId?: true
    assignedAt?: true
    lastAdminReadAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    code: string
    title: string
    description: string
    reporterKey: string | null
    reporterName: string | null
    reporterLocation: string | null
    priority: $Enums.TicketPriority
    category: $Enums.TicketCategory
    status: $Enums.TicketStatus
    responseDueAt: Date
    resolveDueAt: Date
    firstReplyAt: Date | null
    closedAt: Date | null
    feedbackRating: number | null
    feedbackSubmittedAt: Date | null
    assignedAdminId: string | null
    assignedAt: Date | null
    lastAdminReadAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    reporterKey?: boolean
    reporterName?: boolean
    reporterLocation?: boolean
    priority?: boolean
    category?: boolean
    status?: boolean
    responseDueAt?: boolean
    resolveDueAt?: boolean
    firstReplyAt?: boolean
    closedAt?: boolean
    feedbackRating?: boolean
    feedbackSubmittedAt?: boolean
    assignedAdminId?: boolean
    assignedAt?: boolean
    lastAdminReadAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    statusHistory?: boolean | Ticket$statusHistoryArgs<ExtArgs>
    assignmentHistory?: boolean | Ticket$assignmentHistoryArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    reporterKey?: boolean
    reporterName?: boolean
    reporterLocation?: boolean
    priority?: boolean
    category?: boolean
    status?: boolean
    responseDueAt?: boolean
    resolveDueAt?: boolean
    firstReplyAt?: boolean
    closedAt?: boolean
    feedbackRating?: boolean
    feedbackSubmittedAt?: boolean
    assignedAdminId?: boolean
    assignedAt?: boolean
    lastAdminReadAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    reporterKey?: boolean
    reporterName?: boolean
    reporterLocation?: boolean
    priority?: boolean
    category?: boolean
    status?: boolean
    responseDueAt?: boolean
    resolveDueAt?: boolean
    firstReplyAt?: boolean
    closedAt?: boolean
    feedbackRating?: boolean
    feedbackSubmittedAt?: boolean
    assignedAdminId?: boolean
    assignedAt?: boolean
    lastAdminReadAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    reporterKey?: boolean
    reporterName?: boolean
    reporterLocation?: boolean
    priority?: boolean
    category?: boolean
    status?: boolean
    responseDueAt?: boolean
    resolveDueAt?: boolean
    firstReplyAt?: boolean
    closedAt?: boolean
    feedbackRating?: boolean
    feedbackSubmittedAt?: boolean
    assignedAdminId?: boolean
    assignedAt?: boolean
    lastAdminReadAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "description" | "reporterKey" | "reporterName" | "reporterLocation" | "priority" | "category" | "status" | "responseDueAt" | "resolveDueAt" | "firstReplyAt" | "closedAt" | "feedbackRating" | "feedbackSubmittedAt" | "assignedAdminId" | "assignedAt" | "lastAdminReadAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    statusHistory?: boolean | Ticket$statusHistoryArgs<ExtArgs>
    assignmentHistory?: boolean | Ticket$assignmentHistoryArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
      statusHistory: Prisma.$TicketStatusHistoryPayload<ExtArgs>[]
      assignmentHistory: Prisma.$TicketAssignmentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      description: string
      reporterKey: string | null
      reporterName: string | null
      reporterLocation: string | null
      priority: $Enums.TicketPriority
      category: $Enums.TicketCategory
      status: $Enums.TicketStatus
      responseDueAt: Date
      resolveDueAt: Date
      firstReplyAt: Date | null
      closedAt: Date | null
      feedbackRating: number | null
      feedbackSubmittedAt: Date | null
      assignedAdminId: string | null
      assignedAt: Date | null
      lastAdminReadAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Ticket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statusHistory<T extends Ticket$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignmentHistory<T extends Ticket$assignmentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assignmentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly code: FieldRef<"Ticket", 'String'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly reporterKey: FieldRef<"Ticket", 'String'>
    readonly reporterName: FieldRef<"Ticket", 'String'>
    readonly reporterLocation: FieldRef<"Ticket", 'String'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly responseDueAt: FieldRef<"Ticket", 'DateTime'>
    readonly resolveDueAt: FieldRef<"Ticket", 'DateTime'>
    readonly firstReplyAt: FieldRef<"Ticket", 'DateTime'>
    readonly closedAt: FieldRef<"Ticket", 'DateTime'>
    readonly feedbackRating: FieldRef<"Ticket", 'Int'>
    readonly feedbackSubmittedAt: FieldRef<"Ticket", 'DateTime'>
    readonly assignedAdminId: FieldRef<"Ticket", 'String'>
    readonly assignedAt: FieldRef<"Ticket", 'DateTime'>
    readonly lastAdminReadAt: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.messages
   */
  export type Ticket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * Ticket.statusHistory
   */
  export type Ticket$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    where?: TicketStatusHistoryWhereInput
    orderBy?: TicketStatusHistoryOrderByWithRelationInput | TicketStatusHistoryOrderByWithRelationInput[]
    cursor?: TicketStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketStatusHistoryScalarFieldEnum | TicketStatusHistoryScalarFieldEnum[]
  }

  /**
   * Ticket.assignmentHistory
   */
  export type Ticket$assignmentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    where?: TicketAssignmentHistoryWhereInput
    orderBy?: TicketAssignmentHistoryOrderByWithRelationInput | TicketAssignmentHistoryOrderByWithRelationInput[]
    cursor?: TicketAssignmentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssignmentHistoryScalarFieldEnum | TicketAssignmentHistoryScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    sender: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    sender: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    sender: number
    message: number
    createdAt: number
    _all: number
  }


  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    sender?: true
    message?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    sender?: true
    message?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    sender?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: string
    ticketId: string
    sender: string
    message: string
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    sender?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    attachments?: boolean | TicketMessage$attachmentsArgs<ExtArgs>
    _count?: boolean | TicketMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    sender?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    sender?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    sender?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type TicketMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "sender" | "message" | "createdAt", ExtArgs["result"]["ticketMessage"]>
  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    attachments?: boolean | TicketMessage$attachmentsArgs<ExtArgs>
    _count?: boolean | TicketMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      attachments: Prisma.$MessageAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      sender: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketMessageFindUniqueArgs>(args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketMessageFindFirstArgs>(args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketMessageFindManyArgs>(args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
     */
    create<T extends TicketMessageCreateArgs>(args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketMessageCreateManyArgs>(args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketMessages and returns the data saved in the database.
     * @param {TicketMessageCreateManyAndReturnArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
     */
    delete<T extends TicketMessageDeleteArgs>(args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketMessageUpdateArgs>(args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketMessageDeleteManyArgs>(args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketMessageUpdateManyArgs>(args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages and returns the data updated in the database.
     * @param {TicketMessageUpdateManyAndReturnArgs} args - Arguments to update many TicketMessages.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
     */
    upsert<T extends TicketMessageUpsertArgs>(args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends TicketMessage$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, TicketMessage$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketMessage model
   */
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'String'>
    readonly ticketId: FieldRef<"TicketMessage", 'String'>
    readonly sender: FieldRef<"TicketMessage", 'String'>
    readonly message: FieldRef<"TicketMessage", 'String'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketMessage createManyAndReturn
   */
  export type TicketMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to update.
     */
    limit?: number
  }

  /**
   * TicketMessage updateManyAndReturn
   */
  export type TicketMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to delete.
     */
    limit?: number
  }

  /**
   * TicketMessage.attachments
   */
  export type TicketMessage$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    where?: MessageAttachmentWhereInput
    orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
    cursor?: MessageAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageAttachment
   */

  export type AggregateMessageAttachment = {
    _count: MessageAttachmentCountAggregateOutputType | null
    _avg: MessageAttachmentAvgAggregateOutputType | null
    _sum: MessageAttachmentSumAggregateOutputType | null
    _min: MessageAttachmentMinAggregateOutputType | null
    _max: MessageAttachmentMaxAggregateOutputType | null
  }

  export type MessageAttachmentAvgAggregateOutputType = {
    size: number | null
  }

  export type MessageAttachmentSumAggregateOutputType = {
    size: number | null
  }

  export type MessageAttachmentMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    url: string | null
    caption: string | null
    mimeType: string | null
    fileName: string | null
    size: number | null
    createdAt: Date | null
  }

  export type MessageAttachmentMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    url: string | null
    caption: string | null
    mimeType: string | null
    fileName: string | null
    size: number | null
    createdAt: Date | null
  }

  export type MessageAttachmentCountAggregateOutputType = {
    id: number
    messageId: number
    url: number
    caption: number
    mimeType: number
    fileName: number
    size: number
    createdAt: number
    _all: number
  }


  export type MessageAttachmentAvgAggregateInputType = {
    size?: true
  }

  export type MessageAttachmentSumAggregateInputType = {
    size?: true
  }

  export type MessageAttachmentMinAggregateInputType = {
    id?: true
    messageId?: true
    url?: true
    caption?: true
    mimeType?: true
    fileName?: true
    size?: true
    createdAt?: true
  }

  export type MessageAttachmentMaxAggregateInputType = {
    id?: true
    messageId?: true
    url?: true
    caption?: true
    mimeType?: true
    fileName?: true
    size?: true
    createdAt?: true
  }

  export type MessageAttachmentCountAggregateInputType = {
    id?: true
    messageId?: true
    url?: true
    caption?: true
    mimeType?: true
    fileName?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageAttachment to aggregate.
     */
    where?: MessageAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageAttachments
    **/
    _count?: true | MessageAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageAttachmentMaxAggregateInputType
  }

  export type GetMessageAttachmentAggregateType<T extends MessageAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageAttachment[P]>
      : GetScalarType<T[P], AggregateMessageAttachment[P]>
  }




  export type MessageAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageAttachmentWhereInput
    orderBy?: MessageAttachmentOrderByWithAggregationInput | MessageAttachmentOrderByWithAggregationInput[]
    by: MessageAttachmentScalarFieldEnum[] | MessageAttachmentScalarFieldEnum
    having?: MessageAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageAttachmentCountAggregateInputType | true
    _avg?: MessageAttachmentAvgAggregateInputType
    _sum?: MessageAttachmentSumAggregateInputType
    _min?: MessageAttachmentMinAggregateInputType
    _max?: MessageAttachmentMaxAggregateInputType
  }

  export type MessageAttachmentGroupByOutputType = {
    id: string
    messageId: string
    url: string
    caption: string | null
    mimeType: string | null
    fileName: string | null
    size: number | null
    createdAt: Date
    _count: MessageAttachmentCountAggregateOutputType | null
    _avg: MessageAttachmentAvgAggregateOutputType | null
    _sum: MessageAttachmentSumAggregateOutputType | null
    _min: MessageAttachmentMinAggregateOutputType | null
    _max: MessageAttachmentMaxAggregateOutputType | null
  }

  type GetMessageAttachmentGroupByPayload<T extends MessageAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], MessageAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type MessageAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    url?: boolean
    caption?: boolean
    mimeType?: boolean
    fileName?: boolean
    size?: boolean
    createdAt?: boolean
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachment"]>

  export type MessageAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    url?: boolean
    caption?: boolean
    mimeType?: boolean
    fileName?: boolean
    size?: boolean
    createdAt?: boolean
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachment"]>

  export type MessageAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    url?: boolean
    caption?: boolean
    mimeType?: boolean
    fileName?: boolean
    size?: boolean
    createdAt?: boolean
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachment"]>

  export type MessageAttachmentSelectScalar = {
    id?: boolean
    messageId?: boolean
    url?: boolean
    caption?: boolean
    mimeType?: boolean
    fileName?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type MessageAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "url" | "caption" | "mimeType" | "fileName" | "size" | "createdAt", ExtArgs["result"]["messageAttachment"]>
  export type MessageAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }
  export type MessageAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }
  export type MessageAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | TicketMessageDefaultArgs<ExtArgs>
  }

  export type $MessageAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageAttachment"
    objects: {
      message: Prisma.$TicketMessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      url: string
      caption: string | null
      mimeType: string | null
      fileName: string | null
      size: number | null
      createdAt: Date
    }, ExtArgs["result"]["messageAttachment"]>
    composites: {}
  }

  type MessageAttachmentGetPayload<S extends boolean | null | undefined | MessageAttachmentDefaultArgs> = $Result.GetResult<Prisma.$MessageAttachmentPayload, S>

  type MessageAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageAttachmentCountAggregateInputType | true
    }

  export interface MessageAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageAttachment'], meta: { name: 'MessageAttachment' } }
    /**
     * Find zero or one MessageAttachment that matches the filter.
     * @param {MessageAttachmentFindUniqueArgs} args - Arguments to find a MessageAttachment
     * @example
     * // Get one MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageAttachmentFindUniqueArgs>(args: SelectSubset<T, MessageAttachmentFindUniqueArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageAttachmentFindUniqueOrThrowArgs} args - Arguments to find a MessageAttachment
     * @example
     * // Get one MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentFindFirstArgs} args - Arguments to find a MessageAttachment
     * @example
     * // Get one MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageAttachmentFindFirstArgs>(args?: SelectSubset<T, MessageAttachmentFindFirstArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentFindFirstOrThrowArgs} args - Arguments to find a MessageAttachment
     * @example
     * // Get one MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageAttachments
     * const messageAttachments = await prisma.messageAttachment.findMany()
     * 
     * // Get first 10 MessageAttachments
     * const messageAttachments = await prisma.messageAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageAttachmentWithIdOnly = await prisma.messageAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageAttachmentFindManyArgs>(args?: SelectSubset<T, MessageAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageAttachment.
     * @param {MessageAttachmentCreateArgs} args - Arguments to create a MessageAttachment.
     * @example
     * // Create one MessageAttachment
     * const MessageAttachment = await prisma.messageAttachment.create({
     *   data: {
     *     // ... data to create a MessageAttachment
     *   }
     * })
     * 
     */
    create<T extends MessageAttachmentCreateArgs>(args: SelectSubset<T, MessageAttachmentCreateArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageAttachments.
     * @param {MessageAttachmentCreateManyArgs} args - Arguments to create many MessageAttachments.
     * @example
     * // Create many MessageAttachments
     * const messageAttachment = await prisma.messageAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageAttachmentCreateManyArgs>(args?: SelectSubset<T, MessageAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageAttachments and returns the data saved in the database.
     * @param {MessageAttachmentCreateManyAndReturnArgs} args - Arguments to create many MessageAttachments.
     * @example
     * // Create many MessageAttachments
     * const messageAttachment = await prisma.messageAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageAttachments and only return the `id`
     * const messageAttachmentWithIdOnly = await prisma.messageAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageAttachment.
     * @param {MessageAttachmentDeleteArgs} args - Arguments to delete one MessageAttachment.
     * @example
     * // Delete one MessageAttachment
     * const MessageAttachment = await prisma.messageAttachment.delete({
     *   where: {
     *     // ... filter to delete one MessageAttachment
     *   }
     * })
     * 
     */
    delete<T extends MessageAttachmentDeleteArgs>(args: SelectSubset<T, MessageAttachmentDeleteArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageAttachment.
     * @param {MessageAttachmentUpdateArgs} args - Arguments to update one MessageAttachment.
     * @example
     * // Update one MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageAttachmentUpdateArgs>(args: SelectSubset<T, MessageAttachmentUpdateArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageAttachments.
     * @param {MessageAttachmentDeleteManyArgs} args - Arguments to filter MessageAttachments to delete.
     * @example
     * // Delete a few MessageAttachments
     * const { count } = await prisma.messageAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageAttachmentDeleteManyArgs>(args?: SelectSubset<T, MessageAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageAttachments
     * const messageAttachment = await prisma.messageAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageAttachmentUpdateManyArgs>(args: SelectSubset<T, MessageAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageAttachments and returns the data updated in the database.
     * @param {MessageAttachmentUpdateManyAndReturnArgs} args - Arguments to update many MessageAttachments.
     * @example
     * // Update many MessageAttachments
     * const messageAttachment = await prisma.messageAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageAttachments and only return the `id`
     * const messageAttachmentWithIdOnly = await prisma.messageAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageAttachment.
     * @param {MessageAttachmentUpsertArgs} args - Arguments to update or create a MessageAttachment.
     * @example
     * // Update or create a MessageAttachment
     * const messageAttachment = await prisma.messageAttachment.upsert({
     *   create: {
     *     // ... data to create a MessageAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageAttachment we want to update
     *   }
     * })
     */
    upsert<T extends MessageAttachmentUpsertArgs>(args: SelectSubset<T, MessageAttachmentUpsertArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentCountArgs} args - Arguments to filter MessageAttachments to count.
     * @example
     * // Count the number of MessageAttachments
     * const count = await prisma.messageAttachment.count({
     *   where: {
     *     // ... the filter for the MessageAttachments we want to count
     *   }
     * })
    **/
    count<T extends MessageAttachmentCountArgs>(
      args?: Subset<T, MessageAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAttachmentAggregateArgs>(args: Subset<T, MessageAttachmentAggregateArgs>): Prisma.PrismaPromise<GetMessageAttachmentAggregateType<T>>

    /**
     * Group by MessageAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: MessageAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageAttachment model
   */
  readonly fields: MessageAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends TicketMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketMessageDefaultArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageAttachment model
   */
  interface MessageAttachmentFieldRefs {
    readonly id: FieldRef<"MessageAttachment", 'String'>
    readonly messageId: FieldRef<"MessageAttachment", 'String'>
    readonly url: FieldRef<"MessageAttachment", 'String'>
    readonly caption: FieldRef<"MessageAttachment", 'String'>
    readonly mimeType: FieldRef<"MessageAttachment", 'String'>
    readonly fileName: FieldRef<"MessageAttachment", 'String'>
    readonly size: FieldRef<"MessageAttachment", 'Int'>
    readonly createdAt: FieldRef<"MessageAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageAttachment findUnique
   */
  export type MessageAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachment to fetch.
     */
    where: MessageAttachmentWhereUniqueInput
  }

  /**
   * MessageAttachment findUniqueOrThrow
   */
  export type MessageAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachment to fetch.
     */
    where: MessageAttachmentWhereUniqueInput
  }

  /**
   * MessageAttachment findFirst
   */
  export type MessageAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachment to fetch.
     */
    where?: MessageAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageAttachments.
     */
    cursor?: MessageAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageAttachments.
     */
    distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
  }

  /**
   * MessageAttachment findFirstOrThrow
   */
  export type MessageAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachment to fetch.
     */
    where?: MessageAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageAttachments.
     */
    cursor?: MessageAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageAttachments.
     */
    distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
  }

  /**
   * MessageAttachment findMany
   */
  export type MessageAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where?: MessageAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageAttachments.
     */
    cursor?: MessageAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
  }

  /**
   * MessageAttachment create
   */
  export type MessageAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageAttachment.
     */
    data: XOR<MessageAttachmentCreateInput, MessageAttachmentUncheckedCreateInput>
  }

  /**
   * MessageAttachment createMany
   */
  export type MessageAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageAttachments.
     */
    data: MessageAttachmentCreateManyInput | MessageAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageAttachment createManyAndReturn
   */
  export type MessageAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many MessageAttachments.
     */
    data: MessageAttachmentCreateManyInput | MessageAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageAttachment update
   */
  export type MessageAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageAttachment.
     */
    data: XOR<MessageAttachmentUpdateInput, MessageAttachmentUncheckedUpdateInput>
    /**
     * Choose, which MessageAttachment to update.
     */
    where: MessageAttachmentWhereUniqueInput
  }

  /**
   * MessageAttachment updateMany
   */
  export type MessageAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageAttachments.
     */
    data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MessageAttachments to update
     */
    where?: MessageAttachmentWhereInput
    /**
     * Limit how many MessageAttachments to update.
     */
    limit?: number
  }

  /**
   * MessageAttachment updateManyAndReturn
   */
  export type MessageAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update MessageAttachments.
     */
    data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MessageAttachments to update
     */
    where?: MessageAttachmentWhereInput
    /**
     * Limit how many MessageAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageAttachment upsert
   */
  export type MessageAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageAttachment to update in case it exists.
     */
    where: MessageAttachmentWhereUniqueInput
    /**
     * In case the MessageAttachment found by the `where` argument doesn't exist, create a new MessageAttachment with this data.
     */
    create: XOR<MessageAttachmentCreateInput, MessageAttachmentUncheckedCreateInput>
    /**
     * In case the MessageAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageAttachmentUpdateInput, MessageAttachmentUncheckedUpdateInput>
  }

  /**
   * MessageAttachment delete
   */
  export type MessageAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
    /**
     * Filter which MessageAttachment to delete.
     */
    where: MessageAttachmentWhereUniqueInput
  }

  /**
   * MessageAttachment deleteMany
   */
  export type MessageAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageAttachments to delete
     */
    where?: MessageAttachmentWhereInput
    /**
     * Limit how many MessageAttachments to delete.
     */
    limit?: number
  }

  /**
   * MessageAttachment without action
   */
  export type MessageAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachment
     */
    select?: MessageAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachment
     */
    omit?: MessageAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model TicketStatusHistory
   */

  export type AggregateTicketStatusHistory = {
    _count: TicketStatusHistoryCountAggregateOutputType | null
    _min: TicketStatusHistoryMinAggregateOutputType | null
    _max: TicketStatusHistoryMaxAggregateOutputType | null
  }

  export type TicketStatusHistoryMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    fromStatus: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus | null
    changedBy: string | null
    note: string | null
    createdAt: Date | null
  }

  export type TicketStatusHistoryMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    fromStatus: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus | null
    changedBy: string | null
    note: string | null
    createdAt: Date | null
  }

  export type TicketStatusHistoryCountAggregateOutputType = {
    id: number
    ticketId: number
    fromStatus: number
    toStatus: number
    changedBy: number
    note: number
    createdAt: number
    _all: number
  }


  export type TicketStatusHistoryMinAggregateInputType = {
    id?: true
    ticketId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    note?: true
    createdAt?: true
  }

  export type TicketStatusHistoryMaxAggregateInputType = {
    id?: true
    ticketId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    note?: true
    createdAt?: true
  }

  export type TicketStatusHistoryCountAggregateInputType = {
    id?: true
    ticketId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type TicketStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketStatusHistory to aggregate.
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketStatusHistories to fetch.
     */
    orderBy?: TicketStatusHistoryOrderByWithRelationInput | TicketStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketStatusHistories
    **/
    _count?: true | TicketStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketStatusHistoryMaxAggregateInputType
  }

  export type GetTicketStatusHistoryAggregateType<T extends TicketStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketStatusHistory[P]>
      : GetScalarType<T[P], AggregateTicketStatusHistory[P]>
  }




  export type TicketStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketStatusHistoryWhereInput
    orderBy?: TicketStatusHistoryOrderByWithAggregationInput | TicketStatusHistoryOrderByWithAggregationInput[]
    by: TicketStatusHistoryScalarFieldEnum[] | TicketStatusHistoryScalarFieldEnum
    having?: TicketStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketStatusHistoryCountAggregateInputType | true
    _min?: TicketStatusHistoryMinAggregateInputType
    _max?: TicketStatusHistoryMaxAggregateInputType
  }

  export type TicketStatusHistoryGroupByOutputType = {
    id: string
    ticketId: string
    fromStatus: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy: string | null
    note: string | null
    createdAt: Date
    _count: TicketStatusHistoryCountAggregateOutputType | null
    _min: TicketStatusHistoryMinAggregateOutputType | null
    _max: TicketStatusHistoryMaxAggregateOutputType | null
  }

  type GetTicketStatusHistoryGroupByPayload<T extends TicketStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    note?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketStatusHistory"]>

  export type TicketStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    note?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketStatusHistory"]>

  export type TicketStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    note?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketStatusHistory"]>

  export type TicketStatusHistorySelectScalar = {
    id?: boolean
    ticketId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type TicketStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "fromStatus" | "toStatus" | "changedBy" | "note" | "createdAt", ExtArgs["result"]["ticketStatusHistory"]>
  export type TicketStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketStatusHistory"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      fromStatus: $Enums.TicketStatus | null
      toStatus: $Enums.TicketStatus
      changedBy: string | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["ticketStatusHistory"]>
    composites: {}
  }

  type TicketStatusHistoryGetPayload<S extends boolean | null | undefined | TicketStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$TicketStatusHistoryPayload, S>

  type TicketStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketStatusHistoryCountAggregateInputType | true
    }

  export interface TicketStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketStatusHistory'], meta: { name: 'TicketStatusHistory' } }
    /**
     * Find zero or one TicketStatusHistory that matches the filter.
     * @param {TicketStatusHistoryFindUniqueArgs} args - Arguments to find a TicketStatusHistory
     * @example
     * // Get one TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketStatusHistoryFindUniqueArgs>(args: SelectSubset<T, TicketStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a TicketStatusHistory
     * @example
     * // Get one TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryFindFirstArgs} args - Arguments to find a TicketStatusHistory
     * @example
     * // Get one TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketStatusHistoryFindFirstArgs>(args?: SelectSubset<T, TicketStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a TicketStatusHistory
     * @example
     * // Get one TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketStatusHistories
     * const ticketStatusHistories = await prisma.ticketStatusHistory.findMany()
     * 
     * // Get first 10 TicketStatusHistories
     * const ticketStatusHistories = await prisma.ticketStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketStatusHistoryWithIdOnly = await prisma.ticketStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketStatusHistoryFindManyArgs>(args?: SelectSubset<T, TicketStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketStatusHistory.
     * @param {TicketStatusHistoryCreateArgs} args - Arguments to create a TicketStatusHistory.
     * @example
     * // Create one TicketStatusHistory
     * const TicketStatusHistory = await prisma.ticketStatusHistory.create({
     *   data: {
     *     // ... data to create a TicketStatusHistory
     *   }
     * })
     * 
     */
    create<T extends TicketStatusHistoryCreateArgs>(args: SelectSubset<T, TicketStatusHistoryCreateArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketStatusHistories.
     * @param {TicketStatusHistoryCreateManyArgs} args - Arguments to create many TicketStatusHistories.
     * @example
     * // Create many TicketStatusHistories
     * const ticketStatusHistory = await prisma.ticketStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketStatusHistoryCreateManyArgs>(args?: SelectSubset<T, TicketStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketStatusHistories and returns the data saved in the database.
     * @param {TicketStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many TicketStatusHistories.
     * @example
     * // Create many TicketStatusHistories
     * const ticketStatusHistory = await prisma.ticketStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketStatusHistories and only return the `id`
     * const ticketStatusHistoryWithIdOnly = await prisma.ticketStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketStatusHistory.
     * @param {TicketStatusHistoryDeleteArgs} args - Arguments to delete one TicketStatusHistory.
     * @example
     * // Delete one TicketStatusHistory
     * const TicketStatusHistory = await prisma.ticketStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one TicketStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends TicketStatusHistoryDeleteArgs>(args: SelectSubset<T, TicketStatusHistoryDeleteArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketStatusHistory.
     * @param {TicketStatusHistoryUpdateArgs} args - Arguments to update one TicketStatusHistory.
     * @example
     * // Update one TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketStatusHistoryUpdateArgs>(args: SelectSubset<T, TicketStatusHistoryUpdateArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketStatusHistories.
     * @param {TicketStatusHistoryDeleteManyArgs} args - Arguments to filter TicketStatusHistories to delete.
     * @example
     * // Delete a few TicketStatusHistories
     * const { count } = await prisma.ticketStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, TicketStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketStatusHistories
     * const ticketStatusHistory = await prisma.ticketStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketStatusHistoryUpdateManyArgs>(args: SelectSubset<T, TicketStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketStatusHistories and returns the data updated in the database.
     * @param {TicketStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many TicketStatusHistories.
     * @example
     * // Update many TicketStatusHistories
     * const ticketStatusHistory = await prisma.ticketStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketStatusHistories and only return the `id`
     * const ticketStatusHistoryWithIdOnly = await prisma.ticketStatusHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketStatusHistory.
     * @param {TicketStatusHistoryUpsertArgs} args - Arguments to update or create a TicketStatusHistory.
     * @example
     * // Update or create a TicketStatusHistory
     * const ticketStatusHistory = await prisma.ticketStatusHistory.upsert({
     *   create: {
     *     // ... data to create a TicketStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends TicketStatusHistoryUpsertArgs>(args: SelectSubset<T, TicketStatusHistoryUpsertArgs<ExtArgs>>): Prisma__TicketStatusHistoryClient<$Result.GetResult<Prisma.$TicketStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryCountArgs} args - Arguments to filter TicketStatusHistories to count.
     * @example
     * // Count the number of TicketStatusHistories
     * const count = await prisma.ticketStatusHistory.count({
     *   where: {
     *     // ... the filter for the TicketStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends TicketStatusHistoryCountArgs>(
      args?: Subset<T, TicketStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketStatusHistoryAggregateArgs>(args: Subset<T, TicketStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetTicketStatusHistoryAggregateType<T>>

    /**
     * Group by TicketStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketStatusHistory model
   */
  readonly fields: TicketStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketStatusHistory model
   */
  interface TicketStatusHistoryFieldRefs {
    readonly id: FieldRef<"TicketStatusHistory", 'String'>
    readonly ticketId: FieldRef<"TicketStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"TicketStatusHistory", 'TicketStatus'>
    readonly toStatus: FieldRef<"TicketStatusHistory", 'TicketStatus'>
    readonly changedBy: FieldRef<"TicketStatusHistory", 'String'>
    readonly note: FieldRef<"TicketStatusHistory", 'String'>
    readonly createdAt: FieldRef<"TicketStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketStatusHistory findUnique
   */
  export type TicketStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketStatusHistory to fetch.
     */
    where: TicketStatusHistoryWhereUniqueInput
  }

  /**
   * TicketStatusHistory findUniqueOrThrow
   */
  export type TicketStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketStatusHistory to fetch.
     */
    where: TicketStatusHistoryWhereUniqueInput
  }

  /**
   * TicketStatusHistory findFirst
   */
  export type TicketStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketStatusHistory to fetch.
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketStatusHistories to fetch.
     */
    orderBy?: TicketStatusHistoryOrderByWithRelationInput | TicketStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketStatusHistories.
     */
    cursor?: TicketStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketStatusHistories.
     */
    distinct?: TicketStatusHistoryScalarFieldEnum | TicketStatusHistoryScalarFieldEnum[]
  }

  /**
   * TicketStatusHistory findFirstOrThrow
   */
  export type TicketStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketStatusHistory to fetch.
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketStatusHistories to fetch.
     */
    orderBy?: TicketStatusHistoryOrderByWithRelationInput | TicketStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketStatusHistories.
     */
    cursor?: TicketStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketStatusHistories.
     */
    distinct?: TicketStatusHistoryScalarFieldEnum | TicketStatusHistoryScalarFieldEnum[]
  }

  /**
   * TicketStatusHistory findMany
   */
  export type TicketStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketStatusHistories to fetch.
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketStatusHistories to fetch.
     */
    orderBy?: TicketStatusHistoryOrderByWithRelationInput | TicketStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketStatusHistories.
     */
    cursor?: TicketStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketStatusHistories.
     */
    skip?: number
    distinct?: TicketStatusHistoryScalarFieldEnum | TicketStatusHistoryScalarFieldEnum[]
  }

  /**
   * TicketStatusHistory create
   */
  export type TicketStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketStatusHistory.
     */
    data: XOR<TicketStatusHistoryCreateInput, TicketStatusHistoryUncheckedCreateInput>
  }

  /**
   * TicketStatusHistory createMany
   */
  export type TicketStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketStatusHistories.
     */
    data: TicketStatusHistoryCreateManyInput | TicketStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketStatusHistory createManyAndReturn
   */
  export type TicketStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketStatusHistories.
     */
    data: TicketStatusHistoryCreateManyInput | TicketStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketStatusHistory update
   */
  export type TicketStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketStatusHistory.
     */
    data: XOR<TicketStatusHistoryUpdateInput, TicketStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which TicketStatusHistory to update.
     */
    where: TicketStatusHistoryWhereUniqueInput
  }

  /**
   * TicketStatusHistory updateMany
   */
  export type TicketStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketStatusHistories.
     */
    data: XOR<TicketStatusHistoryUpdateManyMutationInput, TicketStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketStatusHistories to update
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * Limit how many TicketStatusHistories to update.
     */
    limit?: number
  }

  /**
   * TicketStatusHistory updateManyAndReturn
   */
  export type TicketStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketStatusHistories.
     */
    data: XOR<TicketStatusHistoryUpdateManyMutationInput, TicketStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketStatusHistories to update
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * Limit how many TicketStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketStatusHistory upsert
   */
  export type TicketStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketStatusHistory to update in case it exists.
     */
    where: TicketStatusHistoryWhereUniqueInput
    /**
     * In case the TicketStatusHistory found by the `where` argument doesn't exist, create a new TicketStatusHistory with this data.
     */
    create: XOR<TicketStatusHistoryCreateInput, TicketStatusHistoryUncheckedCreateInput>
    /**
     * In case the TicketStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketStatusHistoryUpdateInput, TicketStatusHistoryUncheckedUpdateInput>
  }

  /**
   * TicketStatusHistory delete
   */
  export type TicketStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which TicketStatusHistory to delete.
     */
    where: TicketStatusHistoryWhereUniqueInput
  }

  /**
   * TicketStatusHistory deleteMany
   */
  export type TicketStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketStatusHistories to delete
     */
    where?: TicketStatusHistoryWhereInput
    /**
     * Limit how many TicketStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * TicketStatusHistory without action
   */
  export type TicketStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketStatusHistory
     */
    select?: TicketStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketStatusHistory
     */
    omit?: TicketStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model TicketAssignmentHistory
   */

  export type AggregateTicketAssignmentHistory = {
    _count: TicketAssignmentHistoryCountAggregateOutputType | null
    _min: TicketAssignmentHistoryMinAggregateOutputType | null
    _max: TicketAssignmentHistoryMaxAggregateOutputType | null
  }

  export type TicketAssignmentHistoryMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    fromAdminId: string | null
    toAdminId: string | null
    changedBy: string | null
    trigger: string | null
    createdAt: Date | null
  }

  export type TicketAssignmentHistoryMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    fromAdminId: string | null
    toAdminId: string | null
    changedBy: string | null
    trigger: string | null
    createdAt: Date | null
  }

  export type TicketAssignmentHistoryCountAggregateOutputType = {
    id: number
    ticketId: number
    fromAdminId: number
    toAdminId: number
    changedBy: number
    trigger: number
    createdAt: number
    _all: number
  }


  export type TicketAssignmentHistoryMinAggregateInputType = {
    id?: true
    ticketId?: true
    fromAdminId?: true
    toAdminId?: true
    changedBy?: true
    trigger?: true
    createdAt?: true
  }

  export type TicketAssignmentHistoryMaxAggregateInputType = {
    id?: true
    ticketId?: true
    fromAdminId?: true
    toAdminId?: true
    changedBy?: true
    trigger?: true
    createdAt?: true
  }

  export type TicketAssignmentHistoryCountAggregateInputType = {
    id?: true
    ticketId?: true
    fromAdminId?: true
    toAdminId?: true
    changedBy?: true
    trigger?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAssignmentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignmentHistory to aggregate.
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignmentHistories to fetch.
     */
    orderBy?: TicketAssignmentHistoryOrderByWithRelationInput | TicketAssignmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAssignmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAssignmentHistories
    **/
    _count?: true | TicketAssignmentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAssignmentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAssignmentHistoryMaxAggregateInputType
  }

  export type GetTicketAssignmentHistoryAggregateType<T extends TicketAssignmentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAssignmentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAssignmentHistory[P]>
      : GetScalarType<T[P], AggregateTicketAssignmentHistory[P]>
  }




  export type TicketAssignmentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentHistoryWhereInput
    orderBy?: TicketAssignmentHistoryOrderByWithAggregationInput | TicketAssignmentHistoryOrderByWithAggregationInput[]
    by: TicketAssignmentHistoryScalarFieldEnum[] | TicketAssignmentHistoryScalarFieldEnum
    having?: TicketAssignmentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAssignmentHistoryCountAggregateInputType | true
    _min?: TicketAssignmentHistoryMinAggregateInputType
    _max?: TicketAssignmentHistoryMaxAggregateInputType
  }

  export type TicketAssignmentHistoryGroupByOutputType = {
    id: string
    ticketId: string
    fromAdminId: string | null
    toAdminId: string | null
    changedBy: string | null
    trigger: string | null
    createdAt: Date
    _count: TicketAssignmentHistoryCountAggregateOutputType | null
    _min: TicketAssignmentHistoryMinAggregateOutputType | null
    _max: TicketAssignmentHistoryMaxAggregateOutputType | null
  }

  type GetTicketAssignmentHistoryGroupByPayload<T extends TicketAssignmentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAssignmentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAssignmentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAssignmentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAssignmentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketAssignmentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromAdminId?: boolean
    toAdminId?: boolean
    changedBy?: boolean
    trigger?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignmentHistory"]>

  export type TicketAssignmentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromAdminId?: boolean
    toAdminId?: boolean
    changedBy?: boolean
    trigger?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignmentHistory"]>

  export type TicketAssignmentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    fromAdminId?: boolean
    toAdminId?: boolean
    changedBy?: boolean
    trigger?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignmentHistory"]>

  export type TicketAssignmentHistorySelectScalar = {
    id?: boolean
    ticketId?: boolean
    fromAdminId?: boolean
    toAdminId?: boolean
    changedBy?: boolean
    trigger?: boolean
    createdAt?: boolean
  }

  export type TicketAssignmentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "fromAdminId" | "toAdminId" | "changedBy" | "trigger" | "createdAt", ExtArgs["result"]["ticketAssignmentHistory"]>
  export type TicketAssignmentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketAssignmentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketAssignmentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketAssignmentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAssignmentHistory"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      fromAdminId: string | null
      toAdminId: string | null
      changedBy: string | null
      trigger: string | null
      createdAt: Date
    }, ExtArgs["result"]["ticketAssignmentHistory"]>
    composites: {}
  }

  type TicketAssignmentHistoryGetPayload<S extends boolean | null | undefined | TicketAssignmentHistoryDefaultArgs> = $Result.GetResult<Prisma.$TicketAssignmentHistoryPayload, S>

  type TicketAssignmentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAssignmentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAssignmentHistoryCountAggregateInputType | true
    }

  export interface TicketAssignmentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAssignmentHistory'], meta: { name: 'TicketAssignmentHistory' } }
    /**
     * Find zero or one TicketAssignmentHistory that matches the filter.
     * @param {TicketAssignmentHistoryFindUniqueArgs} args - Arguments to find a TicketAssignmentHistory
     * @example
     * // Get one TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAssignmentHistoryFindUniqueArgs>(args: SelectSubset<T, TicketAssignmentHistoryFindUniqueArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketAssignmentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAssignmentHistoryFindUniqueOrThrowArgs} args - Arguments to find a TicketAssignmentHistory
     * @example
     * // Get one TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAssignmentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAssignmentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryFindFirstArgs} args - Arguments to find a TicketAssignmentHistory
     * @example
     * // Get one TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAssignmentHistoryFindFirstArgs>(args?: SelectSubset<T, TicketAssignmentHistoryFindFirstArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAssignmentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryFindFirstOrThrowArgs} args - Arguments to find a TicketAssignmentHistory
     * @example
     * // Get one TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAssignmentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAssignmentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketAssignmentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAssignmentHistories
     * const ticketAssignmentHistories = await prisma.ticketAssignmentHistory.findMany()
     * 
     * // Get first 10 TicketAssignmentHistories
     * const ticketAssignmentHistories = await prisma.ticketAssignmentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAssignmentHistoryWithIdOnly = await prisma.ticketAssignmentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAssignmentHistoryFindManyArgs>(args?: SelectSubset<T, TicketAssignmentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketAssignmentHistory.
     * @param {TicketAssignmentHistoryCreateArgs} args - Arguments to create a TicketAssignmentHistory.
     * @example
     * // Create one TicketAssignmentHistory
     * const TicketAssignmentHistory = await prisma.ticketAssignmentHistory.create({
     *   data: {
     *     // ... data to create a TicketAssignmentHistory
     *   }
     * })
     * 
     */
    create<T extends TicketAssignmentHistoryCreateArgs>(args: SelectSubset<T, TicketAssignmentHistoryCreateArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketAssignmentHistories.
     * @param {TicketAssignmentHistoryCreateManyArgs} args - Arguments to create many TicketAssignmentHistories.
     * @example
     * // Create many TicketAssignmentHistories
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAssignmentHistoryCreateManyArgs>(args?: SelectSubset<T, TicketAssignmentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAssignmentHistories and returns the data saved in the database.
     * @param {TicketAssignmentHistoryCreateManyAndReturnArgs} args - Arguments to create many TicketAssignmentHistories.
     * @example
     * // Create many TicketAssignmentHistories
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAssignmentHistories and only return the `id`
     * const ticketAssignmentHistoryWithIdOnly = await prisma.ticketAssignmentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAssignmentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAssignmentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketAssignmentHistory.
     * @param {TicketAssignmentHistoryDeleteArgs} args - Arguments to delete one TicketAssignmentHistory.
     * @example
     * // Delete one TicketAssignmentHistory
     * const TicketAssignmentHistory = await prisma.ticketAssignmentHistory.delete({
     *   where: {
     *     // ... filter to delete one TicketAssignmentHistory
     *   }
     * })
     * 
     */
    delete<T extends TicketAssignmentHistoryDeleteArgs>(args: SelectSubset<T, TicketAssignmentHistoryDeleteArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketAssignmentHistory.
     * @param {TicketAssignmentHistoryUpdateArgs} args - Arguments to update one TicketAssignmentHistory.
     * @example
     * // Update one TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAssignmentHistoryUpdateArgs>(args: SelectSubset<T, TicketAssignmentHistoryUpdateArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketAssignmentHistories.
     * @param {TicketAssignmentHistoryDeleteManyArgs} args - Arguments to filter TicketAssignmentHistories to delete.
     * @example
     * // Delete a few TicketAssignmentHistories
     * const { count } = await prisma.ticketAssignmentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAssignmentHistoryDeleteManyArgs>(args?: SelectSubset<T, TicketAssignmentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAssignmentHistories
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAssignmentHistoryUpdateManyArgs>(args: SelectSubset<T, TicketAssignmentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignmentHistories and returns the data updated in the database.
     * @param {TicketAssignmentHistoryUpdateManyAndReturnArgs} args - Arguments to update many TicketAssignmentHistories.
     * @example
     * // Update many TicketAssignmentHistories
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketAssignmentHistories and only return the `id`
     * const ticketAssignmentHistoryWithIdOnly = await prisma.ticketAssignmentHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketAssignmentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketAssignmentHistory.
     * @param {TicketAssignmentHistoryUpsertArgs} args - Arguments to update or create a TicketAssignmentHistory.
     * @example
     * // Update or create a TicketAssignmentHistory
     * const ticketAssignmentHistory = await prisma.ticketAssignmentHistory.upsert({
     *   create: {
     *     // ... data to create a TicketAssignmentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAssignmentHistory we want to update
     *   }
     * })
     */
    upsert<T extends TicketAssignmentHistoryUpsertArgs>(args: SelectSubset<T, TicketAssignmentHistoryUpsertArgs<ExtArgs>>): Prisma__TicketAssignmentHistoryClient<$Result.GetResult<Prisma.$TicketAssignmentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketAssignmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryCountArgs} args - Arguments to filter TicketAssignmentHistories to count.
     * @example
     * // Count the number of TicketAssignmentHistories
     * const count = await prisma.ticketAssignmentHistory.count({
     *   where: {
     *     // ... the filter for the TicketAssignmentHistories we want to count
     *   }
     * })
    **/
    count<T extends TicketAssignmentHistoryCountArgs>(
      args?: Subset<T, TicketAssignmentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAssignmentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAssignmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAssignmentHistoryAggregateArgs>(args: Subset<T, TicketAssignmentHistoryAggregateArgs>): Prisma.PrismaPromise<GetTicketAssignmentHistoryAggregateType<T>>

    /**
     * Group by TicketAssignmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketAssignmentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAssignmentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketAssignmentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketAssignmentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAssignmentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAssignmentHistory model
   */
  readonly fields: TicketAssignmentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAssignmentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAssignmentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketAssignmentHistory model
   */
  interface TicketAssignmentHistoryFieldRefs {
    readonly id: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly ticketId: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly fromAdminId: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly toAdminId: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly changedBy: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly trigger: FieldRef<"TicketAssignmentHistory", 'String'>
    readonly createdAt: FieldRef<"TicketAssignmentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAssignmentHistory findUnique
   */
  export type TicketAssignmentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignmentHistory to fetch.
     */
    where: TicketAssignmentHistoryWhereUniqueInput
  }

  /**
   * TicketAssignmentHistory findUniqueOrThrow
   */
  export type TicketAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignmentHistory to fetch.
     */
    where: TicketAssignmentHistoryWhereUniqueInput
  }

  /**
   * TicketAssignmentHistory findFirst
   */
  export type TicketAssignmentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignmentHistory to fetch.
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignmentHistories to fetch.
     */
    orderBy?: TicketAssignmentHistoryOrderByWithRelationInput | TicketAssignmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignmentHistories.
     */
    cursor?: TicketAssignmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignmentHistories.
     */
    distinct?: TicketAssignmentHistoryScalarFieldEnum | TicketAssignmentHistoryScalarFieldEnum[]
  }

  /**
   * TicketAssignmentHistory findFirstOrThrow
   */
  export type TicketAssignmentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignmentHistory to fetch.
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignmentHistories to fetch.
     */
    orderBy?: TicketAssignmentHistoryOrderByWithRelationInput | TicketAssignmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignmentHistories.
     */
    cursor?: TicketAssignmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignmentHistories.
     */
    distinct?: TicketAssignmentHistoryScalarFieldEnum | TicketAssignmentHistoryScalarFieldEnum[]
  }

  /**
   * TicketAssignmentHistory findMany
   */
  export type TicketAssignmentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignmentHistories to fetch.
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignmentHistories to fetch.
     */
    orderBy?: TicketAssignmentHistoryOrderByWithRelationInput | TicketAssignmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAssignmentHistories.
     */
    cursor?: TicketAssignmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignmentHistories.
     */
    skip?: number
    distinct?: TicketAssignmentHistoryScalarFieldEnum | TicketAssignmentHistoryScalarFieldEnum[]
  }

  /**
   * TicketAssignmentHistory create
   */
  export type TicketAssignmentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAssignmentHistory.
     */
    data: XOR<TicketAssignmentHistoryCreateInput, TicketAssignmentHistoryUncheckedCreateInput>
  }

  /**
   * TicketAssignmentHistory createMany
   */
  export type TicketAssignmentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAssignmentHistories.
     */
    data: TicketAssignmentHistoryCreateManyInput | TicketAssignmentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAssignmentHistory createManyAndReturn
   */
  export type TicketAssignmentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketAssignmentHistories.
     */
    data: TicketAssignmentHistoryCreateManyInput | TicketAssignmentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignmentHistory update
   */
  export type TicketAssignmentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAssignmentHistory.
     */
    data: XOR<TicketAssignmentHistoryUpdateInput, TicketAssignmentHistoryUncheckedUpdateInput>
    /**
     * Choose, which TicketAssignmentHistory to update.
     */
    where: TicketAssignmentHistoryWhereUniqueInput
  }

  /**
   * TicketAssignmentHistory updateMany
   */
  export type TicketAssignmentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAssignmentHistories.
     */
    data: XOR<TicketAssignmentHistoryUpdateManyMutationInput, TicketAssignmentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignmentHistories to update
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * Limit how many TicketAssignmentHistories to update.
     */
    limit?: number
  }

  /**
   * TicketAssignmentHistory updateManyAndReturn
   */
  export type TicketAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketAssignmentHistories.
     */
    data: XOR<TicketAssignmentHistoryUpdateManyMutationInput, TicketAssignmentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignmentHistories to update
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * Limit how many TicketAssignmentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignmentHistory upsert
   */
  export type TicketAssignmentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAssignmentHistory to update in case it exists.
     */
    where: TicketAssignmentHistoryWhereUniqueInput
    /**
     * In case the TicketAssignmentHistory found by the `where` argument doesn't exist, create a new TicketAssignmentHistory with this data.
     */
    create: XOR<TicketAssignmentHistoryCreateInput, TicketAssignmentHistoryUncheckedCreateInput>
    /**
     * In case the TicketAssignmentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAssignmentHistoryUpdateInput, TicketAssignmentHistoryUncheckedUpdateInput>
  }

  /**
   * TicketAssignmentHistory delete
   */
  export type TicketAssignmentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
    /**
     * Filter which TicketAssignmentHistory to delete.
     */
    where: TicketAssignmentHistoryWhereUniqueInput
  }

  /**
   * TicketAssignmentHistory deleteMany
   */
  export type TicketAssignmentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignmentHistories to delete
     */
    where?: TicketAssignmentHistoryWhereInput
    /**
     * Limit how many TicketAssignmentHistories to delete.
     */
    limit?: number
  }

  /**
   * TicketAssignmentHistory without action
   */
  export type TicketAssignmentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignmentHistory
     */
    select?: TicketAssignmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignmentHistory
     */
    omit?: TicketAssignmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model SlaPolicy
   */

  export type AggregateSlaPolicy = {
    _count: SlaPolicyCountAggregateOutputType | null
    _avg: SlaPolicyAvgAggregateOutputType | null
    _sum: SlaPolicySumAggregateOutputType | null
    _min: SlaPolicyMinAggregateOutputType | null
    _max: SlaPolicyMaxAggregateOutputType | null
  }

  export type SlaPolicyAvgAggregateOutputType = {
    responseMinutes: number | null
    resolveMinutes: number | null
  }

  export type SlaPolicySumAggregateOutputType = {
    responseMinutes: number | null
    resolveMinutes: number | null
  }

  export type SlaPolicyMinAggregateOutputType = {
    id: string | null
    priority: $Enums.TicketPriority | null
    responseMinutes: number | null
    resolveMinutes: number | null
    active: boolean | null
  }

  export type SlaPolicyMaxAggregateOutputType = {
    id: string | null
    priority: $Enums.TicketPriority | null
    responseMinutes: number | null
    resolveMinutes: number | null
    active: boolean | null
  }

  export type SlaPolicyCountAggregateOutputType = {
    id: number
    priority: number
    responseMinutes: number
    resolveMinutes: number
    active: number
    _all: number
  }


  export type SlaPolicyAvgAggregateInputType = {
    responseMinutes?: true
    resolveMinutes?: true
  }

  export type SlaPolicySumAggregateInputType = {
    responseMinutes?: true
    resolveMinutes?: true
  }

  export type SlaPolicyMinAggregateInputType = {
    id?: true
    priority?: true
    responseMinutes?: true
    resolveMinutes?: true
    active?: true
  }

  export type SlaPolicyMaxAggregateInputType = {
    id?: true
    priority?: true
    responseMinutes?: true
    resolveMinutes?: true
    active?: true
  }

  export type SlaPolicyCountAggregateInputType = {
    id?: true
    priority?: true
    responseMinutes?: true
    resolveMinutes?: true
    active?: true
    _all?: true
  }

  export type SlaPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPolicy to aggregate.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlaPolicies
    **/
    _count?: true | SlaPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlaPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlaPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlaPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlaPolicyMaxAggregateInputType
  }

  export type GetSlaPolicyAggregateType<T extends SlaPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateSlaPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlaPolicy[P]>
      : GetScalarType<T[P], AggregateSlaPolicy[P]>
  }




  export type SlaPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlaPolicyWhereInput
    orderBy?: SlaPolicyOrderByWithAggregationInput | SlaPolicyOrderByWithAggregationInput[]
    by: SlaPolicyScalarFieldEnum[] | SlaPolicyScalarFieldEnum
    having?: SlaPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlaPolicyCountAggregateInputType | true
    _avg?: SlaPolicyAvgAggregateInputType
    _sum?: SlaPolicySumAggregateInputType
    _min?: SlaPolicyMinAggregateInputType
    _max?: SlaPolicyMaxAggregateInputType
  }

  export type SlaPolicyGroupByOutputType = {
    id: string
    priority: $Enums.TicketPriority
    responseMinutes: number
    resolveMinutes: number
    active: boolean
    _count: SlaPolicyCountAggregateOutputType | null
    _avg: SlaPolicyAvgAggregateOutputType | null
    _sum: SlaPolicySumAggregateOutputType | null
    _min: SlaPolicyMinAggregateOutputType | null
    _max: SlaPolicyMaxAggregateOutputType | null
  }

  type GetSlaPolicyGroupByPayload<T extends SlaPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlaPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlaPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlaPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], SlaPolicyGroupByOutputType[P]>
        }
      >
    >


  export type SlaPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    responseMinutes?: boolean
    resolveMinutes?: boolean
    active?: boolean
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    responseMinutes?: boolean
    resolveMinutes?: boolean
    active?: boolean
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    responseMinutes?: boolean
    resolveMinutes?: boolean
    active?: boolean
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectScalar = {
    id?: boolean
    priority?: boolean
    responseMinutes?: boolean
    resolveMinutes?: boolean
    active?: boolean
  }

  export type SlaPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "priority" | "responseMinutes" | "resolveMinutes" | "active", ExtArgs["result"]["slaPolicy"]>

  export type $SlaPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlaPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      priority: $Enums.TicketPriority
      responseMinutes: number
      resolveMinutes: number
      active: boolean
    }, ExtArgs["result"]["slaPolicy"]>
    composites: {}
  }

  type SlaPolicyGetPayload<S extends boolean | null | undefined | SlaPolicyDefaultArgs> = $Result.GetResult<Prisma.$SlaPolicyPayload, S>

  type SlaPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlaPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlaPolicyCountAggregateInputType | true
    }

  export interface SlaPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlaPolicy'], meta: { name: 'SlaPolicy' } }
    /**
     * Find zero or one SlaPolicy that matches the filter.
     * @param {SlaPolicyFindUniqueArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlaPolicyFindUniqueArgs>(args: SelectSubset<T, SlaPolicyFindUniqueArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlaPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlaPolicyFindUniqueOrThrowArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlaPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, SlaPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindFirstArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlaPolicyFindFirstArgs>(args?: SelectSubset<T, SlaPolicyFindFirstArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindFirstOrThrowArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlaPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, SlaPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlaPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlaPolicies
     * const slaPolicies = await prisma.slaPolicy.findMany()
     * 
     * // Get first 10 SlaPolicies
     * const slaPolicies = await prisma.slaPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlaPolicyFindManyArgs>(args?: SelectSubset<T, SlaPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlaPolicy.
     * @param {SlaPolicyCreateArgs} args - Arguments to create a SlaPolicy.
     * @example
     * // Create one SlaPolicy
     * const SlaPolicy = await prisma.slaPolicy.create({
     *   data: {
     *     // ... data to create a SlaPolicy
     *   }
     * })
     * 
     */
    create<T extends SlaPolicyCreateArgs>(args: SelectSubset<T, SlaPolicyCreateArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlaPolicies.
     * @param {SlaPolicyCreateManyArgs} args - Arguments to create many SlaPolicies.
     * @example
     * // Create many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlaPolicyCreateManyArgs>(args?: SelectSubset<T, SlaPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlaPolicies and returns the data saved in the database.
     * @param {SlaPolicyCreateManyAndReturnArgs} args - Arguments to create many SlaPolicies.
     * @example
     * // Create many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlaPolicies and only return the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlaPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, SlaPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlaPolicy.
     * @param {SlaPolicyDeleteArgs} args - Arguments to delete one SlaPolicy.
     * @example
     * // Delete one SlaPolicy
     * const SlaPolicy = await prisma.slaPolicy.delete({
     *   where: {
     *     // ... filter to delete one SlaPolicy
     *   }
     * })
     * 
     */
    delete<T extends SlaPolicyDeleteArgs>(args: SelectSubset<T, SlaPolicyDeleteArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlaPolicy.
     * @param {SlaPolicyUpdateArgs} args - Arguments to update one SlaPolicy.
     * @example
     * // Update one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlaPolicyUpdateArgs>(args: SelectSubset<T, SlaPolicyUpdateArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlaPolicies.
     * @param {SlaPolicyDeleteManyArgs} args - Arguments to filter SlaPolicies to delete.
     * @example
     * // Delete a few SlaPolicies
     * const { count } = await prisma.slaPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlaPolicyDeleteManyArgs>(args?: SelectSubset<T, SlaPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlaPolicyUpdateManyArgs>(args: SelectSubset<T, SlaPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPolicies and returns the data updated in the database.
     * @param {SlaPolicyUpdateManyAndReturnArgs} args - Arguments to update many SlaPolicies.
     * @example
     * // Update many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlaPolicies and only return the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlaPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, SlaPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlaPolicy.
     * @param {SlaPolicyUpsertArgs} args - Arguments to update or create a SlaPolicy.
     * @example
     * // Update or create a SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.upsert({
     *   create: {
     *     // ... data to create a SlaPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlaPolicy we want to update
     *   }
     * })
     */
    upsert<T extends SlaPolicyUpsertArgs>(args: SelectSubset<T, SlaPolicyUpsertArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyCountArgs} args - Arguments to filter SlaPolicies to count.
     * @example
     * // Count the number of SlaPolicies
     * const count = await prisma.slaPolicy.count({
     *   where: {
     *     // ... the filter for the SlaPolicies we want to count
     *   }
     * })
    **/
    count<T extends SlaPolicyCountArgs>(
      args?: Subset<T, SlaPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlaPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlaPolicyAggregateArgs>(args: Subset<T, SlaPolicyAggregateArgs>): Prisma.PrismaPromise<GetSlaPolicyAggregateType<T>>

    /**
     * Group by SlaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlaPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlaPolicyGroupByArgs['orderBy'] }
        : { orderBy?: SlaPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlaPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlaPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlaPolicy model
   */
  readonly fields: SlaPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlaPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlaPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SlaPolicy model
   */
  interface SlaPolicyFieldRefs {
    readonly id: FieldRef<"SlaPolicy", 'String'>
    readonly priority: FieldRef<"SlaPolicy", 'TicketPriority'>
    readonly responseMinutes: FieldRef<"SlaPolicy", 'Int'>
    readonly resolveMinutes: FieldRef<"SlaPolicy", 'Int'>
    readonly active: FieldRef<"SlaPolicy", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SlaPolicy findUnique
   */
  export type SlaPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy findUniqueOrThrow
   */
  export type SlaPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy findFirst
   */
  export type SlaPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPolicies.
     */
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy findFirstOrThrow
   */
  export type SlaPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPolicies.
     */
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy findMany
   */
  export type SlaPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter, which SlaPolicies to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy create
   */
  export type SlaPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a SlaPolicy.
     */
    data: XOR<SlaPolicyCreateInput, SlaPolicyUncheckedCreateInput>
  }

  /**
   * SlaPolicy createMany
   */
  export type SlaPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlaPolicies.
     */
    data: SlaPolicyCreateManyInput | SlaPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaPolicy createManyAndReturn
   */
  export type SlaPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many SlaPolicies.
     */
    data: SlaPolicyCreateManyInput | SlaPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaPolicy update
   */
  export type SlaPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a SlaPolicy.
     */
    data: XOR<SlaPolicyUpdateInput, SlaPolicyUncheckedUpdateInput>
    /**
     * Choose, which SlaPolicy to update.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy updateMany
   */
  export type SlaPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlaPolicies.
     */
    data: XOR<SlaPolicyUpdateManyMutationInput, SlaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which SlaPolicies to update
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to update.
     */
    limit?: number
  }

  /**
   * SlaPolicy updateManyAndReturn
   */
  export type SlaPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data used to update SlaPolicies.
     */
    data: XOR<SlaPolicyUpdateManyMutationInput, SlaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which SlaPolicies to update
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to update.
     */
    limit?: number
  }

  /**
   * SlaPolicy upsert
   */
  export type SlaPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the SlaPolicy to update in case it exists.
     */
    where: SlaPolicyWhereUniqueInput
    /**
     * In case the SlaPolicy found by the `where` argument doesn't exist, create a new SlaPolicy with this data.
     */
    create: XOR<SlaPolicyCreateInput, SlaPolicyUncheckedCreateInput>
    /**
     * In case the SlaPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlaPolicyUpdateInput, SlaPolicyUncheckedUpdateInput>
  }

  /**
   * SlaPolicy delete
   */
  export type SlaPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Filter which SlaPolicy to delete.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy deleteMany
   */
  export type SlaPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPolicies to delete
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to delete.
     */
    limit?: number
  }

  /**
   * SlaPolicy without action
   */
  export type SlaPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    active: boolean | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    active: boolean | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    active: number
    isOnline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    active?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    active?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    active?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string
    active: boolean
    isOnline: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    active?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    active?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    active?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    active?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "active" | "isOnline" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string
      active: boolean
      isOnline: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly active: FieldRef<"AdminUser", 'Boolean'>
    readonly isOnline: FieldRef<"AdminUser", 'Boolean'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TicketScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    reporterKey: 'reporterKey',
    reporterName: 'reporterName',
    reporterLocation: 'reporterLocation',
    priority: 'priority',
    category: 'category',
    status: 'status',
    responseDueAt: 'responseDueAt',
    resolveDueAt: 'resolveDueAt',
    firstReplyAt: 'firstReplyAt',
    closedAt: 'closedAt',
    feedbackRating: 'feedbackRating',
    feedbackSubmittedAt: 'feedbackSubmittedAt',
    assignedAdminId: 'assignedAdminId',
    assignedAt: 'assignedAt',
    lastAdminReadAt: 'lastAdminReadAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    sender: 'sender',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const MessageAttachmentScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    url: 'url',
    caption: 'caption',
    mimeType: 'mimeType',
    fileName: 'fileName',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type MessageAttachmentScalarFieldEnum = (typeof MessageAttachmentScalarFieldEnum)[keyof typeof MessageAttachmentScalarFieldEnum]


  export const TicketStatusHistoryScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedBy: 'changedBy',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type TicketStatusHistoryScalarFieldEnum = (typeof TicketStatusHistoryScalarFieldEnum)[keyof typeof TicketStatusHistoryScalarFieldEnum]


  export const TicketAssignmentHistoryScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    fromAdminId: 'fromAdminId',
    toAdminId: 'toAdminId',
    changedBy: 'changedBy',
    trigger: 'trigger',
    createdAt: 'createdAt'
  };

  export type TicketAssignmentHistoryScalarFieldEnum = (typeof TicketAssignmentHistoryScalarFieldEnum)[keyof typeof TicketAssignmentHistoryScalarFieldEnum]


  export const SlaPolicyScalarFieldEnum: {
    id: 'id',
    priority: 'priority',
    responseMinutes: 'responseMinutes',
    resolveMinutes: 'resolveMinutes',
    active: 'active'
  };

  export type SlaPolicyScalarFieldEnum = (typeof SlaPolicyScalarFieldEnum)[keyof typeof SlaPolicyScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    active: 'active',
    isOnline: 'isOnline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    code?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    reporterKey?: StringNullableFilter<"Ticket"> | string | null
    reporterName?: StringNullableFilter<"Ticket"> | string | null
    reporterLocation?: StringNullableFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    responseDueAt?: DateTimeFilter<"Ticket"> | Date | string
    resolveDueAt?: DateTimeFilter<"Ticket"> | Date | string
    firstReplyAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    feedbackRating?: IntNullableFilter<"Ticket"> | number | null
    feedbackSubmittedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    assignedAdminId?: StringNullableFilter<"Ticket"> | string | null
    assignedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    lastAdminReadAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    messages?: TicketMessageListRelationFilter
    statusHistory?: TicketStatusHistoryListRelationFilter
    assignmentHistory?: TicketAssignmentHistoryListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reporterKey?: SortOrderInput | SortOrder
    reporterName?: SortOrderInput | SortOrder
    reporterLocation?: SortOrderInput | SortOrder
    priority?: SortOrder
    category?: SortOrder
    status?: SortOrder
    responseDueAt?: SortOrder
    resolveDueAt?: SortOrder
    firstReplyAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    feedbackRating?: SortOrderInput | SortOrder
    feedbackSubmittedAt?: SortOrderInput | SortOrder
    assignedAdminId?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    lastAdminReadAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: TicketMessageOrderByRelationAggregateInput
    statusHistory?: TicketStatusHistoryOrderByRelationAggregateInput
    assignmentHistory?: TicketAssignmentHistoryOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    reporterKey?: StringNullableFilter<"Ticket"> | string | null
    reporterName?: StringNullableFilter<"Ticket"> | string | null
    reporterLocation?: StringNullableFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    responseDueAt?: DateTimeFilter<"Ticket"> | Date | string
    resolveDueAt?: DateTimeFilter<"Ticket"> | Date | string
    firstReplyAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    feedbackRating?: IntNullableFilter<"Ticket"> | number | null
    feedbackSubmittedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    assignedAdminId?: StringNullableFilter<"Ticket"> | string | null
    assignedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    lastAdminReadAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    messages?: TicketMessageListRelationFilter
    statusHistory?: TicketStatusHistoryListRelationFilter
    assignmentHistory?: TicketAssignmentHistoryListRelationFilter
  }, "id" | "code">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reporterKey?: SortOrderInput | SortOrder
    reporterName?: SortOrderInput | SortOrder
    reporterLocation?: SortOrderInput | SortOrder
    priority?: SortOrder
    category?: SortOrder
    status?: SortOrder
    responseDueAt?: SortOrder
    resolveDueAt?: SortOrder
    firstReplyAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    feedbackRating?: SortOrderInput | SortOrder
    feedbackSubmittedAt?: SortOrderInput | SortOrder
    assignedAdminId?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    lastAdminReadAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    code?: StringWithAggregatesFilter<"Ticket"> | string
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    reporterKey?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    reporterName?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    reporterLocation?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    responseDueAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    resolveDueAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    firstReplyAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    feedbackRating?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    feedbackSubmittedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    assignedAdminId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    lastAdminReadAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    sender?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    attachments?: MessageAttachmentListRelationFilter
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    attachments?: MessageAttachmentOrderByRelationAggregateInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: StringFilter<"TicketMessage"> | string
    sender?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    attachments?: MessageAttachmentListRelationFilter
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketMessage"> | string
    ticketId?: StringWithAggregatesFilter<"TicketMessage"> | string
    sender?: StringWithAggregatesFilter<"TicketMessage"> | string
    message?: StringWithAggregatesFilter<"TicketMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type MessageAttachmentWhereInput = {
    AND?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
    OR?: MessageAttachmentWhereInput[]
    NOT?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
    id?: StringFilter<"MessageAttachment"> | string
    messageId?: StringFilter<"MessageAttachment"> | string
    url?: StringFilter<"MessageAttachment"> | string
    caption?: StringNullableFilter<"MessageAttachment"> | string | null
    mimeType?: StringNullableFilter<"MessageAttachment"> | string | null
    fileName?: StringNullableFilter<"MessageAttachment"> | string | null
    size?: IntNullableFilter<"MessageAttachment"> | number | null
    createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
    message?: XOR<TicketMessageScalarRelationFilter, TicketMessageWhereInput>
  }

  export type MessageAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    message?: TicketMessageOrderByWithRelationInput
  }

  export type MessageAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
    OR?: MessageAttachmentWhereInput[]
    NOT?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
    messageId?: StringFilter<"MessageAttachment"> | string
    url?: StringFilter<"MessageAttachment"> | string
    caption?: StringNullableFilter<"MessageAttachment"> | string | null
    mimeType?: StringNullableFilter<"MessageAttachment"> | string | null
    fileName?: StringNullableFilter<"MessageAttachment"> | string | null
    size?: IntNullableFilter<"MessageAttachment"> | number | null
    createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
    message?: XOR<TicketMessageScalarRelationFilter, TicketMessageWhereInput>
  }, "id">

  export type MessageAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageAttachmentCountOrderByAggregateInput
    _avg?: MessageAttachmentAvgOrderByAggregateInput
    _max?: MessageAttachmentMaxOrderByAggregateInput
    _min?: MessageAttachmentMinOrderByAggregateInput
    _sum?: MessageAttachmentSumOrderByAggregateInput
  }

  export type MessageAttachmentScalarWhereWithAggregatesInput = {
    AND?: MessageAttachmentScalarWhereWithAggregatesInput | MessageAttachmentScalarWhereWithAggregatesInput[]
    OR?: MessageAttachmentScalarWhereWithAggregatesInput[]
    NOT?: MessageAttachmentScalarWhereWithAggregatesInput | MessageAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageAttachment"> | string
    messageId?: StringWithAggregatesFilter<"MessageAttachment"> | string
    url?: StringWithAggregatesFilter<"MessageAttachment"> | string
    caption?: StringNullableWithAggregatesFilter<"MessageAttachment"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"MessageAttachment"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"MessageAttachment"> | string | null
    size?: IntNullableWithAggregatesFilter<"MessageAttachment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MessageAttachment"> | Date | string
  }

  export type TicketStatusHistoryWhereInput = {
    AND?: TicketStatusHistoryWhereInput | TicketStatusHistoryWhereInput[]
    OR?: TicketStatusHistoryWhereInput[]
    NOT?: TicketStatusHistoryWhereInput | TicketStatusHistoryWhereInput[]
    id?: StringFilter<"TicketStatusHistory"> | string
    ticketId?: StringFilter<"TicketStatusHistory"> | string
    fromStatus?: EnumTicketStatusNullableFilter<"TicketStatusHistory"> | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFilter<"TicketStatusHistory"> | $Enums.TicketStatus
    changedBy?: StringNullableFilter<"TicketStatusHistory"> | string | null
    note?: StringNullableFilter<"TicketStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketStatusHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketStatusHistoryWhereInput | TicketStatusHistoryWhereInput[]
    OR?: TicketStatusHistoryWhereInput[]
    NOT?: TicketStatusHistoryWhereInput | TicketStatusHistoryWhereInput[]
    ticketId?: StringFilter<"TicketStatusHistory"> | string
    fromStatus?: EnumTicketStatusNullableFilter<"TicketStatusHistory"> | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFilter<"TicketStatusHistory"> | $Enums.TicketStatus
    changedBy?: StringNullableFilter<"TicketStatusHistory"> | string | null
    note?: StringNullableFilter<"TicketStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketStatusHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketStatusHistoryCountOrderByAggregateInput
    _max?: TicketStatusHistoryMaxOrderByAggregateInput
    _min?: TicketStatusHistoryMinOrderByAggregateInput
  }

  export type TicketStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: TicketStatusHistoryScalarWhereWithAggregatesInput | TicketStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: TicketStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: TicketStatusHistoryScalarWhereWithAggregatesInput | TicketStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketStatusHistory"> | string
    ticketId?: StringWithAggregatesFilter<"TicketStatusHistory"> | string
    fromStatus?: EnumTicketStatusNullableWithAggregatesFilter<"TicketStatusHistory"> | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusWithAggregatesFilter<"TicketStatusHistory"> | $Enums.TicketStatus
    changedBy?: StringNullableWithAggregatesFilter<"TicketStatusHistory"> | string | null
    note?: StringNullableWithAggregatesFilter<"TicketStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketStatusHistory"> | Date | string
  }

  export type TicketAssignmentHistoryWhereInput = {
    AND?: TicketAssignmentHistoryWhereInput | TicketAssignmentHistoryWhereInput[]
    OR?: TicketAssignmentHistoryWhereInput[]
    NOT?: TicketAssignmentHistoryWhereInput | TicketAssignmentHistoryWhereInput[]
    id?: StringFilter<"TicketAssignmentHistory"> | string
    ticketId?: StringFilter<"TicketAssignmentHistory"> | string
    fromAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    toAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    changedBy?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    trigger?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketAssignmentHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketAssignmentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromAdminId?: SortOrderInput | SortOrder
    toAdminId?: SortOrderInput | SortOrder
    changedBy?: SortOrderInput | SortOrder
    trigger?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketAssignmentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketAssignmentHistoryWhereInput | TicketAssignmentHistoryWhereInput[]
    OR?: TicketAssignmentHistoryWhereInput[]
    NOT?: TicketAssignmentHistoryWhereInput | TicketAssignmentHistoryWhereInput[]
    ticketId?: StringFilter<"TicketAssignmentHistory"> | string
    fromAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    toAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    changedBy?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    trigger?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketAssignmentHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketAssignmentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromAdminId?: SortOrderInput | SortOrder
    toAdminId?: SortOrderInput | SortOrder
    changedBy?: SortOrderInput | SortOrder
    trigger?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketAssignmentHistoryCountOrderByAggregateInput
    _max?: TicketAssignmentHistoryMaxOrderByAggregateInput
    _min?: TicketAssignmentHistoryMinOrderByAggregateInput
  }

  export type TicketAssignmentHistoryScalarWhereWithAggregatesInput = {
    AND?: TicketAssignmentHistoryScalarWhereWithAggregatesInput | TicketAssignmentHistoryScalarWhereWithAggregatesInput[]
    OR?: TicketAssignmentHistoryScalarWhereWithAggregatesInput[]
    NOT?: TicketAssignmentHistoryScalarWhereWithAggregatesInput | TicketAssignmentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketAssignmentHistory"> | string
    ticketId?: StringWithAggregatesFilter<"TicketAssignmentHistory"> | string
    fromAdminId?: StringNullableWithAggregatesFilter<"TicketAssignmentHistory"> | string | null
    toAdminId?: StringNullableWithAggregatesFilter<"TicketAssignmentHistory"> | string | null
    changedBy?: StringNullableWithAggregatesFilter<"TicketAssignmentHistory"> | string | null
    trigger?: StringNullableWithAggregatesFilter<"TicketAssignmentHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketAssignmentHistory"> | Date | string
  }

  export type SlaPolicyWhereInput = {
    AND?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    OR?: SlaPolicyWhereInput[]
    NOT?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    id?: StringFilter<"SlaPolicy"> | string
    priority?: EnumTicketPriorityFilter<"SlaPolicy"> | $Enums.TicketPriority
    responseMinutes?: IntFilter<"SlaPolicy"> | number
    resolveMinutes?: IntFilter<"SlaPolicy"> | number
    active?: BoolFilter<"SlaPolicy"> | boolean
  }

  export type SlaPolicyOrderByWithRelationInput = {
    id?: SortOrder
    priority?: SortOrder
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
    active?: SortOrder
  }

  export type SlaPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    priority?: $Enums.TicketPriority
    AND?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    OR?: SlaPolicyWhereInput[]
    NOT?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    responseMinutes?: IntFilter<"SlaPolicy"> | number
    resolveMinutes?: IntFilter<"SlaPolicy"> | number
    active?: BoolFilter<"SlaPolicy"> | boolean
  }, "id" | "priority">

  export type SlaPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    priority?: SortOrder
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
    active?: SortOrder
    _count?: SlaPolicyCountOrderByAggregateInput
    _avg?: SlaPolicyAvgOrderByAggregateInput
    _max?: SlaPolicyMaxOrderByAggregateInput
    _min?: SlaPolicyMinOrderByAggregateInput
    _sum?: SlaPolicySumOrderByAggregateInput
  }

  export type SlaPolicyScalarWhereWithAggregatesInput = {
    AND?: SlaPolicyScalarWhereWithAggregatesInput | SlaPolicyScalarWhereWithAggregatesInput[]
    OR?: SlaPolicyScalarWhereWithAggregatesInput[]
    NOT?: SlaPolicyScalarWhereWithAggregatesInput | SlaPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlaPolicy"> | string
    priority?: EnumTicketPriorityWithAggregatesFilter<"SlaPolicy"> | $Enums.TicketPriority
    responseMinutes?: IntWithAggregatesFilter<"SlaPolicy"> | number
    resolveMinutes?: IntWithAggregatesFilter<"SlaPolicy"> | number
    active?: BoolWithAggregatesFilter<"SlaPolicy"> | boolean
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    active?: BoolFilter<"AdminUser"> | boolean
    isOnline?: BoolFilter<"AdminUser"> | boolean
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    active?: BoolFilter<"AdminUser"> | boolean
    isOnline?: BoolFilter<"AdminUser"> | boolean
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    active?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    isOnline?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    statusHistory?: TicketStatusHistoryCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    statusHistory?: TicketStatusHistoryUncheckedCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    statusHistory?: TicketStatusHistoryUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    statusHistory?: TicketStatusHistoryUncheckedUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    id?: string
    sender: string
    message: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
    attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: string
    ticketId: string
    sender: string
    message: string
    createdAt?: Date | string
    attachments?: MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type TicketMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
    attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type TicketMessageCreateManyInput = {
    id?: string
    ticketId: string
    sender: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentCreateInput = {
    id?: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
    message: TicketMessageCreateNestedOneWithoutAttachmentsInput
  }

  export type MessageAttachmentUncheckedCreateInput = {
    id?: string
    messageId: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MessageAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: TicketMessageUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type MessageAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentCreateManyInput = {
    id?: string
    messageId: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MessageAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryCreateInput = {
    id?: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutStatusHistoryInput
  }

  export type TicketStatusHistoryUncheckedCreateInput = {
    id?: string
    ticketId: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TicketStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type TicketStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryCreateManyInput = {
    id?: string
    ticketId: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TicketStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryCreateInput = {
    id?: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAssignmentHistoryInput
  }

  export type TicketAssignmentHistoryUncheckedCreateInput = {
    id?: string
    ticketId: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
  }

  export type TicketAssignmentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAssignmentHistoryNestedInput
  }

  export type TicketAssignmentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryCreateManyInput = {
    id?: string
    ticketId: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
  }

  export type TicketAssignmentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaPolicyCreateInput = {
    id?: string
    priority: $Enums.TicketPriority
    responseMinutes: number
    resolveMinutes: number
    active?: boolean
  }

  export type SlaPolicyUncheckedCreateInput = {
    id?: string
    priority: $Enums.TicketPriority
    responseMinutes: number
    resolveMinutes: number
    active?: boolean
  }

  export type SlaPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    responseMinutes?: IntFieldUpdateOperationsInput | number
    resolveMinutes?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlaPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    responseMinutes?: IntFieldUpdateOperationsInput | number
    resolveMinutes?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlaPolicyCreateManyInput = {
    id?: string
    priority: $Enums.TicketPriority
    responseMinutes: number
    resolveMinutes: number
    active?: boolean
  }

  export type SlaPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    responseMinutes?: IntFieldUpdateOperationsInput | number
    resolveMinutes?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlaPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    responseMinutes?: IntFieldUpdateOperationsInput | number
    resolveMinutes?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    active?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    active?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    password: string
    name: string
    active?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketStatusHistoryListRelationFilter = {
    every?: TicketStatusHistoryWhereInput
    some?: TicketStatusHistoryWhereInput
    none?: TicketStatusHistoryWhereInput
  }

  export type TicketAssignmentHistoryListRelationFilter = {
    every?: TicketAssignmentHistoryWhereInput
    some?: TicketAssignmentHistoryWhereInput
    none?: TicketAssignmentHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAssignmentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reporterKey?: SortOrder
    reporterName?: SortOrder
    reporterLocation?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    status?: SortOrder
    responseDueAt?: SortOrder
    resolveDueAt?: SortOrder
    firstReplyAt?: SortOrder
    closedAt?: SortOrder
    feedbackRating?: SortOrder
    feedbackSubmittedAt?: SortOrder
    assignedAdminId?: SortOrder
    assignedAt?: SortOrder
    lastAdminReadAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    feedbackRating?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reporterKey?: SortOrder
    reporterName?: SortOrder
    reporterLocation?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    status?: SortOrder
    responseDueAt?: SortOrder
    resolveDueAt?: SortOrder
    firstReplyAt?: SortOrder
    closedAt?: SortOrder
    feedbackRating?: SortOrder
    feedbackSubmittedAt?: SortOrder
    assignedAdminId?: SortOrder
    assignedAt?: SortOrder
    lastAdminReadAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reporterKey?: SortOrder
    reporterName?: SortOrder
    reporterLocation?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    status?: SortOrder
    responseDueAt?: SortOrder
    resolveDueAt?: SortOrder
    firstReplyAt?: SortOrder
    closedAt?: SortOrder
    feedbackRating?: SortOrder
    feedbackSubmittedAt?: SortOrder
    assignedAdminId?: SortOrder
    assignedAt?: SortOrder
    lastAdminReadAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    feedbackRating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type MessageAttachmentListRelationFilter = {
    every?: MessageAttachmentWhereInput
    some?: MessageAttachmentWhereInput
    none?: MessageAttachmentWhereInput
  }

  export type MessageAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageScalarRelationFilter = {
    is?: TicketMessageWhereInput
    isNot?: TicketMessageWhereInput
  }

  export type MessageAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    mimeType?: SortOrder
    fileName?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAttachmentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type MessageAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    mimeType?: SortOrder
    fileName?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    mimeType?: SortOrder
    fileName?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAttachmentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumTicketStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketStatusNullableFilter<$PrismaModel> | $Enums.TicketStatus | null
  }

  export type TicketStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTicketStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusNullableFilter<$PrismaModel>
  }

  export type TicketAssignmentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromAdminId?: SortOrder
    toAdminId?: SortOrder
    changedBy?: SortOrder
    trigger?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAssignmentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromAdminId?: SortOrder
    toAdminId?: SortOrder
    changedBy?: SortOrder
    trigger?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAssignmentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    fromAdminId?: SortOrder
    toAdminId?: SortOrder
    changedBy?: SortOrder
    trigger?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SlaPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
    active?: SortOrder
  }

  export type SlaPolicyAvgOrderByAggregateInput = {
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
  }

  export type SlaPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
    active?: SortOrder
  }

  export type SlaPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
    active?: SortOrder
  }

  export type SlaPolicySumOrderByAggregateInput = {
    responseMinutes?: SortOrder
    resolveMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    active?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketStatusHistoryCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput> | TicketStatusHistoryCreateWithoutTicketInput[] | TicketStatusHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketStatusHistoryCreateOrConnectWithoutTicketInput | TicketStatusHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketStatusHistoryCreateManyTicketInputEnvelope
    connect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
  }

  export type TicketAssignmentHistoryCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput> | TicketAssignmentHistoryCreateWithoutTicketInput[] | TicketAssignmentHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentHistoryCreateOrConnectWithoutTicketInput | TicketAssignmentHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssignmentHistoryCreateManyTicketInputEnvelope
    connect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketStatusHistoryUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput> | TicketStatusHistoryCreateWithoutTicketInput[] | TicketStatusHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketStatusHistoryCreateOrConnectWithoutTicketInput | TicketStatusHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketStatusHistoryCreateManyTicketInputEnvelope
    connect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
  }

  export type TicketAssignmentHistoryUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput> | TicketAssignmentHistoryCreateWithoutTicketInput[] | TicketAssignmentHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentHistoryCreateOrConnectWithoutTicketInput | TicketAssignmentHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssignmentHistoryCreateManyTicketInputEnvelope
    connect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketStatusHistoryUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput> | TicketStatusHistoryCreateWithoutTicketInput[] | TicketStatusHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketStatusHistoryCreateOrConnectWithoutTicketInput | TicketStatusHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketStatusHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketStatusHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketStatusHistoryCreateManyTicketInputEnvelope
    set?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    disconnect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    delete?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    connect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    update?: TicketStatusHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketStatusHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketStatusHistoryUpdateManyWithWhereWithoutTicketInput | TicketStatusHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketStatusHistoryScalarWhereInput | TicketStatusHistoryScalarWhereInput[]
  }

  export type TicketAssignmentHistoryUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput> | TicketAssignmentHistoryCreateWithoutTicketInput[] | TicketAssignmentHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentHistoryCreateOrConnectWithoutTicketInput | TicketAssignmentHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssignmentHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketAssignmentHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssignmentHistoryCreateManyTicketInputEnvelope
    set?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    disconnect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    delete?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    connect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    update?: TicketAssignmentHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketAssignmentHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssignmentHistoryUpdateManyWithWhereWithoutTicketInput | TicketAssignmentHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssignmentHistoryScalarWhereInput | TicketAssignmentHistoryScalarWhereInput[]
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketStatusHistoryUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput> | TicketStatusHistoryCreateWithoutTicketInput[] | TicketStatusHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketStatusHistoryCreateOrConnectWithoutTicketInput | TicketStatusHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketStatusHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketStatusHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketStatusHistoryCreateManyTicketInputEnvelope
    set?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    disconnect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    delete?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    connect?: TicketStatusHistoryWhereUniqueInput | TicketStatusHistoryWhereUniqueInput[]
    update?: TicketStatusHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketStatusHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketStatusHistoryUpdateManyWithWhereWithoutTicketInput | TicketStatusHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketStatusHistoryScalarWhereInput | TicketStatusHistoryScalarWhereInput[]
  }

  export type TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput> | TicketAssignmentHistoryCreateWithoutTicketInput[] | TicketAssignmentHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentHistoryCreateOrConnectWithoutTicketInput | TicketAssignmentHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssignmentHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketAssignmentHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssignmentHistoryCreateManyTicketInputEnvelope
    set?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    disconnect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    delete?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    connect?: TicketAssignmentHistoryWhereUniqueInput | TicketAssignmentHistoryWhereUniqueInput[]
    update?: TicketAssignmentHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketAssignmentHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssignmentHistoryUpdateManyWithWhereWithoutTicketInput | TicketAssignmentHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssignmentHistoryScalarWhereInput | TicketAssignmentHistoryScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    connect?: TicketWhereUniqueInput
  }

  export type MessageAttachmentCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: MessageAttachmentCreateManyMessageInputEnvelope
    connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
  }

  export type MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: MessageAttachmentCreateManyMessageInputEnvelope
    connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
  }

  export type TicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    upsert?: TicketUpsertWithoutMessagesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMessagesInput, TicketUpdateWithoutMessagesInput>, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageAttachmentUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageAttachmentCreateManyMessageInputEnvelope
    set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    update?: MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageAttachmentUpdateManyWithWhereWithoutMessageInput | MessageAttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
  }

  export type MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageAttachmentCreateManyMessageInputEnvelope
    set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    update?: MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageAttachmentUpdateManyWithWhereWithoutMessageInput | MessageAttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
  }

  export type TicketMessageCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TicketMessageCreateWithoutAttachmentsInput, TicketMessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketMessageCreateOrConnectWithoutAttachmentsInput
    connect?: TicketMessageWhereUniqueInput
  }

  export type TicketMessageUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TicketMessageCreateWithoutAttachmentsInput, TicketMessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketMessageCreateOrConnectWithoutAttachmentsInput
    upsert?: TicketMessageUpsertWithoutAttachmentsInput
    connect?: TicketMessageWhereUniqueInput
    update?: XOR<XOR<TicketMessageUpdateToOneWithWhereWithoutAttachmentsInput, TicketMessageUpdateWithoutAttachmentsInput>, TicketMessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<TicketCreateWithoutStatusHistoryInput, TicketUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutStatusHistoryInput
    connect?: TicketWhereUniqueInput
  }

  export type NullableEnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus | null
  }

  export type TicketUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<TicketCreateWithoutStatusHistoryInput, TicketUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutStatusHistoryInput
    upsert?: TicketUpsertWithoutStatusHistoryInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutStatusHistoryInput, TicketUpdateWithoutStatusHistoryInput>, TicketUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type TicketCreateNestedOneWithoutAssignmentHistoryInput = {
    create?: XOR<TicketCreateWithoutAssignmentHistoryInput, TicketUncheckedCreateWithoutAssignmentHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssignmentHistoryInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutAssignmentHistoryNestedInput = {
    create?: XOR<TicketCreateWithoutAssignmentHistoryInput, TicketUncheckedCreateWithoutAssignmentHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssignmentHistoryInput
    upsert?: TicketUpsertWithoutAssignmentHistoryInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAssignmentHistoryInput, TicketUpdateWithoutAssignmentHistoryInput>, TicketUncheckedUpdateWithoutAssignmentHistoryInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTicketStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketStatusNullableFilter<$PrismaModel> | $Enums.TicketStatus | null
  }

  export type NestedEnumTicketStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TicketMessageCreateWithoutTicketInput = {
    id?: string
    sender: string
    message: string
    createdAt?: Date | string
    attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: string
    sender: string
    message: string
    createdAt?: Date | string
    attachments?: MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketStatusHistoryCreateWithoutTicketInput = {
    id?: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TicketStatusHistoryUncheckedCreateWithoutTicketInput = {
    id?: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TicketStatusHistoryCreateOrConnectWithoutTicketInput = {
    where: TicketStatusHistoryWhereUniqueInput
    create: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketStatusHistoryCreateManyTicketInputEnvelope = {
    data: TicketStatusHistoryCreateManyTicketInput | TicketStatusHistoryCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketAssignmentHistoryCreateWithoutTicketInput = {
    id?: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
  }

  export type TicketAssignmentHistoryUncheckedCreateWithoutTicketInput = {
    id?: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
  }

  export type TicketAssignmentHistoryCreateOrConnectWithoutTicketInput = {
    where: TicketAssignmentHistoryWhereUniqueInput
    create: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssignmentHistoryCreateManyTicketInputEnvelope = {
    data: TicketAssignmentHistoryCreateManyTicketInput | TicketAssignmentHistoryCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    sender?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type TicketStatusHistoryUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketStatusHistoryWhereUniqueInput
    update: XOR<TicketStatusHistoryUpdateWithoutTicketInput, TicketStatusHistoryUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketStatusHistoryCreateWithoutTicketInput, TicketStatusHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketStatusHistoryUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketStatusHistoryWhereUniqueInput
    data: XOR<TicketStatusHistoryUpdateWithoutTicketInput, TicketStatusHistoryUncheckedUpdateWithoutTicketInput>
  }

  export type TicketStatusHistoryUpdateManyWithWhereWithoutTicketInput = {
    where: TicketStatusHistoryScalarWhereInput
    data: XOR<TicketStatusHistoryUpdateManyMutationInput, TicketStatusHistoryUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketStatusHistoryScalarWhereInput = {
    AND?: TicketStatusHistoryScalarWhereInput | TicketStatusHistoryScalarWhereInput[]
    OR?: TicketStatusHistoryScalarWhereInput[]
    NOT?: TicketStatusHistoryScalarWhereInput | TicketStatusHistoryScalarWhereInput[]
    id?: StringFilter<"TicketStatusHistory"> | string
    ticketId?: StringFilter<"TicketStatusHistory"> | string
    fromStatus?: EnumTicketStatusNullableFilter<"TicketStatusHistory"> | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFilter<"TicketStatusHistory"> | $Enums.TicketStatus
    changedBy?: StringNullableFilter<"TicketStatusHistory"> | string | null
    note?: StringNullableFilter<"TicketStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketStatusHistory"> | Date | string
  }

  export type TicketAssignmentHistoryUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAssignmentHistoryWhereUniqueInput
    update: XOR<TicketAssignmentHistoryUpdateWithoutTicketInput, TicketAssignmentHistoryUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAssignmentHistoryCreateWithoutTicketInput, TicketAssignmentHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssignmentHistoryUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAssignmentHistoryWhereUniqueInput
    data: XOR<TicketAssignmentHistoryUpdateWithoutTicketInput, TicketAssignmentHistoryUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAssignmentHistoryUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAssignmentHistoryScalarWhereInput
    data: XOR<TicketAssignmentHistoryUpdateManyMutationInput, TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketAssignmentHistoryScalarWhereInput = {
    AND?: TicketAssignmentHistoryScalarWhereInput | TicketAssignmentHistoryScalarWhereInput[]
    OR?: TicketAssignmentHistoryScalarWhereInput[]
    NOT?: TicketAssignmentHistoryScalarWhereInput | TicketAssignmentHistoryScalarWhereInput[]
    id?: StringFilter<"TicketAssignmentHistory"> | string
    ticketId?: StringFilter<"TicketAssignmentHistory"> | string
    fromAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    toAdminId?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    changedBy?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    trigger?: StringNullableFilter<"TicketAssignmentHistory"> | string | null
    createdAt?: DateTimeFilter<"TicketAssignmentHistory"> | Date | string
  }

  export type TicketCreateWithoutMessagesInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: TicketStatusHistoryCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutMessagesInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: TicketStatusHistoryUncheckedCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutMessagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
  }

  export type MessageAttachmentCreateWithoutMessageInput = {
    id?: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MessageAttachmentUncheckedCreateWithoutMessageInput = {
    id?: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MessageAttachmentCreateOrConnectWithoutMessageInput = {
    where: MessageAttachmentWhereUniqueInput
    create: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput>
  }

  export type MessageAttachmentCreateManyMessageInputEnvelope = {
    data: MessageAttachmentCreateManyMessageInput | MessageAttachmentCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithoutMessagesInput = {
    update: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: TicketStatusHistoryUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: TicketStatusHistoryUncheckedUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageAttachmentWhereUniqueInput
    update: XOR<MessageAttachmentUpdateWithoutMessageInput, MessageAttachmentUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput>
  }

  export type MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageAttachmentWhereUniqueInput
    data: XOR<MessageAttachmentUpdateWithoutMessageInput, MessageAttachmentUncheckedUpdateWithoutMessageInput>
  }

  export type MessageAttachmentUpdateManyWithWhereWithoutMessageInput = {
    where: MessageAttachmentScalarWhereInput
    data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageAttachmentScalarWhereInput = {
    AND?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    OR?: MessageAttachmentScalarWhereInput[]
    NOT?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    id?: StringFilter<"MessageAttachment"> | string
    messageId?: StringFilter<"MessageAttachment"> | string
    url?: StringFilter<"MessageAttachment"> | string
    caption?: StringNullableFilter<"MessageAttachment"> | string | null
    mimeType?: StringNullableFilter<"MessageAttachment"> | string | null
    fileName?: StringNullableFilter<"MessageAttachment"> | string | null
    size?: IntNullableFilter<"MessageAttachment"> | number | null
    createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
  }

  export type TicketMessageCreateWithoutAttachmentsInput = {
    id?: string
    sender: string
    message: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    ticketId: string
    sender: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutAttachmentsInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutAttachmentsInput, TicketMessageUncheckedCreateWithoutAttachmentsInput>
  }

  export type TicketMessageUpsertWithoutAttachmentsInput = {
    update: XOR<TicketMessageUpdateWithoutAttachmentsInput, TicketMessageUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TicketMessageCreateWithoutAttachmentsInput, TicketMessageUncheckedCreateWithoutAttachmentsInput>
    where?: TicketMessageWhereInput
  }

  export type TicketMessageUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TicketMessageWhereInput
    data: XOR<TicketMessageUpdateWithoutAttachmentsInput, TicketMessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketMessageUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutStatusHistoryInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutStatusHistoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutStatusHistoryInput, TicketUncheckedCreateWithoutStatusHistoryInput>
  }

  export type TicketUpsertWithoutStatusHistoryInput = {
    update: XOR<TicketUpdateWithoutStatusHistoryInput, TicketUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<TicketCreateWithoutStatusHistoryInput, TicketUncheckedCreateWithoutStatusHistoryInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutStatusHistoryInput, TicketUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type TicketUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    assignmentHistory?: TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateWithoutAssignmentHistoryInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    statusHistory?: TicketStatusHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAssignmentHistoryInput = {
    id?: string
    code: string
    title: string
    description: string
    reporterKey?: string | null
    reporterName?: string | null
    reporterLocation?: string | null
    priority: $Enums.TicketPriority
    category?: $Enums.TicketCategory
    status?: $Enums.TicketStatus
    responseDueAt: Date | string
    resolveDueAt: Date | string
    firstReplyAt?: Date | string | null
    closedAt?: Date | string | null
    feedbackRating?: number | null
    feedbackSubmittedAt?: Date | string | null
    assignedAdminId?: string | null
    assignedAt?: Date | string | null
    lastAdminReadAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    statusHistory?: TicketStatusHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssignmentHistoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssignmentHistoryInput, TicketUncheckedCreateWithoutAssignmentHistoryInput>
  }

  export type TicketUpsertWithoutAssignmentHistoryInput = {
    update: XOR<TicketUpdateWithoutAssignmentHistoryInput, TicketUncheckedUpdateWithoutAssignmentHistoryInput>
    create: XOR<TicketCreateWithoutAssignmentHistoryInput, TicketUncheckedCreateWithoutAssignmentHistoryInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAssignmentHistoryInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAssignmentHistoryInput, TicketUncheckedUpdateWithoutAssignmentHistoryInput>
  }

  export type TicketUpdateWithoutAssignmentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    statusHistory?: TicketStatusHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssignmentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reporterKey?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterLocation?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    responseDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolveDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstReplyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAdminReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    statusHistory?: TicketStatusHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: string
    sender: string
    message: string
    createdAt?: Date | string
  }

  export type TicketStatusHistoryCreateManyTicketInput = {
    id?: string
    fromStatus?: $Enums.TicketStatus | null
    toStatus: $Enums.TicketStatus
    changedBy?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TicketAssignmentHistoryCreateManyTicketInput = {
    id?: string
    fromAdminId?: string | null
    toAdminId?: string | null
    changedBy?: string | null
    trigger?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketStatusHistoryUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus | null
    toStatus?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentHistoryUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    toAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentCreateManyMessageInput = {
    id?: string
    url: string
    caption?: string | null
    mimeType?: string | null
    fileName?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MessageAttachmentUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}