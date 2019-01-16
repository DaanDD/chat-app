exports.fetchMessages = () => {
  return new Promise((resolve, reject) => {
    return resolve([{
      id: '1',
      body: 'Hi',
    }]);
  })
};
