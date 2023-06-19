import joi from 'joi'



export const registrationSchema = joi.object({
username:joi.string().required().min(3),
email:joi.string().email().required(),
password:joi.string().pattern(new  RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`))

})

export const resetPasswordSchema = joi.object({
    email:joi.string().email().required(),
    newPassword:joi.string().pattern(new  RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`))
    })
    