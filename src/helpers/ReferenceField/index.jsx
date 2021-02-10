import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { useQuery } from 'react-admin'
import _reduce from 'lodash/reduce'

const ReferenceField = ({ initialValue, query, onChange, name, labelField, nullOptionLabel }) => {
  const { data, loading, error } = useQuery(query)

  if (loading) return <div style={{ marginTop: 35 }}>Cargando...</div>
  if (error || !data) return null

  const choices = _reduce(
    data,
    (alternatives, document, index) => {
      alternatives.push(
        <option key={index} value={document.id}>
          {document[labelField]}
        </option>
      )
      return alternatives
    },
    []
  )

  return (
    <div>
      <InputLabel htmlFor={`selector-${name}`}>{name}</InputLabel>
      <NativeSelect
        defaultValue={initialValue || null}
        inputProps={{
          name: `${name}`,
          id: `${name}-selector`
        }}
        label={`Seleccione ${name}`}
        onChange={e => onChange(e.target.value === `${nullOptionLabel}` ? null : e.target.value)}
        fullWidth
      >
        {[
          <option key='none' value={null}>
            {nullOptionLabel}
          </option>,
          ...choices
        ]}
      </NativeSelect>
    </div>
  )
}

export default ReferenceField
