import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { css } from "@emotion/core";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/UI/Formulario";
import firebase from "../server/firebase";

import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const NuevoProducto = () => {
  const [error, setError] = useState(false);

  const STATE_INICIAL = {
    nombre: "",
    empresa: "",
    imagen: "",
    url: "",
    descripcion: "",
  };
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, empresa, iamgen, url, descripcion } = valores;

  async function crearCuenta() {}

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear Producto
          </h1>
          <Formulario onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informacion General</legend>

              <Campo>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.nombre && <Error>{errores.nombre}</Error>}

              <Campo>
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  placeholder="Nombre Empresa"
                  name="empresa"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.empresa && <Error>{errores.empresa}</Error>}

              <Campo>
                <label htmlFor="imagen">Imagen</label>
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.imagen && <Error>{errores.imagen}</Error>}

              <Campo>
                <label htmlFor="url">URL</label>
                <input
                  type="url"
                  id="url"
                  placeholder="url"
                  name="url"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.url && <Error>{errores.url}</Error>}
            </fieldset>

            <fieldset>
              <legend>Sobre tu Producto</legend>

              <Campo>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="descripcion"
                  placeholder="descripcion"
                  name="descripcion"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </Campo>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}
            </fieldset>

            {error && <Error>{error}</Error>}

            <InputSubmit type="submit" value="Crear Producto" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default NuevoProducto;
