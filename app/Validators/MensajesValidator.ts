export default class MensajeRegisterValidator{
    public messages = {
        unique: 'Ya existe en la base de datos el email',
        maxLength: 'Te has pasado del limite',
        minLength: 'Como minimo se requiere 8 caracteres en la contraseña'
    }
}