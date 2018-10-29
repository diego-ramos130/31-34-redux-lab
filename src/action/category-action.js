'use strict';

import uuid from 'uuid/v5';

export const create = ({ name }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: uuid(),
      name,
      timestamp: new Date(),
      budget: 0,
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
