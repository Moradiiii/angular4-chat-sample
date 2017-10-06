var _ = require('lodash');
var express = require('express');
var users = require('../database/user.json');
var discussions = require('../database/discussion.json');
var fs = require('fs');
var path = require('path');

var router = express.Router();


/**
 * Get selected discussion, if it is not exist then create one
 */
router.post('/findOne', function(req, res) {

  // set up a message object to pass to client side.
  var message = { activity: 'find discussion', success: false, payload: null, alertMessage: '' };

  console.log(req.body);
  // check room is exist
  const discussion = _.find(discussions, req.body);

  if (!discussion) {
    // add new discussion into database;
    newDiscussion = {
      room: req.body.room,
      chats: []
    }
    console.log(newDiscussion);
    discussions.push(newDiscussion);
    discussions = _.sortBy(discussions, 'room');
    fs.writeFile(path.join(__dirname, '../database/discussion.json'), JSON.stringify(discussions), function(err) {
      if (err) {
        console.log(err);
        message.alertMessage = 'Adding record error';
        return res.json(message);
      }
      else {
        message.alertMessage = 'New discussion is created sucessfully';
        message.payload = newDiscussion;
        message.success = true;
        return res.json(message);
      }
    })
  }
  else {
    message.success = true;
    message.payload = discussion;
    message.alertMessage = 'Discussion is found.'
    return res.json(message);
  }

})

/**
 * save chat
 */
router.post('/saveChat', function(req, res) {

    // set up a message object to pass to client side.
    var message = { activity: 'save chat', success: false, payload: null, alertMessage: '' };

    console.log(req.body);
    // check room is exist
    const discussion = _.find(discussions, {room : req.body.room});

    if (!discussion) {
      message.alertMessage = 'cannot find discussion in database';
      return res.json(message);
    } else {
      discussion.chats.push(req.body.chat);
      global.io.emit('new-chat', req.body.chat);

      fs.writeFile(path.join(__dirname, '../database/discussion.json'), JSON.stringify(discussions), function(err) {
        if (err) {
          console.log(err);
          message.alertMessage = 'Adding record error';
          return res.json(message);
        }
        else {
          message.alertMessage = 'New chat is saved sucessfully';
          message.payload = discussion;
          message.success = true;
          return res.json(message);
        }
      })
    }


  })
module.exports = router;
