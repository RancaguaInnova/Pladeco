// A custom action creator which modifies the values before calling the default crudCreate action creator
import React, { Component } from 'react'
import { crudCreate, SaveButton } from 'react-admin'
import { connect } from 'react-redux'

const saveWithLocation = (values, basePath, redirectTo) =>
  crudCreate('activities', values, basePath, redirectTo)

class SaveWithLocationButtonView extends Component {
  handleClick = () => {
    const { basePath, redirect, saveWithLocation, datos } = this.props
    return saveWithLocation(datos, basePath, redirect)
  }

  render() {
    const { handleSubmitWithRedirect, saveWithLocation, ...props } = this.props
    return <SaveButton handleSubmitWithRedirect={this.handleClick} {...props} />
  }
}

const SaveWithLocationButton = connect(
  undefined,
  { saveWithLocation }
)(SaveWithLocationButtonView)

export default SaveWithLocationButton
