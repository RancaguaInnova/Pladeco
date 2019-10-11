import People from '@material-ui/icons/People'
import React, { Component } from 'react'

import create from './create'
import edit from './edit'
import list from './list'
import show from './show'

export default {
  list: list,
  create: create,
  edit: edit,
  icon: People,
  show: show,
  options: { label: 'Usuarios' }
}
