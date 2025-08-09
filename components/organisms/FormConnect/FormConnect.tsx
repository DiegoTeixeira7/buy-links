'use client'

import React from 'react'
import '@/styles/components/FormConnect.scss'
// import { FormConnect as FormConnectProps } from '@/interfaces/FormConnect'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { notify } from '@/utils/notification'
import { FormConnectSchema } from '@/interfaces/Input'
import { Field } from '@/components/atoms/Field'

const MainDataSchema = Yup.object().shape({
  link: Yup.string().url('Url inválido').required('Campo Obrigatório'),
  fee: Yup.number().required('Campo Obrigatório'),
})

const FormConnect: React.FC = () => {
  const onSubmit = async (values: FormConnectSchema) => {
    try {
      //
    } catch (e) {
      notify('Preencha as informações corretamente', 'error')
    }
  }

  const formik = useFormik<FormConnectSchema>({
    initialValues: {
      link: '',
      fee: undefined,
    },
    validationSchema: MainDataSchema,
    onSubmit,
    validateOnChange: false,
  })

  return (
    <section id="formConnect" className="formConnect">
      <div className="formConnectCard">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Field extraClass={`${formik.errors.link ? 'error' : ''}`}>
              <label htmlFor="">link</label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder="www.google.com"
                onChange={(e) => {
                  formik.handleChange(e)
                }}
                value={formik.values.link}
              />
            </Field>
            <Field extraClass={`${formik.errors.fee ? 'error' : ''}`}>
              <label htmlFor="">Fee</label>
              <input
                type="number"
                id="fee"
                name="fee"
                onChange={(e) => {
                  formik.handleChange(e)
                }}
                value={formik.values.fee}
              />
            </Field>
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FormConnect
