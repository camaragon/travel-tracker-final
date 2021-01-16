import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import {destinationData} from './test-data';

describe('Destination', () => {
    let destination;
  
    beforeEach(() => {
        destination = new Destination(destinationData);
    });
});