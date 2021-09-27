const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbTodoList:Fw0J0mAx0GfiZVhz@cluster0.wpcff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;