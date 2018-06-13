import faker from 'faker';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_CLIENTS } from '../constants/actionTypes';

const TEST_GRADES = ['A', 'B', 'C', 'D', 'F'];

const getClients = () => (
  createAsyncAction(GET_CLIENTS, () => (
    new Promise((resolve) => {
      setTimeout(() => {
        const clients = [];

        for (let i = 0; i < 100; i += 1) {
          clients.push({
            city: faker.address.city(),
            grade: TEST_GRADES[Math.floor(Math.random() * TEST_GRADES.length)],
            id: i,
            lastContacted: faker.date.past().getTime(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            state: faker.address.state()
          });
        }

        resolve({ clients });
      }, 2000);
    })
  ))
);

export default {
  getClients
};
