
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model m_packs
 * 
 */
export type m_packs = $Result.DefaultSelection<Prisma.$m_packsPayload>
/**
 * Model m_rarity
 * 
 */
export type m_rarity = $Result.DefaultSelection<Prisma.$m_rarityPayload>
/**
 * Model t_inventory_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type t_inventory_items = $Result.DefaultSelection<Prisma.$t_inventory_itemsPayload>
/**
 * Model t_users
 * 
 */
export type t_users = $Result.DefaultSelection<Prisma.$t_usersPayload>
/**
 * Model t_wishlist_items
 * 
 */
export type t_wishlist_items = $Result.DefaultSelection<Prisma.$t_wishlist_itemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more M_packs
 * const m_packs = await prisma.m_packs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more M_packs
   * const m_packs = await prisma.m_packs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.m_packs`: Exposes CRUD operations for the **m_packs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more M_packs
    * const m_packs = await prisma.m_packs.findMany()
    * ```
    */
  get m_packs(): Prisma.m_packsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.m_rarity`: Exposes CRUD operations for the **m_rarity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more M_rarities
    * const m_rarities = await prisma.m_rarity.findMany()
    * ```
    */
  get m_rarity(): Prisma.m_rarityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_inventory_items`: Exposes CRUD operations for the **t_inventory_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_inventory_items
    * const t_inventory_items = await prisma.t_inventory_items.findMany()
    * ```
    */
  get t_inventory_items(): Prisma.t_inventory_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_users`: Exposes CRUD operations for the **t_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_users
    * const t_users = await prisma.t_users.findMany()
    * ```
    */
  get t_users(): Prisma.t_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_wishlist_items`: Exposes CRUD operations for the **t_wishlist_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_wishlist_items
    * const t_wishlist_items = await prisma.t_wishlist_items.findMany()
    * ```
    */
  get t_wishlist_items(): Prisma.t_wishlist_itemsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    m_packs: 'm_packs',
    m_rarity: 'm_rarity',
    t_inventory_items: 't_inventory_items',
    t_users: 't_users',
    t_wishlist_items: 't_wishlist_items'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "m_packs" | "m_rarity" | "t_inventory_items" | "t_users" | "t_wishlist_items"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      m_packs: {
        payload: Prisma.$m_packsPayload<ExtArgs>
        fields: Prisma.m_packsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.m_packsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.m_packsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          findFirst: {
            args: Prisma.m_packsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.m_packsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          findMany: {
            args: Prisma.m_packsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>[]
          }
          create: {
            args: Prisma.m_packsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          createMany: {
            args: Prisma.m_packsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.m_packsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>[]
          }
          delete: {
            args: Prisma.m_packsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          update: {
            args: Prisma.m_packsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          deleteMany: {
            args: Prisma.m_packsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.m_packsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.m_packsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>[]
          }
          upsert: {
            args: Prisma.m_packsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_packsPayload>
          }
          aggregate: {
            args: Prisma.M_packsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateM_packs>
          }
          groupBy: {
            args: Prisma.m_packsGroupByArgs<ExtArgs>
            result: $Utils.Optional<M_packsGroupByOutputType>[]
          }
          count: {
            args: Prisma.m_packsCountArgs<ExtArgs>
            result: $Utils.Optional<M_packsCountAggregateOutputType> | number
          }
        }
      }
      m_rarity: {
        payload: Prisma.$m_rarityPayload<ExtArgs>
        fields: Prisma.m_rarityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.m_rarityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.m_rarityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          findFirst: {
            args: Prisma.m_rarityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.m_rarityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          findMany: {
            args: Prisma.m_rarityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>[]
          }
          create: {
            args: Prisma.m_rarityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          createMany: {
            args: Prisma.m_rarityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.m_rarityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>[]
          }
          delete: {
            args: Prisma.m_rarityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          update: {
            args: Prisma.m_rarityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          deleteMany: {
            args: Prisma.m_rarityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.m_rarityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.m_rarityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>[]
          }
          upsert: {
            args: Prisma.m_rarityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_rarityPayload>
          }
          aggregate: {
            args: Prisma.M_rarityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateM_rarity>
          }
          groupBy: {
            args: Prisma.m_rarityGroupByArgs<ExtArgs>
            result: $Utils.Optional<M_rarityGroupByOutputType>[]
          }
          count: {
            args: Prisma.m_rarityCountArgs<ExtArgs>
            result: $Utils.Optional<M_rarityCountAggregateOutputType> | number
          }
        }
      }
      t_inventory_items: {
        payload: Prisma.$t_inventory_itemsPayload<ExtArgs>
        fields: Prisma.t_inventory_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_inventory_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_inventory_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          findFirst: {
            args: Prisma.t_inventory_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_inventory_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          findMany: {
            args: Prisma.t_inventory_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>[]
          }
          create: {
            args: Prisma.t_inventory_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          createMany: {
            args: Prisma.t_inventory_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.t_inventory_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>[]
          }
          delete: {
            args: Prisma.t_inventory_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          update: {
            args: Prisma.t_inventory_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          deleteMany: {
            args: Prisma.t_inventory_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_inventory_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.t_inventory_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>[]
          }
          upsert: {
            args: Prisma.t_inventory_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_inventory_itemsPayload>
          }
          aggregate: {
            args: Prisma.T_inventory_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_inventory_items>
          }
          groupBy: {
            args: Prisma.t_inventory_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_inventory_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_inventory_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<T_inventory_itemsCountAggregateOutputType> | number
          }
        }
      }
      t_users: {
        payload: Prisma.$t_usersPayload<ExtArgs>
        fields: Prisma.t_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          findFirst: {
            args: Prisma.t_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          findMany: {
            args: Prisma.t_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>[]
          }
          create: {
            args: Prisma.t_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          createMany: {
            args: Prisma.t_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.t_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>[]
          }
          delete: {
            args: Prisma.t_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          update: {
            args: Prisma.t_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          deleteMany: {
            args: Prisma.t_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.t_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>[]
          }
          upsert: {
            args: Prisma.t_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usersPayload>
          }
          aggregate: {
            args: Prisma.T_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_users>
          }
          groupBy: {
            args: Prisma.t_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_usersCountArgs<ExtArgs>
            result: $Utils.Optional<T_usersCountAggregateOutputType> | number
          }
        }
      }
      t_wishlist_items: {
        payload: Prisma.$t_wishlist_itemsPayload<ExtArgs>
        fields: Prisma.t_wishlist_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_wishlist_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          findFirst: {
            args: Prisma.t_wishlist_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_wishlist_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          findMany: {
            args: Prisma.t_wishlist_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>[]
          }
          create: {
            args: Prisma.t_wishlist_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          createMany: {
            args: Prisma.t_wishlist_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.t_wishlist_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>[]
          }
          delete: {
            args: Prisma.t_wishlist_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          update: {
            args: Prisma.t_wishlist_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          deleteMany: {
            args: Prisma.t_wishlist_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_wishlist_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.t_wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>[]
          }
          upsert: {
            args: Prisma.t_wishlist_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_wishlist_itemsPayload>
          }
          aggregate: {
            args: Prisma.T_wishlist_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_wishlist_items>
          }
          groupBy: {
            args: Prisma.t_wishlist_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_wishlist_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_wishlist_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<T_wishlist_itemsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    m_packs?: m_packsOmit
    m_rarity?: m_rarityOmit
    t_inventory_items?: t_inventory_itemsOmit
    t_users?: t_usersOmit
    t_wishlist_items?: t_wishlist_itemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type M_packsCountOutputType
   */

  export type M_packsCountOutputType = {
    t_inventory_items: number
    t_wishlist_items: number
  }

  export type M_packsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | M_packsCountOutputTypeCountT_inventory_itemsArgs
    t_wishlist_items?: boolean | M_packsCountOutputTypeCountT_wishlist_itemsArgs
  }

  // Custom InputTypes
  /**
   * M_packsCountOutputType without action
   */
  export type M_packsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the M_packsCountOutputType
     */
    select?: M_packsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * M_packsCountOutputType without action
   */
  export type M_packsCountOutputTypeCountT_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_inventory_itemsWhereInput
  }

  /**
   * M_packsCountOutputType without action
   */
  export type M_packsCountOutputTypeCountT_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_wishlist_itemsWhereInput
  }


  /**
   * Count Type M_rarityCountOutputType
   */

  export type M_rarityCountOutputType = {
    t_inventory_items: number
    t_wishlist_items: number
  }

  export type M_rarityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | M_rarityCountOutputTypeCountT_inventory_itemsArgs
    t_wishlist_items?: boolean | M_rarityCountOutputTypeCountT_wishlist_itemsArgs
  }

  // Custom InputTypes
  /**
   * M_rarityCountOutputType without action
   */
  export type M_rarityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the M_rarityCountOutputType
     */
    select?: M_rarityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * M_rarityCountOutputType without action
   */
  export type M_rarityCountOutputTypeCountT_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_inventory_itemsWhereInput
  }

  /**
   * M_rarityCountOutputType without action
   */
  export type M_rarityCountOutputTypeCountT_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_wishlist_itemsWhereInput
  }


  /**
   * Count Type T_usersCountOutputType
   */

  export type T_usersCountOutputType = {
    t_inventory_items: number
    t_wishlist_items: number
  }

  export type T_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | T_usersCountOutputTypeCountT_inventory_itemsArgs
    t_wishlist_items?: boolean | T_usersCountOutputTypeCountT_wishlist_itemsArgs
  }

  // Custom InputTypes
  /**
   * T_usersCountOutputType without action
   */
  export type T_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_usersCountOutputType
     */
    select?: T_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_usersCountOutputType without action
   */
  export type T_usersCountOutputTypeCountT_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_inventory_itemsWhereInput
  }

  /**
   * T_usersCountOutputType without action
   */
  export type T_usersCountOutputTypeCountT_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_wishlist_itemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model m_packs
   */

  export type AggregateM_packs = {
    _count: M_packsCountAggregateOutputType | null
    _min: M_packsMinAggregateOutputType | null
    _max: M_packsMaxAggregateOutputType | null
  }

  export type M_packsMinAggregateOutputType = {
    id: string | null
    pack_id: string | null
    pack_name: string | null
    pack_image_url: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
    pack_no: string | null
  }

  export type M_packsMaxAggregateOutputType = {
    id: string | null
    pack_id: string | null
    pack_name: string | null
    pack_image_url: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
    pack_no: string | null
  }

  export type M_packsCountAggregateOutputType = {
    id: number
    pack_id: number
    pack_name: number
    pack_image_url: number
    memo: number
    created_at: number
    updated_at: number
    pack_no: number
    _all: number
  }


  export type M_packsMinAggregateInputType = {
    id?: true
    pack_id?: true
    pack_name?: true
    pack_image_url?: true
    memo?: true
    created_at?: true
    updated_at?: true
    pack_no?: true
  }

  export type M_packsMaxAggregateInputType = {
    id?: true
    pack_id?: true
    pack_name?: true
    pack_image_url?: true
    memo?: true
    created_at?: true
    updated_at?: true
    pack_no?: true
  }

  export type M_packsCountAggregateInputType = {
    id?: true
    pack_id?: true
    pack_name?: true
    pack_image_url?: true
    memo?: true
    created_at?: true
    updated_at?: true
    pack_no?: true
    _all?: true
  }

  export type M_packsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_packs to aggregate.
     */
    where?: m_packsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_packs to fetch.
     */
    orderBy?: m_packsOrderByWithRelationInput | m_packsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: m_packsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned m_packs
    **/
    _count?: true | M_packsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: M_packsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: M_packsMaxAggregateInputType
  }

  export type GetM_packsAggregateType<T extends M_packsAggregateArgs> = {
        [P in keyof T & keyof AggregateM_packs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateM_packs[P]>
      : GetScalarType<T[P], AggregateM_packs[P]>
  }




  export type m_packsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_packsWhereInput
    orderBy?: m_packsOrderByWithAggregationInput | m_packsOrderByWithAggregationInput[]
    by: M_packsScalarFieldEnum[] | M_packsScalarFieldEnum
    having?: m_packsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: M_packsCountAggregateInputType | true
    _min?: M_packsMinAggregateInputType
    _max?: M_packsMaxAggregateInputType
  }

  export type M_packsGroupByOutputType = {
    id: string
    pack_id: string
    pack_name: string | null
    pack_image_url: string | null
    memo: string | null
    created_at: Date
    updated_at: Date
    pack_no: string | null
    _count: M_packsCountAggregateOutputType | null
    _min: M_packsMinAggregateOutputType | null
    _max: M_packsMaxAggregateOutputType | null
  }

  type GetM_packsGroupByPayload<T extends m_packsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<M_packsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof M_packsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], M_packsGroupByOutputType[P]>
            : GetScalarType<T[P], M_packsGroupByOutputType[P]>
        }
      >
    >


  export type m_packsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pack_id?: boolean
    pack_name?: boolean
    pack_image_url?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pack_no?: boolean
    t_inventory_items?: boolean | m_packs$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | m_packs$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | M_packsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["m_packs"]>

  export type m_packsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pack_id?: boolean
    pack_name?: boolean
    pack_image_url?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pack_no?: boolean
  }, ExtArgs["result"]["m_packs"]>

  export type m_packsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pack_id?: boolean
    pack_name?: boolean
    pack_image_url?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pack_no?: boolean
  }, ExtArgs["result"]["m_packs"]>

  export type m_packsSelectScalar = {
    id?: boolean
    pack_id?: boolean
    pack_name?: boolean
    pack_image_url?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pack_no?: boolean
  }

  export type m_packsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pack_id" | "pack_name" | "pack_image_url" | "memo" | "created_at" | "updated_at" | "pack_no", ExtArgs["result"]["m_packs"]>
  export type m_packsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | m_packs$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | m_packs$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | M_packsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type m_packsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type m_packsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $m_packsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "m_packs"
    objects: {
      t_inventory_items: Prisma.$t_inventory_itemsPayload<ExtArgs>[]
      t_wishlist_items: Prisma.$t_wishlist_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pack_id: string
      pack_name: string | null
      pack_image_url: string | null
      memo: string | null
      created_at: Date
      updated_at: Date
      pack_no: string | null
    }, ExtArgs["result"]["m_packs"]>
    composites: {}
  }

  type m_packsGetPayload<S extends boolean | null | undefined | m_packsDefaultArgs> = $Result.GetResult<Prisma.$m_packsPayload, S>

  type m_packsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<m_packsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: M_packsCountAggregateInputType | true
    }

  export interface m_packsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['m_packs'], meta: { name: 'm_packs' } }
    /**
     * Find zero or one M_packs that matches the filter.
     * @param {m_packsFindUniqueArgs} args - Arguments to find a M_packs
     * @example
     * // Get one M_packs
     * const m_packs = await prisma.m_packs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends m_packsFindUniqueArgs>(args: SelectSubset<T, m_packsFindUniqueArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one M_packs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {m_packsFindUniqueOrThrowArgs} args - Arguments to find a M_packs
     * @example
     * // Get one M_packs
     * const m_packs = await prisma.m_packs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends m_packsFindUniqueOrThrowArgs>(args: SelectSubset<T, m_packsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsFindFirstArgs} args - Arguments to find a M_packs
     * @example
     * // Get one M_packs
     * const m_packs = await prisma.m_packs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends m_packsFindFirstArgs>(args?: SelectSubset<T, m_packsFindFirstArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_packs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsFindFirstOrThrowArgs} args - Arguments to find a M_packs
     * @example
     * // Get one M_packs
     * const m_packs = await prisma.m_packs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends m_packsFindFirstOrThrowArgs>(args?: SelectSubset<T, m_packsFindFirstOrThrowArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more M_packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all M_packs
     * const m_packs = await prisma.m_packs.findMany()
     * 
     * // Get first 10 M_packs
     * const m_packs = await prisma.m_packs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const m_packsWithIdOnly = await prisma.m_packs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends m_packsFindManyArgs>(args?: SelectSubset<T, m_packsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a M_packs.
     * @param {m_packsCreateArgs} args - Arguments to create a M_packs.
     * @example
     * // Create one M_packs
     * const M_packs = await prisma.m_packs.create({
     *   data: {
     *     // ... data to create a M_packs
     *   }
     * })
     * 
     */
    create<T extends m_packsCreateArgs>(args: SelectSubset<T, m_packsCreateArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many M_packs.
     * @param {m_packsCreateManyArgs} args - Arguments to create many M_packs.
     * @example
     * // Create many M_packs
     * const m_packs = await prisma.m_packs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends m_packsCreateManyArgs>(args?: SelectSubset<T, m_packsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many M_packs and returns the data saved in the database.
     * @param {m_packsCreateManyAndReturnArgs} args - Arguments to create many M_packs.
     * @example
     * // Create many M_packs
     * const m_packs = await prisma.m_packs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many M_packs and only return the `id`
     * const m_packsWithIdOnly = await prisma.m_packs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends m_packsCreateManyAndReturnArgs>(args?: SelectSubset<T, m_packsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a M_packs.
     * @param {m_packsDeleteArgs} args - Arguments to delete one M_packs.
     * @example
     * // Delete one M_packs
     * const M_packs = await prisma.m_packs.delete({
     *   where: {
     *     // ... filter to delete one M_packs
     *   }
     * })
     * 
     */
    delete<T extends m_packsDeleteArgs>(args: SelectSubset<T, m_packsDeleteArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one M_packs.
     * @param {m_packsUpdateArgs} args - Arguments to update one M_packs.
     * @example
     * // Update one M_packs
     * const m_packs = await prisma.m_packs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends m_packsUpdateArgs>(args: SelectSubset<T, m_packsUpdateArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more M_packs.
     * @param {m_packsDeleteManyArgs} args - Arguments to filter M_packs to delete.
     * @example
     * // Delete a few M_packs
     * const { count } = await prisma.m_packs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends m_packsDeleteManyArgs>(args?: SelectSubset<T, m_packsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many M_packs
     * const m_packs = await prisma.m_packs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends m_packsUpdateManyArgs>(args: SelectSubset<T, m_packsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_packs and returns the data updated in the database.
     * @param {m_packsUpdateManyAndReturnArgs} args - Arguments to update many M_packs.
     * @example
     * // Update many M_packs
     * const m_packs = await prisma.m_packs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more M_packs and only return the `id`
     * const m_packsWithIdOnly = await prisma.m_packs.updateManyAndReturn({
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
    updateManyAndReturn<T extends m_packsUpdateManyAndReturnArgs>(args: SelectSubset<T, m_packsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one M_packs.
     * @param {m_packsUpsertArgs} args - Arguments to update or create a M_packs.
     * @example
     * // Update or create a M_packs
     * const m_packs = await prisma.m_packs.upsert({
     *   create: {
     *     // ... data to create a M_packs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the M_packs we want to update
     *   }
     * })
     */
    upsert<T extends m_packsUpsertArgs>(args: SelectSubset<T, m_packsUpsertArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of M_packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsCountArgs} args - Arguments to filter M_packs to count.
     * @example
     * // Count the number of M_packs
     * const count = await prisma.m_packs.count({
     *   where: {
     *     // ... the filter for the M_packs we want to count
     *   }
     * })
    **/
    count<T extends m_packsCountArgs>(
      args?: Subset<T, m_packsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], M_packsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a M_packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {M_packsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends M_packsAggregateArgs>(args: Subset<T, M_packsAggregateArgs>): Prisma.PrismaPromise<GetM_packsAggregateType<T>>

    /**
     * Group by M_packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_packsGroupByArgs} args - Group by arguments.
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
      T extends m_packsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: m_packsGroupByArgs['orderBy'] }
        : { orderBy?: m_packsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, m_packsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetM_packsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the m_packs model
   */
  readonly fields: m_packsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for m_packs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__m_packsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_inventory_items<T extends m_packs$t_inventory_itemsArgs<ExtArgs> = {}>(args?: Subset<T, m_packs$t_inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    t_wishlist_items<T extends m_packs$t_wishlist_itemsArgs<ExtArgs> = {}>(args?: Subset<T, m_packs$t_wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the m_packs model
   */
  interface m_packsFieldRefs {
    readonly id: FieldRef<"m_packs", 'String'>
    readonly pack_id: FieldRef<"m_packs", 'String'>
    readonly pack_name: FieldRef<"m_packs", 'String'>
    readonly pack_image_url: FieldRef<"m_packs", 'String'>
    readonly memo: FieldRef<"m_packs", 'String'>
    readonly created_at: FieldRef<"m_packs", 'DateTime'>
    readonly updated_at: FieldRef<"m_packs", 'DateTime'>
    readonly pack_no: FieldRef<"m_packs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * m_packs findUnique
   */
  export type m_packsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter, which m_packs to fetch.
     */
    where: m_packsWhereUniqueInput
  }

  /**
   * m_packs findUniqueOrThrow
   */
  export type m_packsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter, which m_packs to fetch.
     */
    where: m_packsWhereUniqueInput
  }

  /**
   * m_packs findFirst
   */
  export type m_packsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter, which m_packs to fetch.
     */
    where?: m_packsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_packs to fetch.
     */
    orderBy?: m_packsOrderByWithRelationInput | m_packsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_packs.
     */
    cursor?: m_packsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_packs.
     */
    distinct?: M_packsScalarFieldEnum | M_packsScalarFieldEnum[]
  }

  /**
   * m_packs findFirstOrThrow
   */
  export type m_packsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter, which m_packs to fetch.
     */
    where?: m_packsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_packs to fetch.
     */
    orderBy?: m_packsOrderByWithRelationInput | m_packsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_packs.
     */
    cursor?: m_packsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_packs.
     */
    distinct?: M_packsScalarFieldEnum | M_packsScalarFieldEnum[]
  }

  /**
   * m_packs findMany
   */
  export type m_packsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter, which m_packs to fetch.
     */
    where?: m_packsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_packs to fetch.
     */
    orderBy?: m_packsOrderByWithRelationInput | m_packsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing m_packs.
     */
    cursor?: m_packsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_packs.
     */
    skip?: number
    distinct?: M_packsScalarFieldEnum | M_packsScalarFieldEnum[]
  }

  /**
   * m_packs create
   */
  export type m_packsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * The data needed to create a m_packs.
     */
    data: XOR<m_packsCreateInput, m_packsUncheckedCreateInput>
  }

  /**
   * m_packs createMany
   */
  export type m_packsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many m_packs.
     */
    data: m_packsCreateManyInput | m_packsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_packs createManyAndReturn
   */
  export type m_packsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * The data used to create many m_packs.
     */
    data: m_packsCreateManyInput | m_packsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_packs update
   */
  export type m_packsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * The data needed to update a m_packs.
     */
    data: XOR<m_packsUpdateInput, m_packsUncheckedUpdateInput>
    /**
     * Choose, which m_packs to update.
     */
    where: m_packsWhereUniqueInput
  }

  /**
   * m_packs updateMany
   */
  export type m_packsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update m_packs.
     */
    data: XOR<m_packsUpdateManyMutationInput, m_packsUncheckedUpdateManyInput>
    /**
     * Filter which m_packs to update
     */
    where?: m_packsWhereInput
    /**
     * Limit how many m_packs to update.
     */
    limit?: number
  }

  /**
   * m_packs updateManyAndReturn
   */
  export type m_packsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * The data used to update m_packs.
     */
    data: XOR<m_packsUpdateManyMutationInput, m_packsUncheckedUpdateManyInput>
    /**
     * Filter which m_packs to update
     */
    where?: m_packsWhereInput
    /**
     * Limit how many m_packs to update.
     */
    limit?: number
  }

  /**
   * m_packs upsert
   */
  export type m_packsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * The filter to search for the m_packs to update in case it exists.
     */
    where: m_packsWhereUniqueInput
    /**
     * In case the m_packs found by the `where` argument doesn't exist, create a new m_packs with this data.
     */
    create: XOR<m_packsCreateInput, m_packsUncheckedCreateInput>
    /**
     * In case the m_packs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<m_packsUpdateInput, m_packsUncheckedUpdateInput>
  }

  /**
   * m_packs delete
   */
  export type m_packsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
    /**
     * Filter which m_packs to delete.
     */
    where: m_packsWhereUniqueInput
  }

  /**
   * m_packs deleteMany
   */
  export type m_packsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_packs to delete
     */
    where?: m_packsWhereInput
    /**
     * Limit how many m_packs to delete.
     */
    limit?: number
  }

  /**
   * m_packs.t_inventory_items
   */
  export type m_packs$t_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    where?: t_inventory_itemsWhereInput
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    cursor?: t_inventory_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * m_packs.t_wishlist_items
   */
  export type m_packs$t_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    where?: t_wishlist_itemsWhereInput
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    cursor?: t_wishlist_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * m_packs without action
   */
  export type m_packsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_packs
     */
    select?: m_packsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_packs
     */
    omit?: m_packsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_packsInclude<ExtArgs> | null
  }


  /**
   * Model m_rarity
   */

  export type AggregateM_rarity = {
    _count: M_rarityCountAggregateOutputType | null
    _avg: M_rarityAvgAggregateOutputType | null
    _sum: M_raritySumAggregateOutputType | null
    _min: M_rarityMinAggregateOutputType | null
    _max: M_rarityMaxAggregateOutputType | null
  }

  export type M_rarityAvgAggregateOutputType = {
    cost: number | null
    cost_trade_power: number | null
  }

  export type M_raritySumAggregateOutputType = {
    cost: number | null
    cost_trade_power: number | null
  }

  export type M_rarityMinAggregateOutputType = {
    id: string | null
    rarity: string | null
    cost: number | null
    cost_trade_power: number | null
    created_at: Date | null
    updated_at: Date | null
    rarity_id: string | null
  }

  export type M_rarityMaxAggregateOutputType = {
    id: string | null
    rarity: string | null
    cost: number | null
    cost_trade_power: number | null
    created_at: Date | null
    updated_at: Date | null
    rarity_id: string | null
  }

  export type M_rarityCountAggregateOutputType = {
    id: number
    rarity: number
    cost: number
    cost_trade_power: number
    created_at: number
    updated_at: number
    rarity_id: number
    _all: number
  }


  export type M_rarityAvgAggregateInputType = {
    cost?: true
    cost_trade_power?: true
  }

  export type M_raritySumAggregateInputType = {
    cost?: true
    cost_trade_power?: true
  }

  export type M_rarityMinAggregateInputType = {
    id?: true
    rarity?: true
    cost?: true
    cost_trade_power?: true
    created_at?: true
    updated_at?: true
    rarity_id?: true
  }

  export type M_rarityMaxAggregateInputType = {
    id?: true
    rarity?: true
    cost?: true
    cost_trade_power?: true
    created_at?: true
    updated_at?: true
    rarity_id?: true
  }

  export type M_rarityCountAggregateInputType = {
    id?: true
    rarity?: true
    cost?: true
    cost_trade_power?: true
    created_at?: true
    updated_at?: true
    rarity_id?: true
    _all?: true
  }

  export type M_rarityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_rarity to aggregate.
     */
    where?: m_rarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_rarities to fetch.
     */
    orderBy?: m_rarityOrderByWithRelationInput | m_rarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: m_rarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_rarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_rarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned m_rarities
    **/
    _count?: true | M_rarityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: M_rarityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: M_raritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: M_rarityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: M_rarityMaxAggregateInputType
  }

  export type GetM_rarityAggregateType<T extends M_rarityAggregateArgs> = {
        [P in keyof T & keyof AggregateM_rarity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateM_rarity[P]>
      : GetScalarType<T[P], AggregateM_rarity[P]>
  }




  export type m_rarityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_rarityWhereInput
    orderBy?: m_rarityOrderByWithAggregationInput | m_rarityOrderByWithAggregationInput[]
    by: M_rarityScalarFieldEnum[] | M_rarityScalarFieldEnum
    having?: m_rarityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: M_rarityCountAggregateInputType | true
    _avg?: M_rarityAvgAggregateInputType
    _sum?: M_raritySumAggregateInputType
    _min?: M_rarityMinAggregateInputType
    _max?: M_rarityMaxAggregateInputType
  }

  export type M_rarityGroupByOutputType = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at: Date
    updated_at: Date
    rarity_id: string
    _count: M_rarityCountAggregateOutputType | null
    _avg: M_rarityAvgAggregateOutputType | null
    _sum: M_raritySumAggregateOutputType | null
    _min: M_rarityMinAggregateOutputType | null
    _max: M_rarityMaxAggregateOutputType | null
  }

  type GetM_rarityGroupByPayload<T extends m_rarityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<M_rarityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof M_rarityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], M_rarityGroupByOutputType[P]>
            : GetScalarType<T[P], M_rarityGroupByOutputType[P]>
        }
      >
    >


  export type m_raritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rarity?: boolean
    cost?: boolean
    cost_trade_power?: boolean
    created_at?: boolean
    updated_at?: boolean
    rarity_id?: boolean
    t_inventory_items?: boolean | m_rarity$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | m_rarity$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | M_rarityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["m_rarity"]>

  export type m_raritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rarity?: boolean
    cost?: boolean
    cost_trade_power?: boolean
    created_at?: boolean
    updated_at?: boolean
    rarity_id?: boolean
  }, ExtArgs["result"]["m_rarity"]>

  export type m_raritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rarity?: boolean
    cost?: boolean
    cost_trade_power?: boolean
    created_at?: boolean
    updated_at?: boolean
    rarity_id?: boolean
  }, ExtArgs["result"]["m_rarity"]>

  export type m_raritySelectScalar = {
    id?: boolean
    rarity?: boolean
    cost?: boolean
    cost_trade_power?: boolean
    created_at?: boolean
    updated_at?: boolean
    rarity_id?: boolean
  }

  export type m_rarityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rarity" | "cost" | "cost_trade_power" | "created_at" | "updated_at" | "rarity_id", ExtArgs["result"]["m_rarity"]>
  export type m_rarityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | m_rarity$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | m_rarity$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | M_rarityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type m_rarityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type m_rarityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $m_rarityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "m_rarity"
    objects: {
      t_inventory_items: Prisma.$t_inventory_itemsPayload<ExtArgs>[]
      t_wishlist_items: Prisma.$t_wishlist_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rarity: string
      cost: number
      cost_trade_power: number
      created_at: Date
      updated_at: Date
      rarity_id: string
    }, ExtArgs["result"]["m_rarity"]>
    composites: {}
  }

  type m_rarityGetPayload<S extends boolean | null | undefined | m_rarityDefaultArgs> = $Result.GetResult<Prisma.$m_rarityPayload, S>

  type m_rarityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<m_rarityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: M_rarityCountAggregateInputType | true
    }

  export interface m_rarityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['m_rarity'], meta: { name: 'm_rarity' } }
    /**
     * Find zero or one M_rarity that matches the filter.
     * @param {m_rarityFindUniqueArgs} args - Arguments to find a M_rarity
     * @example
     * // Get one M_rarity
     * const m_rarity = await prisma.m_rarity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends m_rarityFindUniqueArgs>(args: SelectSubset<T, m_rarityFindUniqueArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one M_rarity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {m_rarityFindUniqueOrThrowArgs} args - Arguments to find a M_rarity
     * @example
     * // Get one M_rarity
     * const m_rarity = await prisma.m_rarity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends m_rarityFindUniqueOrThrowArgs>(args: SelectSubset<T, m_rarityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_rarity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityFindFirstArgs} args - Arguments to find a M_rarity
     * @example
     * // Get one M_rarity
     * const m_rarity = await prisma.m_rarity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends m_rarityFindFirstArgs>(args?: SelectSubset<T, m_rarityFindFirstArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_rarity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityFindFirstOrThrowArgs} args - Arguments to find a M_rarity
     * @example
     * // Get one M_rarity
     * const m_rarity = await prisma.m_rarity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends m_rarityFindFirstOrThrowArgs>(args?: SelectSubset<T, m_rarityFindFirstOrThrowArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more M_rarities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all M_rarities
     * const m_rarities = await prisma.m_rarity.findMany()
     * 
     * // Get first 10 M_rarities
     * const m_rarities = await prisma.m_rarity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const m_rarityWithIdOnly = await prisma.m_rarity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends m_rarityFindManyArgs>(args?: SelectSubset<T, m_rarityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a M_rarity.
     * @param {m_rarityCreateArgs} args - Arguments to create a M_rarity.
     * @example
     * // Create one M_rarity
     * const M_rarity = await prisma.m_rarity.create({
     *   data: {
     *     // ... data to create a M_rarity
     *   }
     * })
     * 
     */
    create<T extends m_rarityCreateArgs>(args: SelectSubset<T, m_rarityCreateArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many M_rarities.
     * @param {m_rarityCreateManyArgs} args - Arguments to create many M_rarities.
     * @example
     * // Create many M_rarities
     * const m_rarity = await prisma.m_rarity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends m_rarityCreateManyArgs>(args?: SelectSubset<T, m_rarityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many M_rarities and returns the data saved in the database.
     * @param {m_rarityCreateManyAndReturnArgs} args - Arguments to create many M_rarities.
     * @example
     * // Create many M_rarities
     * const m_rarity = await prisma.m_rarity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many M_rarities and only return the `id`
     * const m_rarityWithIdOnly = await prisma.m_rarity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends m_rarityCreateManyAndReturnArgs>(args?: SelectSubset<T, m_rarityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a M_rarity.
     * @param {m_rarityDeleteArgs} args - Arguments to delete one M_rarity.
     * @example
     * // Delete one M_rarity
     * const M_rarity = await prisma.m_rarity.delete({
     *   where: {
     *     // ... filter to delete one M_rarity
     *   }
     * })
     * 
     */
    delete<T extends m_rarityDeleteArgs>(args: SelectSubset<T, m_rarityDeleteArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one M_rarity.
     * @param {m_rarityUpdateArgs} args - Arguments to update one M_rarity.
     * @example
     * // Update one M_rarity
     * const m_rarity = await prisma.m_rarity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends m_rarityUpdateArgs>(args: SelectSubset<T, m_rarityUpdateArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more M_rarities.
     * @param {m_rarityDeleteManyArgs} args - Arguments to filter M_rarities to delete.
     * @example
     * // Delete a few M_rarities
     * const { count } = await prisma.m_rarity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends m_rarityDeleteManyArgs>(args?: SelectSubset<T, m_rarityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_rarities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many M_rarities
     * const m_rarity = await prisma.m_rarity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends m_rarityUpdateManyArgs>(args: SelectSubset<T, m_rarityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_rarities and returns the data updated in the database.
     * @param {m_rarityUpdateManyAndReturnArgs} args - Arguments to update many M_rarities.
     * @example
     * // Update many M_rarities
     * const m_rarity = await prisma.m_rarity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more M_rarities and only return the `id`
     * const m_rarityWithIdOnly = await prisma.m_rarity.updateManyAndReturn({
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
    updateManyAndReturn<T extends m_rarityUpdateManyAndReturnArgs>(args: SelectSubset<T, m_rarityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one M_rarity.
     * @param {m_rarityUpsertArgs} args - Arguments to update or create a M_rarity.
     * @example
     * // Update or create a M_rarity
     * const m_rarity = await prisma.m_rarity.upsert({
     *   create: {
     *     // ... data to create a M_rarity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the M_rarity we want to update
     *   }
     * })
     */
    upsert<T extends m_rarityUpsertArgs>(args: SelectSubset<T, m_rarityUpsertArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of M_rarities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityCountArgs} args - Arguments to filter M_rarities to count.
     * @example
     * // Count the number of M_rarities
     * const count = await prisma.m_rarity.count({
     *   where: {
     *     // ... the filter for the M_rarities we want to count
     *   }
     * })
    **/
    count<T extends m_rarityCountArgs>(
      args?: Subset<T, m_rarityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], M_rarityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a M_rarity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {M_rarityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends M_rarityAggregateArgs>(args: Subset<T, M_rarityAggregateArgs>): Prisma.PrismaPromise<GetM_rarityAggregateType<T>>

    /**
     * Group by M_rarity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_rarityGroupByArgs} args - Group by arguments.
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
      T extends m_rarityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: m_rarityGroupByArgs['orderBy'] }
        : { orderBy?: m_rarityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, m_rarityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetM_rarityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the m_rarity model
   */
  readonly fields: m_rarityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for m_rarity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__m_rarityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_inventory_items<T extends m_rarity$t_inventory_itemsArgs<ExtArgs> = {}>(args?: Subset<T, m_rarity$t_inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    t_wishlist_items<T extends m_rarity$t_wishlist_itemsArgs<ExtArgs> = {}>(args?: Subset<T, m_rarity$t_wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the m_rarity model
   */
  interface m_rarityFieldRefs {
    readonly id: FieldRef<"m_rarity", 'String'>
    readonly rarity: FieldRef<"m_rarity", 'String'>
    readonly cost: FieldRef<"m_rarity", 'Int'>
    readonly cost_trade_power: FieldRef<"m_rarity", 'Int'>
    readonly created_at: FieldRef<"m_rarity", 'DateTime'>
    readonly updated_at: FieldRef<"m_rarity", 'DateTime'>
    readonly rarity_id: FieldRef<"m_rarity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * m_rarity findUnique
   */
  export type m_rarityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter, which m_rarity to fetch.
     */
    where: m_rarityWhereUniqueInput
  }

  /**
   * m_rarity findUniqueOrThrow
   */
  export type m_rarityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter, which m_rarity to fetch.
     */
    where: m_rarityWhereUniqueInput
  }

  /**
   * m_rarity findFirst
   */
  export type m_rarityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter, which m_rarity to fetch.
     */
    where?: m_rarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_rarities to fetch.
     */
    orderBy?: m_rarityOrderByWithRelationInput | m_rarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_rarities.
     */
    cursor?: m_rarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_rarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_rarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_rarities.
     */
    distinct?: M_rarityScalarFieldEnum | M_rarityScalarFieldEnum[]
  }

  /**
   * m_rarity findFirstOrThrow
   */
  export type m_rarityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter, which m_rarity to fetch.
     */
    where?: m_rarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_rarities to fetch.
     */
    orderBy?: m_rarityOrderByWithRelationInput | m_rarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_rarities.
     */
    cursor?: m_rarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_rarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_rarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_rarities.
     */
    distinct?: M_rarityScalarFieldEnum | M_rarityScalarFieldEnum[]
  }

  /**
   * m_rarity findMany
   */
  export type m_rarityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter, which m_rarities to fetch.
     */
    where?: m_rarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_rarities to fetch.
     */
    orderBy?: m_rarityOrderByWithRelationInput | m_rarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing m_rarities.
     */
    cursor?: m_rarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_rarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_rarities.
     */
    skip?: number
    distinct?: M_rarityScalarFieldEnum | M_rarityScalarFieldEnum[]
  }

  /**
   * m_rarity create
   */
  export type m_rarityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * The data needed to create a m_rarity.
     */
    data: XOR<m_rarityCreateInput, m_rarityUncheckedCreateInput>
  }

  /**
   * m_rarity createMany
   */
  export type m_rarityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many m_rarities.
     */
    data: m_rarityCreateManyInput | m_rarityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_rarity createManyAndReturn
   */
  export type m_rarityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * The data used to create many m_rarities.
     */
    data: m_rarityCreateManyInput | m_rarityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_rarity update
   */
  export type m_rarityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * The data needed to update a m_rarity.
     */
    data: XOR<m_rarityUpdateInput, m_rarityUncheckedUpdateInput>
    /**
     * Choose, which m_rarity to update.
     */
    where: m_rarityWhereUniqueInput
  }

  /**
   * m_rarity updateMany
   */
  export type m_rarityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update m_rarities.
     */
    data: XOR<m_rarityUpdateManyMutationInput, m_rarityUncheckedUpdateManyInput>
    /**
     * Filter which m_rarities to update
     */
    where?: m_rarityWhereInput
    /**
     * Limit how many m_rarities to update.
     */
    limit?: number
  }

  /**
   * m_rarity updateManyAndReturn
   */
  export type m_rarityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * The data used to update m_rarities.
     */
    data: XOR<m_rarityUpdateManyMutationInput, m_rarityUncheckedUpdateManyInput>
    /**
     * Filter which m_rarities to update
     */
    where?: m_rarityWhereInput
    /**
     * Limit how many m_rarities to update.
     */
    limit?: number
  }

  /**
   * m_rarity upsert
   */
  export type m_rarityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * The filter to search for the m_rarity to update in case it exists.
     */
    where: m_rarityWhereUniqueInput
    /**
     * In case the m_rarity found by the `where` argument doesn't exist, create a new m_rarity with this data.
     */
    create: XOR<m_rarityCreateInput, m_rarityUncheckedCreateInput>
    /**
     * In case the m_rarity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<m_rarityUpdateInput, m_rarityUncheckedUpdateInput>
  }

  /**
   * m_rarity delete
   */
  export type m_rarityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
    /**
     * Filter which m_rarity to delete.
     */
    where: m_rarityWhereUniqueInput
  }

  /**
   * m_rarity deleteMany
   */
  export type m_rarityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_rarities to delete
     */
    where?: m_rarityWhereInput
    /**
     * Limit how many m_rarities to delete.
     */
    limit?: number
  }

  /**
   * m_rarity.t_inventory_items
   */
  export type m_rarity$t_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    where?: t_inventory_itemsWhereInput
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    cursor?: t_inventory_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * m_rarity.t_wishlist_items
   */
  export type m_rarity$t_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    where?: t_wishlist_itemsWhereInput
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    cursor?: t_wishlist_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * m_rarity without action
   */
  export type m_rarityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_rarity
     */
    select?: m_raritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_rarity
     */
    omit?: m_rarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_rarityInclude<ExtArgs> | null
  }


  /**
   * Model t_inventory_items
   */

  export type AggregateT_inventory_items = {
    _count: T_inventory_itemsCountAggregateOutputType | null
    _avg: T_inventory_itemsAvgAggregateOutputType | null
    _sum: T_inventory_itemsSumAggregateOutputType | null
    _min: T_inventory_itemsMinAggregateOutputType | null
    _max: T_inventory_itemsMaxAggregateOutputType | null
  }

  export type T_inventory_itemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type T_inventory_itemsSumAggregateOutputType = {
    id: bigint | null
    quantity: number | null
  }

  export type T_inventory_itemsMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    pack_id: string | null
    card_no: string | null
    quantity: number | null
    card_name: string | null
    rarity_id: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_inventory_itemsMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    pack_id: string | null
    card_no: string | null
    quantity: number | null
    card_name: string | null
    rarity_id: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_inventory_itemsCountAggregateOutputType = {
    id: number
    user_id: number
    pack_id: number
    card_no: number
    quantity: number
    card_name: number
    rarity_id: number
    image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type T_inventory_itemsAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type T_inventory_itemsSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type T_inventory_itemsMinAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    quantity?: true
    card_name?: true
    rarity_id?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type T_inventory_itemsMaxAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    quantity?: true
    card_name?: true
    rarity_id?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type T_inventory_itemsCountAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    quantity?: true
    card_name?: true
    rarity_id?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type T_inventory_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_inventory_items to aggregate.
     */
    where?: t_inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_inventory_items to fetch.
     */
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_inventory_items
    **/
    _count?: true | T_inventory_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_inventory_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_inventory_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_inventory_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_inventory_itemsMaxAggregateInputType
  }

  export type GetT_inventory_itemsAggregateType<T extends T_inventory_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_inventory_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_inventory_items[P]>
      : GetScalarType<T[P], AggregateT_inventory_items[P]>
  }




  export type t_inventory_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_inventory_itemsWhereInput
    orderBy?: t_inventory_itemsOrderByWithAggregationInput | t_inventory_itemsOrderByWithAggregationInput[]
    by: T_inventory_itemsScalarFieldEnum[] | T_inventory_itemsScalarFieldEnum
    having?: t_inventory_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_inventory_itemsCountAggregateInputType | true
    _avg?: T_inventory_itemsAvgAggregateInputType
    _sum?: T_inventory_itemsSumAggregateInputType
    _min?: T_inventory_itemsMinAggregateInputType
    _max?: T_inventory_itemsMaxAggregateInputType
  }

  export type T_inventory_itemsGroupByOutputType = {
    id: bigint
    user_id: string
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url: string | null
    created_at: Date
    updated_at: Date
    _count: T_inventory_itemsCountAggregateOutputType | null
    _avg: T_inventory_itemsAvgAggregateOutputType | null
    _sum: T_inventory_itemsSumAggregateOutputType | null
    _min: T_inventory_itemsMinAggregateOutputType | null
    _max: T_inventory_itemsMaxAggregateOutputType | null
  }

  type GetT_inventory_itemsGroupByPayload<T extends t_inventory_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_inventory_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_inventory_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_inventory_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], T_inventory_itemsGroupByOutputType[P]>
        }
      >
    >


  export type t_inventory_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    quantity?: boolean
    card_name?: boolean
    rarity_id?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_inventory_items"]>

  export type t_inventory_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    quantity?: boolean
    card_name?: boolean
    rarity_id?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_inventory_items"]>

  export type t_inventory_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    quantity?: boolean
    card_name?: boolean
    rarity_id?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_inventory_items"]>

  export type t_inventory_itemsSelectScalar = {
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    quantity?: boolean
    card_name?: boolean
    rarity_id?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type t_inventory_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "pack_id" | "card_no" | "quantity" | "card_name" | "rarity_id" | "image_url" | "created_at" | "updated_at", ExtArgs["result"]["t_inventory_items"]>
  export type t_inventory_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }
  export type t_inventory_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }
  export type t_inventory_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }

  export type $t_inventory_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_inventory_items"
    objects: {
      m_packs: Prisma.$m_packsPayload<ExtArgs>
      m_rarity: Prisma.$m_rarityPayload<ExtArgs>
      t_users: Prisma.$t_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      pack_id: string
      card_no: string
      quantity: number
      card_name: string
      rarity_id: string
      image_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["t_inventory_items"]>
    composites: {}
  }

  type t_inventory_itemsGetPayload<S extends boolean | null | undefined | t_inventory_itemsDefaultArgs> = $Result.GetResult<Prisma.$t_inventory_itemsPayload, S>

  type t_inventory_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_inventory_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_inventory_itemsCountAggregateInputType | true
    }

  export interface t_inventory_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_inventory_items'], meta: { name: 't_inventory_items' } }
    /**
     * Find zero or one T_inventory_items that matches the filter.
     * @param {t_inventory_itemsFindUniqueArgs} args - Arguments to find a T_inventory_items
     * @example
     * // Get one T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_inventory_itemsFindUniqueArgs>(args: SelectSubset<T, t_inventory_itemsFindUniqueArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_inventory_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_inventory_itemsFindUniqueOrThrowArgs} args - Arguments to find a T_inventory_items
     * @example
     * // Get one T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_inventory_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, t_inventory_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsFindFirstArgs} args - Arguments to find a T_inventory_items
     * @example
     * // Get one T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_inventory_itemsFindFirstArgs>(args?: SelectSubset<T, t_inventory_itemsFindFirstArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_inventory_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsFindFirstOrThrowArgs} args - Arguments to find a T_inventory_items
     * @example
     * // Get one T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_inventory_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, t_inventory_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findMany()
     * 
     * // Get first 10 T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_inventory_itemsWithIdOnly = await prisma.t_inventory_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_inventory_itemsFindManyArgs>(args?: SelectSubset<T, t_inventory_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_inventory_items.
     * @param {t_inventory_itemsCreateArgs} args - Arguments to create a T_inventory_items.
     * @example
     * // Create one T_inventory_items
     * const T_inventory_items = await prisma.t_inventory_items.create({
     *   data: {
     *     // ... data to create a T_inventory_items
     *   }
     * })
     * 
     */
    create<T extends t_inventory_itemsCreateArgs>(args: SelectSubset<T, t_inventory_itemsCreateArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_inventory_items.
     * @param {t_inventory_itemsCreateManyArgs} args - Arguments to create many T_inventory_items.
     * @example
     * // Create many T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_inventory_itemsCreateManyArgs>(args?: SelectSubset<T, t_inventory_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_inventory_items and returns the data saved in the database.
     * @param {t_inventory_itemsCreateManyAndReturnArgs} args - Arguments to create many T_inventory_items.
     * @example
     * // Create many T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_inventory_items and only return the `id`
     * const t_inventory_itemsWithIdOnly = await prisma.t_inventory_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends t_inventory_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, t_inventory_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_inventory_items.
     * @param {t_inventory_itemsDeleteArgs} args - Arguments to delete one T_inventory_items.
     * @example
     * // Delete one T_inventory_items
     * const T_inventory_items = await prisma.t_inventory_items.delete({
     *   where: {
     *     // ... filter to delete one T_inventory_items
     *   }
     * })
     * 
     */
    delete<T extends t_inventory_itemsDeleteArgs>(args: SelectSubset<T, t_inventory_itemsDeleteArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_inventory_items.
     * @param {t_inventory_itemsUpdateArgs} args - Arguments to update one T_inventory_items.
     * @example
     * // Update one T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_inventory_itemsUpdateArgs>(args: SelectSubset<T, t_inventory_itemsUpdateArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_inventory_items.
     * @param {t_inventory_itemsDeleteManyArgs} args - Arguments to filter T_inventory_items to delete.
     * @example
     * // Delete a few T_inventory_items
     * const { count } = await prisma.t_inventory_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_inventory_itemsDeleteManyArgs>(args?: SelectSubset<T, t_inventory_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_inventory_itemsUpdateManyArgs>(args: SelectSubset<T, t_inventory_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_inventory_items and returns the data updated in the database.
     * @param {t_inventory_itemsUpdateManyAndReturnArgs} args - Arguments to update many T_inventory_items.
     * @example
     * // Update many T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_inventory_items and only return the `id`
     * const t_inventory_itemsWithIdOnly = await prisma.t_inventory_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends t_inventory_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, t_inventory_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_inventory_items.
     * @param {t_inventory_itemsUpsertArgs} args - Arguments to update or create a T_inventory_items.
     * @example
     * // Update or create a T_inventory_items
     * const t_inventory_items = await prisma.t_inventory_items.upsert({
     *   create: {
     *     // ... data to create a T_inventory_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_inventory_items we want to update
     *   }
     * })
     */
    upsert<T extends t_inventory_itemsUpsertArgs>(args: SelectSubset<T, t_inventory_itemsUpsertArgs<ExtArgs>>): Prisma__t_inventory_itemsClient<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsCountArgs} args - Arguments to filter T_inventory_items to count.
     * @example
     * // Count the number of T_inventory_items
     * const count = await prisma.t_inventory_items.count({
     *   where: {
     *     // ... the filter for the T_inventory_items we want to count
     *   }
     * })
    **/
    count<T extends t_inventory_itemsCountArgs>(
      args?: Subset<T, t_inventory_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_inventory_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_inventory_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_inventory_itemsAggregateArgs>(args: Subset<T, T_inventory_itemsAggregateArgs>): Prisma.PrismaPromise<GetT_inventory_itemsAggregateType<T>>

    /**
     * Group by T_inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_inventory_itemsGroupByArgs} args - Group by arguments.
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
      T extends t_inventory_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_inventory_itemsGroupByArgs['orderBy'] }
        : { orderBy?: t_inventory_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_inventory_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_inventory_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_inventory_items model
   */
  readonly fields: t_inventory_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_inventory_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_inventory_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    m_packs<T extends m_packsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, m_packsDefaultArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    m_rarity<T extends m_rarityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, m_rarityDefaultArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    t_users<T extends t_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, t_usersDefaultArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the t_inventory_items model
   */
  interface t_inventory_itemsFieldRefs {
    readonly id: FieldRef<"t_inventory_items", 'BigInt'>
    readonly user_id: FieldRef<"t_inventory_items", 'String'>
    readonly pack_id: FieldRef<"t_inventory_items", 'String'>
    readonly card_no: FieldRef<"t_inventory_items", 'String'>
    readonly quantity: FieldRef<"t_inventory_items", 'Int'>
    readonly card_name: FieldRef<"t_inventory_items", 'String'>
    readonly rarity_id: FieldRef<"t_inventory_items", 'String'>
    readonly image_url: FieldRef<"t_inventory_items", 'String'>
    readonly created_at: FieldRef<"t_inventory_items", 'DateTime'>
    readonly updated_at: FieldRef<"t_inventory_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_inventory_items findUnique
   */
  export type t_inventory_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_inventory_items to fetch.
     */
    where: t_inventory_itemsWhereUniqueInput
  }

  /**
   * t_inventory_items findUniqueOrThrow
   */
  export type t_inventory_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_inventory_items to fetch.
     */
    where: t_inventory_itemsWhereUniqueInput
  }

  /**
   * t_inventory_items findFirst
   */
  export type t_inventory_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_inventory_items to fetch.
     */
    where?: t_inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_inventory_items to fetch.
     */
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_inventory_items.
     */
    cursor?: t_inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_inventory_items.
     */
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * t_inventory_items findFirstOrThrow
   */
  export type t_inventory_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_inventory_items to fetch.
     */
    where?: t_inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_inventory_items to fetch.
     */
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_inventory_items.
     */
    cursor?: t_inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_inventory_items.
     */
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * t_inventory_items findMany
   */
  export type t_inventory_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_inventory_items to fetch.
     */
    where?: t_inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_inventory_items to fetch.
     */
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_inventory_items.
     */
    cursor?: t_inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_inventory_items.
     */
    skip?: number
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * t_inventory_items create
   */
  export type t_inventory_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a t_inventory_items.
     */
    data: XOR<t_inventory_itemsCreateInput, t_inventory_itemsUncheckedCreateInput>
  }

  /**
   * t_inventory_items createMany
   */
  export type t_inventory_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_inventory_items.
     */
    data: t_inventory_itemsCreateManyInput | t_inventory_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_inventory_items createManyAndReturn
   */
  export type t_inventory_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many t_inventory_items.
     */
    data: t_inventory_itemsCreateManyInput | t_inventory_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_inventory_items update
   */
  export type t_inventory_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a t_inventory_items.
     */
    data: XOR<t_inventory_itemsUpdateInput, t_inventory_itemsUncheckedUpdateInput>
    /**
     * Choose, which t_inventory_items to update.
     */
    where: t_inventory_itemsWhereUniqueInput
  }

  /**
   * t_inventory_items updateMany
   */
  export type t_inventory_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_inventory_items.
     */
    data: XOR<t_inventory_itemsUpdateManyMutationInput, t_inventory_itemsUncheckedUpdateManyInput>
    /**
     * Filter which t_inventory_items to update
     */
    where?: t_inventory_itemsWhereInput
    /**
     * Limit how many t_inventory_items to update.
     */
    limit?: number
  }

  /**
   * t_inventory_items updateManyAndReturn
   */
  export type t_inventory_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * The data used to update t_inventory_items.
     */
    data: XOR<t_inventory_itemsUpdateManyMutationInput, t_inventory_itemsUncheckedUpdateManyInput>
    /**
     * Filter which t_inventory_items to update
     */
    where?: t_inventory_itemsWhereInput
    /**
     * Limit how many t_inventory_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_inventory_items upsert
   */
  export type t_inventory_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the t_inventory_items to update in case it exists.
     */
    where: t_inventory_itemsWhereUniqueInput
    /**
     * In case the t_inventory_items found by the `where` argument doesn't exist, create a new t_inventory_items with this data.
     */
    create: XOR<t_inventory_itemsCreateInput, t_inventory_itemsUncheckedCreateInput>
    /**
     * In case the t_inventory_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_inventory_itemsUpdateInput, t_inventory_itemsUncheckedUpdateInput>
  }

  /**
   * t_inventory_items delete
   */
  export type t_inventory_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    /**
     * Filter which t_inventory_items to delete.
     */
    where: t_inventory_itemsWhereUniqueInput
  }

  /**
   * t_inventory_items deleteMany
   */
  export type t_inventory_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_inventory_items to delete
     */
    where?: t_inventory_itemsWhereInput
    /**
     * Limit how many t_inventory_items to delete.
     */
    limit?: number
  }

  /**
   * t_inventory_items without action
   */
  export type t_inventory_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
  }


  /**
   * Model t_users
   */

  export type AggregateT_users = {
    _count: T_usersCountAggregateOutputType | null
    _min: T_usersMinAggregateOutputType | null
    _max: T_usersMaxAggregateOutputType | null
  }

  export type T_usersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    poke_poke_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_usersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    avatar_url: string | null
    poke_poke_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_usersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    avatar_url: number
    poke_poke_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type T_usersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    poke_poke_id?: true
    created_at?: true
    updated_at?: true
  }

  export type T_usersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    poke_poke_id?: true
    created_at?: true
    updated_at?: true
  }

  export type T_usersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    avatar_url?: true
    poke_poke_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type T_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_users to aggregate.
     */
    where?: t_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_users to fetch.
     */
    orderBy?: t_usersOrderByWithRelationInput | t_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_users
    **/
    _count?: true | T_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_usersMaxAggregateInputType
  }

  export type GetT_usersAggregateType<T extends T_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateT_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_users[P]>
      : GetScalarType<T[P], AggregateT_users[P]>
  }




  export type t_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_usersWhereInput
    orderBy?: t_usersOrderByWithAggregationInput | t_usersOrderByWithAggregationInput[]
    by: T_usersScalarFieldEnum[] | T_usersScalarFieldEnum
    having?: t_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_usersCountAggregateInputType | true
    _min?: T_usersMinAggregateInputType
    _max?: T_usersMaxAggregateInputType
  }

  export type T_usersGroupByOutputType = {
    id: string
    username: string
    email: string | null
    password_hash: string
    avatar_url: string | null
    poke_poke_id: string | null
    created_at: Date
    updated_at: Date
    _count: T_usersCountAggregateOutputType | null
    _min: T_usersMinAggregateOutputType | null
    _max: T_usersMaxAggregateOutputType | null
  }

  type GetT_usersGroupByPayload<T extends t_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_usersGroupByOutputType[P]>
            : GetScalarType<T[P], T_usersGroupByOutputType[P]>
        }
      >
    >


  export type t_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    poke_poke_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    t_inventory_items?: boolean | t_users$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | t_users$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | T_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_users"]>

  export type t_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    poke_poke_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["t_users"]>

  export type t_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    poke_poke_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["t_users"]>

  export type t_usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    avatar_url?: boolean
    poke_poke_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type t_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "avatar_url" | "poke_poke_id" | "created_at" | "updated_at", ExtArgs["result"]["t_users"]>
  export type t_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_inventory_items?: boolean | t_users$t_inventory_itemsArgs<ExtArgs>
    t_wishlist_items?: boolean | t_users$t_wishlist_itemsArgs<ExtArgs>
    _count?: boolean | T_usersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type t_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type t_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $t_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_users"
    objects: {
      t_inventory_items: Prisma.$t_inventory_itemsPayload<ExtArgs>[]
      t_wishlist_items: Prisma.$t_wishlist_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      password_hash: string
      avatar_url: string | null
      poke_poke_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["t_users"]>
    composites: {}
  }

  type t_usersGetPayload<S extends boolean | null | undefined | t_usersDefaultArgs> = $Result.GetResult<Prisma.$t_usersPayload, S>

  type t_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_usersCountAggregateInputType | true
    }

  export interface t_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_users'], meta: { name: 't_users' } }
    /**
     * Find zero or one T_users that matches the filter.
     * @param {t_usersFindUniqueArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_usersFindUniqueArgs>(args: SelectSubset<T, t_usersFindUniqueArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_usersFindUniqueOrThrowArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, t_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersFindFirstArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_usersFindFirstArgs>(args?: SelectSubset<T, t_usersFindFirstArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersFindFirstOrThrowArgs} args - Arguments to find a T_users
     * @example
     * // Get one T_users
     * const t_users = await prisma.t_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, t_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_users
     * const t_users = await prisma.t_users.findMany()
     * 
     * // Get first 10 T_users
     * const t_users = await prisma.t_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_usersWithIdOnly = await prisma.t_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_usersFindManyArgs>(args?: SelectSubset<T, t_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_users.
     * @param {t_usersCreateArgs} args - Arguments to create a T_users.
     * @example
     * // Create one T_users
     * const T_users = await prisma.t_users.create({
     *   data: {
     *     // ... data to create a T_users
     *   }
     * })
     * 
     */
    create<T extends t_usersCreateArgs>(args: SelectSubset<T, t_usersCreateArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_users.
     * @param {t_usersCreateManyArgs} args - Arguments to create many T_users.
     * @example
     * // Create many T_users
     * const t_users = await prisma.t_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_usersCreateManyArgs>(args?: SelectSubset<T, t_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_users and returns the data saved in the database.
     * @param {t_usersCreateManyAndReturnArgs} args - Arguments to create many T_users.
     * @example
     * // Create many T_users
     * const t_users = await prisma.t_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_users and only return the `id`
     * const t_usersWithIdOnly = await prisma.t_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends t_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, t_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_users.
     * @param {t_usersDeleteArgs} args - Arguments to delete one T_users.
     * @example
     * // Delete one T_users
     * const T_users = await prisma.t_users.delete({
     *   where: {
     *     // ... filter to delete one T_users
     *   }
     * })
     * 
     */
    delete<T extends t_usersDeleteArgs>(args: SelectSubset<T, t_usersDeleteArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_users.
     * @param {t_usersUpdateArgs} args - Arguments to update one T_users.
     * @example
     * // Update one T_users
     * const t_users = await prisma.t_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_usersUpdateArgs>(args: SelectSubset<T, t_usersUpdateArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_users.
     * @param {t_usersDeleteManyArgs} args - Arguments to filter T_users to delete.
     * @example
     * // Delete a few T_users
     * const { count } = await prisma.t_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_usersDeleteManyArgs>(args?: SelectSubset<T, t_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_users
     * const t_users = await prisma.t_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_usersUpdateManyArgs>(args: SelectSubset<T, t_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_users and returns the data updated in the database.
     * @param {t_usersUpdateManyAndReturnArgs} args - Arguments to update many T_users.
     * @example
     * // Update many T_users
     * const t_users = await prisma.t_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_users and only return the `id`
     * const t_usersWithIdOnly = await prisma.t_users.updateManyAndReturn({
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
    updateManyAndReturn<T extends t_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, t_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_users.
     * @param {t_usersUpsertArgs} args - Arguments to update or create a T_users.
     * @example
     * // Update or create a T_users
     * const t_users = await prisma.t_users.upsert({
     *   create: {
     *     // ... data to create a T_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_users we want to update
     *   }
     * })
     */
    upsert<T extends t_usersUpsertArgs>(args: SelectSubset<T, t_usersUpsertArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersCountArgs} args - Arguments to filter T_users to count.
     * @example
     * // Count the number of T_users
     * const count = await prisma.t_users.count({
     *   where: {
     *     // ... the filter for the T_users we want to count
     *   }
     * })
    **/
    count<T extends t_usersCountArgs>(
      args?: Subset<T, t_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_usersAggregateArgs>(args: Subset<T, T_usersAggregateArgs>): Prisma.PrismaPromise<GetT_usersAggregateType<T>>

    /**
     * Group by T_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usersGroupByArgs} args - Group by arguments.
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
      T extends t_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_usersGroupByArgs['orderBy'] }
        : { orderBy?: t_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_users model
   */
  readonly fields: t_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_inventory_items<T extends t_users$t_inventory_itemsArgs<ExtArgs> = {}>(args?: Subset<T, t_users$t_inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    t_wishlist_items<T extends t_users$t_wishlist_itemsArgs<ExtArgs> = {}>(args?: Subset<T, t_users$t_wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the t_users model
   */
  interface t_usersFieldRefs {
    readonly id: FieldRef<"t_users", 'String'>
    readonly username: FieldRef<"t_users", 'String'>
    readonly email: FieldRef<"t_users", 'String'>
    readonly password_hash: FieldRef<"t_users", 'String'>
    readonly avatar_url: FieldRef<"t_users", 'String'>
    readonly poke_poke_id: FieldRef<"t_users", 'String'>
    readonly created_at: FieldRef<"t_users", 'DateTime'>
    readonly updated_at: FieldRef<"t_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_users findUnique
   */
  export type t_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter, which t_users to fetch.
     */
    where: t_usersWhereUniqueInput
  }

  /**
   * t_users findUniqueOrThrow
   */
  export type t_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter, which t_users to fetch.
     */
    where: t_usersWhereUniqueInput
  }

  /**
   * t_users findFirst
   */
  export type t_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter, which t_users to fetch.
     */
    where?: t_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_users to fetch.
     */
    orderBy?: t_usersOrderByWithRelationInput | t_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_users.
     */
    cursor?: t_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_users.
     */
    distinct?: T_usersScalarFieldEnum | T_usersScalarFieldEnum[]
  }

  /**
   * t_users findFirstOrThrow
   */
  export type t_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter, which t_users to fetch.
     */
    where?: t_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_users to fetch.
     */
    orderBy?: t_usersOrderByWithRelationInput | t_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_users.
     */
    cursor?: t_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_users.
     */
    distinct?: T_usersScalarFieldEnum | T_usersScalarFieldEnum[]
  }

  /**
   * t_users findMany
   */
  export type t_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter, which t_users to fetch.
     */
    where?: t_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_users to fetch.
     */
    orderBy?: t_usersOrderByWithRelationInput | t_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_users.
     */
    cursor?: t_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_users.
     */
    skip?: number
    distinct?: T_usersScalarFieldEnum | T_usersScalarFieldEnum[]
  }

  /**
   * t_users create
   */
  export type t_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a t_users.
     */
    data: XOR<t_usersCreateInput, t_usersUncheckedCreateInput>
  }

  /**
   * t_users createMany
   */
  export type t_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_users.
     */
    data: t_usersCreateManyInput | t_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_users createManyAndReturn
   */
  export type t_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * The data used to create many t_users.
     */
    data: t_usersCreateManyInput | t_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_users update
   */
  export type t_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a t_users.
     */
    data: XOR<t_usersUpdateInput, t_usersUncheckedUpdateInput>
    /**
     * Choose, which t_users to update.
     */
    where: t_usersWhereUniqueInput
  }

  /**
   * t_users updateMany
   */
  export type t_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_users.
     */
    data: XOR<t_usersUpdateManyMutationInput, t_usersUncheckedUpdateManyInput>
    /**
     * Filter which t_users to update
     */
    where?: t_usersWhereInput
    /**
     * Limit how many t_users to update.
     */
    limit?: number
  }

  /**
   * t_users updateManyAndReturn
   */
  export type t_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * The data used to update t_users.
     */
    data: XOR<t_usersUpdateManyMutationInput, t_usersUncheckedUpdateManyInput>
    /**
     * Filter which t_users to update
     */
    where?: t_usersWhereInput
    /**
     * Limit how many t_users to update.
     */
    limit?: number
  }

  /**
   * t_users upsert
   */
  export type t_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the t_users to update in case it exists.
     */
    where: t_usersWhereUniqueInput
    /**
     * In case the t_users found by the `where` argument doesn't exist, create a new t_users with this data.
     */
    create: XOR<t_usersCreateInput, t_usersUncheckedCreateInput>
    /**
     * In case the t_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_usersUpdateInput, t_usersUncheckedUpdateInput>
  }

  /**
   * t_users delete
   */
  export type t_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
    /**
     * Filter which t_users to delete.
     */
    where: t_usersWhereUniqueInput
  }

  /**
   * t_users deleteMany
   */
  export type t_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_users to delete
     */
    where?: t_usersWhereInput
    /**
     * Limit how many t_users to delete.
     */
    limit?: number
  }

  /**
   * t_users.t_inventory_items
   */
  export type t_users$t_inventory_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_inventory_items
     */
    select?: t_inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_inventory_items
     */
    omit?: t_inventory_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_inventory_itemsInclude<ExtArgs> | null
    where?: t_inventory_itemsWhereInput
    orderBy?: t_inventory_itemsOrderByWithRelationInput | t_inventory_itemsOrderByWithRelationInput[]
    cursor?: t_inventory_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_inventory_itemsScalarFieldEnum | T_inventory_itemsScalarFieldEnum[]
  }

  /**
   * t_users.t_wishlist_items
   */
  export type t_users$t_wishlist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    where?: t_wishlist_itemsWhereInput
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    cursor?: t_wishlist_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * t_users without action
   */
  export type t_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_users
     */
    select?: t_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_users
     */
    omit?: t_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_usersInclude<ExtArgs> | null
  }


  /**
   * Model t_wishlist_items
   */

  export type AggregateT_wishlist_items = {
    _count: T_wishlist_itemsCountAggregateOutputType | null
    _avg: T_wishlist_itemsAvgAggregateOutputType | null
    _sum: T_wishlist_itemsSumAggregateOutputType | null
    _min: T_wishlist_itemsMinAggregateOutputType | null
    _max: T_wishlist_itemsMaxAggregateOutputType | null
  }

  export type T_wishlist_itemsAvgAggregateOutputType = {
    id: number | null
  }

  export type T_wishlist_itemsSumAggregateOutputType = {
    id: bigint | null
  }

  export type T_wishlist_itemsMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    pack_id: string | null
    card_no: string | null
    card_name: string | null
    rarity_id: string | null
    memo: string | null
    done: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_wishlist_itemsMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    pack_id: string | null
    card_no: string | null
    card_name: string | null
    rarity_id: string | null
    memo: string | null
    done: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type T_wishlist_itemsCountAggregateOutputType = {
    id: number
    user_id: number
    pack_id: number
    card_no: number
    card_name: number
    rarity_id: number
    memo: number
    done: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type T_wishlist_itemsAvgAggregateInputType = {
    id?: true
  }

  export type T_wishlist_itemsSumAggregateInputType = {
    id?: true
  }

  export type T_wishlist_itemsMinAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    card_name?: true
    rarity_id?: true
    memo?: true
    done?: true
    created_at?: true
    updated_at?: true
  }

  export type T_wishlist_itemsMaxAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    card_name?: true
    rarity_id?: true
    memo?: true
    done?: true
    created_at?: true
    updated_at?: true
  }

  export type T_wishlist_itemsCountAggregateInputType = {
    id?: true
    user_id?: true
    pack_id?: true
    card_no?: true
    card_name?: true
    rarity_id?: true
    memo?: true
    done?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type T_wishlist_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_wishlist_items to aggregate.
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_wishlist_items to fetch.
     */
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_wishlist_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_wishlist_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_wishlist_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_wishlist_items
    **/
    _count?: true | T_wishlist_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_wishlist_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_wishlist_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_wishlist_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_wishlist_itemsMaxAggregateInputType
  }

  export type GetT_wishlist_itemsAggregateType<T extends T_wishlist_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateT_wishlist_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_wishlist_items[P]>
      : GetScalarType<T[P], AggregateT_wishlist_items[P]>
  }




  export type t_wishlist_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_wishlist_itemsWhereInput
    orderBy?: t_wishlist_itemsOrderByWithAggregationInput | t_wishlist_itemsOrderByWithAggregationInput[]
    by: T_wishlist_itemsScalarFieldEnum[] | T_wishlist_itemsScalarFieldEnum
    having?: t_wishlist_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_wishlist_itemsCountAggregateInputType | true
    _avg?: T_wishlist_itemsAvgAggregateInputType
    _sum?: T_wishlist_itemsSumAggregateInputType
    _min?: T_wishlist_itemsMinAggregateInputType
    _max?: T_wishlist_itemsMaxAggregateInputType
  }

  export type T_wishlist_itemsGroupByOutputType = {
    id: bigint
    user_id: string
    pack_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo: string | null
    done: boolean | null
    created_at: Date
    updated_at: Date
    _count: T_wishlist_itemsCountAggregateOutputType | null
    _avg: T_wishlist_itemsAvgAggregateOutputType | null
    _sum: T_wishlist_itemsSumAggregateOutputType | null
    _min: T_wishlist_itemsMinAggregateOutputType | null
    _max: T_wishlist_itemsMaxAggregateOutputType | null
  }

  type GetT_wishlist_itemsGroupByPayload<T extends t_wishlist_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_wishlist_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_wishlist_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_wishlist_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], T_wishlist_itemsGroupByOutputType[P]>
        }
      >
    >


  export type t_wishlist_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    card_name?: boolean
    rarity_id?: boolean
    memo?: boolean
    done?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_wishlist_items"]>

  export type t_wishlist_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    card_name?: boolean
    rarity_id?: boolean
    memo?: boolean
    done?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_wishlist_items"]>

  export type t_wishlist_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    card_name?: boolean
    rarity_id?: boolean
    memo?: boolean
    done?: boolean
    created_at?: boolean
    updated_at?: boolean
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_wishlist_items"]>

  export type t_wishlist_itemsSelectScalar = {
    id?: boolean
    user_id?: boolean
    pack_id?: boolean
    card_no?: boolean
    card_name?: boolean
    rarity_id?: boolean
    memo?: boolean
    done?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type t_wishlist_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "pack_id" | "card_no" | "card_name" | "rarity_id" | "memo" | "done" | "created_at" | "updated_at", ExtArgs["result"]["t_wishlist_items"]>
  export type t_wishlist_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }
  export type t_wishlist_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }
  export type t_wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_packs?: boolean | m_packsDefaultArgs<ExtArgs>
    m_rarity?: boolean | m_rarityDefaultArgs<ExtArgs>
    t_users?: boolean | t_usersDefaultArgs<ExtArgs>
  }

  export type $t_wishlist_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_wishlist_items"
    objects: {
      m_packs: Prisma.$m_packsPayload<ExtArgs>
      m_rarity: Prisma.$m_rarityPayload<ExtArgs>
      t_users: Prisma.$t_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      pack_id: string
      card_no: string
      card_name: string
      rarity_id: string
      memo: string | null
      done: boolean | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["t_wishlist_items"]>
    composites: {}
  }

  type t_wishlist_itemsGetPayload<S extends boolean | null | undefined | t_wishlist_itemsDefaultArgs> = $Result.GetResult<Prisma.$t_wishlist_itemsPayload, S>

  type t_wishlist_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_wishlist_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_wishlist_itemsCountAggregateInputType | true
    }

  export interface t_wishlist_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_wishlist_items'], meta: { name: 't_wishlist_items' } }
    /**
     * Find zero or one T_wishlist_items that matches the filter.
     * @param {t_wishlist_itemsFindUniqueArgs} args - Arguments to find a T_wishlist_items
     * @example
     * // Get one T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_wishlist_itemsFindUniqueArgs>(args: SelectSubset<T, t_wishlist_itemsFindUniqueArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_wishlist_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_wishlist_itemsFindUniqueOrThrowArgs} args - Arguments to find a T_wishlist_items
     * @example
     * // Get one T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_wishlist_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, t_wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_wishlist_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsFindFirstArgs} args - Arguments to find a T_wishlist_items
     * @example
     * // Get one T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_wishlist_itemsFindFirstArgs>(args?: SelectSubset<T, t_wishlist_itemsFindFirstArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_wishlist_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsFindFirstOrThrowArgs} args - Arguments to find a T_wishlist_items
     * @example
     * // Get one T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_wishlist_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, t_wishlist_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_wishlist_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findMany()
     * 
     * // Get first 10 T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_wishlist_itemsWithIdOnly = await prisma.t_wishlist_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_wishlist_itemsFindManyArgs>(args?: SelectSubset<T, t_wishlist_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_wishlist_items.
     * @param {t_wishlist_itemsCreateArgs} args - Arguments to create a T_wishlist_items.
     * @example
     * // Create one T_wishlist_items
     * const T_wishlist_items = await prisma.t_wishlist_items.create({
     *   data: {
     *     // ... data to create a T_wishlist_items
     *   }
     * })
     * 
     */
    create<T extends t_wishlist_itemsCreateArgs>(args: SelectSubset<T, t_wishlist_itemsCreateArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_wishlist_items.
     * @param {t_wishlist_itemsCreateManyArgs} args - Arguments to create many T_wishlist_items.
     * @example
     * // Create many T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_wishlist_itemsCreateManyArgs>(args?: SelectSubset<T, t_wishlist_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_wishlist_items and returns the data saved in the database.
     * @param {t_wishlist_itemsCreateManyAndReturnArgs} args - Arguments to create many T_wishlist_items.
     * @example
     * // Create many T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_wishlist_items and only return the `id`
     * const t_wishlist_itemsWithIdOnly = await prisma.t_wishlist_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends t_wishlist_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, t_wishlist_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_wishlist_items.
     * @param {t_wishlist_itemsDeleteArgs} args - Arguments to delete one T_wishlist_items.
     * @example
     * // Delete one T_wishlist_items
     * const T_wishlist_items = await prisma.t_wishlist_items.delete({
     *   where: {
     *     // ... filter to delete one T_wishlist_items
     *   }
     * })
     * 
     */
    delete<T extends t_wishlist_itemsDeleteArgs>(args: SelectSubset<T, t_wishlist_itemsDeleteArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_wishlist_items.
     * @param {t_wishlist_itemsUpdateArgs} args - Arguments to update one T_wishlist_items.
     * @example
     * // Update one T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_wishlist_itemsUpdateArgs>(args: SelectSubset<T, t_wishlist_itemsUpdateArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_wishlist_items.
     * @param {t_wishlist_itemsDeleteManyArgs} args - Arguments to filter T_wishlist_items to delete.
     * @example
     * // Delete a few T_wishlist_items
     * const { count } = await prisma.t_wishlist_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_wishlist_itemsDeleteManyArgs>(args?: SelectSubset<T, t_wishlist_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_wishlist_itemsUpdateManyArgs>(args: SelectSubset<T, t_wishlist_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_wishlist_items and returns the data updated in the database.
     * @param {t_wishlist_itemsUpdateManyAndReturnArgs} args - Arguments to update many T_wishlist_items.
     * @example
     * // Update many T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_wishlist_items and only return the `id`
     * const t_wishlist_itemsWithIdOnly = await prisma.t_wishlist_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends t_wishlist_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, t_wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_wishlist_items.
     * @param {t_wishlist_itemsUpsertArgs} args - Arguments to update or create a T_wishlist_items.
     * @example
     * // Update or create a T_wishlist_items
     * const t_wishlist_items = await prisma.t_wishlist_items.upsert({
     *   create: {
     *     // ... data to create a T_wishlist_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_wishlist_items we want to update
     *   }
     * })
     */
    upsert<T extends t_wishlist_itemsUpsertArgs>(args: SelectSubset<T, t_wishlist_itemsUpsertArgs<ExtArgs>>): Prisma__t_wishlist_itemsClient<$Result.GetResult<Prisma.$t_wishlist_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsCountArgs} args - Arguments to filter T_wishlist_items to count.
     * @example
     * // Count the number of T_wishlist_items
     * const count = await prisma.t_wishlist_items.count({
     *   where: {
     *     // ... the filter for the T_wishlist_items we want to count
     *   }
     * })
    **/
    count<T extends t_wishlist_itemsCountArgs>(
      args?: Subset<T, t_wishlist_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_wishlist_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_wishlist_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_wishlist_itemsAggregateArgs>(args: Subset<T, T_wishlist_itemsAggregateArgs>): Prisma.PrismaPromise<GetT_wishlist_itemsAggregateType<T>>

    /**
     * Group by T_wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_wishlist_itemsGroupByArgs} args - Group by arguments.
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
      T extends t_wishlist_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_wishlist_itemsGroupByArgs['orderBy'] }
        : { orderBy?: t_wishlist_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_wishlist_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_wishlist_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_wishlist_items model
   */
  readonly fields: t_wishlist_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_wishlist_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_wishlist_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    m_packs<T extends m_packsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, m_packsDefaultArgs<ExtArgs>>): Prisma__m_packsClient<$Result.GetResult<Prisma.$m_packsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    m_rarity<T extends m_rarityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, m_rarityDefaultArgs<ExtArgs>>): Prisma__m_rarityClient<$Result.GetResult<Prisma.$m_rarityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    t_users<T extends t_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, t_usersDefaultArgs<ExtArgs>>): Prisma__t_usersClient<$Result.GetResult<Prisma.$t_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the t_wishlist_items model
   */
  interface t_wishlist_itemsFieldRefs {
    readonly id: FieldRef<"t_wishlist_items", 'BigInt'>
    readonly user_id: FieldRef<"t_wishlist_items", 'String'>
    readonly pack_id: FieldRef<"t_wishlist_items", 'String'>
    readonly card_no: FieldRef<"t_wishlist_items", 'String'>
    readonly card_name: FieldRef<"t_wishlist_items", 'String'>
    readonly rarity_id: FieldRef<"t_wishlist_items", 'String'>
    readonly memo: FieldRef<"t_wishlist_items", 'String'>
    readonly done: FieldRef<"t_wishlist_items", 'Boolean'>
    readonly created_at: FieldRef<"t_wishlist_items", 'DateTime'>
    readonly updated_at: FieldRef<"t_wishlist_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_wishlist_items findUnique
   */
  export type t_wishlist_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_wishlist_items to fetch.
     */
    where: t_wishlist_itemsWhereUniqueInput
  }

  /**
   * t_wishlist_items findUniqueOrThrow
   */
  export type t_wishlist_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_wishlist_items to fetch.
     */
    where: t_wishlist_itemsWhereUniqueInput
  }

  /**
   * t_wishlist_items findFirst
   */
  export type t_wishlist_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_wishlist_items to fetch.
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_wishlist_items to fetch.
     */
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_wishlist_items.
     */
    cursor?: t_wishlist_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_wishlist_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_wishlist_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_wishlist_items.
     */
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * t_wishlist_items findFirstOrThrow
   */
  export type t_wishlist_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_wishlist_items to fetch.
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_wishlist_items to fetch.
     */
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_wishlist_items.
     */
    cursor?: t_wishlist_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_wishlist_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_wishlist_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_wishlist_items.
     */
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * t_wishlist_items findMany
   */
  export type t_wishlist_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter, which t_wishlist_items to fetch.
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_wishlist_items to fetch.
     */
    orderBy?: t_wishlist_itemsOrderByWithRelationInput | t_wishlist_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_wishlist_items.
     */
    cursor?: t_wishlist_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_wishlist_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_wishlist_items.
     */
    skip?: number
    distinct?: T_wishlist_itemsScalarFieldEnum | T_wishlist_itemsScalarFieldEnum[]
  }

  /**
   * t_wishlist_items create
   */
  export type t_wishlist_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a t_wishlist_items.
     */
    data: XOR<t_wishlist_itemsCreateInput, t_wishlist_itemsUncheckedCreateInput>
  }

  /**
   * t_wishlist_items createMany
   */
  export type t_wishlist_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_wishlist_items.
     */
    data: t_wishlist_itemsCreateManyInput | t_wishlist_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_wishlist_items createManyAndReturn
   */
  export type t_wishlist_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many t_wishlist_items.
     */
    data: t_wishlist_itemsCreateManyInput | t_wishlist_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_wishlist_items update
   */
  export type t_wishlist_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a t_wishlist_items.
     */
    data: XOR<t_wishlist_itemsUpdateInput, t_wishlist_itemsUncheckedUpdateInput>
    /**
     * Choose, which t_wishlist_items to update.
     */
    where: t_wishlist_itemsWhereUniqueInput
  }

  /**
   * t_wishlist_items updateMany
   */
  export type t_wishlist_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_wishlist_items.
     */
    data: XOR<t_wishlist_itemsUpdateManyMutationInput, t_wishlist_itemsUncheckedUpdateManyInput>
    /**
     * Filter which t_wishlist_items to update
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * Limit how many t_wishlist_items to update.
     */
    limit?: number
  }

  /**
   * t_wishlist_items updateManyAndReturn
   */
  export type t_wishlist_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * The data used to update t_wishlist_items.
     */
    data: XOR<t_wishlist_itemsUpdateManyMutationInput, t_wishlist_itemsUncheckedUpdateManyInput>
    /**
     * Filter which t_wishlist_items to update
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * Limit how many t_wishlist_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_wishlist_items upsert
   */
  export type t_wishlist_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the t_wishlist_items to update in case it exists.
     */
    where: t_wishlist_itemsWhereUniqueInput
    /**
     * In case the t_wishlist_items found by the `where` argument doesn't exist, create a new t_wishlist_items with this data.
     */
    create: XOR<t_wishlist_itemsCreateInput, t_wishlist_itemsUncheckedCreateInput>
    /**
     * In case the t_wishlist_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_wishlist_itemsUpdateInput, t_wishlist_itemsUncheckedUpdateInput>
  }

  /**
   * t_wishlist_items delete
   */
  export type t_wishlist_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
    /**
     * Filter which t_wishlist_items to delete.
     */
    where: t_wishlist_itemsWhereUniqueInput
  }

  /**
   * t_wishlist_items deleteMany
   */
  export type t_wishlist_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_wishlist_items to delete
     */
    where?: t_wishlist_itemsWhereInput
    /**
     * Limit how many t_wishlist_items to delete.
     */
    limit?: number
  }

  /**
   * t_wishlist_items without action
   */
  export type t_wishlist_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_wishlist_items
     */
    select?: t_wishlist_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_wishlist_items
     */
    omit?: t_wishlist_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_wishlist_itemsInclude<ExtArgs> | null
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


  export const M_packsScalarFieldEnum: {
    id: 'id',
    pack_id: 'pack_id',
    pack_name: 'pack_name',
    pack_image_url: 'pack_image_url',
    memo: 'memo',
    created_at: 'created_at',
    updated_at: 'updated_at',
    pack_no: 'pack_no'
  };

  export type M_packsScalarFieldEnum = (typeof M_packsScalarFieldEnum)[keyof typeof M_packsScalarFieldEnum]


  export const M_rarityScalarFieldEnum: {
    id: 'id',
    rarity: 'rarity',
    cost: 'cost',
    cost_trade_power: 'cost_trade_power',
    created_at: 'created_at',
    updated_at: 'updated_at',
    rarity_id: 'rarity_id'
  };

  export type M_rarityScalarFieldEnum = (typeof M_rarityScalarFieldEnum)[keyof typeof M_rarityScalarFieldEnum]


  export const T_inventory_itemsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    pack_id: 'pack_id',
    card_no: 'card_no',
    quantity: 'quantity',
    card_name: 'card_name',
    rarity_id: 'rarity_id',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type T_inventory_itemsScalarFieldEnum = (typeof T_inventory_itemsScalarFieldEnum)[keyof typeof T_inventory_itemsScalarFieldEnum]


  export const T_usersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    avatar_url: 'avatar_url',
    poke_poke_id: 'poke_poke_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type T_usersScalarFieldEnum = (typeof T_usersScalarFieldEnum)[keyof typeof T_usersScalarFieldEnum]


  export const T_wishlist_itemsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    pack_id: 'pack_id',
    card_no: 'card_no',
    card_name: 'card_name',
    rarity_id: 'rarity_id',
    memo: 'memo',
    done: 'done',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type T_wishlist_itemsScalarFieldEnum = (typeof T_wishlist_itemsScalarFieldEnum)[keyof typeof T_wishlist_itemsScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type m_packsWhereInput = {
    AND?: m_packsWhereInput | m_packsWhereInput[]
    OR?: m_packsWhereInput[]
    NOT?: m_packsWhereInput | m_packsWhereInput[]
    id?: StringFilter<"m_packs"> | string
    pack_id?: StringFilter<"m_packs"> | string
    pack_name?: StringNullableFilter<"m_packs"> | string | null
    pack_image_url?: StringNullableFilter<"m_packs"> | string | null
    memo?: StringNullableFilter<"m_packs"> | string | null
    created_at?: DateTimeFilter<"m_packs"> | Date | string
    updated_at?: DateTimeFilter<"m_packs"> | Date | string
    pack_no?: StringNullableFilter<"m_packs"> | string | null
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }

  export type m_packsOrderByWithRelationInput = {
    id?: SortOrder
    pack_id?: SortOrder
    pack_name?: SortOrderInput | SortOrder
    pack_image_url?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pack_no?: SortOrderInput | SortOrder
    t_inventory_items?: t_inventory_itemsOrderByRelationAggregateInput
    t_wishlist_items?: t_wishlist_itemsOrderByRelationAggregateInput
  }

  export type m_packsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pack_id?: string
    AND?: m_packsWhereInput | m_packsWhereInput[]
    OR?: m_packsWhereInput[]
    NOT?: m_packsWhereInput | m_packsWhereInput[]
    pack_name?: StringNullableFilter<"m_packs"> | string | null
    pack_image_url?: StringNullableFilter<"m_packs"> | string | null
    memo?: StringNullableFilter<"m_packs"> | string | null
    created_at?: DateTimeFilter<"m_packs"> | Date | string
    updated_at?: DateTimeFilter<"m_packs"> | Date | string
    pack_no?: StringNullableFilter<"m_packs"> | string | null
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }, "id" | "pack_id">

  export type m_packsOrderByWithAggregationInput = {
    id?: SortOrder
    pack_id?: SortOrder
    pack_name?: SortOrderInput | SortOrder
    pack_image_url?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pack_no?: SortOrderInput | SortOrder
    _count?: m_packsCountOrderByAggregateInput
    _max?: m_packsMaxOrderByAggregateInput
    _min?: m_packsMinOrderByAggregateInput
  }

  export type m_packsScalarWhereWithAggregatesInput = {
    AND?: m_packsScalarWhereWithAggregatesInput | m_packsScalarWhereWithAggregatesInput[]
    OR?: m_packsScalarWhereWithAggregatesInput[]
    NOT?: m_packsScalarWhereWithAggregatesInput | m_packsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"m_packs"> | string
    pack_id?: StringWithAggregatesFilter<"m_packs"> | string
    pack_name?: StringNullableWithAggregatesFilter<"m_packs"> | string | null
    pack_image_url?: StringNullableWithAggregatesFilter<"m_packs"> | string | null
    memo?: StringNullableWithAggregatesFilter<"m_packs"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"m_packs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"m_packs"> | Date | string
    pack_no?: StringNullableWithAggregatesFilter<"m_packs"> | string | null
  }

  export type m_rarityWhereInput = {
    AND?: m_rarityWhereInput | m_rarityWhereInput[]
    OR?: m_rarityWhereInput[]
    NOT?: m_rarityWhereInput | m_rarityWhereInput[]
    id?: StringFilter<"m_rarity"> | string
    rarity?: StringFilter<"m_rarity"> | string
    cost?: IntFilter<"m_rarity"> | number
    cost_trade_power?: IntFilter<"m_rarity"> | number
    created_at?: DateTimeFilter<"m_rarity"> | Date | string
    updated_at?: DateTimeFilter<"m_rarity"> | Date | string
    rarity_id?: StringFilter<"m_rarity"> | string
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }

  export type m_rarityOrderByWithRelationInput = {
    id?: SortOrder
    rarity?: SortOrder
    cost?: SortOrder
    cost_trade_power?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rarity_id?: SortOrder
    t_inventory_items?: t_inventory_itemsOrderByRelationAggregateInput
    t_wishlist_items?: t_wishlist_itemsOrderByRelationAggregateInput
  }

  export type m_rarityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rarity_id?: string
    AND?: m_rarityWhereInput | m_rarityWhereInput[]
    OR?: m_rarityWhereInput[]
    NOT?: m_rarityWhereInput | m_rarityWhereInput[]
    rarity?: StringFilter<"m_rarity"> | string
    cost?: IntFilter<"m_rarity"> | number
    cost_trade_power?: IntFilter<"m_rarity"> | number
    created_at?: DateTimeFilter<"m_rarity"> | Date | string
    updated_at?: DateTimeFilter<"m_rarity"> | Date | string
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }, "id" | "rarity_id">

  export type m_rarityOrderByWithAggregationInput = {
    id?: SortOrder
    rarity?: SortOrder
    cost?: SortOrder
    cost_trade_power?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rarity_id?: SortOrder
    _count?: m_rarityCountOrderByAggregateInput
    _avg?: m_rarityAvgOrderByAggregateInput
    _max?: m_rarityMaxOrderByAggregateInput
    _min?: m_rarityMinOrderByAggregateInput
    _sum?: m_raritySumOrderByAggregateInput
  }

  export type m_rarityScalarWhereWithAggregatesInput = {
    AND?: m_rarityScalarWhereWithAggregatesInput | m_rarityScalarWhereWithAggregatesInput[]
    OR?: m_rarityScalarWhereWithAggregatesInput[]
    NOT?: m_rarityScalarWhereWithAggregatesInput | m_rarityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"m_rarity"> | string
    rarity?: StringWithAggregatesFilter<"m_rarity"> | string
    cost?: IntWithAggregatesFilter<"m_rarity"> | number
    cost_trade_power?: IntWithAggregatesFilter<"m_rarity"> | number
    created_at?: DateTimeWithAggregatesFilter<"m_rarity"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"m_rarity"> | Date | string
    rarity_id?: StringWithAggregatesFilter<"m_rarity"> | string
  }

  export type t_inventory_itemsWhereInput = {
    AND?: t_inventory_itemsWhereInput | t_inventory_itemsWhereInput[]
    OR?: t_inventory_itemsWhereInput[]
    NOT?: t_inventory_itemsWhereInput | t_inventory_itemsWhereInput[]
    id?: BigIntFilter<"t_inventory_items"> | bigint | number
    user_id?: UuidFilter<"t_inventory_items"> | string
    pack_id?: StringFilter<"t_inventory_items"> | string
    card_no?: StringFilter<"t_inventory_items"> | string
    quantity?: IntFilter<"t_inventory_items"> | number
    card_name?: StringFilter<"t_inventory_items"> | string
    rarity_id?: StringFilter<"t_inventory_items"> | string
    image_url?: StringNullableFilter<"t_inventory_items"> | string | null
    created_at?: DateTimeFilter<"t_inventory_items"> | Date | string
    updated_at?: DateTimeFilter<"t_inventory_items"> | Date | string
    m_packs?: XOR<M_packsScalarRelationFilter, m_packsWhereInput>
    m_rarity?: XOR<M_rarityScalarRelationFilter, m_rarityWhereInput>
    t_users?: XOR<T_usersScalarRelationFilter, t_usersWhereInput>
  }

  export type t_inventory_itemsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    quantity?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    m_packs?: m_packsOrderByWithRelationInput
    m_rarity?: m_rarityOrderByWithRelationInput
    t_users?: t_usersOrderByWithRelationInput
  }

  export type t_inventory_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_pack_id_card_no?: t_inventory_itemsUser_idPack_idCard_noCompoundUniqueInput
    AND?: t_inventory_itemsWhereInput | t_inventory_itemsWhereInput[]
    OR?: t_inventory_itemsWhereInput[]
    NOT?: t_inventory_itemsWhereInput | t_inventory_itemsWhereInput[]
    user_id?: UuidFilter<"t_inventory_items"> | string
    pack_id?: StringFilter<"t_inventory_items"> | string
    card_no?: StringFilter<"t_inventory_items"> | string
    quantity?: IntFilter<"t_inventory_items"> | number
    card_name?: StringFilter<"t_inventory_items"> | string
    rarity_id?: StringFilter<"t_inventory_items"> | string
    image_url?: StringNullableFilter<"t_inventory_items"> | string | null
    created_at?: DateTimeFilter<"t_inventory_items"> | Date | string
    updated_at?: DateTimeFilter<"t_inventory_items"> | Date | string
    m_packs?: XOR<M_packsScalarRelationFilter, m_packsWhereInput>
    m_rarity?: XOR<M_rarityScalarRelationFilter, m_rarityWhereInput>
    t_users?: XOR<T_usersScalarRelationFilter, t_usersWhereInput>
  }, "id" | "user_id_pack_id_card_no">

  export type t_inventory_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    quantity?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: t_inventory_itemsCountOrderByAggregateInput
    _avg?: t_inventory_itemsAvgOrderByAggregateInput
    _max?: t_inventory_itemsMaxOrderByAggregateInput
    _min?: t_inventory_itemsMinOrderByAggregateInput
    _sum?: t_inventory_itemsSumOrderByAggregateInput
  }

  export type t_inventory_itemsScalarWhereWithAggregatesInput = {
    AND?: t_inventory_itemsScalarWhereWithAggregatesInput | t_inventory_itemsScalarWhereWithAggregatesInput[]
    OR?: t_inventory_itemsScalarWhereWithAggregatesInput[]
    NOT?: t_inventory_itemsScalarWhereWithAggregatesInput | t_inventory_itemsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"t_inventory_items"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"t_inventory_items"> | string
    pack_id?: StringWithAggregatesFilter<"t_inventory_items"> | string
    card_no?: StringWithAggregatesFilter<"t_inventory_items"> | string
    quantity?: IntWithAggregatesFilter<"t_inventory_items"> | number
    card_name?: StringWithAggregatesFilter<"t_inventory_items"> | string
    rarity_id?: StringWithAggregatesFilter<"t_inventory_items"> | string
    image_url?: StringNullableWithAggregatesFilter<"t_inventory_items"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"t_inventory_items"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"t_inventory_items"> | Date | string
  }

  export type t_usersWhereInput = {
    AND?: t_usersWhereInput | t_usersWhereInput[]
    OR?: t_usersWhereInput[]
    NOT?: t_usersWhereInput | t_usersWhereInput[]
    id?: UuidFilter<"t_users"> | string
    username?: StringFilter<"t_users"> | string
    email?: StringNullableFilter<"t_users"> | string | null
    password_hash?: StringFilter<"t_users"> | string
    avatar_url?: StringNullableFilter<"t_users"> | string | null
    poke_poke_id?: StringNullableFilter<"t_users"> | string | null
    created_at?: DateTimeFilter<"t_users"> | Date | string
    updated_at?: DateTimeFilter<"t_users"> | Date | string
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }

  export type t_usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    poke_poke_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    t_inventory_items?: t_inventory_itemsOrderByRelationAggregateInput
    t_wishlist_items?: t_wishlist_itemsOrderByRelationAggregateInput
  }

  export type t_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: t_usersWhereInput | t_usersWhereInput[]
    OR?: t_usersWhereInput[]
    NOT?: t_usersWhereInput | t_usersWhereInput[]
    password_hash?: StringFilter<"t_users"> | string
    avatar_url?: StringNullableFilter<"t_users"> | string | null
    poke_poke_id?: StringNullableFilter<"t_users"> | string | null
    created_at?: DateTimeFilter<"t_users"> | Date | string
    updated_at?: DateTimeFilter<"t_users"> | Date | string
    t_inventory_items?: T_inventory_itemsListRelationFilter
    t_wishlist_items?: T_wishlist_itemsListRelationFilter
  }, "id" | "username" | "email">

  export type t_usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    poke_poke_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: t_usersCountOrderByAggregateInput
    _max?: t_usersMaxOrderByAggregateInput
    _min?: t_usersMinOrderByAggregateInput
  }

  export type t_usersScalarWhereWithAggregatesInput = {
    AND?: t_usersScalarWhereWithAggregatesInput | t_usersScalarWhereWithAggregatesInput[]
    OR?: t_usersScalarWhereWithAggregatesInput[]
    NOT?: t_usersScalarWhereWithAggregatesInput | t_usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"t_users"> | string
    username?: StringWithAggregatesFilter<"t_users"> | string
    email?: StringNullableWithAggregatesFilter<"t_users"> | string | null
    password_hash?: StringWithAggregatesFilter<"t_users"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"t_users"> | string | null
    poke_poke_id?: StringNullableWithAggregatesFilter<"t_users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"t_users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"t_users"> | Date | string
  }

  export type t_wishlist_itemsWhereInput = {
    AND?: t_wishlist_itemsWhereInput | t_wishlist_itemsWhereInput[]
    OR?: t_wishlist_itemsWhereInput[]
    NOT?: t_wishlist_itemsWhereInput | t_wishlist_itemsWhereInput[]
    id?: BigIntFilter<"t_wishlist_items"> | bigint | number
    user_id?: UuidFilter<"t_wishlist_items"> | string
    pack_id?: StringFilter<"t_wishlist_items"> | string
    card_no?: StringFilter<"t_wishlist_items"> | string
    card_name?: StringFilter<"t_wishlist_items"> | string
    rarity_id?: StringFilter<"t_wishlist_items"> | string
    memo?: StringNullableFilter<"t_wishlist_items"> | string | null
    done?: BoolNullableFilter<"t_wishlist_items"> | boolean | null
    created_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
    updated_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
    m_packs?: XOR<M_packsScalarRelationFilter, m_packsWhereInput>
    m_rarity?: XOR<M_rarityScalarRelationFilter, m_rarityWhereInput>
    t_users?: XOR<T_usersScalarRelationFilter, t_usersWhereInput>
  }

  export type t_wishlist_itemsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    memo?: SortOrderInput | SortOrder
    done?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    m_packs?: m_packsOrderByWithRelationInput
    m_rarity?: m_rarityOrderByWithRelationInput
    t_users?: t_usersOrderByWithRelationInput
  }

  export type t_wishlist_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id_pack_id_card_no?: t_wishlist_itemsUser_idPack_idCard_noCompoundUniqueInput
    AND?: t_wishlist_itemsWhereInput | t_wishlist_itemsWhereInput[]
    OR?: t_wishlist_itemsWhereInput[]
    NOT?: t_wishlist_itemsWhereInput | t_wishlist_itemsWhereInput[]
    user_id?: UuidFilter<"t_wishlist_items"> | string
    pack_id?: StringFilter<"t_wishlist_items"> | string
    card_no?: StringFilter<"t_wishlist_items"> | string
    card_name?: StringFilter<"t_wishlist_items"> | string
    rarity_id?: StringFilter<"t_wishlist_items"> | string
    memo?: StringNullableFilter<"t_wishlist_items"> | string | null
    done?: BoolNullableFilter<"t_wishlist_items"> | boolean | null
    created_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
    updated_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
    m_packs?: XOR<M_packsScalarRelationFilter, m_packsWhereInput>
    m_rarity?: XOR<M_rarityScalarRelationFilter, m_rarityWhereInput>
    t_users?: XOR<T_usersScalarRelationFilter, t_usersWhereInput>
  }, "id" | "user_id_pack_id_card_no">

  export type t_wishlist_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    memo?: SortOrderInput | SortOrder
    done?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: t_wishlist_itemsCountOrderByAggregateInput
    _avg?: t_wishlist_itemsAvgOrderByAggregateInput
    _max?: t_wishlist_itemsMaxOrderByAggregateInput
    _min?: t_wishlist_itemsMinOrderByAggregateInput
    _sum?: t_wishlist_itemsSumOrderByAggregateInput
  }

  export type t_wishlist_itemsScalarWhereWithAggregatesInput = {
    AND?: t_wishlist_itemsScalarWhereWithAggregatesInput | t_wishlist_itemsScalarWhereWithAggregatesInput[]
    OR?: t_wishlist_itemsScalarWhereWithAggregatesInput[]
    NOT?: t_wishlist_itemsScalarWhereWithAggregatesInput | t_wishlist_itemsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"t_wishlist_items"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"t_wishlist_items"> | string
    pack_id?: StringWithAggregatesFilter<"t_wishlist_items"> | string
    card_no?: StringWithAggregatesFilter<"t_wishlist_items"> | string
    card_name?: StringWithAggregatesFilter<"t_wishlist_items"> | string
    rarity_id?: StringWithAggregatesFilter<"t_wishlist_items"> | string
    memo?: StringNullableWithAggregatesFilter<"t_wishlist_items"> | string | null
    done?: BoolNullableWithAggregatesFilter<"t_wishlist_items"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"t_wishlist_items"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"t_wishlist_items"> | Date | string
  }

  export type m_packsCreateInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutM_packsInput
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutM_packsInput
  }

  export type m_packsUncheckedCreateInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutM_packsInput
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutM_packsInput
  }

  export type m_packsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutM_packsNestedInput
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutM_packsNestedInput
  }

  export type m_packsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutM_packsNestedInput
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutM_packsNestedInput
  }

  export type m_packsCreateManyInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
  }

  export type m_packsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type m_packsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type m_rarityCreateInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutM_rarityInput
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityUncheckedCreateInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutM_rarityInput
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutM_rarityNestedInput
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutM_rarityNestedInput
  }

  export type m_rarityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutM_rarityNestedInput
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutM_rarityNestedInput
  }

  export type m_rarityCreateManyInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
  }

  export type m_rarityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
  }

  export type m_rarityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
  }

  export type t_inventory_itemsCreateInput = {
    id?: bigint | number
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_inventory_itemsInput
    m_rarity: m_rarityCreateNestedOneWithoutT_inventory_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_inventory_itemsInput
  }

  export type t_inventory_itemsUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_inventory_itemsNestedInput
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_inventory_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_inventory_itemsNestedInput
  }

  export type t_inventory_itemsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsCreateManyInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_usersCreateInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutT_usersInput
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutT_usersInput
  }

  export type t_usersUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutT_usersInput
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutT_usersInput
  }

  export type t_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutT_usersNestedInput
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutT_usersNestedInput
  }

  export type t_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutT_usersNestedInput
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutT_usersNestedInput
  }

  export type t_usersCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsCreateInput = {
    id?: bigint | number
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_wishlist_itemsInput
    m_rarity: m_rarityCreateNestedOneWithoutT_wishlist_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_wishlist_itemsInput
  }

  export type t_wishlist_itemsUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
  }

  export type t_wishlist_itemsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsCreateManyInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type T_inventory_itemsListRelationFilter = {
    every?: t_inventory_itemsWhereInput
    some?: t_inventory_itemsWhereInput
    none?: t_inventory_itemsWhereInput
  }

  export type T_wishlist_itemsListRelationFilter = {
    every?: t_wishlist_itemsWhereInput
    some?: t_wishlist_itemsWhereInput
    none?: t_wishlist_itemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type t_inventory_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type t_wishlist_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type m_packsCountOrderByAggregateInput = {
    id?: SortOrder
    pack_id?: SortOrder
    pack_name?: SortOrder
    pack_image_url?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pack_no?: SortOrder
  }

  export type m_packsMaxOrderByAggregateInput = {
    id?: SortOrder
    pack_id?: SortOrder
    pack_name?: SortOrder
    pack_image_url?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pack_no?: SortOrder
  }

  export type m_packsMinOrderByAggregateInput = {
    id?: SortOrder
    pack_id?: SortOrder
    pack_name?: SortOrder
    pack_image_url?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pack_no?: SortOrder
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

  export type m_rarityCountOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    cost?: SortOrder
    cost_trade_power?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rarity_id?: SortOrder
  }

  export type m_rarityAvgOrderByAggregateInput = {
    cost?: SortOrder
    cost_trade_power?: SortOrder
  }

  export type m_rarityMaxOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    cost?: SortOrder
    cost_trade_power?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rarity_id?: SortOrder
  }

  export type m_rarityMinOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    cost?: SortOrder
    cost_trade_power?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rarity_id?: SortOrder
  }

  export type m_raritySumOrderByAggregateInput = {
    cost?: SortOrder
    cost_trade_power?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type M_packsScalarRelationFilter = {
    is?: m_packsWhereInput
    isNot?: m_packsWhereInput
  }

  export type M_rarityScalarRelationFilter = {
    is?: m_rarityWhereInput
    isNot?: m_rarityWhereInput
  }

  export type T_usersScalarRelationFilter = {
    is?: t_usersWhereInput
    isNot?: t_usersWhereInput
  }

  export type t_inventory_itemsUser_idPack_idCard_noCompoundUniqueInput = {
    user_id: string
    pack_id: string
    card_no: string
  }

  export type t_inventory_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    quantity?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_inventory_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type t_inventory_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    quantity?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_inventory_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    quantity?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_inventory_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type t_usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    poke_poke_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    poke_poke_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    avatar_url?: SortOrder
    poke_poke_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type t_wishlist_itemsUser_idPack_idCard_noCompoundUniqueInput = {
    user_id: string
    pack_id: string
    card_no: string
  }

  export type t_wishlist_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    memo?: SortOrder
    done?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_wishlist_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type t_wishlist_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    memo?: SortOrder
    done?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_wishlist_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pack_id?: SortOrder
    card_no?: SortOrder
    card_name?: SortOrder
    rarity_id?: SortOrder
    memo?: SortOrder
    done?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type t_wishlist_itemsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type t_inventory_itemsCreateNestedManyWithoutM_packsInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput> | t_inventory_itemsCreateWithoutM_packsInput[] | t_inventory_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_packsInput | t_inventory_itemsCreateOrConnectWithoutM_packsInput[]
    createMany?: t_inventory_itemsCreateManyM_packsInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsCreateNestedManyWithoutM_packsInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput> | t_wishlist_itemsCreateWithoutM_packsInput[] | t_wishlist_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_packsInput | t_wishlist_itemsCreateOrConnectWithoutM_packsInput[]
    createMany?: t_wishlist_itemsCreateManyM_packsInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type t_inventory_itemsUncheckedCreateNestedManyWithoutM_packsInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput> | t_inventory_itemsCreateWithoutM_packsInput[] | t_inventory_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_packsInput | t_inventory_itemsCreateOrConnectWithoutM_packsInput[]
    createMany?: t_inventory_itemsCreateManyM_packsInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsUncheckedCreateNestedManyWithoutM_packsInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput> | t_wishlist_itemsCreateWithoutM_packsInput[] | t_wishlist_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_packsInput | t_wishlist_itemsCreateOrConnectWithoutM_packsInput[]
    createMany?: t_wishlist_itemsCreateManyM_packsInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type t_inventory_itemsUpdateManyWithoutM_packsNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput> | t_inventory_itemsCreateWithoutM_packsInput[] | t_inventory_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_packsInput | t_inventory_itemsCreateOrConnectWithoutM_packsInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutM_packsInput | t_inventory_itemsUpsertWithWhereUniqueWithoutM_packsInput[]
    createMany?: t_inventory_itemsCreateManyM_packsInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutM_packsInput | t_inventory_itemsUpdateWithWhereUniqueWithoutM_packsInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutM_packsInput | t_inventory_itemsUpdateManyWithWhereWithoutM_packsInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUpdateManyWithoutM_packsNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput> | t_wishlist_itemsCreateWithoutM_packsInput[] | t_wishlist_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_packsInput | t_wishlist_itemsCreateOrConnectWithoutM_packsInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutM_packsInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutM_packsInput[]
    createMany?: t_wishlist_itemsCreateManyM_packsInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutM_packsInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutM_packsInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutM_packsInput | t_wishlist_itemsUpdateManyWithWhereWithoutM_packsInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutM_packsNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput> | t_inventory_itemsCreateWithoutM_packsInput[] | t_inventory_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_packsInput | t_inventory_itemsCreateOrConnectWithoutM_packsInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutM_packsInput | t_inventory_itemsUpsertWithWhereUniqueWithoutM_packsInput[]
    createMany?: t_inventory_itemsCreateManyM_packsInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutM_packsInput | t_inventory_itemsUpdateWithWhereUniqueWithoutM_packsInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutM_packsInput | t_inventory_itemsUpdateManyWithWhereWithoutM_packsInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutM_packsNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput> | t_wishlist_itemsCreateWithoutM_packsInput[] | t_wishlist_itemsUncheckedCreateWithoutM_packsInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_packsInput | t_wishlist_itemsCreateOrConnectWithoutM_packsInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutM_packsInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutM_packsInput[]
    createMany?: t_wishlist_itemsCreateManyM_packsInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutM_packsInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutM_packsInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutM_packsInput | t_wishlist_itemsUpdateManyWithWhereWithoutM_packsInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type t_inventory_itemsCreateNestedManyWithoutM_rarityInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput> | t_inventory_itemsCreateWithoutM_rarityInput[] | t_inventory_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_rarityInput | t_inventory_itemsCreateOrConnectWithoutM_rarityInput[]
    createMany?: t_inventory_itemsCreateManyM_rarityInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsCreateNestedManyWithoutM_rarityInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput> | t_wishlist_itemsCreateWithoutM_rarityInput[] | t_wishlist_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_rarityInput | t_wishlist_itemsCreateOrConnectWithoutM_rarityInput[]
    createMany?: t_wishlist_itemsCreateManyM_rarityInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type t_inventory_itemsUncheckedCreateNestedManyWithoutM_rarityInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput> | t_inventory_itemsCreateWithoutM_rarityInput[] | t_inventory_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_rarityInput | t_inventory_itemsCreateOrConnectWithoutM_rarityInput[]
    createMany?: t_inventory_itemsCreateManyM_rarityInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsUncheckedCreateNestedManyWithoutM_rarityInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput> | t_wishlist_itemsCreateWithoutM_rarityInput[] | t_wishlist_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_rarityInput | t_wishlist_itemsCreateOrConnectWithoutM_rarityInput[]
    createMany?: t_wishlist_itemsCreateManyM_rarityInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type t_inventory_itemsUpdateManyWithoutM_rarityNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput> | t_inventory_itemsCreateWithoutM_rarityInput[] | t_inventory_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_rarityInput | t_inventory_itemsCreateOrConnectWithoutM_rarityInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutM_rarityInput | t_inventory_itemsUpsertWithWhereUniqueWithoutM_rarityInput[]
    createMany?: t_inventory_itemsCreateManyM_rarityInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutM_rarityInput | t_inventory_itemsUpdateWithWhereUniqueWithoutM_rarityInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutM_rarityInput | t_inventory_itemsUpdateManyWithWhereWithoutM_rarityInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUpdateManyWithoutM_rarityNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput> | t_wishlist_itemsCreateWithoutM_rarityInput[] | t_wishlist_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_rarityInput | t_wishlist_itemsCreateOrConnectWithoutM_rarityInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutM_rarityInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutM_rarityInput[]
    createMany?: t_wishlist_itemsCreateManyM_rarityInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutM_rarityInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutM_rarityInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutM_rarityInput | t_wishlist_itemsUpdateManyWithWhereWithoutM_rarityInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutM_rarityNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput> | t_inventory_itemsCreateWithoutM_rarityInput[] | t_inventory_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutM_rarityInput | t_inventory_itemsCreateOrConnectWithoutM_rarityInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutM_rarityInput | t_inventory_itemsUpsertWithWhereUniqueWithoutM_rarityInput[]
    createMany?: t_inventory_itemsCreateManyM_rarityInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutM_rarityInput | t_inventory_itemsUpdateWithWhereUniqueWithoutM_rarityInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutM_rarityInput | t_inventory_itemsUpdateManyWithWhereWithoutM_rarityInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutM_rarityNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput> | t_wishlist_itemsCreateWithoutM_rarityInput[] | t_wishlist_itemsUncheckedCreateWithoutM_rarityInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutM_rarityInput | t_wishlist_itemsCreateOrConnectWithoutM_rarityInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutM_rarityInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutM_rarityInput[]
    createMany?: t_wishlist_itemsCreateManyM_rarityInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutM_rarityInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutM_rarityInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutM_rarityInput | t_wishlist_itemsUpdateManyWithWhereWithoutM_rarityInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type m_packsCreateNestedOneWithoutT_inventory_itemsInput = {
    create?: XOR<m_packsCreateWithoutT_inventory_itemsInput, m_packsUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: m_packsCreateOrConnectWithoutT_inventory_itemsInput
    connect?: m_packsWhereUniqueInput
  }

  export type m_rarityCreateNestedOneWithoutT_inventory_itemsInput = {
    create?: XOR<m_rarityCreateWithoutT_inventory_itemsInput, m_rarityUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: m_rarityCreateOrConnectWithoutT_inventory_itemsInput
    connect?: m_rarityWhereUniqueInput
  }

  export type t_usersCreateNestedOneWithoutT_inventory_itemsInput = {
    create?: XOR<t_usersCreateWithoutT_inventory_itemsInput, t_usersUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: t_usersCreateOrConnectWithoutT_inventory_itemsInput
    connect?: t_usersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type m_packsUpdateOneRequiredWithoutT_inventory_itemsNestedInput = {
    create?: XOR<m_packsCreateWithoutT_inventory_itemsInput, m_packsUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: m_packsCreateOrConnectWithoutT_inventory_itemsInput
    upsert?: m_packsUpsertWithoutT_inventory_itemsInput
    connect?: m_packsWhereUniqueInput
    update?: XOR<XOR<m_packsUpdateToOneWithWhereWithoutT_inventory_itemsInput, m_packsUpdateWithoutT_inventory_itemsInput>, m_packsUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type m_rarityUpdateOneRequiredWithoutT_inventory_itemsNestedInput = {
    create?: XOR<m_rarityCreateWithoutT_inventory_itemsInput, m_rarityUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: m_rarityCreateOrConnectWithoutT_inventory_itemsInput
    upsert?: m_rarityUpsertWithoutT_inventory_itemsInput
    connect?: m_rarityWhereUniqueInput
    update?: XOR<XOR<m_rarityUpdateToOneWithWhereWithoutT_inventory_itemsInput, m_rarityUpdateWithoutT_inventory_itemsInput>, m_rarityUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type t_usersUpdateOneRequiredWithoutT_inventory_itemsNestedInput = {
    create?: XOR<t_usersCreateWithoutT_inventory_itemsInput, t_usersUncheckedCreateWithoutT_inventory_itemsInput>
    connectOrCreate?: t_usersCreateOrConnectWithoutT_inventory_itemsInput
    upsert?: t_usersUpsertWithoutT_inventory_itemsInput
    connect?: t_usersWhereUniqueInput
    update?: XOR<XOR<t_usersUpdateToOneWithWhereWithoutT_inventory_itemsInput, t_usersUpdateWithoutT_inventory_itemsInput>, t_usersUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type t_inventory_itemsCreateNestedManyWithoutT_usersInput = {
    create?: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput> | t_inventory_itemsCreateWithoutT_usersInput[] | t_inventory_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutT_usersInput | t_inventory_itemsCreateOrConnectWithoutT_usersInput[]
    createMany?: t_inventory_itemsCreateManyT_usersInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsCreateNestedManyWithoutT_usersInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput> | t_wishlist_itemsCreateWithoutT_usersInput[] | t_wishlist_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutT_usersInput | t_wishlist_itemsCreateOrConnectWithoutT_usersInput[]
    createMany?: t_wishlist_itemsCreateManyT_usersInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type t_inventory_itemsUncheckedCreateNestedManyWithoutT_usersInput = {
    create?: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput> | t_inventory_itemsCreateWithoutT_usersInput[] | t_inventory_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutT_usersInput | t_inventory_itemsCreateOrConnectWithoutT_usersInput[]
    createMany?: t_inventory_itemsCreateManyT_usersInputEnvelope
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
  }

  export type t_wishlist_itemsUncheckedCreateNestedManyWithoutT_usersInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput> | t_wishlist_itemsCreateWithoutT_usersInput[] | t_wishlist_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutT_usersInput | t_wishlist_itemsCreateOrConnectWithoutT_usersInput[]
    createMany?: t_wishlist_itemsCreateManyT_usersInputEnvelope
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
  }

  export type t_inventory_itemsUpdateManyWithoutT_usersNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput> | t_inventory_itemsCreateWithoutT_usersInput[] | t_inventory_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutT_usersInput | t_inventory_itemsCreateOrConnectWithoutT_usersInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutT_usersInput | t_inventory_itemsUpsertWithWhereUniqueWithoutT_usersInput[]
    createMany?: t_inventory_itemsCreateManyT_usersInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutT_usersInput | t_inventory_itemsUpdateWithWhereUniqueWithoutT_usersInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutT_usersInput | t_inventory_itemsUpdateManyWithWhereWithoutT_usersInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUpdateManyWithoutT_usersNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput> | t_wishlist_itemsCreateWithoutT_usersInput[] | t_wishlist_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutT_usersInput | t_wishlist_itemsCreateOrConnectWithoutT_usersInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutT_usersInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutT_usersInput[]
    createMany?: t_wishlist_itemsCreateManyT_usersInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutT_usersInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutT_usersInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutT_usersInput | t_wishlist_itemsUpdateManyWithWhereWithoutT_usersInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutT_usersNestedInput = {
    create?: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput> | t_inventory_itemsCreateWithoutT_usersInput[] | t_inventory_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_inventory_itemsCreateOrConnectWithoutT_usersInput | t_inventory_itemsCreateOrConnectWithoutT_usersInput[]
    upsert?: t_inventory_itemsUpsertWithWhereUniqueWithoutT_usersInput | t_inventory_itemsUpsertWithWhereUniqueWithoutT_usersInput[]
    createMany?: t_inventory_itemsCreateManyT_usersInputEnvelope
    set?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    disconnect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    delete?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    connect?: t_inventory_itemsWhereUniqueInput | t_inventory_itemsWhereUniqueInput[]
    update?: t_inventory_itemsUpdateWithWhereUniqueWithoutT_usersInput | t_inventory_itemsUpdateWithWhereUniqueWithoutT_usersInput[]
    updateMany?: t_inventory_itemsUpdateManyWithWhereWithoutT_usersInput | t_inventory_itemsUpdateManyWithWhereWithoutT_usersInput[]
    deleteMany?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutT_usersNestedInput = {
    create?: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput> | t_wishlist_itemsCreateWithoutT_usersInput[] | t_wishlist_itemsUncheckedCreateWithoutT_usersInput[]
    connectOrCreate?: t_wishlist_itemsCreateOrConnectWithoutT_usersInput | t_wishlist_itemsCreateOrConnectWithoutT_usersInput[]
    upsert?: t_wishlist_itemsUpsertWithWhereUniqueWithoutT_usersInput | t_wishlist_itemsUpsertWithWhereUniqueWithoutT_usersInput[]
    createMany?: t_wishlist_itemsCreateManyT_usersInputEnvelope
    set?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    disconnect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    delete?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    connect?: t_wishlist_itemsWhereUniqueInput | t_wishlist_itemsWhereUniqueInput[]
    update?: t_wishlist_itemsUpdateWithWhereUniqueWithoutT_usersInput | t_wishlist_itemsUpdateWithWhereUniqueWithoutT_usersInput[]
    updateMany?: t_wishlist_itemsUpdateManyWithWhereWithoutT_usersInput | t_wishlist_itemsUpdateManyWithWhereWithoutT_usersInput[]
    deleteMany?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
  }

  export type m_packsCreateNestedOneWithoutT_wishlist_itemsInput = {
    create?: XOR<m_packsCreateWithoutT_wishlist_itemsInput, m_packsUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: m_packsCreateOrConnectWithoutT_wishlist_itemsInput
    connect?: m_packsWhereUniqueInput
  }

  export type m_rarityCreateNestedOneWithoutT_wishlist_itemsInput = {
    create?: XOR<m_rarityCreateWithoutT_wishlist_itemsInput, m_rarityUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: m_rarityCreateOrConnectWithoutT_wishlist_itemsInput
    connect?: m_rarityWhereUniqueInput
  }

  export type t_usersCreateNestedOneWithoutT_wishlist_itemsInput = {
    create?: XOR<t_usersCreateWithoutT_wishlist_itemsInput, t_usersUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: t_usersCreateOrConnectWithoutT_wishlist_itemsInput
    connect?: t_usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type m_packsUpdateOneRequiredWithoutT_wishlist_itemsNestedInput = {
    create?: XOR<m_packsCreateWithoutT_wishlist_itemsInput, m_packsUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: m_packsCreateOrConnectWithoutT_wishlist_itemsInput
    upsert?: m_packsUpsertWithoutT_wishlist_itemsInput
    connect?: m_packsWhereUniqueInput
    update?: XOR<XOR<m_packsUpdateToOneWithWhereWithoutT_wishlist_itemsInput, m_packsUpdateWithoutT_wishlist_itemsInput>, m_packsUncheckedUpdateWithoutT_wishlist_itemsInput>
  }

  export type m_rarityUpdateOneRequiredWithoutT_wishlist_itemsNestedInput = {
    create?: XOR<m_rarityCreateWithoutT_wishlist_itemsInput, m_rarityUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: m_rarityCreateOrConnectWithoutT_wishlist_itemsInput
    upsert?: m_rarityUpsertWithoutT_wishlist_itemsInput
    connect?: m_rarityWhereUniqueInput
    update?: XOR<XOR<m_rarityUpdateToOneWithWhereWithoutT_wishlist_itemsInput, m_rarityUpdateWithoutT_wishlist_itemsInput>, m_rarityUncheckedUpdateWithoutT_wishlist_itemsInput>
  }

  export type t_usersUpdateOneRequiredWithoutT_wishlist_itemsNestedInput = {
    create?: XOR<t_usersCreateWithoutT_wishlist_itemsInput, t_usersUncheckedCreateWithoutT_wishlist_itemsInput>
    connectOrCreate?: t_usersCreateOrConnectWithoutT_wishlist_itemsInput
    upsert?: t_usersUpsertWithoutT_wishlist_itemsInput
    connect?: t_usersWhereUniqueInput
    update?: XOR<XOR<t_usersUpdateToOneWithWhereWithoutT_wishlist_itemsInput, t_usersUpdateWithoutT_wishlist_itemsInput>, t_usersUncheckedUpdateWithoutT_wishlist_itemsInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type t_inventory_itemsCreateWithoutM_packsInput = {
    id?: bigint | number
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    m_rarity: m_rarityCreateNestedOneWithoutT_inventory_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_inventory_itemsInput
  }

  export type t_inventory_itemsUncheckedCreateWithoutM_packsInput = {
    id?: bigint | number
    user_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsCreateOrConnectWithoutM_packsInput = {
    where: t_inventory_itemsWhereUniqueInput
    create: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput>
  }

  export type t_inventory_itemsCreateManyM_packsInputEnvelope = {
    data: t_inventory_itemsCreateManyM_packsInput | t_inventory_itemsCreateManyM_packsInput[]
    skipDuplicates?: boolean
  }

  export type t_wishlist_itemsCreateWithoutM_packsInput = {
    id?: bigint | number
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    m_rarity: m_rarityCreateNestedOneWithoutT_wishlist_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_wishlist_itemsInput
  }

  export type t_wishlist_itemsUncheckedCreateWithoutM_packsInput = {
    id?: bigint | number
    user_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateOrConnectWithoutM_packsInput = {
    where: t_wishlist_itemsWhereUniqueInput
    create: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput>
  }

  export type t_wishlist_itemsCreateManyM_packsInputEnvelope = {
    data: t_wishlist_itemsCreateManyM_packsInput | t_wishlist_itemsCreateManyM_packsInput[]
    skipDuplicates?: boolean
  }

  export type t_inventory_itemsUpsertWithWhereUniqueWithoutM_packsInput = {
    where: t_inventory_itemsWhereUniqueInput
    update: XOR<t_inventory_itemsUpdateWithoutM_packsInput, t_inventory_itemsUncheckedUpdateWithoutM_packsInput>
    create: XOR<t_inventory_itemsCreateWithoutM_packsInput, t_inventory_itemsUncheckedCreateWithoutM_packsInput>
  }

  export type t_inventory_itemsUpdateWithWhereUniqueWithoutM_packsInput = {
    where: t_inventory_itemsWhereUniqueInput
    data: XOR<t_inventory_itemsUpdateWithoutM_packsInput, t_inventory_itemsUncheckedUpdateWithoutM_packsInput>
  }

  export type t_inventory_itemsUpdateManyWithWhereWithoutM_packsInput = {
    where: t_inventory_itemsScalarWhereInput
    data: XOR<t_inventory_itemsUpdateManyMutationInput, t_inventory_itemsUncheckedUpdateManyWithoutM_packsInput>
  }

  export type t_inventory_itemsScalarWhereInput = {
    AND?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
    OR?: t_inventory_itemsScalarWhereInput[]
    NOT?: t_inventory_itemsScalarWhereInput | t_inventory_itemsScalarWhereInput[]
    id?: BigIntFilter<"t_inventory_items"> | bigint | number
    user_id?: UuidFilter<"t_inventory_items"> | string
    pack_id?: StringFilter<"t_inventory_items"> | string
    card_no?: StringFilter<"t_inventory_items"> | string
    quantity?: IntFilter<"t_inventory_items"> | number
    card_name?: StringFilter<"t_inventory_items"> | string
    rarity_id?: StringFilter<"t_inventory_items"> | string
    image_url?: StringNullableFilter<"t_inventory_items"> | string | null
    created_at?: DateTimeFilter<"t_inventory_items"> | Date | string
    updated_at?: DateTimeFilter<"t_inventory_items"> | Date | string
  }

  export type t_wishlist_itemsUpsertWithWhereUniqueWithoutM_packsInput = {
    where: t_wishlist_itemsWhereUniqueInput
    update: XOR<t_wishlist_itemsUpdateWithoutM_packsInput, t_wishlist_itemsUncheckedUpdateWithoutM_packsInput>
    create: XOR<t_wishlist_itemsCreateWithoutM_packsInput, t_wishlist_itemsUncheckedCreateWithoutM_packsInput>
  }

  export type t_wishlist_itemsUpdateWithWhereUniqueWithoutM_packsInput = {
    where: t_wishlist_itemsWhereUniqueInput
    data: XOR<t_wishlist_itemsUpdateWithoutM_packsInput, t_wishlist_itemsUncheckedUpdateWithoutM_packsInput>
  }

  export type t_wishlist_itemsUpdateManyWithWhereWithoutM_packsInput = {
    where: t_wishlist_itemsScalarWhereInput
    data: XOR<t_wishlist_itemsUpdateManyMutationInput, t_wishlist_itemsUncheckedUpdateManyWithoutM_packsInput>
  }

  export type t_wishlist_itemsScalarWhereInput = {
    AND?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
    OR?: t_wishlist_itemsScalarWhereInput[]
    NOT?: t_wishlist_itemsScalarWhereInput | t_wishlist_itemsScalarWhereInput[]
    id?: BigIntFilter<"t_wishlist_items"> | bigint | number
    user_id?: UuidFilter<"t_wishlist_items"> | string
    pack_id?: StringFilter<"t_wishlist_items"> | string
    card_no?: StringFilter<"t_wishlist_items"> | string
    card_name?: StringFilter<"t_wishlist_items"> | string
    rarity_id?: StringFilter<"t_wishlist_items"> | string
    memo?: StringNullableFilter<"t_wishlist_items"> | string | null
    done?: BoolNullableFilter<"t_wishlist_items"> | boolean | null
    created_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
    updated_at?: DateTimeFilter<"t_wishlist_items"> | Date | string
  }

  export type t_inventory_itemsCreateWithoutM_rarityInput = {
    id?: bigint | number
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_inventory_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_inventory_itemsInput
  }

  export type t_inventory_itemsUncheckedCreateWithoutM_rarityInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsCreateOrConnectWithoutM_rarityInput = {
    where: t_inventory_itemsWhereUniqueInput
    create: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput>
  }

  export type t_inventory_itemsCreateManyM_rarityInputEnvelope = {
    data: t_inventory_itemsCreateManyM_rarityInput | t_inventory_itemsCreateManyM_rarityInput[]
    skipDuplicates?: boolean
  }

  export type t_wishlist_itemsCreateWithoutM_rarityInput = {
    id?: bigint | number
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_wishlist_itemsInput
    t_users: t_usersCreateNestedOneWithoutT_wishlist_itemsInput
  }

  export type t_wishlist_itemsUncheckedCreateWithoutM_rarityInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateOrConnectWithoutM_rarityInput = {
    where: t_wishlist_itemsWhereUniqueInput
    create: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput>
  }

  export type t_wishlist_itemsCreateManyM_rarityInputEnvelope = {
    data: t_wishlist_itemsCreateManyM_rarityInput | t_wishlist_itemsCreateManyM_rarityInput[]
    skipDuplicates?: boolean
  }

  export type t_inventory_itemsUpsertWithWhereUniqueWithoutM_rarityInput = {
    where: t_inventory_itemsWhereUniqueInput
    update: XOR<t_inventory_itemsUpdateWithoutM_rarityInput, t_inventory_itemsUncheckedUpdateWithoutM_rarityInput>
    create: XOR<t_inventory_itemsCreateWithoutM_rarityInput, t_inventory_itemsUncheckedCreateWithoutM_rarityInput>
  }

  export type t_inventory_itemsUpdateWithWhereUniqueWithoutM_rarityInput = {
    where: t_inventory_itemsWhereUniqueInput
    data: XOR<t_inventory_itemsUpdateWithoutM_rarityInput, t_inventory_itemsUncheckedUpdateWithoutM_rarityInput>
  }

  export type t_inventory_itemsUpdateManyWithWhereWithoutM_rarityInput = {
    where: t_inventory_itemsScalarWhereInput
    data: XOR<t_inventory_itemsUpdateManyMutationInput, t_inventory_itemsUncheckedUpdateManyWithoutM_rarityInput>
  }

  export type t_wishlist_itemsUpsertWithWhereUniqueWithoutM_rarityInput = {
    where: t_wishlist_itemsWhereUniqueInput
    update: XOR<t_wishlist_itemsUpdateWithoutM_rarityInput, t_wishlist_itemsUncheckedUpdateWithoutM_rarityInput>
    create: XOR<t_wishlist_itemsCreateWithoutM_rarityInput, t_wishlist_itemsUncheckedCreateWithoutM_rarityInput>
  }

  export type t_wishlist_itemsUpdateWithWhereUniqueWithoutM_rarityInput = {
    where: t_wishlist_itemsWhereUniqueInput
    data: XOR<t_wishlist_itemsUpdateWithoutM_rarityInput, t_wishlist_itemsUncheckedUpdateWithoutM_rarityInput>
  }

  export type t_wishlist_itemsUpdateManyWithWhereWithoutM_rarityInput = {
    where: t_wishlist_itemsScalarWhereInput
    data: XOR<t_wishlist_itemsUpdateManyMutationInput, t_wishlist_itemsUncheckedUpdateManyWithoutM_rarityInput>
  }

  export type m_packsCreateWithoutT_inventory_itemsInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutM_packsInput
  }

  export type m_packsUncheckedCreateWithoutT_inventory_itemsInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutM_packsInput
  }

  export type m_packsCreateOrConnectWithoutT_inventory_itemsInput = {
    where: m_packsWhereUniqueInput
    create: XOR<m_packsCreateWithoutT_inventory_itemsInput, m_packsUncheckedCreateWithoutT_inventory_itemsInput>
  }

  export type m_rarityCreateWithoutT_inventory_itemsInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityUncheckedCreateWithoutT_inventory_itemsInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityCreateOrConnectWithoutT_inventory_itemsInput = {
    where: m_rarityWhereUniqueInput
    create: XOR<m_rarityCreateWithoutT_inventory_itemsInput, m_rarityUncheckedCreateWithoutT_inventory_itemsInput>
  }

  export type t_usersCreateWithoutT_inventory_itemsInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_wishlist_items?: t_wishlist_itemsCreateNestedManyWithoutT_usersInput
  }

  export type t_usersUncheckedCreateWithoutT_inventory_itemsInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_wishlist_items?: t_wishlist_itemsUncheckedCreateNestedManyWithoutT_usersInput
  }

  export type t_usersCreateOrConnectWithoutT_inventory_itemsInput = {
    where: t_usersWhereUniqueInput
    create: XOR<t_usersCreateWithoutT_inventory_itemsInput, t_usersUncheckedCreateWithoutT_inventory_itemsInput>
  }

  export type m_packsUpsertWithoutT_inventory_itemsInput = {
    update: XOR<m_packsUpdateWithoutT_inventory_itemsInput, m_packsUncheckedUpdateWithoutT_inventory_itemsInput>
    create: XOR<m_packsCreateWithoutT_inventory_itemsInput, m_packsUncheckedCreateWithoutT_inventory_itemsInput>
    where?: m_packsWhereInput
  }

  export type m_packsUpdateToOneWithWhereWithoutT_inventory_itemsInput = {
    where?: m_packsWhereInput
    data: XOR<m_packsUpdateWithoutT_inventory_itemsInput, m_packsUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type m_packsUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutM_packsNestedInput
  }

  export type m_packsUncheckedUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutM_packsNestedInput
  }

  export type m_rarityUpsertWithoutT_inventory_itemsInput = {
    update: XOR<m_rarityUpdateWithoutT_inventory_itemsInput, m_rarityUncheckedUpdateWithoutT_inventory_itemsInput>
    create: XOR<m_rarityCreateWithoutT_inventory_itemsInput, m_rarityUncheckedCreateWithoutT_inventory_itemsInput>
    where?: m_rarityWhereInput
  }

  export type m_rarityUpdateToOneWithWhereWithoutT_inventory_itemsInput = {
    where?: m_rarityWhereInput
    data: XOR<m_rarityUpdateWithoutT_inventory_itemsInput, m_rarityUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type m_rarityUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutM_rarityNestedInput
  }

  export type m_rarityUncheckedUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutM_rarityNestedInput
  }

  export type t_usersUpsertWithoutT_inventory_itemsInput = {
    update: XOR<t_usersUpdateWithoutT_inventory_itemsInput, t_usersUncheckedUpdateWithoutT_inventory_itemsInput>
    create: XOR<t_usersCreateWithoutT_inventory_itemsInput, t_usersUncheckedCreateWithoutT_inventory_itemsInput>
    where?: t_usersWhereInput
  }

  export type t_usersUpdateToOneWithWhereWithoutT_inventory_itemsInput = {
    where?: t_usersWhereInput
    data: XOR<t_usersUpdateWithoutT_inventory_itemsInput, t_usersUncheckedUpdateWithoutT_inventory_itemsInput>
  }

  export type t_usersUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_wishlist_items?: t_wishlist_itemsUpdateManyWithoutT_usersNestedInput
  }

  export type t_usersUncheckedUpdateWithoutT_inventory_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_wishlist_items?: t_wishlist_itemsUncheckedUpdateManyWithoutT_usersNestedInput
  }

  export type t_inventory_itemsCreateWithoutT_usersInput = {
    id?: bigint | number
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_inventory_itemsInput
    m_rarity: m_rarityCreateNestedOneWithoutT_inventory_itemsInput
  }

  export type t_inventory_itemsUncheckedCreateWithoutT_usersInput = {
    id?: bigint | number
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsCreateOrConnectWithoutT_usersInput = {
    where: t_inventory_itemsWhereUniqueInput
    create: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput>
  }

  export type t_inventory_itemsCreateManyT_usersInputEnvelope = {
    data: t_inventory_itemsCreateManyT_usersInput | t_inventory_itemsCreateManyT_usersInput[]
    skipDuplicates?: boolean
  }

  export type t_wishlist_itemsCreateWithoutT_usersInput = {
    id?: bigint | number
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    m_packs: m_packsCreateNestedOneWithoutT_wishlist_itemsInput
    m_rarity: m_rarityCreateNestedOneWithoutT_wishlist_itemsInput
  }

  export type t_wishlist_itemsUncheckedCreateWithoutT_usersInput = {
    id?: bigint | number
    pack_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateOrConnectWithoutT_usersInput = {
    where: t_wishlist_itemsWhereUniqueInput
    create: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput>
  }

  export type t_wishlist_itemsCreateManyT_usersInputEnvelope = {
    data: t_wishlist_itemsCreateManyT_usersInput | t_wishlist_itemsCreateManyT_usersInput[]
    skipDuplicates?: boolean
  }

  export type t_inventory_itemsUpsertWithWhereUniqueWithoutT_usersInput = {
    where: t_inventory_itemsWhereUniqueInput
    update: XOR<t_inventory_itemsUpdateWithoutT_usersInput, t_inventory_itemsUncheckedUpdateWithoutT_usersInput>
    create: XOR<t_inventory_itemsCreateWithoutT_usersInput, t_inventory_itemsUncheckedCreateWithoutT_usersInput>
  }

  export type t_inventory_itemsUpdateWithWhereUniqueWithoutT_usersInput = {
    where: t_inventory_itemsWhereUniqueInput
    data: XOR<t_inventory_itemsUpdateWithoutT_usersInput, t_inventory_itemsUncheckedUpdateWithoutT_usersInput>
  }

  export type t_inventory_itemsUpdateManyWithWhereWithoutT_usersInput = {
    where: t_inventory_itemsScalarWhereInput
    data: XOR<t_inventory_itemsUpdateManyMutationInput, t_inventory_itemsUncheckedUpdateManyWithoutT_usersInput>
  }

  export type t_wishlist_itemsUpsertWithWhereUniqueWithoutT_usersInput = {
    where: t_wishlist_itemsWhereUniqueInput
    update: XOR<t_wishlist_itemsUpdateWithoutT_usersInput, t_wishlist_itemsUncheckedUpdateWithoutT_usersInput>
    create: XOR<t_wishlist_itemsCreateWithoutT_usersInput, t_wishlist_itemsUncheckedCreateWithoutT_usersInput>
  }

  export type t_wishlist_itemsUpdateWithWhereUniqueWithoutT_usersInput = {
    where: t_wishlist_itemsWhereUniqueInput
    data: XOR<t_wishlist_itemsUpdateWithoutT_usersInput, t_wishlist_itemsUncheckedUpdateWithoutT_usersInput>
  }

  export type t_wishlist_itemsUpdateManyWithWhereWithoutT_usersInput = {
    where: t_wishlist_itemsScalarWhereInput
    data: XOR<t_wishlist_itemsUpdateManyMutationInput, t_wishlist_itemsUncheckedUpdateManyWithoutT_usersInput>
  }

  export type m_packsCreateWithoutT_wishlist_itemsInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutM_packsInput
  }

  export type m_packsUncheckedCreateWithoutT_wishlist_itemsInput = {
    id: string
    pack_id: string
    pack_name?: string | null
    pack_image_url?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pack_no?: string | null
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutM_packsInput
  }

  export type m_packsCreateOrConnectWithoutT_wishlist_itemsInput = {
    where: m_packsWhereUniqueInput
    create: XOR<m_packsCreateWithoutT_wishlist_itemsInput, m_packsUncheckedCreateWithoutT_wishlist_itemsInput>
  }

  export type m_rarityCreateWithoutT_wishlist_itemsInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityUncheckedCreateWithoutT_wishlist_itemsInput = {
    id: string
    rarity: string
    cost: number
    cost_trade_power: number
    created_at?: Date | string
    updated_at?: Date | string
    rarity_id: string
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutM_rarityInput
  }

  export type m_rarityCreateOrConnectWithoutT_wishlist_itemsInput = {
    where: m_rarityWhereUniqueInput
    create: XOR<m_rarityCreateWithoutT_wishlist_itemsInput, m_rarityUncheckedCreateWithoutT_wishlist_itemsInput>
  }

  export type t_usersCreateWithoutT_wishlist_itemsInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_inventory_items?: t_inventory_itemsCreateNestedManyWithoutT_usersInput
  }

  export type t_usersUncheckedCreateWithoutT_wishlist_itemsInput = {
    id?: string
    username: string
    email?: string | null
    password_hash: string
    avatar_url?: string | null
    poke_poke_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    t_inventory_items?: t_inventory_itemsUncheckedCreateNestedManyWithoutT_usersInput
  }

  export type t_usersCreateOrConnectWithoutT_wishlist_itemsInput = {
    where: t_usersWhereUniqueInput
    create: XOR<t_usersCreateWithoutT_wishlist_itemsInput, t_usersUncheckedCreateWithoutT_wishlist_itemsInput>
  }

  export type m_packsUpsertWithoutT_wishlist_itemsInput = {
    update: XOR<m_packsUpdateWithoutT_wishlist_itemsInput, m_packsUncheckedUpdateWithoutT_wishlist_itemsInput>
    create: XOR<m_packsCreateWithoutT_wishlist_itemsInput, m_packsUncheckedCreateWithoutT_wishlist_itemsInput>
    where?: m_packsWhereInput
  }

  export type m_packsUpdateToOneWithWhereWithoutT_wishlist_itemsInput = {
    where?: m_packsWhereInput
    data: XOR<m_packsUpdateWithoutT_wishlist_itemsInput, m_packsUncheckedUpdateWithoutT_wishlist_itemsInput>
  }

  export type m_packsUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutM_packsNestedInput
  }

  export type m_packsUncheckedUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    pack_name?: NullableStringFieldUpdateOperationsInput | string | null
    pack_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pack_no?: NullableStringFieldUpdateOperationsInput | string | null
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutM_packsNestedInput
  }

  export type m_rarityUpsertWithoutT_wishlist_itemsInput = {
    update: XOR<m_rarityUpdateWithoutT_wishlist_itemsInput, m_rarityUncheckedUpdateWithoutT_wishlist_itemsInput>
    create: XOR<m_rarityCreateWithoutT_wishlist_itemsInput, m_rarityUncheckedCreateWithoutT_wishlist_itemsInput>
    where?: m_rarityWhereInput
  }

  export type m_rarityUpdateToOneWithWhereWithoutT_wishlist_itemsInput = {
    where?: m_rarityWhereInput
    data: XOR<m_rarityUpdateWithoutT_wishlist_itemsInput, m_rarityUncheckedUpdateWithoutT_wishlist_itemsInput>
  }

  export type m_rarityUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutM_rarityNestedInput
  }

  export type m_rarityUncheckedUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    cost_trade_power?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutM_rarityNestedInput
  }

  export type t_usersUpsertWithoutT_wishlist_itemsInput = {
    update: XOR<t_usersUpdateWithoutT_wishlist_itemsInput, t_usersUncheckedUpdateWithoutT_wishlist_itemsInput>
    create: XOR<t_usersCreateWithoutT_wishlist_itemsInput, t_usersUncheckedCreateWithoutT_wishlist_itemsInput>
    where?: t_usersWhereInput
  }

  export type t_usersUpdateToOneWithWhereWithoutT_wishlist_itemsInput = {
    where?: t_usersWhereInput
    data: XOR<t_usersUpdateWithoutT_wishlist_itemsInput, t_usersUncheckedUpdateWithoutT_wishlist_itemsInput>
  }

  export type t_usersUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_inventory_items?: t_inventory_itemsUpdateManyWithoutT_usersNestedInput
  }

  export type t_usersUncheckedUpdateWithoutT_wishlist_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    poke_poke_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    t_inventory_items?: t_inventory_itemsUncheckedUpdateManyWithoutT_usersNestedInput
  }

  export type t_inventory_itemsCreateManyM_packsInput = {
    id?: bigint | number
    user_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateManyM_packsInput = {
    id?: bigint | number
    user_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsUpdateWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_inventory_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_inventory_itemsNestedInput
  }

  export type t_inventory_itemsUncheckedUpdateWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUpdateWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
  }

  export type t_wishlist_itemsUncheckedUpdateWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutM_packsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsCreateManyM_rarityInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateManyM_rarityInput = {
    id?: bigint | number
    user_id: string
    pack_id: string
    card_no: string
    card_name: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsUpdateWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_inventory_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_inventory_itemsNestedInput
  }

  export type t_inventory_itemsUncheckedUpdateWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUpdateWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
    t_users?: t_usersUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
  }

  export type t_wishlist_itemsUncheckedUpdateWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutM_rarityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsCreateManyT_usersInput = {
    id?: bigint | number
    pack_id: string
    card_no: string
    quantity: number
    card_name: string
    rarity_id: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_wishlist_itemsCreateManyT_usersInput = {
    id?: bigint | number
    pack_id: string
    card_no: string
    card_name: string
    rarity_id: string
    memo?: string | null
    done?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type t_inventory_itemsUpdateWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_inventory_itemsNestedInput
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_inventory_itemsNestedInput
  }

  export type t_inventory_itemsUncheckedUpdateWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_inventory_itemsUncheckedUpdateManyWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUpdateWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    m_packs?: m_packsUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
    m_rarity?: m_rarityUpdateOneRequiredWithoutT_wishlist_itemsNestedInput
  }

  export type t_wishlist_itemsUncheckedUpdateWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type t_wishlist_itemsUncheckedUpdateManyWithoutT_usersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pack_id?: StringFieldUpdateOperationsInput | string
    card_no?: StringFieldUpdateOperationsInput | string
    card_name?: StringFieldUpdateOperationsInput | string
    rarity_id?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    done?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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