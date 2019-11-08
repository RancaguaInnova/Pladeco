import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router-dom'
import { translate, DashboardMenuItem, MenuItemLink, Responsive } from 'react-admin'
import SubMenu from './SubMenu'
import Action from '../action'
import Activity from '../activity'
import Area from '../area'
import Deparment from '../department'
import Objective from '../objective'
//import Responsible from '../responsible'
import Line from '../line'
import WorkPlan from '../workPlan'
//import Dashboard from '../dashboard'
import Roles from '../roles'
import Profile from '../profile'
import Users from '../users'

class Menu extends Component {
  state = {
    menuAccion: false
  }

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
  }

  handleToggle = menu => {
    this.setState(state => ({ [menu]: !state[menu] }))
  }

  render() {
    const { onMenuClick, open, logout } = this.props
    return (
      <div>
        <DashboardMenuItem onClick={onMenuClick} />
        <MenuItemLink
          to={`/workplans`}
          primaryText={WorkPlan.options.label}
          leftIcon={<WorkPlan.icon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={`/areas`}
          primaryText={Area.options.label}
          leftIcon={<Area.icon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={`/lines`}
          primaryText={Line.options.label}
          leftIcon={<Line.icon />}
          onClick={onMenuClick}
        />

        <MenuItemLink
          to={`/objectives`}
          primaryText={Objective.options.label}
          leftIcon={<Objective.icon />}
          onClick={onMenuClick}
        />

        <SubMenu
          handleToggle={() => this.handleToggle('menuAccion')}
          isOpen={this.state.menuAccion}
          sidebarIsOpen={open}
          name='Acciones'
          icon={<Action.icon />}
        >
          <MenuItemLink
            to={`/actions`}
            primaryText='Configurar Acciones'
            leftIcon={<Action.icon />}
            onClick={onMenuClick}
          />
          <MenuItemLink
            to={`/AccionValidation`}
            primaryText='Validar acciones'
            leftIcon={<Action.icon />}
            onClick={onMenuClick}
          />
        </SubMenu>
        <MenuItemLink
          to={`/activities`}
          primaryText={Activity.options.label}
          leftIcon={<Activity.icon />}
          onClick={onMenuClick}
        />

        <MenuItemLink
          to={`/departments`}
          primaryText={Deparment.options.label}
          leftIcon={<Deparment.icon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={`/roles`}
          primaryText={Roles.options.label}
          leftIcon={<Roles.icon />}
          onClick={onMenuClick}
        />
        <MenuItemLink
          to={`/users`}
          primaryText={Users.options.label}
          leftIcon={<Users.icon />}
          onClick={onMenuClick}
        />

        <Responsive
          xsmall={
            <MenuItemLink
              to='/profile'
              primaryText='Configuración'
              leftIcon={<Profile.icon />}
              onClick={onMenuClick}
            />
          }
          medium={null}
        />
        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  theme: state.theme,
  locale: state.i18n.locale
})

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    {}
  ),
  translate
)

export default enhance(Menu)
