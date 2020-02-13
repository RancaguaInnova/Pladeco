import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormHelperText from '@material-ui/core/FormHelperText'
import { useQuery, Loading, Error } from 'react-admin'
import _reduce from 'lodash/reduce'

const ReferenceField = ({ query, onChange, name, labelField, nullOptionLabel, helperText }) => {
  const { data, loading, error } = useQuery(query)

  if (loading) return <Loading />
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
      <Typography variant='h5'>{name}</Typography>
      <NativeSelect
        defaultValue={null}
        inputProps={{
          name: `${name}`,
          id: `${name}-selector`
        }}
        label={`Seleccione ${name}`}
        onChange={e => onChange(e.target.value === `${nullOptionLabel}` ? null : e.target.value)}
      >
        {[
          <option key='none' value={null}>
            {nullOptionLabel}
          </option>,
          ...choices
        ]}
      </NativeSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default ReferenceField
