const buildActionNames = (baseName) => ({
  failure: `${baseName}_FAILURE`,
  request: `${baseName}_REQUEST`,
  success: `${baseName}_SUCCESS`
});

const buildActions = (actionNames) => ({
  failure: (err) => ({
    err,
    type: actionNames.failure
  }),
  request: () => ({
    type: actionNames.request
  }),
  success: (data) => ({
    data,
    type: actionNames.success
  })
});

const createAsyncAction = (actionNames, asyncFn) => {
  const actions = buildActions(actionNames);

  const actionCreator = (dispatch, getState) => {
    dispatch(actions.request());
    const state = getState();

    return asyncFn(state)
      .then((result) => {
        dispatch(actions.success(result));

        return {
          data: result,
          ok: true
        };
      })
      .catch((err) => {
        dispatch(actions.failure(err));

        return {
          data: err,
          ok: false
        };
      });
  };

  return actionCreator;
};

export {
  buildActionNames,
  buildActions,
  createAsyncAction
};
