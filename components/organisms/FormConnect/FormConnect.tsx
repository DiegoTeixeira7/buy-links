'use client'

import React from 'react'
import '@/styles/components/FormConnect.scss'
// import { FormConnect as FormConnectProps } from '@/interfaces/FormConnect'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { notify } from '@/utils/notification'
import { FormConnectSchema } from '@/interfaces/Input'
import { Field } from '@/components/atoms/Field'
import { addLink } from '@/lib/web3/Web3Service'
import { linkToShortHash } from '@/utils/hash'

const MainDataSchema = Yup.object().shape({
  link: Yup.string().optional(),
  fee: Yup.number().optional(),
})

const FormConnect: React.FC = () => {
  const onSubmit = async (values: FormConnectSchema) => {
    try {
      const linkId = linkToShortHash(values.link)
      const data = await addLink(values.link, linkId, values.fee as number)
    } catch (e) {
      notify('Preencha as informações corretamente', 'error')
    }
  }

  const formik = useFormik<FormConnectSchema>({
    initialValues: {
      link: '',
      fee: 0,
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
