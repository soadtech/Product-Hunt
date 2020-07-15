export default function validarCrearCuenta(valores) {
  let errores = {};

  //validar nombre
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  } else if (!/^[a-z ,.'-]+$/i.test(valores.nombre)) {
    errores.nombre = "Nombre no valido";
  }

  //validar email
  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no valido";
  }

  //validar password
  if (!valores.password) {
    errores.password = "El password es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "El password debe ser mayor a 6 caracteres";
  }
  return errores;
}
