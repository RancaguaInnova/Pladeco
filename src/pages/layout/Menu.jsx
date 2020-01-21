import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";
import { DashboardMenuItem, MenuItemLink, Responsive } from "react-admin";
import Action from "../action";
import Activity from "../activity";
import Area from "../area";
import Deparment from "../department";
import Objective from "../objective";
import Line from "../line";
import WorkPlan from "../workPlan";
import Roles from "../roles";
import Profile from "../profile";
import Users from "../users";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAccion: false,
      permissions: []
    };
  }

  static propTypes = {
    logout: PropTypes.object,
    onMenuClick: PropTypes.func
  };

  handleToggle = menu => {
    this.setState(state => ({
      [menu]: !state[menu]
    }));
  };

  componentDidMount() {
    this.setState({ permissions: JSON.parse(localStorage.getItem('permissions')) }, function () {
    })



  }

  render() {
    const { onMenuClick, logout } = this.props;
    const { permissions } = this.state

    return (
      <div>

        <DashboardMenuItem onClick={onMenuClick} />
        {permissions && permissions.workplans && permissions.workplans.list === true ? (
          <MenuItemLink
            to={`/workplans`}
            primaryText={WorkPlan.options.label}
            leftIcon={<WorkPlan.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.areas && permissions.areas.list === true ? (
          <MenuItemLink
            to={`/areas`}
            primaryText={Area.options.label}
            leftIcon={<Area.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.lines && permissions.lines.list === true ? (
          <MenuItemLink
            to={`/lines`}
            primaryText={Line.options.label}
            leftIcon={<Line.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.objectives && permissions.objectives.list === true ? (
          <MenuItemLink
            to={`/objectives`}
            primaryText={Objective.options.label}
            leftIcon={<Objective.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.actions && permissions.actions.list === true ? (
          <MenuItemLink
            to={`/actions`}
            primaryText={Action.options.label}
            leftIcon={<Action.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.activities && permissions.activities.list === true ? (
          <MenuItemLink
            to={`/activities`}
            primaryText={Activity.options.label}
            leftIcon={<Activity.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.departments && permissions.departments.list === true ? (
          <MenuItemLink
            to={`/departments`}
            primaryText={Deparment.options.label}
            leftIcon={<Deparment.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        {permissions && permissions.roles && permissions.roles.list === true ? (
          <MenuItemLink
            to={`/roles`}
            primaryText={Roles.options.label}
            leftIcon={<Roles.icon />}
            onClick={onMenuClick}
          />

        ) : ''}
        {permissions && permissions.users && permissions.users.list === true ? (
          <MenuItemLink
            to={`/users`}
            primaryText={Users.options.label}
            leftIcon={<Users.icon />}
            onClick={onMenuClick}
          />
        ) : ''}
        <Responsive
          xsmall={
            <MenuItemLink
              to="/profile"
              primaryText="Configuración"
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
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.admin.ui.sidebarOpen,
    theme: state.theme
  };
};
const enhance = compose(withRouter, connect(mapStateToProps, {}));
export default enhance(Menu);
