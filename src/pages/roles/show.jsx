import React from 'react'
import { Show, TextField, SimpleShowLayout, BooleanField, Labeled } from 'react-admin'

const RolesShow = props => (
  <Show {...props} title='Roles'>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' defaultValue='' />
      <Labeled label='Plan de trabajo'>
        <BooleanField label='Crear' source='workplans.create' className='column16' />
        <BooleanField label='Listar' source='workplans.list' className='column16' />
        <BooleanField label='Editar' source='workplans.edit' className='column16' />
        <BooleanField label='Mostrar' source='workplans.show' className='column16' />
        <BooleanField label='Eliminar' source='workplans.delete' className='column16' />
        <BooleanField label='Habilitado' source='workplans.enabled' className='column16' />
      </Labeled>
      <Labeled label='Areas'>
        <span className='flex'>
          <BooleanField label='Crear' source='areas.create' className='column16' />
          <BooleanField label='Listar' source='areas.list' className='column16' />
          <BooleanField label='Editar' source='areas.edit' className='column16' />
          <BooleanField label='Mostrar' source='areas.show' className='column16' />
          <BooleanField label='Eliminar' source='areas.delete' className='column16' />
          <BooleanField label='Habilitado' source='areas.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Lineas'>
        <span className='flex'>
          <BooleanField label='Crear' source='lines.create' className='column16' />
          <BooleanField label='Listar' source='lines.list' className='column16' />
          <BooleanField label='Editar' source='lines.edit' className='column16' />
          <BooleanField label='Mostrar' source='lines.show' className='column16' />
          <BooleanField label='Eliminar' source='lines.delete' className='column16' />
          <BooleanField label='Habilitado' source='lines.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Objetivos'>
        <span className='flex'>
          <BooleanField label='Crear' source='objectives.create' className='column16' />
          <BooleanField label='Listar' source='objectives.list' className='column16' />
          <BooleanField label='Editar' source='objectives.edit' className='column16' />
          <BooleanField label='Mostrar' source='objectives.show' className='column16' />
          <BooleanField label='Eliminar' source='objectives.delete' className='column16' />
          <BooleanField label='Habilitado' source='objectives.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Acciones'>
        <span className='flex'>
          <BooleanField label='Crear' source='actions.create' className='column16' />
          <BooleanField label='Listar' source='actions.list' className='column16' />
          <BooleanField label='Editar' source='actions.edit' className='column16' />
          <BooleanField label='Mostrar' source='actions.show' className='column16' />
          <BooleanField label='Eliminar' source='actions.delete' className='column16' />
          <BooleanField label='Habilitado' source='actions.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Actividades'>
        <span className='flex'>
          <BooleanField label='Crear' source='activities.create' className='column16' />
          <BooleanField label='Listar' source='activities.list' className='column16' />
          <BooleanField label='Editar' source='activities.edit' className='column16' />
          <BooleanField label='Mostrar' source='activities.show' className='column16' />
          <BooleanField label='Eliminar' source='activities.delete' className='column16' />
          <BooleanField label='Habilitado' source='activities.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Usuarios'>
        <span className='flex'>
          <BooleanField label='Crear' source='users.create' className='column16' />
          <BooleanField label='Listar' source='users.list' className='column16' />
          <BooleanField label='Editar' source='users.edit' className='column16' />
          <BooleanField label='Mostrar' source='users.show' className='column16' />
          <BooleanField label='Eliminar' source='users.delete' className='column16' />
          <BooleanField label='Habilitado' source='users.enabled' className='column16' />
        </span>
      </Labeled>
      <Labeled label='Departamentos'>
        <span className='flex'>
          <BooleanField label='Crear' source='departments.create' className='column16' />
          <BooleanField label='Listar' source='departments.list' className='column16' />
          <BooleanField label='Editar' source='departments.edit' className='column16' />
          <BooleanField label='Mostrar' source='departments.show' className='column16' />
          <BooleanField label='Eliminar' source='departments.delete' className='column16' />
          <BooleanField label='Habilitado' source='departments.enabled' className='column16' />
        </span>
      </Labeled>
    </SimpleShowLayout>
  </Show>
)
export default RolesShow
