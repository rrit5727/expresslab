const students = [
    {name: 'Jack', enrollment: true},
    {name: 'Jill', enrollment: false},
    {name: 'Jane', enrollment: false},
    
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };