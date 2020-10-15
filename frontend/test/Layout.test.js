import React from 'react';
import { render } from '@testing-library/react';
import Page from '../components/Page';
import { shallow, mount } from 'enzyme';

it('console logs what it looks like', () => {
    const wrapper = mount(<Page />);
    console.log(wrapper.debug());
})
