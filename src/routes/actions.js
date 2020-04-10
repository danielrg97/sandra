import Router from './historyRouter';

export const redirectTo = (path) => {
    return () => Router.push(path);
}