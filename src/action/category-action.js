'use strict';

import uuid from 'uuid/v4';

export const create = ({ name, budget }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: uuid(),
      name,
      timestamp: new Date(),
      budget,
    },
  };
};
export const update = (section) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: section,
  };
};

export const remove = (section) => {
  return {
    type: 'CATEGORY_REMOVE',
    payload: section,
  };
};
