const validation = (form) => {
    const { nombre, image, summary, Healthscore, steps, typediet } = form
    const errors = {
        nombre: "",
        image: "",
        summary: "",
        Healthscore: "",
        steps: "",
        typediet: "",
    }
    //nombre
    if (!nombre)
        errors.nombre = 'El nombre es obligatorio'
    if (nombre.length > 20)
        errors.nombre = 'Debe contener un maximo de 50 caracteres'
    if (!/^[A-Za-z\s]*$/.test(nombre))
        errors.nombre = 'El nombre solo puede contener letras y espacios'
    //image
    if (!/^https?:\/\/.*$/.test(image))
        errors.image = 'La URL de la imagen no es válida'
    if (!image)
        errors.image = ''
    //summary
    if (summary.length <= 10)
        errors.summary = 'Debe contener un minimo de 10 caracteres'
    if (summary.length > 100)
        errors.summary = 'Debe contener un maximo de 100 caracteres'
    if (!summary)
        errors.summary = 'la descripcion es obligatorio'
    //Healthscore
    if (Healthscore > 100)
        errors.Healthscore = 'solo puede tener un maximo de 100 puntos '
    //steps
    if (!steps.length)
        errors.steps = 'Debe contener los pasos de elaboracion'
    //typediet
    if (!typediet)
        errors.typediet = 'Debe contener al menos un tipo de dieta '
    if (typediet.length > 1)
        errors.typediet = ''










    return errors
}
export default validation

