import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { useQuery, Error } from 'react-admin'
import _reduce from 'lodash/reduce'
import { Typography } from '@material-ui/core'

const ReferenceField = ({ initialValue, query, onChange, name, labelField, nullOptionLabel }) => {
  const { data, loading, error } = useQuery(query)

  if (loading)
    return (
      <Typography variant='body2' style={{ marginTop: 35 }}>
        Cargando...
      </Typography>
    )
  if (error) return <Error />
  if (!data) return null
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
    <FormControl fullWidth margin='normal' required variant='outlined'>
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
    </FormControl>
  )
}

export default ReferenceField
