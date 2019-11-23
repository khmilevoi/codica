import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchCities, removeCity } from "store/actions/weather";
import { fetchHourlyForecast } from "store/actions/currentCity";
import { Widget } from "./Widget";

import { Section, Container } from "styles/Index";

const WidgetPanel = ({
  cities,
  fetchCities,
  removeCity,
  fetchHourlyForecast
}) => {
  return (
    <Section>
      <Container>
        <Grid container spacing={1}>
          {cities.map(city => (
            <Widget
              key={city.id}
              city={city}
              handleUpdate={() => fetchCities(city.id)}
              handleRemove={() => removeCity(city.id)}
              handleClick={() => fetchHourlyForecast(city.id)}
            ></Widget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

WidgetPanel.propTypes = {
  cities: PropTypes.array.isRequired,
  fetchCities: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  fetchHourlyForecast: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cities: state.weather.cities });

const mapDispatchToProps = {
  fetchCities,
  removeCity,
  fetchHourlyForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPanel);
