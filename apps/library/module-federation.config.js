module.exports = {
  name: 'library',
  exposes: {
    './Module': 'apps/library/src/app/remote-entry/entry.module.ts',
  },
};
