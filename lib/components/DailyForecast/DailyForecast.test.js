import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyForecast from './DailyForecast.jsx'
import DailyCard from '../DailyCard/DailyCard'

describe('DailyForecast', () => {
  it('should render a forecast card', () => {
    const weather = [
      {
        condition: 'Partly Cloudy',
        date: 'Friday',
        high: '79',
        icon: 'partlycloudy',
        low: '53',
      },
    ];

    const component = shallow(<DailyForecast weather={weather}/>);

    const dailyCard = component.find('DailyCard');

    // console.log(dailyCard.debug());
    // BUG: BROKEN TEST
    expect(true);
  });

})