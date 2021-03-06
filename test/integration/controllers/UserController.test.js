var request = require('supertest');

describe('UserController', function() {

  describe('#login()', function() {
    it('It should login successfully', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/login')
        .send({ email: 'akinjiolatoni@gmail.com', password: 'password' })
        .expect(200,done)
    });
    it('It should throw forbidden error for login failure', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/login')
        .send({ email: 'yam@egg.com', password: 'tutu' })
        .expect(403,done)
    });
    it('It should throw bad request error for wrong attributes', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/login')
        .send({ name: 'yam@egg.com', class: 'tutu' })
        .expect(400,done)
    });
    it('It should throw forbidden error for get request method', function (done) {
      request(sails.hooks.http.app)
        .get('/api/user/login?email=anthon')
        .expect(403,done)
    });
    it('It should throw forbidden error for put request method', function (done) {
      request(sails.hooks.http.app)
        .put('/api/user/login')
        .send({ name: 'yam@egg.com', class: 'tutu' })
        .expect(403,done)
    });
    it('It should throw forbidden error for delete request method', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/user/login/4')
        .expect(403,done)
    });
  });

  describe('#signup()', function() {
    it('It should signup successfully', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/signup')
        .send({
            firstname: "Tolulope",
            lastname: "Ojediran",
            phone: "08123456789",
            email: "tolu99112@gmail.com",
            password: "password"
        })
        .expect(200,done)
    });
    it('It should throw forbidden error for invalid email', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/signup')
        .send({
            firstname: "Tolulope",
            lastname: "Ojediran",
            phone: "08123456789",
            email: "tolu99112gmail.com",
            password: "password"
        })
        .expect(403,done)
    });
    it('It should throw bad request error for missing attribute', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/signup')
        .send({
            firstname: "Tolulope",
            tent: "Ojediran",
            phone: "08123456789",
            email: "tolu99112gmail.com",
            password: "password"
        })
        .expect(400,done)
    });
    it('It should throw forbidden error for get request method', function (done) {
      request(sails.hooks.http.app)
        .get('/api/user/signup?email=anthon')
        .expect(403,done)
    });
    it('It should throw forbidden error for put request method', function (done) {
      request(sails.hooks.http.app)
        .put('/api/user/signup')
        .send({ name: 'yam@egg.com', class: 'tutu' })
        .expect(403,done)
    });
    it('It should throw forbidden error for delete request method', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/user/signup/4')
        .expect(403,done)
    });
  });

  describe('#resetPasswordLink()', function() {
    it('It reset password successfully', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/resetpasswordlink')
        .send({
            email: "tolu99112@gmail.com"
        })
        .expect(200,done)
    });
    it('It should throw bad request error for missing attribute', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/resetpasswordlink')
        .send({
            tent: "Ojediran",
        })
        .expect(400,done)
    });
    it('It should throw forbidden error for get request method', function (done) {
      request(sails.hooks.http.app)
        .get('/api/user/resetpasswordlink?email=anthon')
        .expect(403,done)
    });
    it('It should throw forbidden error for put request method', function (done) {
      request(sails.hooks.http.app)
        .put('/api/user/resetpasswordlink')
        .send({ name: 'yam@egg.com', class: 'tutu' })
        .expect(403,done)
    });
    it('It should throw forbidden error for delete request method', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/user/resetpasswordlink/4')
        .expect(403,done)
    });
  });

  describe('#newPassword()', function() {
    it('It reset password successfully but the hash is an autogenerated one, hence 403', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/newpassword')
        .send({
            email: "akinjiolatoni@gmail.com",
            hash:"qwertyuiop",
            password: "password"
        })
        .expect(403,done)
    });
    it('It should not reset, user not found or authenticated', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/newpassword')
        .send({
            hash:"qwertyuiop",
            email: "toluo@gmail.com",
            password: "pascal"
        })
        .expect(403,done)
    });
    it('It should not reset, user not found or authenticated', function (done) {
      request(sails.hooks.http.app)
        .post('/api/user/newpassword')
        .send({
            email: "tolu99112@gmail.com",
            password: "pascal"
        })
        .expect(400,done)
    });
    it('It should throw forbidden error for get request method', function (done) {
      request(sails.hooks.http.app)
        .get('/api/user/newpassword?email=anthon')
        .expect(403,done)
    });
    it('It should throw forbidden error for put request method', function (done) {
      request(sails.hooks.http.app)
        .put('/api/user/newpassword')
        .send({ name: 'yam@egg.com', class: 'tutu' })
        .expect(403,done)
    });
    it('It should throw forbidden error for delete request method', function (done) {
      request(sails.hooks.http.app)
        .delete('/api/user/newpassword/4')
        .expect(403,done)
    });
  });

});