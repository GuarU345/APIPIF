import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MensajeRegisterValidator from './MensajesValidator'

export default class RegisterValidator extends MensajeRegisterValidator{
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    username: schema.string({ trim: true}, [
      rules.maxLength(50),
      rules.minLength(5),
      rules.unique({ table: 'usuarios', column: 'username' }),
      rules.regex(/^[a-zA-Z0-9-_]+$/),
    ]),
    email: schema.string({ trim: true }, [rules.unique({ table: 'usuarios', column: 'email' })]),
    password: schema.string({}, [rules.minLength(8)])
  })
}
