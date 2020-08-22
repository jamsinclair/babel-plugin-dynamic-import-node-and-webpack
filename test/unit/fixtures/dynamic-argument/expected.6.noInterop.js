typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${MODULE}`));
  });
}) : Promise.resolve(`${MODULE}`).then(s => require(s));

let i = 0;
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${i++}`));
  });
}) : Promise.resolve(`${i++}`).then(s => require(s));

typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${fn()}`));
  });
}) : Promise.resolve(`${fn()}`).then(s => require(s));

async () => typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${await "x"}`));
  });
}) : Promise.resolve(`${await "x"}`).then(s => require(s));

function* f() {
  typeof require.ensure === 'function' ? new Promise(resolve => {
    require.ensure([], require => {
      resolve(require(`${yield "x"}`));
    });
  }) : Promise.resolve(`${yield "x"}`).then(s => require(s));
}
