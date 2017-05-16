import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello World:', function () {

  it('renders without exploding', () => {
    expect(shallow(<Hello />)).toHaveLength(1);
  });

  it('should render with default text', function () {
    const component = shallow(<Hello />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Partner');

    expect(component).toHaveState('greeting', 'Howdy!!');
  });

  it('should render with our props', function () {
    const component = shallow(
      <Hello friend="Fred"/>
    );

    expect(component).toIncludeText('Howdy');

    expect(component).toIncludeText('Fred');
    expect(component).not.toIncludeText('Partner');
  });

  it('should render to match the snapshot', function () {
    const component = shallow(<Hello friend="Luke"/>);

    expect(component).toMatchSnapshot();
  });

});
