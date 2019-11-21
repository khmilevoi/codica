import { initialState } from "constants/initialState";
import { weather } from "constants/actionTypes";

export const weatherReducer = (
  state = initialState.weather,
  { type, payload }
) => {
  switch (type) {
    case weather.ADD_CITIES: {
      const cities = Array.from(state.cities);

      payload.forEach(newCity => {
        const index = cities.findIndex(city => city.id === newCity.id);

        if (index !== -1) {
          cities[index] = newCity;
        } else {
          cities.push(newCity);
        }
      });

      return { cities };
    }

    case weather.REMOVE_CITY: {
<<<<<<< HEAD
      const cities = Array.from(state.cities);
      const index = cities.findIndex(city => city.id === payload.id);

      if (index !== -1) {
        cities.splice(index, 1);
      }
=======
      const cities = Array.from(state.cities).filter(
        city => city.id !== payload
      );
>>>>>>> dev

      return { cities };
    }

    default: {
      return state;
    }
  }
};
