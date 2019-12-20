import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'

const autocompleteService = { current: null }
const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  }
}))

export default function GoogleMaps({ record }, props) {
  const classes = useStyles()

  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState([])
  const [location, setLocation] = React.useState(record.location)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const fetch = React.useMemo(
    () =>
      throttle((input, callback) => {
        autocompleteService.current.getPlacePredictions(input, callback)
      }, 200),
    []
  )

  React.useEffect(() => {
    let active = true

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService()
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions([])
      return undefined
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        setOptions(results || [])
      }
    })

    return () => {
      active = false
    }
  }, [inputValue, fetch])

  const selectItem = async item => {
    let location = await geocodeByPlaceId(item.place_id)
    let r = {
      name: item.description,
      lat: location[0].geometry.location.lat(),
      lng: location[0].geometry.location.lng()
    }
    setLocation(r)
  }

  const geocodeByPlaceLocation = LatLng => {
    const geocoder = new window.google.maps.Geocoder()
    const OK = window.google.maps.GeocoderStatus.OK

    return new Promise((resolve, reject) => {
      geocoder.geocode({ location: LatLng }, (results, status) => {
        if (status !== OK) {
          reject(status)
        }
        resolve(results)
      })
    })
  }

  const geocodeByPlaceId = placeId => {
    const geocoder = new window.google.maps.Geocoder()
    const OK = window.google.maps.GeocoderStatus.OK

    return new Promise((resolve, reject) => {
      geocoder.geocode({ placeId }, (results, status) => {
        if (status !== OK) {
          reject(status)
        }
        resolve(results)
      })
    })
  }

  const clear = () => {
    setLocation({ name: '', lat: '', lng: '' })
    setInputValue('')
  }

  const myLocation = () => {
    var startPos
    var geoOptions = {
      enableHighAccuracy: true
    }

    var geoSuccess = async function(position) {
      startPos = position
      var latlng = new window.google.maps.LatLng(
        startPos.coords.latitude,
        startPos.coords.longitude
      )
      try {
        let location = await geocodeByPlaceLocation(latlng)
        let r = {
          name: location[0].formatted_address,
          lat: location[0].geometry.location.lat(),
          lng: location[0].geometry.location.lng()
        }
        setLocation(r)
      } catch (e) {
        console.log('Error occurred. Error : ' + e)
      }
    }
    var geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code)
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions)
  }

  return (
    <div className='inputsLocationMap'>
      <div className='AutocompleteDiv'>
        <Autocomplete
          id='google-map-demo'
          getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
          filterOptions={x => x}
          options={options}
          autoComplete
          includeInputInList
          freeSolo
          disableOpenOnFocus
          renderInput={params => {
            return (
              <TextField
                {...params}
                label='Buscar ubicación'
                fullWidth
                onChange={handleChange}
                className='TextInput inputLocation'
              />
            )
          }}
          renderOption={option => {
            const matches = option.structured_formatting.main_text_matched_substrings
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map(match => [match.offset, match.offset + match.length])
            )

            return (
              <Grid container alignItems='center' onClick={() => selectItem(option)}>
                <Grid item>
                  <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                      {part.text}
                    </span>
                  ))}

                  <Typography variant='body2' color='textSecondary'>
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            )
          }}
        />
        <Button variant='contained' color='primary' className='buttonMyLocation' onClick={clear}>
          Limpiar
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className='buttonMyLocation'
          onClick={myLocation}
        >
          Usar mi ubicación actual
        </Button>
      </div>

      <TextField
        name='location.name'
        label='Dirección'
        value={location && location.name ? location.name : ''}
        onChange={e => {
          let l = { ...location }
          l.name = e.target.value
          setLocation(l)
        }}
        className='TextInput inputLocation'
      />
      <TextField
        name='location.lat'
        label='latitude'
        disabled
        value={location && location.lat ? location.lat : ''}
        onChange={e => {
          let l = { ...location }
          l.lat = e.target.value
          setLocation(l)
        }}
        className='TextInput inputLocation'
      />
      <TextField
        name='location.lng'
        label='longitude'
        disabled
        value={location && location.lng ? location.lng : ''}
        onChange={e => {
          let l = { ...location }
          l.lng = e.target.value
          setLocation(l)
        }}
        className='TextInput inputLocation'
      />
    </div>
  )
}
